import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';
import { GoInfo } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";


const Projects = () => {

    return (
        <>
            <Container className='my-5'>
                <h3 className='text-center text-dark'>See my recent projects</h3>
                <h1 className='text-center display-1 fw-bolder text-secondary'>Below are the most recent </h1>
                <hr />
                <Rotate bottom left>
                    <Row xs={1} md={2} className="g-4 my-4">
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/k65pBNL/z-z-1.png'} />
                                <Card.Body className='bg-box2 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-secondary my-3'>Z&Z Trims Manufacturer</Card.Title>
                                    <Card.Text className=''>
                                        A Full Stack mobile responsive Trims Manufacturer Website with MERN
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-secondary'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className=''>
                                        Reactjs, Express, Node, MongoDB, Bootstrap, React Query, Rest API, Firebase, Stripe Payment Gateway, Heroku, React Router, Json Web Token, Environment variable etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://garments-accessories.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Website <BsGlobe className='fw-bolder fs-5 '></BsGlobe></Button></a>
                                        </div>
                                        <div>
                                            <Link to='/zandz'><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Details <GoInfo className='fw-bolder fs-4'></GoInfo></Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/4NSm245/fruits-1.png'} />
                                <Card.Body className='bg-box2 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-secondary my-3'>Fruits Valley Ware House</Card.Title>
                                    <Card.Text className=''>
                                        A Full Stack mobile responsive Warehouse Management Website with MERN
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-secondary'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className=''>
                                        Reactjs, Express, Node, MongoDB, Bootstrap, Axios, Rest API, Firebase, Firebase Authentication Hook, Heroku, React Router, Json Web Token, Environment variable etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://fruits-warehouse-f1061.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Website <BsGlobe className='fw-bolder fs-5 '></BsGlobe></Button></a>
                                        </div>
                                        <div>
                                            <Link to='/fruitsvalley'><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Details <GoInfo className='fw-bolder fs-4'></GoInfo></Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/nC404nv/alem-1.png'} />
                                <Card.Body className='bg-box2 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-secondary my-3'>Alem Life Coach</Card.Title>
                                    <Card.Text className=''>
                                        A Full functional mobile responsive Life Coach Website with Reactjs.
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-secondary'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className=''>
                                        Reactjs, Bootstrap, Fake Data, Firebase, Firebase Authentication Hook, React Router etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://alem-life-coach.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Website <BsGlobe className='fw-bolder fs-5 '></BsGlobe></Button></a>
                                        </div>
                                        <div>
                                            <Link to='/alemlifecoach'><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Details <GoInfo className='fw-bolder fs-4'></GoInfo></Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/nwGvjsX/review-1.png'} />
                                <Card.Body className='bg-box2 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-secondary my-3'>Review Baba</Card.Title>
                                    <Card.Text className=''>
                                        An interactive mobile responsive SPA Book review Website with Reactjs
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-secondary'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className=''>
                                        Reactjs, Bootstrap, Custom hook, Rechart, React Router etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://reveiw-baba.netlify.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Website <BsGlobe className='fw-bolder fs-5 '></BsGlobe></Button></a>
                                        </div>
                                        <div>
                                            <Link to='/reviewbaba'><Button variant='outline-light' className='px-4 rounded-pill  hover1'>Details <GoInfo className='fw-bolder fs-4'></GoInfo></Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Rotate>
            </Container>

        </>
    );
};

export default Projects;