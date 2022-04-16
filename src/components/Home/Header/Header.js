import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='p-2'>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Health is Happiness</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Service</Nav.Link>
                            <Nav.Link href="#pricing">Team</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign Up</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;