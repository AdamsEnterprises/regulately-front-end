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
      ['Negative', this.props.negative],
      ['Positive', this.props.positive],
      ['Neutral', this.props.neutral],
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
