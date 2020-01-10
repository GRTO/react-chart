import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

const options: Highcharts.Options = {
  series: [
    {
      type: 'pie',
      data: [
        {
          y: 100,
        },
        {
          y: 50,
        },
      ],
    },
  ],
};

class LineChart extends Component {
  render() {
    return (
      <div className="line-series">
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default LineChart;
