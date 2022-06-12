import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';

const AlemLifeCoach = () => {
    return (
        <>
            <Container className='my-4'>
                <PageTitle title={'Alem Life Coach'} pageColor={'bg-box2'}></PageTitle>
                <Card className='rounded-1'>
                    <Card.Body className='bg-box2'>
                        <Card.Title className='text-center text-secondary'>
                            Alem Life Coach
                        </Card.Title>
                        <Card.Subtitle className='fw-bold text-white text-center'>
                            A Full functional mobile responsive Life Coach Website with Reactjs.
                        </Card.Subtitle>

                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/nC404nv/alem-1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/r2PYH1C/alem-2.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/wMZ396Q/alem-3.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/BP1HTSw/alem-4.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                    <Card.Body className='bg-box1 p-5'>
                        <Card.Subtitle className='fw-bolder fs-5 text-warning my-3'>
                            Main Features of this website :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>User can create an account with email verification and can login with registered email and password.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'> If a user forgets the password then can reset the password via reset password link sent to email.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  A user can visit but can not order until having an account coz Enroll/purchase page is a protected route. Social login is added to make that easier.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>   Without email verification no user can enroll any service. If user click to enroll service then verified user can see the purchase page.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  Track user's route location from where he/she attempted to visit protected route and if not logged in then redirects to login page. After login user will be redirected to the targeted protected route. Even if reload then user stays in the same route.</li>
                        </Card.Text>
                        <Card.Subtitle className='fw-bold text-warning fw-bolder fs-5 my-3'>
                            Main Technologies :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            Reactjs, Bootstrap, Fake Data, Firebase, Firebase Authentication Hook, React Router etc.
                        </Card.Text>
                        <div className="d-md-flex justify-content-evenly mt-auto">
                            <div className='my-3'>
                                <a href={'https://alem-life-coach.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='secondary' className='px-5 fw-bold rounded-pill  hover1 py-2'>Live Site</Button></a>
                            </div>
                            <div className='my-3'>
                                <a href={'https://github.com/Zahid-BM/alem-life-coach-react'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='secondary' className='px-5 fw-bold rounded-pill  hover1 py-2'>Code Link</Button></a>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
};

export default AlemLifeCoach;