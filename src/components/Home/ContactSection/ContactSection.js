import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css'
const ContactSection = () => {
    return (
        <div className='mb-5 bg-color'>
            <section className="section section-lg bg-default">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 d-flex flex-column align-items-center">
                            <h2 className="wow fadeInUp">Call Now and Get a Free Consultation</h2>
                            
                            <p className="text-secondary text-md fw-regular">You can take advice from me on any problem</p>
                            <a className="fs-2 text-decoration-none mb-2 fw-bold" href="tel:#">+8801500000000</a>
                            <Link to='/' className="button button-primary button-shadow button-md button-xxl" href="#" data-wow-delay=".5s">Request a Callback</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;