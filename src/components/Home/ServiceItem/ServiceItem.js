import React from 'react';
import { Link } from 'react-router-dom';
const ServiceItem = ({ service }) => {
    const { id,title, img, des, price } = service;
    return (
        <div className='col-12 col-lg-3 mt-4 h-100'>
            <div className='p-2 shadow p-3 mb-5 bg-body rounded'>
                <img className='w-100 mb-3' width={300} src={img} alt="" />
                <h3>{title}</h3>
                <p>{des}</p>
                <h5>${price}</h5>
                <Link to={`/checkout/${id}`}>
                    <button className='d-flex align-items-center justify-content-center w-100 outline-none btn btn-primary border px-3'>
                    Treatment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceItem;


