import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region',
  },
  subtitle: {
    text: 'Source: Wikipedia.org',
  },
  xAxis: {
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
  },
  yAxis: {
    title: {
      text: 'Billions',
    },
    labels: {
      formatter: function() {
        return String(this.value / 1000);
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions',
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  series: [
    {
      type: 'area',
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
    },
    {
      type: 'area',
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766],
    },
    { type: 'area', name: 'Europe', data: [163, 203, 276, 408, 547, 729, 628] },
    { type: 'area', name: 'America', data: [18, 31, 54, 156, 339, 818, 1201] },
    { type: 'area', name: 'Oceania', data: [2, 2, 2, 6, 13, 30, 46] },
  ],
};

class StackedChart extends Component {
  render() {
    return (
      <div className="line-series">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default StackedChart;
