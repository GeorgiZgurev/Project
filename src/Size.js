import React from 'react';
import PropTypes from 'prop-types';

function Size({onSize, props}) {

  return (
    <section className='sectionSize'>
        <h2>Select size of the card</h2>
        <section>
          <label>
            <input type='radio' checked={props==='small'} onChange={onSize} name='size' value='small' />
            Small
          </label>
          <label>
            <input type='radio' checked={props==='medium'} onChange={onSize} name='size' value='medium' />
            Medium
          </label>
          <label>
            <input type='radio' checked={props==='large'} onChange={onSize} name='size' value='large' />
            Large
          </label>
         
        </section>
    </section>
  );
}

Size.propTypes = {
  onSize: PropTypes.func.isRequired
}

export default Size;
