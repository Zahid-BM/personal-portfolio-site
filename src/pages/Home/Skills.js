import React from 'react';
import { Container } from 'react-bootstrap';
import javascript from '../../resources/images/icons/javascript.png';
import reactjs from '../../resources/images/icons/reactjs.png';
import nodejs from '../../resources/images/icons/nodejs.png';
import express from '../../resources/images/icons/express.png';
import mongodb from '../../resources/images/icons/mongodb.png';
import bootstrap from '../../resources/images/icons/bootstrap.png';
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';

const Skills = () => {
    return (
        <>

            <Container fluid className='bg-box2 p-5'>

                <div>
                    <h3 className='text-center text-dark'>My expertise and skills</h3>
                    <h1 className='text-center display-1 fw-bolder text-secondary'>Love to work in </h1>
                    <hr />
                    <Bounce bottom>
                        <div className='d-flex justify-content-around align-items-center my-5'>
                            <Pulse forever="true">
                                <div><img className='w-100' src={javascript} alt="" /></div>
                                <div><img className='w-100' src={reactjs} alt="" /></div>
                                <div><img className='w-100' src={nodejs} alt="" /></div>
                                <div><img className='w-100' src={express} alt="" /></div>
                                <div><img className='w-100' src={mongodb} alt="" /></div>
                                <div><img className='w-100' src={bootstrap} alt="" /></div>
                            </Pulse>
                        </div>
                    </Bounce>
                </div>

            </Container>

        </>
    );
};

export default Skills;