import React, { Component } from 'react'
import GarageDoor from './GarageDoor'
import AddAnItem from './AddAnItem'
import DisplayItems from './DisplayItems'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: false,
      items: []
    }
    this.changeDoorStatus = this.changeDoorStatus.bind(this)
    this.postAnItem = this.postAnItem.bind(this)
    this.getItems = this.getItems.bind(this)
    this.counter = this.counter.bind(this)
  }

  componentDidMount() {
    this.getItems()
  }

  getItems() {
    fetch('/api/v1/items',
    {method: 'GET'})
    .then((response) => response.json())
    .then((payload) => this.setState({ items: payload }))
  }

  postAnItem(cleanliness, name, reason) {
    fetch('/api/v1/items',
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

  counter(cleanliness) {
    return this.state.items.filter(item => item.cleanliness === cleanliness).length
  }

  render() {
    return (
      <div>
        <h1>Garage</h1>
        <div>Total Items: {this.state.items.length}</div>
        <div>Rancid: {this.counter('Rancid')}</div>
        <div>Dusty: {this.counter('Dusty')}</div>
        <div>Sparkling: {this.counter('Sparkling')}</div>
        {/* <GarageDoor doorOpen={this.state.doorOpen} changeDoorStatus={this.changeDoorStatus} /> */}
        <AddAnItem postAnItem={this.postAnItem} />
        <DisplayItems items={this.state.items} />
      </div>
    )
  }

}
