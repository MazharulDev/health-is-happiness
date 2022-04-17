import React from 'react';
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { GiKidneys } from 'react-icons/gi'
import { BiDonateBlood } from 'react-icons/bi'
import { RiServiceFill } from 'react-icons/ri'
import './ServiceItem.css'
const ServiceItem = () => {
    return (
        <div class="container mt-5">
            <div class="row g-3">
                <div class="col-12 col-lg-3">
                    <div className='p-2 shadow p-3 mb-5 bg-body rounded'>
                        <BsFillPersonCheckFill className='fs-1 border p-2 mb-2'></BsFillPersonCheckFill>
                        <h3>Qualified Doctors</h3>
                        <p>A clinical degree is a professional or specialized degree granted for concentrates in fields related with medical.</p>
                        <div className='d-flex align-items-center text-primary '>
                            <h6>Read more</h6>
                            <RiArrowDropRightLine className='mb-1'></RiArrowDropRightLine>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div className='p-2 shadow p-3 mb-5 bg-body rounded'>
                        <GiKidneys className='fs-1 border p-2 mb-2'></GiKidneys>
                        <h3>Kidney Disease</h3>
                        <p>Kidney disease affects huge adults people. It occurs when your kidneys become damaged and can't perform their function.</p>
                        <div className='d-flex align-items-center text-primary'>
                            <h6>Read more</h6>
                            <RiArrowDropRightLine className='mb-1'></RiArrowDropRightLine>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div className='p-2 shadow p-3 mb-5 bg-body rounded'>
                        <BiDonateBlood className='fs-1 border p-2 mb-2'></BiDonateBlood>
                        <h3>Blood Test</h3>
                        <p>Blood tests help doctors check for certain diseases, conditions and your organs and show how well treatments are working.</p>
                        <div className='d-flex align-items-center text-primary'>
                            <h6>Read more</h6>
                            <RiArrowDropRightLine className='mb-1'></RiArrowDropRightLine>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div className='p-2 shadow p-3 mb-5 bg-body rounded'>
                        <RiServiceFill className='fs-1 border p-2 mb-2'></RiServiceFill>
                        <h3>24/7 Service</h3>
                        <p>The Specialized and Experienced Doctors in our Tonic Doctor Panel are consistently there and prepared to exhort every day.

                        </p>
                        <div className='d-flex align-items-center text-primary'>
                            <h6>Read more</h6>
                            <RiArrowDropRightLine className='mb-1'></RiArrowDropRightLine>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;


{/*  */ }