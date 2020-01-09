import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
    title: {
        text: 'My stock chart'
    },
    series: [
        {
            type: 'line',
            data: [10, 12, 13, 20, 26, 33, 40, 48, 57, 42, 37, 31, 29,
                28, 15, 11, 14, 19]
        }
    ],
};
class HighStock extends Component {
    render() {
        return (
            <div className="line-series">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options} />
            </div>
        );
    }
}
export default HighStock;