import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils';
import Input from './input';



/**
 * Factory function to create a ShallowWrapper for the Input component
 * redux 6 использовать mount c <provider store={store}
 * dive - это на один уровень ниже  обертки тоесть hoc_component(component) он спуститься ниже hoc в component
 * Enzyme .dive -  Child component from Connected Hight Order Component
 *
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store = {store}   />).dive(); //  />
  return wrapper;
  // console.log(wrapper.debug())
}


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
    let wrapper;
    beforeEach(()=>{
      const initialState = {success: true };
      wrapper = setup(initialState);
    })
    test('render component without error', ()=> {
      const component = findByTestAttr(wrapper,'component-input');
      expect(component.length).toBe(1);
    })
    test(' does render input box', ()=> {
      const inputBox = findByTestAttr(wrapper,'input-box');
      expect(inputBox.length).toBe(0);
    })
    test(' does render submit button', ()=> {
      const submitButton = findByTestAttr(wrapper,'submit-button');
      expect(submitButton.length).toBe(0);
    })

  })
})

describe('update state', ()=> {

})
