import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleProject = ({ project }) => {
    const { name, id, img1, img2, img3, img4, about, description1, description2, description3, description4, description5 } = project;
    return (
        <Col>
            <Card className='border-0 h-100 shadow'>
                <Card.Img className='h-100 w-100' variant="top" src={img1} />
                <Card.Body className='bg-box'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProject;