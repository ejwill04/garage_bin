import React, { Component } from 'react'
import GarageDoor from './GarageDoor'
import AddAnItem from './AddAnItem'
import DisplayItems from './DisplayItems'
import RaisedButton from 'material-ui/RaisedButton'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: false,
      items: [],
      sortOrder: 'asc'
    }
    this.changeDoorStatus = this.changeDoorStatus.bind(this)
    this.postAnItem = this.postAnItem.bind(this)
    this.getItems = this.getItems.bind(this)
    this.counter = this.counter.bind(this)
    this.sortItems = this.sortItems.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  componentDidMount() {
    this.getItems()
  }

  sortItems() {
    let sorted = this.state.items.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    if (this.state.sortOrder === 'asc') {
      this.setState({ sortOrder: 'desc', items: sorted.reverse() })
    } else {
      this.setState({ sortOrder: 'asc', items: sorted })
    }
  }

  getItems() {
    fetch('http://localhost:3000/api/v1/items',
    {method: 'GET'})
    .then((response) => response.json())
    .then((payload) => this.setState({ items: payload }))
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

  counter(cleanliness) {
    return this.state.items.filter(item => item.cleanliness === cleanliness).length
  }

  updateItem(item, id) {
    let { name, reason, cleanliness } = item
    fetch(`http://localhost:3000/api/v1/items/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(item),
    })
    .then((response) => response.json())
    .then((payload) => console.log(payload))
  }

  render() {
    return (
      <div>
        <h1>Garage</h1>
        <div>Total Items: {this.state.items.length}</div>
        <div>Rancid: {this.counter('Rancid')}</div>
        <div>Dusty: {this.counter('Dusty')}</div>
        <div>Sparkling: {this.counter('Sparkling')}</div>
        <RaisedButton label='Sort'
                      onClick={() => this.sortItems()} />
        <GarageDoor doorOpen={this.state.doorOpen} changeDoorStatus={this.changeDoorStatus} />
        <AddAnItem postAnItem={this.postAnItem} />
        <DisplayItems items={this.state.items} updateItem={this.updateItem} />
      </div>
    )
  }
}
