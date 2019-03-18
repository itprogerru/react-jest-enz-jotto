import React from 'react';
import {shallow, mount} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils';
import Input from './input';
import { Provider } from 'react-redux'


/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = mount(<Provider store = {store}><Input   /></Provider>); // redux 5 в место mount используеться shallow
  return wrapper
  // console.log(wrapper.debug())
}

setup();

describe('render', ()=> {

  describe('word has not been guessed', ()=> {
    let wrapper;
    beforeEach(()=>{
      const initialState = {success: false};
      wrapper = setup(initialState)
    })


    test('render component without error', ()=> {
      const component = findByTestAttr(wrapper,'component-input');
      expect(component.length).toBe(1);
    })
    test('render input box', ()=> {
      const inputBox = findByTestAttr(wrapper,'input-box');
      expect(inputBox.length).toBe(1);
    })
    test('render submit button', ()=> {
      const submitButton = findByTestAttr(wrapper,'submit-button');
      expect(submitButton.length).toBe(1);
    })

  })

  describe('word has  been guessed', ()=> {
    test('render component without error', ()=> {})
    test('does not render input box', ()=> {})
    test('does not render submit button', ()=> {})

  })
})

describe('update state', ()=> {

})
