import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import profileImg from '../../resources/images/profile.png';
import imgBg from '../../resources/images/img-bg.png';
import github from '../../resources/images/icons/github.png';
import linkedin from '../../resources/images/icons/linkedin.png';
import whatsapp from '../../resources/images/icons/whatsapp.png';
import email from '../../resources/images/icons/email.png';
import { Bounce, LightSpeed, Slide } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';



const Banner = () => {

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

                                <Button variant='outline-success' className='px-5 py-3 rounded-pill fw-bold hover1 mb-4'>Download Resume</Button>

                                <br />
                                <Pulse duration={3000} forever='true'>
                                    <p>

                                        <img className='me-4 hover1' src={github} alt="" />
                                        <img className='me-4 hover1' src={linkedin} alt="" />
                                        <img className='me-4 hover1' src={email} alt="" />
                                        <img className='me-4 hover1' src={whatsapp} alt="" />
                                    </p>
                                </Pulse>
                            </div>
                        </Slide>

                    </Col>
                    <Col className='text-center text-sm-end mt-3' lg={6}>
                        <Slide right>
                            <Pulse duration={5000} forever='true'>
                                <img className='img-fluid profile-img' src={profileImg} alt="" />
                            </Pulse>
                        </Slide>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;