import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'



import {findByTestAttr, checkProps} from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper,'component-congrats');
  expect(component.length).toBe(1);
})

test('render no test when `success` props is false', ()=> {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper,'component-congrats');
  expect(component.text()).toBe('');

})

test('render non empty congrats message when `success` prop is true', ()=> {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props не выдает предупреждение с ожидаемым реквизитом', () => {
  const expectedProps = {success: false};
  checkProps(Congrats, expectedProps);
})