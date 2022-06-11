import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';

const FruitsValley = () => {
    return (
        <>
            <Container className='my-4'>
                <PageTitle title={''} pageColor={'bg-banner'}></PageTitle>
                <Card className='rounded-1'>
                    <Card.Body className='bg-box1'>
                        <Card.Title className='text-center text-white'>
                            Fruits Valley Ware House
                        </Card.Title>
                        <Card.Subtitle className='fw-bold text-white text-center'>
                            A Full Stack mobile responsive Warehouse Management Website with MERN
                        </Card.Subtitle>

                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/4NSm245/fruits-1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/85grcL7/fruits-2.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/cDBHjDV/fruits-3.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/V39mtrw/fruits-4.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                    <Card.Body className='bg-box1 p-5'>
                        <Card.Subtitle className='fw-bolder fs-5 text-warning my-3'>
                            Main Features of this website :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>User can create an account with email verification, login  and can do password reset if password is forgotten.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>A user can visit but can not order until having an account coz Order page is a protected route. Social login is added to make that easier. But without email verification no user can.order any item.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  Registered user will have a fully functional CRUD operation experience. They can restock items, can deliver the items. If deliver then item quantity will be decreased and if restock then item quantity will be increased in the database. And updated data will be displayed on UI.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>   User can request an item to stock and the user input will be stored in the database. User also can see all user's requested products in the Requested Items Page.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  Individual user can see all his/her ordered products in my orders page.There user can delete the order and the order will be deleted from database and update the UI as well.</li>
                        </Card.Text>
                        <Card.Subtitle className='fw-bold text-warning fw-bolder fs-5 my-3'>
                            Main Technologies :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            Reactjs, Express, Node, MongoDB, Bootstrap, Axios, Rest API, Firebase, Firebase Authentication Hook, Heroku, React Router, Json Web Token, Environment variable etc.
                        </Card.Text>
                        <div className="d-flex justify-content-evenly mt-auto">
                            <div>
                                <a href={'https://fruits-warehouse-f1061.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-5 fw-bold rounded-pill text-white hover1 py-2'>Live Site</Button></a>
                            </div>
                            <div>
                                <a href={'https://github.com/Zahid-BM/fruits-valley-full-stack-with-mern'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-5 fw-bold rounded-pill text-white hover1 py-2'>Code Link</Button></a>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
};

export default FruitsValley;