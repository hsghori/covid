import React from 'react';
import PropTypes from 'prop-types';
import {
    LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer
} from 'recharts';


const safeLog = (logFn, value) => value !== 0 ? logFn(value) : value;

const SCALES = {
    'ln': {text: 'Log base e', fn: (value) => safeLog(Math.log, value)},
    'log2': {text: 'Log base 2', fn: (value) => safeLog(Math.log2, value)},
    'log10': {text: 'Log base 10', fn: (value) => safeLog(Math.log10, value)},
    'unscaled': {text: 'Unscaled', fn: v => v},
};

const colors = [
    'green', 'red', 'blue', 'yellow', 'violet', 'orange', 'pink',
]

const getKey = (state, dataType) => `${state}-${dataType}`;

const Chart = (props) => {
    const scale = SCALES[props.scale];

    const getLines = () => {
        const lines = [];
        props.states.forEach((state, i) => {
            props.dataType.forEach((dt, j) => {
                lines.push((
                    <Line
                        type='monotone'
                        dot={false}
                        activeDot={true}
                        key={getKey(state, dt)}
                        dataKey={getKey(state, dt)}
                        label={`${state} ${dt}`}
                        stroke={colors[(i * dt.length + j) % colors.length]}
                    />
                ));
            });
        });
        return lines;
    }

    const dataObj = {};
    props.states.forEach((state) => {
        props.statesData[state].forEach((stateData) => {
            props.dataType.forEach((dt) => {
                const key = getKey(state, dt);
                if (stateData.date in dataObj) {
                    dataObj[stateData.date][key] = scale.fn(stateData[dt]);
                } else {
                    dataObj[stateData.date] = {[key]: scale.fn(stateData[dt]), date: stateData.date};
                }
            });
        });
    });

    let data = Object.keys(dataObj).sort().map((date) => {
        const obj = dataObj[date];
        props.states.forEach((state) => {
            if (!(state in obj)) {
                obj[state] = 0;
            }
        });
        return obj;
    });

    if (props.derivative) {
        data = data.map((value, idx) => {
            const prev = (idx > 0) ? data[idx - 1] : data[idx];
            const obj = {date: value.date};
            props.states.forEach((state) => {
                props.dataType.forEach((dt) => {
                    const key = getKey(state, dt);
                    obj[key] = value[key] - prev[key];
                });
            });
            return obj;
        });
    }

    if (props.windowSize > 1) {
        const smoothedData = [];
        for (let i = 0; i < data.length; i++) {
            const currObj = {date: data[i].date};
            // eslint-disable-next-line
            props.states.forEach((state) => {
                let sum = 0;
                let numElems = 0;
                for (let j = 0; j < props.windowSize; j++) {
                    if ((i - j) < 0) {
                        break;
                    }
                    sum += data[i - j][state];
                    numElems += 1;
                }
                currObj[state] = sum / numElems;
            });
            smoothedData.push(currObj);
        }
        data = smoothedData;
    }

    return (
        <ResponsiveContainer>
            <LineChart data={data}>
            <XAxis dataKey='date' />
            <YAxis/>
            <Tooltip />
            {getLines()}
            </LineChart>
        </ResponsiveContainer>
    );
};


Chart.propTypes = {
    states: PropTypes.arrayOf(PropTypes.string).isRequired,
    statesData: PropTypes.object.isRequired,
    dataType: PropTypes.arrayOf(PropTypes.string).isRequired,
    scale: PropTypes.oneOf(Object.keys(SCALES)).isRequired,
    derivative: PropTypes.bool,
    windowSize: PropTypes.number,
};

Chart.defaultProps = {
    derivative: false,
    windowSize: 1,
};

export {Chart, SCALES};
