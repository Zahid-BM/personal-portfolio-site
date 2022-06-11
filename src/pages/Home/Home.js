import React from 'react';
import Projects from '../Projects/Projects';
import PageTitle from '../shared/PageTitle/PageTitle';
import Banner from './Banner';
import Footer from './Footer/Footer';
import Skills from './Skills';


const Home = () => {
    return (
        <>
            <PageTitle title={'Home'} pageColor={'bg-box2'}></PageTitle>
            <Banner />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;