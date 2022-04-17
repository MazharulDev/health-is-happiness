import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='p-2'>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Link className='text-decoration-none' to='/'>
                    <Navbar.Brand href="#home">Health is Happiness</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#service">Service</Nav.Link>
                            <Nav.Link href="#pricing">Team</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Link className='text-decoration-none' to='/signup'>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>
                            </Link>
                            <Link className='text-decoration-none' to='/login'>
                                <Nav.Link eventKey={2} href="#login">
                                    Login
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;