import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const SingleProject = ({ project }) => {
    const { name, id, img1, about, technology, siteLink } = project;
    return (

        <Col>
            <Card className='border-0 h-100 shadow'>
                <Card.Img className='' variant="top" src={img1} />
                <Card.Body className='bg-box1 d-flex flex-column'>
                    <Card.Title className='fw-bolder text-warning'>{name}</Card.Title>
                    <Card.Text className='text-white'>
                        {about}
                    </Card.Text>
                    <Card.Subtitle className='fw-bold text-warning'>
                        Built with :
                    </Card.Subtitle>
                    <Card.Text className='text-white'>
                        {technology}
                    </Card.Text>
                    <div className="d-flex justify-content-evenly mt-auto">
                        <div>
                            <a href={siteLink} target={'_blank'} rel={'noopener noreferrer'}><Button variant='warning' className='px-4 rounded-pill text-white hover1'>Visit Site</Button></a>

                        </div>
                        <div>
                            <Button variant='warning' className='px-4 rounded-pill text-white hover1'>Details info</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default SingleProject;