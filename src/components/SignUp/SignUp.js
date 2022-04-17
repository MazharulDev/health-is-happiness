import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithpassword,
    ] = useCreateUserWithEmailAndPassword(auth);
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
        <div>
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
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={handleGoogleSignIn} className='mt-3 w-100 btn btn-light border'>Sign in with google</Button>
            </Form>
        </div>
    );
};

export default SignUp;