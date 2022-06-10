import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import profileImg from '../../resources/images/profile.png';
import imgBg from '../../resources/images/img-bg.png';
import github from '../../resources/images/icons/github.png';
import linkedin from '../../resources/images/icons/linkedin.png';
import whatsapp from '../../resources/images/icons/whatsapp.png';
import email from '../../resources/images/icons/email.png';
import download from '../../resources/images/icons/download.png';
import { LightSpeed, Slide } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';



const Banner = () => {
    const resumeLink = 'https://drive.google.com/uc?export=download&id=1sq-M0RvSuHmKpXdE9QMLp9bTC574rV5Q';


    return (
        <div className='bg-banner'>
            <Header></Header>
            <Container style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Row>
                    <Col className='my-auto text-center text-sm-start' lg={6}>
                        <Slide left>
                            <div>
                                <h1 className='fw-bolder'>Hello, I Am <br /> <span className='fw-bolder display-2 title '>
                                    <LightSpeed left cascade duration={3000} forever='true'>
                                        BM. Zahidul Islam
                                    </LightSpeed>
                                </span></h1>
                                <p className='text-secondary fw-bold'>A Full-stack Web Developer with full of dedication and professionalism. Skills, coping with new technologies and thirst for gathering knowledge make me a confident Web Developer.</p>
                                <a href={resumeLink} download><Button variant='outline-success' className='px-5 py-3 rounded-pill fw-bold hover1 mb-4 fw-bolder fs-5'>Download Resume
                                    <Jump forever='true'>
                                        <img className='ms-3' src={download} alt="" />
                                    </Jump>
                                </Button></a>
                                <br />
                                <Pulse duration={3000} forever='true'>
                                    <p>
                                        <a href="https://github.com/Zahid-BM" target={'_blank'}
                                            rel={'noopener noreferrer'}><img className='me-4 hover1' src={github} alt="" /></a>
                                        <a href="https://www.linkedin.com/in/bm-zahidul-islam-9250a4156/" target={'_blank'} rel={'noopener noreferrer'}><img className='me-4 hover1' src={linkedin} alt="" /></a>
                                        <a href="mailto:bmzahidulislam@outlook.com"><img className='me-4 hover1' src={email} alt="" /></a>
                                        <a href="https://wa.me/1675633294" target={'_blank'}
                                            rel={'noopener noreferrer'}><img className='me-4 hover1' src={whatsapp} alt="" /></a>

                                    </p>
                                </Pulse>
                            </div>
                        </Slide>

                    </Col>
                    <Col className='text-center text-sm-end mt-3' lg={6}>
                        <Slide right>

                            <Shake forever='true' duration={20000}>
                                <img className='img-fluid profile-img' src={profileImg} alt="" />
                            </Shake>

                        </Slide>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;