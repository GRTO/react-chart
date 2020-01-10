import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

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

class PieChart extends Component {
  render() {
    return (
      <div className="line-series">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default PieChart;
