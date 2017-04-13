import React, { Component } from 'react'
import ItemDetails from './ItemDetails'
import RaisedButton from 'material-ui/RaisedButton'
import ButtonToggle from './ButtonToggle'

export default class Item extends Component {
  constructor() {
    super()
    this.state = {
      buttonLabel: 'Update',
      name: '',
      reason: '',
      cleanliness: '',
      id: ''
    }
    this.toggleUpdate = this.toggleUpdate.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateReason = this.updateReason.bind(this)
    this.updateCleanliness = this.updateCleanliness.bind(this)
  }

  componentDidMount() {
    let { name, reason, cleanliness, id } = this.props.item
    this.setState({ name, reason, cleanliness, id })
  }

  toggleUpdate() {
    let { name, reason, cleanliness, id } = this.state
    let item = { name, reason, cleanliness }
    if (this.state.buttonLabel === 'Update') {
      this.setState({ buttonLabel: 'Submit' })
    } else if (this.state.buttonLabel === 'Submit') {
      this.props.updateItem(item, id)
      this.setState({ buttonLabel: 'Update' })
    }
  }

  updateName(name) {
    this.setState({ name })
  }

  updateReason(reason) {
    this.setState({ reason })
  }

  updateCleanliness(cleanliness) {
    this.setState({ cleanliness })
  }

  render() {
    return (
      <div className='item-wrapper'>
        {this.state.buttonLabel === 'Submit' ?
          <ItemDetails name={this.state.name}
                       reason={this.state.reason}
                       cleanliness={this.state.cleanliness}
                       updateName={this.updateName}
                       updateReason={this.updateReason}
                       updateCleanliness={this.updateCleanliness}/> :
          <div>{this.props.item.name}</div> }
        <ButtonToggle label={this.state.buttonLabel} actionHandler={this.toggleUpdate} />
      </div>
    )
  }
}
