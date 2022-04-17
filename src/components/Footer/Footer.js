import React from 'react';
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className='d-flex justify-content-between align-items-center bg-dark p-4'>
            <h6 className='text-white'>Copyright &copy; 2020-2022 healthishappiness.com Ltd All rights reserved</h6>
            <img className='pb-2' width={120} src={logo} alt="" />
        </div>
    );
};

export default Footer;