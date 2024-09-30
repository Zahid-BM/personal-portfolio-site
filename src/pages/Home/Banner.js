import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import profileImg from '../../resources/images/transparent-front-full-cropped.png';
import imgBg from '../../resources/images/img-bg.png';
import github from '../../resources/images/icons/github1.png';
import linkedin from '../../resources/images/icons/linkedin.png';
import whatsapp from '../../resources/images/icons/whatsapp.png';
import email from '../../resources/images/icons/email.png';
import download from '../../resources/images/icons/download.png';
import { Bounce } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';



const Banner = () => {
    const resumeLink = 'https://drive.google.com/uc?export=download&id=1sq-M0RvSuHmKpXdE9QMLp9bTC574rV5Q';


    return (
        <div className='bg-box2'>
            <Container style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <Row>
                    <Col className='my-auto text-center text-sm-start' lg={6}>
                        <Bounce left>
                            <div className='pt-4'>
                                <h1 className='fw-bolder text-secondary'>Hello, I Am <br /> <span className='fw-bolder display-4 text-white '>
                                    <Flip left cascade duration={4000} forever='true'>
                                        BM. Zahidul Islam
                                    </Flip>
                                </span></h1>
                                <hr />
                                <p className='text-secondary fw-bold'>A Full-stack Web Developer with full of dedication and professionalism. Skills, coping with new technologies and thirst for gathering knowledge make me a confident Web Developer.</p>
                                <a href={resumeLink} download><Button variant='outline-light' className='px-4 py-2 rounded-pill fw-bold hover1 mb-4 fw-bolder fs-6'>Download Resume
                                    <Jump duration={2000} forever='true'>
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
                        </Bounce>

                    </Col>
                    <Col className='text-center text-sm-end mt-3' lg={6}>
                        <Bounce right>

                            <Shake forever='true' duration={20000}>
                                <img className='img-fluid profile-img' src={profileImg} alt="" />
                            </Shake>

                        </Bounce>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;