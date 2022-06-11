import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../resources/images/Logo-1.png';
import Pulse from 'react-reveal/Pulse';


const Header = () => {
    return (
        <>
            <Navbar style={{ height: '105px' }} collapseOnSelect className='nav-bg' expand="lg" sticky='top'>
                <Container className='nav-bg'>
                    <Navbar.Brand>
                        <LinkContainer to={'/home'}>
                            <NavLink>
                                <Pulse forever='true'>
                                    <img
                                        src={logo}
                                        className="d-inline-block align-top fw-bolder my-0"
                                        alt="React Bootstrap logo"
                                    />
                                </Pulse>
                            </NavLink>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle className='nav-bg' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='nav-bg' id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-bg">
                            <LinkContainer to='/home'>
                                <NavLink className='me-lg-5 btn-outline-light rounded-pill px-4 text-center my-2'>
                                    Home
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to='/Showcase'>
                                <NavLink className='me-lg-5 btn-outline-light rounded-pill px-4 text-center my-2'>
                                    Showcase
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <NavLink className='me-lg-5 btn-outline-light rounded-pill px-4 text-center my-2'>
                                    About
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to='/blogs'>
                                <NavLink className='me-lg-5 btn-outline-light rounded-pill px-4 text-center my-2'>
                                    Blogs
                                </NavLink>
                            </LinkContainer>
                        </Nav>

                        <Nav>
                            <LinkContainer to='/contact'>
                                <NavLink className='text-center'>
                                    <Pulse forever='true'>
                                        <Button variant='outline-secondary' size='lg' className='rounded-pill px-5 hover1'>
                                            Conatct Me
                                        </Button>
                                    </Pulse>
                                </NavLink>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;