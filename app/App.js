import React, { Component } from 'react'
import GarageDoor from './GarageDoor'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: false,
    }
    this.changeDoorStatus = this.changeDoorStatus.bind(this)
  }

  changeDoorStatus() {
    this.setState({ doorOpen: !this.state.doorOpen })
  }

  render() {
    return (
      <div>
        <GarageDoor doorOpen={this.state.doorOpen} changeDoorStatus={this.changeDoorStatus} />
      </div>
    )
  }

}
