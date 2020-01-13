import React, { Component } from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import AreaChart from './charts/AreaChart';
import StackedChart from './charts/StackedArea';
import BarChart from './charts/BarChart';
import PieChartAdvanced from './charts/PieChart/PieChart.advanced';

export default class Home extends Component {
  render() {
    return (
      <div>
        <LineChart />
        <PieChart />
        <AreaChart />
        <StackedChart />
        <BarChart />
				<PieChartAdvanced />
      </div>
    );
  }
}
