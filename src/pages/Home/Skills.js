import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import javascript from '../../resources/images/icons/javascript.png';
import reactjs from '../../resources/images/icons/reactjs.png';
import nodejs from '../../resources/images/icons/nodejs.png';
import express from '../../resources/images/icons/express.png';
import mongodb from '../../resources/images/icons/mongodb.png';
import bootstrap from '../../resources/images/icons/bootstrap.png';
import html from '../../resources/images/icons/html5.png';
import Css from '../../resources/images/icons/css3.png';
import firebase from '../../resources/images/icons/firebase.png';
import jwt from '../../resources/images/icons/jwt.png';
import api from '../../resources/images/icons/api.png';
import npm from '../../resources/images/icons/npm.png';
import git from '../../resources/images/icons/git.png';
import vscode from '../../resources/images/icons/vscode.png';
import github from '../../resources/images/icons/github.png';
import reactRouter from '../../resources/images/icons/react-router.png';
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';

const Skills = () => {
    return (
        <>

            <Container fluid className='bg-box2 p-5'>
                <h3 className='text-center text-dark'>My expertise and skills</h3>
                <h1 className='text-center display-1 fw-bolder text-secondary'>Love to work in </h1>
                <hr />
                <Bounce bottom>
                    <Row xs={1} md={4} className='g-4 my-4'>
                        <Pulse duration={4000} forever="true">
                            <Col className='text-center'>
                                <img className='w-100 ' src={javascript} alt="" /><span className='fw-bolder fs-2 '>JavaScript</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={reactjs} alt="" /> <span className='fw-bolder fs-2 '>Reactjs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={nodejs} alt="" /> <span className='fw-bolder fs-2 '>Nodejs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={express} alt="" /> <span className='fw-bolder fs-2 '>Expressjs</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={mongodb} alt="" /><span className='fw-bolder fs-2 '>MongoDB</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={bootstrap} alt="" /> <span className='fw-bolder fs-2 '>Bootstrap5</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={Css} alt="" /> <span className='fw-bolder fs-2 '>CSS3</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={html} alt="" /> <span className='fw-bolder fs-2 '>HTML5</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={firebase} alt="" /> <span className='fw-bolder fs-2 '>Firebase</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={jwt} alt="" /> <span className='fw-bolder fs-2 '>Json Web Token</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={api} alt="" /> <span className='fw-bolder fs-2 '>RESTful API</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={npm} alt="" /> <span className='fw-bolder fs-2 '>NPM</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={git} alt="" /> <span className='fw-bolder fs-2 '>GIT</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='mb-3 custom-radius1' src={reactRouter} alt="" /> <span className='fw-bolder fs-2 '>React Router</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={vscode} alt="" /> <span className='fw-bolder fs-2 '>VS Code</span>
                            </Col>
                            <Col className='text-center'>
                                <img className='w-100' src={github} alt="" /> <span className='fw-bolder fs-2 '>GitHub</span>
                            </Col>
                        </Pulse>
                    </Row>
                </Bounce>
            </Container>

        </>
    );
};

export default Skills;