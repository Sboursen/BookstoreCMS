import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
  return (
    <button
      className={`text-dirty-white bg-azure rounded w-fit font-light font-roboto ${props.twClasses}`}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
  twClasses: 'px-5 py-2 text-sm',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};
