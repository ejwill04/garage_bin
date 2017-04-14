import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import { spy } from 'sinon';

import App from '../app/App';
import DisplayItems from '../app/DisplayItems'
import ButtonToggle from '../app/ButtonToggle'
import Item from '../app/Item'

describe('App', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.type(), 'div');
  });

  it('has has a state of doorOpen taht is set to false initially', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('doorOpen')).to.equal(false)
  });

});

describe('DisplayItems', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<DisplayItems items={['a','b']} />);
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('should have items props with a length of two', () => {
    const wrapper = mount(<MuiThemeProvider><DisplayItems items={['a','b']} /></MuiThemeProvider>);
    console.log(wrapper)
    expect(wrapper.props().prop).to.equal("thing");
  });

});

describe('Item', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />);
    assert.equal(wrapper.type(), 'div');
  });

  it('mounts with a buttonLabel state of Update', () => {
    const wrapper = shallow(<Item item={{name:'a'}} />);
    expect(wrapper.state('buttonLabel')).to.equal('Update')
  })

});
