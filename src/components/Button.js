import React from 'react';
import { ReactPropTypes } from 'react';

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button type={type} isdisabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  );
};

Button.defaultProps={
  version:'primary',
  isDisabled: false,
  type:'button'
}

export default Button;
