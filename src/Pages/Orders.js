import React from 'react';
import { Navigate } from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <h1>Orders</h1>
            <button onClick={()=>Navigate('/shipment')}>Proceed Shipment </button>
        </div>
    );
};

export default Orders;