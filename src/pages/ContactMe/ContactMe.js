import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import location from '../../resources/images/icons/location.png';
import email from '../../resources/images/icons/email-2.png';
import phone from '../../resources/images/icons/phone.png';
import PageTitle from '../shared/PageTitle/PageTitle';
import { toast } from 'react-toastify';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';


const ContactMe = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        e.target.reset();
        toast.success('Your message has been sent. I will contact back soon. Thanks......')
        console.log(name, email, phone, subject, message);
    }
    return (
        <>
            <PageTitle title={'Contact'} pageColor={'bg-banner'}></PageTitle>
            <Container className='my-5'>
                <h3 className='text-center text-secondary'>I would love to be get in touched</h3>
                <h1 className='text-center display-1 fw-bolder text-warning'>Feel free to reach me. </h1>
                <Row className='my-3 py-3'>

                    <Col lg={4}>
                        <Bounce top>
                            <div className='shadow-lg custom-radius my-auto mb-4 py-5 bg-box'>
                                <div className="p-4 d-flex flex-column align-items-center">
                                    <div className='d-flex align-items-center my-3'>
                                        <RubberBand duration={1500} forever='true'><div className='bg-warning rounded-circle p-3 me-3'><img src={location} alt="" /></div></RubberBand>
                                        <div className='mt-2'>
                                            <h6 className='me-2'> <span className='fw-bold fs-5'> Address :</span> <br />
                                                Uttara, Dhaka, Bangladesh.
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center my-3'>
                                        <RubberBand duration={1500} forever='true'>  <div className='bg-warning rounded-circle p-3 me-3'><img src={email} alt="" /></div></RubberBand>
                                        <div className='mt-2'>
                                            <h6> <span className='fw-bold fs-5'> Email :</span> <br />
                                                bmzahidulislam@outlook.com
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center my-3'>
                                        <RubberBand duration={1500} forever='true'> <div className='bg-warning rounded-circle p-3 me-3'><img src={phone} alt="" /></div></RubberBand>
                                        <div className='mt-2'>
                                            <h6 className='p-m'> <span className='fw-bold fs-5'> Phone :</span> <br />
                                                +8801675633294
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Bounce>
                    </Col>


                    <Col className='my-auto' lg={8}>
                        <Bounce right>
                            <Form onSubmit={handleFormSubmit}>
                                <Row className='mb-3'>
                                    <Col>
                                        <Form.Control className='rounded-pill fs-5 border-0 shadow p-3 bg-banner text-secondary' placeholder="Name" name='name' required />
                                    </Col>
                                    <Col>
                                        <Form.Control className='rounded-pill fs-5 border-0 shadow p-3 bg-banner text-secondary' placeholder="Email" name='email' required />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col>
                                        <Form.Control className='rounded-pill fs-5 border-0 shadow p-3 bg-banner text-secondary' placeholder="Phone" name='phone' required />
                                    </Col>
                                    <Col>
                                        <Form.Control className='rounded-pill fs-5 border-0 shadow p-3 bg-banner text-secondary' placeholder="Subject" name='subject' required />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className='rounded-pill fs-5 border-0 shadow p-3 bg-banner text-secondary' as="textarea" rows={3} placeholder="Your Message" name='message' required />
                                </Form.Group>
                                <div className='text-center text-sm-start'>
                                    <Button size='lg' variant="warning" className='rounded-pill px-5 py-3 hover1 mt-3' type="submit">
                                        Submit Message
                                    </Button>
                                </div>
                            </Form>
                        </Bounce>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default ContactMe;