import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
  static propTypes = {
    state: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <ul>
      { this.props.state.map(state =>
        <li key={ state.year }>
          <div className='name'>Name: <b>{ state.name }</b></div>
          <div>Manufacturer: <b>{ state.manufacturer }</b></div>
          <div>Year: <b>{ state.year }</b></div>
          <div>Origin: <b>{ state.origin }</b></div>
        </li>
      ) }
    </ul>
      </div>
    )
  }
}

