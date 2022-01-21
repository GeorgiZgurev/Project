import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import ListOrders from './ListOrders.json';
import ListTypes from './ListTypes.json';


import './style.css';


ReactDOM.render(
  <React.StrictMode>

    <Menu ordersJSON={ListOrders} typesJSON={ListTypes} />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);