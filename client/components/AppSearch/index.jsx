import React, {Component, PropTypes} from 'react'

import 'styles/app-search.scss'

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
        <i className='material-icons search'>search</i>
        <input
          placeholder='Search'
          onChange={::this.handleChange}
          value={this.state.value} />
      </div>
    )
  }
}
