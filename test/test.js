import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import { spy } from 'sinon'

import App from '../app/App'
import DisplayItems from '../app/DisplayItems'
import ButtonToggle from '../app/ButtonToggle'
import Item from '../app/Item'
import GarageDoor from '../app/GarageDoor'

describe('App', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })

  it('has has a state of doorOpen that is set to false initially', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('doorOpen')).to.equal(false)
  })

  it('mounts with a sortOrder state of asc', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('sortOrder')).to.equal('asc')
  })

  it('has the ability to update state', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ items: ['item'] })
    expect(wrapper.state('items')).to.deep.equal(['item'])
  })

})

describe('GarageDoor', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<GarageDoor />)
    assert.equal(wrapper.type(), 'section')
  })

  it('should have a className of empty string if doorOpen prop is false', () => {
    const wrapper = shallow(<GarageDoor doorOpen={false} />)
    assert.equal(wrapper.node.props.className, '')
  })

  it('should have a className of Open if doorOpen prop is true', () => {
    const wrapper = shallow(<GarageDoor doorOpen={true} />)
    assert.equal(wrapper.node.props.className, 'open')
  })
})

describe('DisplayItems', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<DisplayItems items={['a','b']} />)
    assert.equal(wrapper.type(), 'div')
  })

  it('should have a div with a className of items-wrapper', () => {
    const wrapper = shallow(<DisplayItems items={['a','b']} />)
    assert.equal(wrapper.node.props.className, 'items-wrapper')
  })

  it.skip('should have items props with a length of two', () => {
    const wrapper = mount(<MuiThemeProvider><DisplayItems items={['a','b']} /></MuiThemeProvider>)
    expect(wrapper.props().prop).to.equal("thing")
  })
})

describe('Item', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />)
    assert.equal(wrapper.type(), 'div')
  })

  it('mounts with a buttonLabel state of Update', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />)
    expect(wrapper.state('buttonLabel')).to.equal('Update')
  })

  it('should not have an .item-name if buttonLabel state is Submit', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />)
    wrapper.setState({ buttonLabel: 'Submit' })
    expect(wrapper.find('.item-name').node).to.equal(undefined)
  })

  it('has a div that displays this.props.name', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />)
    expect(wrapper.find('.item-name').node.props.children).to.equal('a')
  })
})
