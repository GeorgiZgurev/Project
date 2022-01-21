import React from 'react';
import PropTypes from 'prop-types';

function Text({onText}) {

  return (
    <section className='sectionText'>
        <h2>Write down your text:</h2>
        <p>(maximum length: 200 symbols)</p>
        <textarea onChange={onText} cols='20' rows='6' maxLength={200} name='text'/>
    </section>
  );
}

Text.propTypes = {
  onText: PropTypes.func.isRequired
};

export default Text;