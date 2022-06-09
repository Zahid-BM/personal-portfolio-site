import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../resources/images/Logo-1.png';
import Pulse from 'react-reveal/Pulse';


const Header = () => {
    return (
        <Navbar className='sticky-top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <LinkContainer to={'home'}>
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <LinkContainer to='home'>
                            <NavLink className='me-5 btn-outline-warning rounded-pill px-4 text-center my-2'>
                                Home
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to='about'>
                            <NavLink className='me-5 btn-outline-warning rounded-pill px-4 text-center my-2'>
                                About
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to='portfolio'>
                            <NavLink className='me-5 btn-outline-warning rounded-pill px-4 text-center my-2'>
                                Portfolio
                            </NavLink>
                        </LinkContainer>
                    </Nav>

                    <Nav>
                        <Button variant='outline-warning' size='lg' className='rounded-pill px-5 hover1'>
                            Hire Me
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;