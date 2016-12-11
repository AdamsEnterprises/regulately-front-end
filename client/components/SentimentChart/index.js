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
      ['Positive', 11],
      ['Negative', 5]
    ],
    options: {
      title: '',
      pieHole: 0.4,
    },
  }

  render() {
    return (
      <Chart
        chartType='PieChart'
        data={this.state.data}
        options={this.state.options}
        graph_id='SentimentChart'
        width='100%'
        height='256px' />
    )
  }
}
