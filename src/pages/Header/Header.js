import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/Logo-1.png'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <LinkContainer to={'home'}>
                        <NavLink>
                            <img
                                src={logo}
                                className="d-inline-block align-top fw-bolder my-0"
                                alt="React Bootstrap logo"
                            />
                        </NavLink>
                    </LinkContainer>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <LinkContainer to='home'>
                            <NavLink className='me-5 btn-sm btn-outline-warning rounded-pill px-4'>
                                Home
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to='about'>
                            <NavLink className='me-5 btn-sm btn-outline-warning rounded-pill px-4'>
                                About
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to='portfolio'>
                            <NavLink className='me-5 btn-sm btn-outline-warning rounded-pill px-4'>
                                Portfolio
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                
                    <Nav>
                        <Button variant='outline-warning' size='md' className='rounded-pill px-5'>
                            Hire Me
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;