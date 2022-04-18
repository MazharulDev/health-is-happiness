import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/notFount.png'
const NotFound = () => {
    return (
        <div>
            <div className='d-flex justify-content-end'>
                <img src={bg} alt="" />
            </div>
            <div className='d-lg-flex justify-content-around align-items-center mt-5'>
                <div>
                <h2>404 Error</h2>
                <h5>Don't panic, and make sure watch your Oxygen Levels</h5>
                </div>
                <div className='p-2 bg-primary rounded'>
                    <Link className='text-decoration-none text-white' to='/'>Return to safety</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;