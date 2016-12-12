import React, {Component} from 'react'
import {Chart} from 'react-google-charts'

export default class SentimentChart extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    data: [
      ['Task', 'Hours per Day'],
      ['Negative', 23],
      ['Positive', 13],
      ['Neutral', 10],
    ],
    options: {
      title: '',
      pieHole: 0.4,
      legend: 'bottom',
      colors: ['#D32F2F', '#00C853', '#0091EA']
    },
  }

  render() {
    return (
      <Chart
        chartType='PieChart'
        data={this.state.data}
        options={this.state.options}
        graph_id='SentimentChart'
        width='360px'
        height='360px' />
    )
  }
}
