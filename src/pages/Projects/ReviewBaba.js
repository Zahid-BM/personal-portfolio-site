import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';

const ReviewBaba = () => {
    return (
        <>
            <Container className='my-4'>
                <PageTitle title={'Review Baba'} pageColor={'bg-box2'}></PageTitle>
                <Card className='rounded-1'>
                    <Card.Body className='bg-box2'>
                        <Card.Title className='text-center text-secondary'>
                            Review Baba
                        </Card.Title>
                        <Card.Subtitle className='fw-bold text-white text-center'>
                            An interactive mobile responsive SPA Book review Website with Reactjs.
                        </Card.Subtitle>

                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/nwGvjsX/review-1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/MgWkPCJ/review-2.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/gSkYKVF/review-3.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/tXrNGPY/review-4.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                    <Card.Body className='bg-box1 p-5'>
                        <Card.Subtitle className='fw-bolder fs-5 text-warning my-3'>
                            Main Features of this website :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>Clicking on Explore Reviews button user will be redirected to reviews route and there user can see all the reviews.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'> IIn the home page only three reviews are displayed. Prevented to show all the reviews.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  AThere is a button in the home page named see all reviews and after clicking on that button user will be redirected to reviews route and there user can see all the reviews.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'> A financial reports is shown in the two charts in the dashboard.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  Implemented react router for SPA so that the page is being reloaded and user experience is awesome.</li>
                        </Card.Text>
                        <Card.Subtitle className='fw-bold text-warning fw-bolder fs-5 my-3'>
                            Main Technologies :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            Reactjs, Bootstrap, Custom hook, Rechart, React Router etc.
                        </Card.Text>
                        <div className="d-md-flex justify-content-evenly mt-auto">
                            <div className='my-3'>
                                <a href={'https://reveiw-baba.netlify.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='secondary' className='px-5 fw-bold rounded-pill hover1 py-2'>Live Site</Button></a>
                            </div>
                            <div className='my-3'>
                                <a href={'https://github.com/Zahid-BM/review-baba-react-router-and-bootstrap'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='secondary' className='px-5 fw-bold rounded-pill hover1 py-2'>Code Link</Button></a>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
};

export default ReviewBaba;