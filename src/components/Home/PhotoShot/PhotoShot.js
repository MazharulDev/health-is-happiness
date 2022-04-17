import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../images/PhotoShot/photo1.jpg'
import photo2 from '../../../images/PhotoShot/photo2.jpg'
import photo3 from '../../../images/PhotoShot/photo3.jpg'
import photo4 from '../../../images/PhotoShot/photo4.jpg'
import photo5 from '../../../images/PhotoShot/photo5.jpg'
import photo6 from '../../../images/PhotoShot/photo6.jpg'
import photo7 from '../../../images/PhotoShot/photo7.jpg'

const PhotoShot = () => {
    return (
        <div className='container mb-5'>
            <h2 className='text-center mt-5'>Images from our medical photoshoots</h2>
            <h5 className='text-center'>I come to my clinic or practice where I offer a bespoke photoshoot service.</h5>
            <p className='text-center mb-5'>If required, we also supply models, hair and makeup and a location finding service.</p>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo1}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo4}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo5}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo6}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo7}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default PhotoShot;