import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';


const Login = () => {
    const location = useLocation();
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
        toast('Login successfully')
    }


    if(userWithGoogle){
        toast('Login successfully')
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
        
    }
    let from = location.state?.from?.pathname || '/';
    if (userWithEmail||userWithGoogle) {
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 2000);
    }


    useEffect(()=>{
        if(errorWithGoogle){
            toast(errorWithGoogle?.message) 
        }
    },[errorWithGoogle])

    useEffect(()=>{
        if(errorWithEmail){
            toast(errorWithEmail?.message)
        }
    },[errorWithEmail])

    if(loadingWithEmail||loadingWithGoogle){
        return <Loading></Loading>
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
                    Login
                </Button>
                <Link to='/forgotpassword' className='text-decoration-none'>Forgot your password?</Link>
                <p className='mt-3'>Don't have an account?<Link className='text-decoration-none ms-2' to='/signup'>Create an Account</Link></p>
                
               
                    
                <Button onClick={handleGoogleSignIn} className='mt-3 w-100 btn btn-light border'><FcGoogle className='me-2 mb-1'></FcGoogle>Sign in with google</Button>
                
            </Form>
            
        </div>
    );
};

export default Login;