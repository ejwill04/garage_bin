import React, { Component } from 'react'

export default class Item extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='item-wrapper'>
        {this.props.item.name}
      </div>
    )
  }
}
