import React from 'react';
import Projects from '../Projects/Projects';
import PageTitle from '../shared/PageTitle/PageTitle';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <PageTitle title={'Home'}></PageTitle>
            <Banner />
            <Projects />
        </>
    );
};

export default Home;