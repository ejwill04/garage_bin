import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class ButtonToggle extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <RaisedButton className='btn'
                    label={this.props.label}
                    onClick={() => this.props.actionHandler()} />
    )
  }
}
