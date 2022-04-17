import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='p-2'>
            <Navbar collapseOnSelect expand="lg" variant='light'>
                <Container>

                    <Link to='/'>
                    <img src={logo} alt="" />
                    </Link>
                    

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Features</Nav.Link>
                            <Nav.Link as={Link} to='/'>Service</Nav.Link>
                            <Nav.Link as={Link} to="/">News</Nav.Link>

                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>


                            <Nav.Link as={Link} to="about">About</Nav.Link>


                        </Nav>
                        <>
                            {user ? <Nav.Link onClick={handleSignOut} href="#signout">Sign Out</Nav.Link>

                                :
                                <Nav>

                                    <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>


                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>

                                </Nav>
                            }
                        </>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;