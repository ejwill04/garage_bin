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
        <div>{this.props.item.name}</div>
        <div>{this.props.item.cleanliness}</div>
        <div>{this.props.item.reason}</div>
        <RaisedButton label="Update" onClick={() => update} />
      </div>
    )
  }
}
