import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
  static propTypes = {
    model: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.model.map((model, i) =>
            <li key={ i }>
              <div>Name: <b>{ model.name }</b></div>
              <div>Manufacturer: <b>{ model.manufacturer }</b></div>
              <div>Year: <b>{ model.year }</b></div>
              <div>Origin: <b>{ model.origin }</b></div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

