import React from 'react';
import PropTypes from 'prop-types';

function Submit({onSubmit}) {

  return (
    <button   onClick={onSubmit} type='submit'>
        Add
    </button>

  
  );
}



Submit.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default Submit;