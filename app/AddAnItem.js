import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

export default class AddAnItem extends Component {
  constructor() {
    super()
    this.state = {
      cleanliness: '',
      name: '',
      reason: ''
    }
    this.disabledStatus = this.disabledStatus.bind(this)
  }

  disabledStatus() {
    let { cleanliness, name, reason } = this.state
    if (cleanliness !== '' && name !== '' && reason !== '') {
      return false
    } else {
      return true
    }
  }

  render() {
    let { cleanliness, name, reason } = this.state
    return (
      <div className='add-item-wrapper'>
        <h2>Add An Item!</h2>
        <TextField hintText='skis, pet rocks, dinosaurs'
                   floatingLabelText='Name'
                   onChange={(e, newValue) => this.setState({ name :newValue })}
         />
        <TextField hintText='I find my worth in things'
                   floatingLabelText='Reason'
                   onChange={(e, newValue) => this.setState({ reason: newValue })}
        />
        <SelectField floatingLabelText='Frequency'
                     value={this.state.cleanliness}
                     onChange={(e, i, value) => this.setState({ cleanliness: value })}>
            <MenuItem value='Sparkling'
                      primaryText='Sparkling' />
            <MenuItem value='Dusty'
                      primaryText='Dusty' />
            <MenuItem value='Rancid'
                      primaryText='Rancid' />
        </SelectField>
        <RaisedButton label='Pile it on'
                      onClick={() => this.props.postAnItem(cleanliness, name, reason)}
                      disabled={this.disabledStatus()} />
      </div>
    )
  }
}
