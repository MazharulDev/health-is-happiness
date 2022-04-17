import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='service' className='mt-5'>
            <h2 className='text-center'>MY <span className='text-primary'>SERVICES</span></h2>
            <div className='container'>
                <div className='row g-3'>

                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Service;