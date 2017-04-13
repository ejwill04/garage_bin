import React, { Component } from 'react'
import ItemDetails from './ItemDetails'

export default class Item extends Component {
  constructor() {
    super()
    this.state = {
      displayName: true
    }
  }

  render() {
    return (
      <div className='item-wrapper' onClick={() => this.setState({ displayName: !this.state.displayName })}>
        {this.state.displayName ? this.props.item.name : <ItemDetails item={this.props.item} />}
      </div>
    )
  }
}
