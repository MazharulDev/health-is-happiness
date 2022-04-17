import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/doctor1.jpg'
import doctor2 from '../../../images/doctor2.jpg'
import doctor3 from '../../../images/doctor3.jpg'
const Banner = () => {
    return (
        <div className='vh-lg-100'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className='w-100' src={doctor1} alt="" />
                    <Carousel.Caption>
                        <h2>My committed for your health</h2>
                        <h1 className=''>Health is Happiness center in Bangladesh</h1>
                        <button className='btn btn-primary'>Show Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={doctor2} alt="" />
                    <Carousel.Caption>
                        <h2>High Innovative Professional Degree</h2>
                        <h1>Health is Happiness center in Bangladesh</h1>
                        <button className='btn btn-primary'>Show Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={doctor3} alt="" />
                    <Carousel.Caption>
                        <h2>I'm Provide Best Medical Service</h2>
                        <h1>Health is Happiness center in Bangladesh</h1>
                        <button className='btn btn-primary'>Show Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;