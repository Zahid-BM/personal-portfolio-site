import React from 'react';
import Projects from '../Projects/Projects';
import PageTitle from '../shared/PageTitle/PageTitle';
import Banner from './Banner';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <>
            <PageTitle title={'Home'} pageColor={'bg-banner'}></PageTitle>
            <Banner />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;