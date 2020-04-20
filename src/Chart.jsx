import React from 'react';
import PropTypes from 'prop-types';
import {
    LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer
} from 'recharts';


const SCALES = {
    'ln': {text: 'Log base e', fn: Math.log},
    'log2': {text: 'Log base 2', fn: Math.log2},
    'log10': {text: 'Log base 10', fn: Math.log10},
    'unscaled': {text: 'Unscaled', fn: v => v},
};

const colors = [
    'green', 'red', 'blue', 'yellow', 'violet', 'orange', 'pink',
]


const Chart = (props) => {
    const scale = SCALES[props.scale];

    const getLines = () => {
        return props.states.map((state, idx) => {
            return (
                <Line
                    type='monotone'
                    dot={false}
                    activeDot={true}
                    key={state}
                    dataKey={state}
                    label={state}
                    stroke={colors[idx % colors.length]}
                />
            );
        });
    }

    const dataObj = {};
    props.states.forEach((state) => {
        props.statesData[state].forEach((stateData) => {
            if (stateData.date in dataObj) {
                dataObj[stateData.date][state] = scale.fn(stateData.cases);
            } else {
                dataObj[stateData.date] = {[state]: scale.fn(stateData.cases), date: stateData.date};
            }
        })
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
                obj[state] = value[state] - prev[state];
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
    scale: PropTypes.oneOf(Object.keys(SCALES)).isRequired,
    derivative: PropTypes.bool,
    windowSize: PropTypes.number,
};

Chart.defaultProps = {
    derivative: false,
    windowSize: 1,
};

export {Chart, SCALES};
