import React, {Component} from 'react'
import {Chart} from 'react-google-charts'

export default class SentimentChart extends Component {
  static propTypes = {
  }

  static defaultProps = {
      positive: 0,
      neutral: 0,
      negative: 0,
  }

  state = {
      chartEvents: [
          {
              eventName: 'select',
              callback: (Chart) => {
                  return this.props.onChartSelect(Chart.chart.getSelection())
              },
          },
      ],
    data: [
      ['Sentiment', 'Value'],
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
        chartEvents={this.state.chartEvents}
        chartType='PieChart'
        data={this.state.data}
        options={this.state.options}
        graph_id='SentimentChart'
        width='360px'
        height='360px' />
    )
  }
}
