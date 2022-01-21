import React from 'react';
import PropTypes from 'prop-types';

function Order({order, removeOrder}) {

  return (
    <div>
        <button onClick={removeOrder} type='submit' value={order.id}>Remove</button>
        <ul className='order'>
            <li>
                {`Order #:  ${order.id} `}
            </li>
            <li>
                {`Occasion:  ${order.occasion} `}
            </li>
            <li>
                {`Size:  ${order.size} `}
            </li>
            <li>
                {`Type:  ${order.type} `}
            </li>
            <li>
                {`Instruction:  ${order.text} `}
            </li>
           
        </ul>
    </div>
  );
}

Order.propTypes = {
    order: PropTypes.shape({
        id: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired,
    removeOrder: PropTypes.func.isRequired
};

export default Order;
