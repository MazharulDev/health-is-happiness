import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../../images/logo.png'
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    
    let userName;
    if(user){
        userName=<span>{user?.displayName}</span>
    }
    
    const handleSignOut = () => {
        signOut(auth)
        toast('Sign Out successfully');
    }
    if(loading){
        return <Loading></Loading>
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
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to='/'>Features</Nav.Link>
                            <Nav.Link as={Link} to='/service'>Service</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            
                        </Nav>
                        <>
                            {user ? <div className='d-flex align-items-center'> <span>{userName}</span> <Nav.Link onClick={handleSignOut} href="#signout"> <span>Sign Out</span> </Nav.Link></div>
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