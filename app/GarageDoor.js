import React, { Component } from 'react'

export default class GarageDoor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section id='garage-door'
                 className={this.props.doorOpen ? 'open' : ''}
                 onClick={() => this.props.changeDoorStatus()}>
          Click Door to {this.props.doorOpen ? 'Open' : 'Close'}
        </section>
    )
  }

}
