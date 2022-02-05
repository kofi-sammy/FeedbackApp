import React from 'react';
import {TailSpin} from 'react-loader-spinner';

const Spinner = () => {
  return (
      <div style={{width:'100px', margin: 'auto',display:'block' }}>
        <TailSpin color="#00BFFF" height={80} width={80} /> 
      </div>
  );
};

export default Spinner;
