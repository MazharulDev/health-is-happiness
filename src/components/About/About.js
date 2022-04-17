import React from 'react';
import profile from '../../images/Mazharul.jpg'
const About = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <img width={400} className="rounded" src={profile} alt="" />
            </div>
            <h2 className='text-center mt-3'>Md Mazharul Islam</h2>
            <div className='d-flex justify-content-center'>
                <p className='w-50 mb-5'>I will finish the React in the next few weeks. Then I will make some great websites with React. I will also learn JavaScript in a good way. I will get acquainted with the backend and learn.I will go through this way in the way I am giving 6-7 hours of web development time every day I will try to be a full-stack web developer as much as possible.</p>
            </div>
        </div>
    );
};

export default About;