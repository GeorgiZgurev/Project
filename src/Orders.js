import React from 'react';
import Order from './Order';
import PropTypes from 'prop-types';

function Orders({orders, removeOrder}) {
  return (
    <section className='orders'>
        {orders && orders.map((order) =>(<Order key={order.id.toString()} order={order} removeOrder={removeOrder}/>))}
    </section>
  );
}

Orders.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.object),
    removeOrder: PropTypes.func.isRequired
}

export default Orders;
