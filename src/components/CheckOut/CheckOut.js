import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {id}=useParams();
    return (
        <div>
            <h2>CheckOut page: {id}</h2>
        </div>
    );
};

export default CheckOut;