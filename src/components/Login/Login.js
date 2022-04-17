import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail,
      ] = useSignInWithEmailAndPassword(auth);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }
  
    if(userWithEmail||userWithGoogle){
        navigate('/')
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if (userWithEmail||userWithGoogle) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={handleGoogleSignIn} className='mt-3 w-100 btn btn-light border'>Sign in with google</Button>
            </Form>
            
        </div>
    );
};

export default Login;