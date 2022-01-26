import React from 'react';
import propTypes from 'prop-types';

const Card = ({children, reverse}) => {
  return (
  <div className='card' style={{
      backgroundColor:reverse ? 'rgba(0, 0, 0, 0.4)' : null, color: reverse ? 'whitesmoke' : '#000'
  }}>
      {children}

  </div>
  );
};



Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: propTypes.node.isRequired
}

export default Card;
