import React from 'react';
import PropTypes from 'prop-types';

function Finish({onFinish}) {

  return (
    <button className='buttons' onClick={onFinish} type='submit'>
        Finish
    </button>


  );
}


export default Finish;