import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/doctor1.jpg'
import doctor2 from '../../../images/doctor2.jpg'
import doctor3 from '../../../images/doctor3.jpg'
const Banner = () => {
    return (
        <div className='w-100'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className='w-100' src={doctor1} alt="" />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={doctor2} alt="" />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={doctor3} alt="" />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;