import React from 'react';
import PropTypes from 'prop-types'


/**
 * functional ract component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Render component (or null if `success` prop is
 */

const Congrats =  (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulation! you guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats"/>
    )
  }

}
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export  default Congrats;