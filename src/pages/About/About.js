import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';
import img from '../../resources/images/transparent-side-cropped.png';
import sign from '../../resources/images/signature-logo-1.png';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <>
            <PageTitle title={'About'} pageColor={'bg-box2'}></PageTitle>
            <Container>
                <Row>
                    <Col className='my-auto' lg={6}>
                        <Roll left>
                            <h1 className="fw-bolder display-1 mt-4 mt-md-0 text-secondary">About Me</h1>
                            <h2>A short introduction</h2>
                        </Roll>

                        <hr />
                        <Bounce bottom cascade>
                            <div className='text-white'>
                                <p>
                                    I am a passionate programmer who loves to code and create something interesting that can make me different from others. Learning is my habit and dedication is my key. Professionalism, honesty and skills make me more confident than ever.
                                </p>

                                <p>
                                    I am expert is HTML, CSS, BOOTSTRAP, REACTJS and good in MONGODB, EXPRESS and NODEJS. I am familiar with React Native, Nextjs and unit test. Can also work with Tailwind CSS and DaisyUi. I am confident to learn and cope with any new technology by the soonest possible time Insha Allah.
                                </p>

                                <p>
                                    I believe that by enriching myself, with my skills and dedication I can contribute more to the industry, society and people as well.......
                                </p>
                                <p className='text-end mt-4 fw-bold'>
                                    BM. Zahidul Islam <br />
                                    A Programmer with passion
                                </p>

                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={6}>
                        <Bounce top><img className='w-100' src={img} alt="" /></Bounce>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;