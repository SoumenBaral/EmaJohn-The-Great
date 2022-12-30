import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Orders</h1>
            <button onClick={() => navigate('/shipment')}>Proceed Shipping </button>
        </div>
    );
};

export default Orders;