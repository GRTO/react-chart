import React, { Component } from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import AreaChart from './charts/AreaChart';

export default class Home extends Component {
  render() {
    return (
      <div>
        <LineChart />

        <PieChart />

        <AreaChart />
      </div>
    );
  }
}
