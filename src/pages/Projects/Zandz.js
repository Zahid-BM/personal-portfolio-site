import { Button, Card, Carousel, Container } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';

const Zandz = () => {
    return (
        <>
            <Container className='my-4'>
                <PageTitle title={''} pageColor={'bg-banner'}></PageTitle>
                <Card className='rounded-1'>
                    <Card.Body className='bg-box1'>
                        <Card.Title className='text-center text-white'>
                            Z&Z Trims Manufacturer
                        </Card.Title>
                        <Card.Subtitle className='fw-bold text-white text-center'>
                            A Full Stack mobile responsive Trims Manufacturer Website with MERN
                        </Card.Subtitle>

                    </Card.Body>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/k65pBNL/z-z-1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/XYbcH5v/z-z-3.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/tsM1Q80/z-z-4.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/xmPZyNq/z-z-5.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                    <Card.Body className='bg-box1 p-5'>
                        <Card.Subtitle className='fw-bolder fs-5 text-warning my-3'>
                            Main Features of this website :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>User can create an account with email verification, login  and can do password reset if password is forgotten</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'> A user can visit but can not order until having an account coz Order page is a protected route. Social login is added to make that easier. But without email verification no user can.order any item.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  General user will have a fully functional CRUD operation experience. They can add their profile to the database and can add a review that will be displayed in the review section.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>   Payment Gateway available. User can pay via credit card and admin can verify for further action.</li>
                        </Card.Text>
                        <Card.Text className='text-white'>
                            <li className='ms-3'>  Admin dashboard and admin role is available. Admin can see all the orders, modify orders, can add a new item and ship the products after payment verification. An admin can also make a user as an admin and remove as well.</li>
                        </Card.Text>
                        <Card.Subtitle className='fw-bold text-warning fw-bolder fs-5 my-3'>
                            Main Technologies :
                        </Card.Subtitle>
                        <Card.Text className='text-white'>
                            Reactjs, Express, Node, MongoDB, Bootstrap, React Query, Rest API, Firebase, Stripe Payment Gateway, Heroku, React Router, Json Web Token, Environment variable etc.
                        </Card.Text>
                        <div className="d-flex justify-content-evenly mt-auto">
                            <div>
                                <a href={'https://garments-accessories.web.app/'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-5 fw-bold rounded-pill text-white hover1 py-2'>Live Site</Button></a>
                            </div>
                            <div>
                                <a href={'https://github.com/Zahid-BM/z-and-z-trims-full-stack-with-mern'} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-5 fw-bold rounded-pill text-white hover1 py-2'>Code Link</Button></a>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
};

export default Zandz;