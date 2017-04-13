import React, { Component } from 'react'
import Item from './Item'

export default class DisplayItems extends Component {
  constructor() {
    super()
    this.state = {
    }
  }



  render() {
    let items = this.props.items.map((item, i) => {
      return (
          <Item item={item} key={i}/>
      )
    })
    return (
      <div className='items-wrapper'>
        {items}
      </div>
    )
  }
}
