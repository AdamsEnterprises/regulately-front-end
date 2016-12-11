import React, {Component, PropTypes} from 'react'

export default class AppSearch extends Component {
  state = {
    value: '',
  }

  handleChange(event) {
    return this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div className='app-search'>
        <input
          onChange={::this.handleChange}
          value={this.state.value} />
      </div>
    )
  }
}
