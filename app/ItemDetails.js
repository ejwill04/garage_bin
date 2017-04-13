import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class ItemDetails extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <TextField name={this.props.name}
                   defaultValue={this.props.name}
                   onChange={(e, newValue) => this.props.updateName(newValue)}
         />
         <TextField name={this.props.reason}
                    defaultValue={this.props.reason}
                    onChange={(e, newValue) => this.props.updateReason(newValue)}
          />
        <SelectField name={this.props.cleanliness}
                     value={this.props.cleanliness}
                     onChange={(e, i, value) => this.props.updateCleanliness(value)}>
            <MenuItem value='Sparkling'
                      primaryText='Sparkling' />
            <MenuItem value='Dusty'
                      primaryText='Dusty' />
            <MenuItem value='Rancid'
                      primaryText='Rancid' />
        </SelectField>
      </div>
    )
  }
}
