import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const [email,setEmail]=useState('');
    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        sendPasswordResetEmail(email);
        toast('Sending Reset')
    }
    return (
        <div>
            <h1 className='text-center'>Password Reset</h1>
            <p className='text-center'>Enter your Health is Happiness email address that you used to register. We'll send you an email <br></br> with your username and a link to reset your password.</p>
            <form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />

                </Form.Group>
                <Button variant="primary" type="submit">
                    SEND
                </Button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default ForgotPassword;