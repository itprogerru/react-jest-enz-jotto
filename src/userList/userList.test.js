import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from '../../test/testUtils';
import UserList from './userList'


// console.log(wrapper.debug())  - вывод html компонента в консоле

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state -Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state = null) => {
  const wrapper = shallow(<UserList {...props}/>)
  if (state) wrapper.setState(state)
  return wrapper
};

test('Показ компонента без state', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'user-list');
  expect(appComponent.length).toBe(1);

});

test('Показ компонента со state', () => {
  const users = ['test', 'test2'];
  const wrapper = setup(null, { users });

  const appComponent = findByTestAttr(wrapper,'user-list');
  expect(appComponent.children().length).toBe(users.length);
});