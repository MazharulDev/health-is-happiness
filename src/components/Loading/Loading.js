import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {
    return (
        <div className='loading-spinner'>
            <Spinner style={{ height: '100px', width: '100px' }} animation="border" variant="warning" />
        </div>
    );
};

export default Loading;