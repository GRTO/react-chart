import React, { Component } from 'react'
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

export default class Home extends Component {
	render() {
		return (
			<div>
				<LineChart />

				<PieChart />
			</div>
		);
	}
}
