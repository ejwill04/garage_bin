import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class ItemDetails extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <input value={this.props.item.name} />
        <input>{this.props.item.cleanliness}</input>
        <input>{this.props.item.reason}</input>
        <RaisedButton label="Update" onClick={() => update} />
      </div>
    )
  }
}
