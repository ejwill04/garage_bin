import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      doorOpen: false,
    }
  }

  render() {
    return (
      <div>
        <section id='garage-door'
                 className={this.state.doorOpen ? 'open' : ''}
                 onClick={() => this.setState({ doorOpen: !this.state.doorOpen })}>
          Garage Door
        </section>
      </div>
    )
  }

}
