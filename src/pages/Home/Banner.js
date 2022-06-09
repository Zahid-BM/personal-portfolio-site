import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import profileImg from '../../resources/images/profile.png';
import imgBg from '../../resources/images/img-bg.png';
import github from '../../resources/images/icons/github.png';
import linkedin from '../../resources/images/icons/linkedin.png';
import whatsapp from '../../resources/images/icons/whatsapp.png';
import email from '../../resources/images/icons/email.png';
import TypingTextAnimation from 'react-typing-text-animation';

const Banner = () => {


    return (
        <div className='bg-banner'>
            <Header></Header>
            <Container style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Row>
                    <Col className='my-auto' lg={6}>
                        <h1 className='fw-bolder'>Hello, I Am <br /> <span className='fw-bolder display-2 title '>
                            <TypingTextAnimation reset={true}  text='BM. Zahidul Islam' />
                        </span></h1>
                        <p className='text-secondary fw-bold'>A Full-stack Web Developer with full of dedication and professionalism. Skills, coping with new technologies and thirst for gathering knowledge make me a confident Web Developer.</p>
                        <Button variant='outline-success' className='px-5 py-3 rounded-pill fw-bold hover1 mb-4'>Download Resume</Button>
                        <br />
                        <img className='me-3 hover1' src={github} alt="" /><img className='me-3 hover1' src={linkedin} alt="" /><img className='me-3 hover1' src={whatsapp} alt="" /> <img className='me-3 hover1' src={email} alt="" />
                    </Col>
                    <Col className='text-center mt-3' lg={6}>
                        <img className='img-fluid profile-img' src={profileImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;