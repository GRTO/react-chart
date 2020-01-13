import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const colors = Highcharts.getOptions().colors || [];
const categories = [
  'Chrome',
  'Firefox',
  'Internet Explorer',
  'Safari',
  'Edge',
  'Opera',
  'Other',
];
const data = [
  {
    y: 62.74,
    color: colors[2],
    drilldown: {
      name: 'Chrome',
      categories: [
        'Chrome v65.0',
        'Chrome v64.0',
        'Chrome v63.0',
        'Chrome v62.0',
        'Chrome v61.0',
        'Chrome v60.0',
        'Chrome v59.0',
        'Chrome v58.0',
        'Chrome v57.0',
        'Chrome v56.0',
        'Chrome v55.0',
        'Chrome v54.0',
        'Chrome v51.0',
        'Chrome v49.0',
        'Chrome v48.0',
        'Chrome v47.0',
        'Chrome v43.0',
        'Chrome v29.0',
      ],
      data: [
        0.1,
        1.3,
        53.02,
        1.4,
        0.88,
        0.56,
        0.45,
        0.49,
        0.32,
        0.29,
        0.79,
        0.18,
        0.13,
        2.16,
        0.13,
        0.11,
        0.17,
        0.26,
      ],
    },
  },
  {
    y: 10.57,
    color: colors[1],
    drilldown: {
      name: 'Firefox',
      categories: [
        'Firefox v58.0',
        'Firefox v57.0',
        'Firefox v56.0',
        'Firefox v55.0',
        'Firefox v54.0',
        'Firefox v52.0',
        'Firefox v51.0',
        'Firefox v50.0',
        'Firefox v48.0',
        'Firefox v47.0',
      ],
      data: [1.02, 7.36, 0.35, 0.11, 0.1, 0.95, 0.15, 0.1, 0.31, 0.12],
    },
  },
  {
    y: 7.23,
    color: colors[0],
    drilldown: {
      name: 'Internet Explorer',
      categories: [
        'Internet Explorer v11.0',
        'Internet Explorer v10.0',
        'Internet Explorer v9.0',
        'Internet Explorer v8.0',
      ],
      data: [6.2, 0.29, 0.27, 0.47],
    },
  },
  {
    y: 5.58,
    color: colors[3],
    drilldown: {
      name: 'Safari',
      categories: [
        'Safari v11.0',
        'Safari v10.1',
        'Safari v10.0',
        'Safari v9.1',
        'Safari v9.0',
        'Safari v5.1',
      ],
      data: [3.39, 0.96, 0.36, 0.54, 0.13, 0.2],
    },
  },
  {
    y: 4.02,
    color: colors[5],
    drilldown: {
      name: 'Edge',
      categories: ['Edge v16', 'Edge v15', 'Edge v14', 'Edge v13'],
      data: [2.6, 0.92, 0.4, 0.1],
    },
  },
  {
    y: 1.92,
    color: colors[4],
    drilldown: {
      name: 'Opera',
      categories: ['Opera v50.0', 'Opera v49.0', 'Opera v12.1'],
      data: [0.96, 0.82, 0.14],
    },
  },
  {
    y: 7.62,
    color: colors[6],
    drilldown: {
      name: 'Other',
      categories: ['Other'],
      data: [7.62],
    },
  },
];
const dataLen: number = data.length;
const options: Highcharts.Options = {
  title: {
    text: 'Browser market share, January, 2018',
  },
  subtitle: {
    text:
      'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
  },
  plotOptions: {
    pie: {
      shadow: false,
      center: ['50%', '50%'],
    },
  },
  tooltip: {
    valueSuffix: '%',
  },
  series: [
    {
      type: 'pie',
      name: 'Browsers',
      size: '60%',
      dataLabels: {
        formatter: function() {
          return this.y !== null && this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30,
      },
    },
    {
      type: 'pie',
      name: 'Versions',
      size: '80%',
      innerSize: '60%',
      dataLabels: {
        formatter: function() {
          // display only if larger than 1
          return this.y !== null && this.y > 1
            ? '<b>' + this.point.name + ':</b> ' + this.y + '%'
            : null;
        },
      },
      id: 'versions',
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 400,
        },
        chartOptions: {
          series: [
            { type: 'pie' },
            {
              type: 'pie',
              id: 'versions',
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      },
    ],
  },
};

class PieChartAdvanced extends Component {
  i = 0;
  j = 0;
  browserData: any = [];
  versionsData: any = [];
  drillDataLen: number = 0;
  brightness: number = 0;

  /**
   * Adding data fields
   */
  public addingDataFields() {
    if (options.series) {
      const [browsers, versions] = options.series;

      const browsersTemp = { ...browsers, ...{ data: this.browserData } };
      const versionsTemp = { ...versions, ...{ data: this.versionsData } };

      options.series = [browsersTemp, versionsTemp];
    }
  }

  /**
   * Builds pie data
   */
  public buildPieData() {
    for (this.i; this.i < dataLen; this.i += 1) {
      this.browserData.push({
        name: categories[this.i],
        y: data[this.i].y,
        color: data[this.i].color,
      });

      this.drillDataLen = data[this.i].drilldown.data.length;

      for (this.j = 0; this.j < this.drillDataLen; this.j += 1) {
        this.brightness = 0.2 - this.j / this.drillDataLen / 5;
        this.versionsData.push({
          name: data[this.i].drilldown.categories[this.j],
          y: data[this.i].drilldown.data[this.j],
          color: new Highcharts.Color(data[this.i].color)
            .brighten(this.brightness)
            .get(),
        });
      }
    }

    this.addingDataFields();
  }

  render() {
    this.buildPieData();
    return (
      <div className="line-series">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default PieChartAdvanced;
