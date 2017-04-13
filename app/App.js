import React, { Component } from 'react'
import GarageDoor from './GarageDoor'
import AddAnItem from './AddAnItem'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: false,
      items: []
    }
    this.changeDoorStatus = this.changeDoorStatus.bind(this)
    this.postAnItem = this.postAnItem.bind(this)
  }

  postAnItem(cleanliness, name, reason) {
    fetch('http://localhost:3000/api/v1/items',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name, reason, cleanliness}),
    })
    .then((response) => response.json())
    .then((payload) => this.setState({ items: payload }))
  }

  changeDoorStatus() {
    this.setState({ doorOpen: !this.state.doorOpen })
  }

  render() {
    return (
      <div>
        <div>Total Items: {this.state.items.length}</div>
        <div>{this.state.items.length}</div>
        <div>{this.state.items.length}</div>
        {/* <GarageDoor doorOpen={this.state.doorOpen} changeDoorStatus={this.changeDoorStatus} /> */}
        <AddAnItem postAnItem={this.postAnItem} />
      </div>
    )
  }

}
