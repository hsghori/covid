import React, { useState, useEffect } from "react";
import csv from "jquery-csv";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import _ from "lodash";
import { Chart, SCALES } from "./Chart";

const toTitle = (str) =>
  `${str.charAt(0).toUpperCase()}${str.substr(1).toLowerCase()}`;

const STATES_URL =
  "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv";
const DATA_TYPE = {
  cases: "cases",
  deaths: "deaths",
};

const App = () => {
  const classes = useStyles(theme);
  const [processedStatesData, setProcessedStatesData] = useState();
  const [states, setStates] = useState([]);
  const [scale, setScale] = useState("unscaled");
  const [dataType, setDataType] = useState([DATA_TYPE.cases]);
  const [useDerivative, setUseDerivative] = useState(false);
  const [windowSize, setWindowSize] = useState(1);

  useEffect(() => {
    const dataContainer = {};
    axios.get(STATES_URL).then(({ data }) => {
      csv.toObjects(data).forEach(({ date, state, cases, deaths }) => {
        if (state in dataContainer) {
          dataContainer[state].push({
            date,
            cases: parseInt(cases),
            deaths: parseInt(deaths),
          });
        } else {
          dataContainer[state] = [
            { date, cases: parseInt(cases), deaths: parseInt(deaths) },
          ];
        }
      });
      Object.keys(dataContainer).forEach((state) => {
        dataContainer[state].sort((a, b) => (a.date > b.date ? 1 : -1));
      });
      setProcessedStatesData(dataContainer);
    });
  }, []);

  const onSelectState = (e) => {
    setStates(e.target.value);
  };

  const onSelectScale = (e) => {
    setScale(e.target.value);
  };

  const onSelectDerivative = (e) => {
    setUseDerivative(e.target.checked);
  };

  const onSelectWindowSize = (e) => {
    setWindowSize(e.target.value);
  };

  const onSelectDataType = (e) => {
    setDataType(e.target.value);
  };

  const stateOptions = Object.keys(processedStatesData || {})
    .sort((a, b) => (a > b ? 1 : -1))
    .map((state) => (
      <MenuItem key={state} value={state}>
        {state}
      </MenuItem>
    ));

  const scaleOptions = Object.keys(SCALES).map((scale, idx) => (
    <MenuItem key={idx} value={scale}>
      {SCALES[scale].text}
    </MenuItem>
  ));
  const dataTypeOptions = Object.keys(DATA_TYPE).map((dt, idx) => (
    <MenuItem key={idx} value={dt}>
      {toTitle(DATA_TYPE[dt])}
    </MenuItem>
  ));
  const windowSizeOptions = _.range(1, 8).map((v) => (
    <MenuItem key={v} value={v}>
      {v}
    </MenuItem>
  ));

  const getFilters = () => {
    if (!processedStatesData) {
      return <CircularProgress />;
    }
    return (
      <FormGroup className={classes.filterForm}>
        <FormControl className={classes.formControl}>
          <InputLabel>States</InputLabel>
          <Select
            multiple
            value={states}
            displayEmpty
            input={<Input />}
            onChange={onSelectState}
          >
            {stateOptions}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Scales</InputLabel>
          <Select
            value={scale}
            displayEmpty
            input={<Input />}
            onChange={onSelectScale}
          >
            {scaleOptions}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Window (days)</InputLabel>
          <Select
            value={windowSize}
            input={<Input />}
            onChange={onSelectWindowSize}
          >
            {windowSizeOptions}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select
            multiple
            value={dataType}
            input={<Input />}
            onChange={onSelectDataType}
          >
            {dataTypeOptions}
          </Select>
        </FormControl>
        <FormControlLabel
          className={classes.derivativeCheckbox}
          control={
            <Checkbox
              checked={useDerivative}
              onChange={onSelectDerivative}
              color="primary"
            />
          }
          label={
            <InputLabel className={classes.checkboxLabel}>
              Show new
            </InputLabel>
          }
        />
      </FormGroup>
    );
  };

  const getTitle = () => {
    const dtModifier = toTitle(
      dataType.length === 1 ? dataType[0] : dataType.join(" and ")
    );
    const modifier = useDerivative ? "New" : "Cumulative";
    const windowText = `${windowSize} day${windowSize > 1 ? "s" : ""} window`;
    return `${SCALES[scale].text} Number of ${modifier} ${dtModifier} - ${windowText}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container className={classes.root}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            display="flex"
            className={classes.app}
          >
            <Card className={classes.filterCard}>
              <Typography variant="h5" component="h5">
                Options
              </Typography>
              {getFilters()}
            </Card>
            {states.length > 0 && dataType.length > 0 && (
              <Card className={classes.chartCard}>
                <Typography component="h6" gutterBottom>
                  {getTitle()}
                </Typography>
                <Chart
                  states={states}
                  statesData={processedStatesData}
                  dataType={dataType}
                  scale={scale}
                  derivative={useDerivative}
                  windowSize={windowSize}
                />
              </Card>
            )}
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: purple,
    secondary: grey,
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        paddingLeft: 0,
        paddingRight: 0,
      },
      marginTop: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    app: {
      width: "80%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      overflowY: "auto",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 640,
    },
    filterCard: {
      width: "100%",
      padding: "16px",
      flexShrink: 0.2,
    },
    chartCard: {
      width: "100%",
      padding: "16px 16px 40px 16px",
      margin: "32px 0 32px 0",
      flex: 0.75,
      [theme.breakpoints.down("sm")]: {
        flex: 1,
        paddingBottom: "64px",
      },
    },
    derivativeCheckbox: {
      marginLeft: "8px",
    },
    filterForm: {
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
  })
);

export default App;
