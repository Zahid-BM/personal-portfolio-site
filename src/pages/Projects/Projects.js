import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <>
            <Container className='my-5'>
                <h3 className='text-center text-dark'>See my recent projects</h3>
                <h1 className='text-center display-1 fw-bolder text-warning'>Below are the most recent </h1>
                <Rotate bottom left>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/k65pBNL/z-z-1.png'} />
                                <Card.Body className='bg-box1 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-warning'>Z&Z Trims Manufacturer</Card.Title>
                                    <Card.Text className='text-white'>
                                        A Full Stack mobile responsive Trims Manufacturer Website with MERN
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-warning'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className='text-white'>
                                        Reactjs, Express, Node, MongoDB, Bootstrap, React Query, Rest API, Firebase, Stripe Payment Gateway, Heroku, React Router, Json Web Token, Environment variable etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://garments-accessories.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Visit Site</Button></a>
                                        </div>
                                        <div>
                                            <Link to='/zandz'><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Details info</Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/4NSm245/fruits-1.png'} />
                                <Card.Body className='bg-box1 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-warning'>Fruits Valley Ware House</Card.Title>
                                    <Card.Text className='text-white'>
                                        A Full Stack mobile responsive Warehouse Management Website with MERN
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-warning'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className='text-white'>
                                        Reactjs, Express, Node, MongoDB, Bootstrap, Axios, Rest API, Firebase, Firebase Authentication Hook, Heroku, React Router, Json Web Token, Environment variable etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://fruits-warehouse-f1061.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Visit Site</Button></a>
                                        </div>
                                        <div>
                                            <Link to='/fruitsvalley'><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Details info</Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/nC404nv/alem-1.png'} />
                                <Card.Body className='bg-box1 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-warning'>Alem Life Coach</Card.Title>
                                    <Card.Text className='text-white'>
                                        A Full functional mobile responsive Life Coach Website with Reactjs.
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-warning'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className='text-white'>
                                        Reactjs, Bootstrap, Fake Data, Firebase, Firebase Authentication Hook, React Router etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://alem-life-coach.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Visit Site</Button></a>
                                        </div>
                                        <div>
                                            <Link to='/alemlifecoach'><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Details info</Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='border-0 h-100 shadow'>
                                <Card.Img variant="top" src={'https://i.ibb.co/k65pBNL/z-z-1.png'} />
                                <Card.Body className='bg-box1 d-flex flex-column'>
                                    <Card.Title className='fw-bolder text-warning'>Z&Z Trims Manufacturer</Card.Title>
                                    <Card.Text className='text-white'>
                                        A Full Stack mobile responsive Trims Manufacturer Website with MER
                                    </Card.Text>
                                    <Card.Subtitle className='fw-bold text-warning'>
                                        Built with :
                                    </Card.Subtitle>
                                    <Card.Text className='text-white'>
                                        Reactjs, Express, Node, MongoDB, Bootstrap, React Query, Rest API, Firebase, Stripe Payment Gateway, Heroku, React Router, Json Web Token, Environment variable etc.
                                    </Card.Text>
                                    <div className="d-flex justify-content-evenly mt-auto">
                                        <div>
                                            <a href={'https://garments-accessories.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Visit Site</Button></a>
                                        </div>
                                        <div>
                                            <Link to='/zandz'><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Details info</Button></Link>
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