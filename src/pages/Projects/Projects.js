import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProject from './SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <Container className='my-5'>
                <h3 className='text-center text-secondary'>See my recent projects</h3>
                <h1 className='text-center display-1 fw-bolder text-warning'>Below are the most recent </h1>
                <Row xs={1} md={2} className="g-4">
                    {
                        projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default Projects;