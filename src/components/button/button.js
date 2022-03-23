import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
  return (
    <button
      className={`text-white bg-sky-700 rounded ${props.twClasses}`}
      type="button"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  handleClick: () => {},
  twClasses: 'px-5 py-1 text-lg',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};
