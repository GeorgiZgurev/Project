import React from 'react';
import PropTypes from 'prop-types';
function Types({onType, types}) {

  return (
    <section className='sectionType'>
      <label className='occasion'>
        Select occasion:
      </label>
      <select onChange={onType}>
        <option value='default'> occasions</option>
        {types && types.map((type => (
          <option key={type.id} value={type.name}>{type.name}</option>
        )))}
      </select>

    </section>
  );
}

Types.propTypes = {
  onType: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Types;
