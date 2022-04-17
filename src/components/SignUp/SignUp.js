import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithpassword,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value)
    }
    // if(useSignInWithGoogle||userWithEmail){
    //     navigate('/');
    // }
    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Two password did not match')
            return;
        }
        if(password<5){
            setError('Password must 6 character');
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='mb-5'>
            <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="name" placeholder="Enter Name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <input className='me-2 mb-3' onClick={()=>setAgree(!agree)} type="checkbox" id='terms' />
                <label className={agree?'text-primary':'text-danger'} htmlFor="terms">Accept Health is Happiness Terms and conditions</label>
                <Button disabled={!agree} className='w-100' variant="primary" type="submit">
                    Sign Up
                </Button>
                <p className='mt-3'>Have an account?<Link className='text-decoration-none ms-2' to='/login'>Login</Link></p>
                <Button onClick={handleGoogleSignIn} className='mt-3 w-100 btn btn-light border'>Sign in with google</Button>
            </Form>
        </div>
    );
};

export default SignUp;