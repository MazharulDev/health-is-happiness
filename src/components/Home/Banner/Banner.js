import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/doctor1.jpg'
import doctor2 from '../../../images/doctor2.jpg'
import doctor3 from '../../../images/doctor3.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='banner-area d-flex align-items-center'>
            <div className="container">
                <div className="row">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <h1>We Care For Your Health 
                            Every Moment </h1>
                        <p>Also you dry creeping beast multiply fourth abundantly our itsel signs bring our. Won form living. Whose dry you seasons divide given gathering great in whose you'll greater let livein form beast sinthete
                            better together these place absolute right.</p>
                        <button href="" className="main_btn me-3">Make an Appointment</button>
                        <button href="" className="main_btn_light">View Department</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;