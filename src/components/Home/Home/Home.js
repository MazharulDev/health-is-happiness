import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import PhotoShot from '../PhotoShot/PhotoShot';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <PhotoShot></PhotoShot>
            <Footer></Footer>
        </div>
    );
};

export default Home;