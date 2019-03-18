import checkPropTypes from 'check-prop-types'

import rootReducer from '../src/reducers';
import { createStore } from 'redux'

/**
 * Create a testing store with imported reducers, middleware, and intial state
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - initial state for store
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 *Return ShallowWrapper container node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search witnin
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}