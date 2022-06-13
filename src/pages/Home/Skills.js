import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                <h3 className='text-center text-dark'>My expertise and skills</h3>
                <h1 className='text-center display-1 fw-bolder text-secondary'>Love to work in </h1>
                <hr />
                <Bounce bottom>
                    <Row xs={1} md={4} className='g-4 my-4'>
                        <Pulse duration={4000} forever="true">
                            <Col className='text-center'>
                                <img className='w-100 ' src={javascript} alt="" /><span className='fw-bolder fs-2 '>JavaScript</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={reactjs} alt="" /> <span className='fw-bolder fs-2 '>Reactjs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={nodejs} alt="" /> <span className='fw-bolder fs-2 '>Nodejs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={express} alt="" /> <span className='fw-bolder fs-2 '>Expressjs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={mongodb} alt="" /><span className='fw-bolder fs-2 '>MongoDB</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={bootstrap} alt="" /> <span className='fw-bolder fs-2 '>Bootstrap5</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={bootstrap} alt="" /> <span className='fw-bolder fs-2 '>HTML5</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={bootstrap} alt="" /> <span className='fw-bolder fs-2 '>CSS3</span>
                            </Col>
                        </Pulse>
                    </Row>
                </Bounce>
            </Container>

        </>
    );
};

export default Skills;