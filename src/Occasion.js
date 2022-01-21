import React from 'react';
import PropTypes from 'prop-types';

function Occasion({onOccasion, props}){

return(

    <section className='sectionOccasion'>
    <h2>Do you need an envelope?</h2>
    <section>
      <label>
        <input type='radio' checked={props==='Birthday'} onChange={onOccasion} name='occasion' value='Birthday' />
        With 
      </label>
     
      <label>
        <input type='radio' checked={props==='Christmas'} onChange={onOccasion} name='occasion' value='Christmas' />
        Without 
      </label>
    </section>
</section>
)


}
Occasion.propTypes = {
    onOccasion: PropTypes.func.isRequired
  }
  
  export default Occasion;
  