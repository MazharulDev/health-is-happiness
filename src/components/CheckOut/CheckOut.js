import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const CheckOut = () => {
    const navigate=useNavigate();
    const [number,setNumber]=useState('');
    const [age,setAge]=useState('');
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    if (loading) {
        return <Loading></Loading>
    }
    const handleNumberChange=e=>{
        setNumber(e.target.value);
    }
    const handleAgeChange=e=>{
        setAge(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        setNumber('');
        setAge('')
        toast('Save Your Information')
        navigate('/')
    }
    return (
        <div>
            <h1 className='text-center text-primary mt-3'>CheckOut</h1>
            <h2 className='text-center'>Treatment No.  {id}</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className='mb-3'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" value={user.displayName} disabled />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={handleNumberChange} value={number} type="tel" placeholder='Enter Your Phone Number'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control onChange={handleAgeChange} value={age} type="number" placeholder='Enter Your Age'/>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Check Out
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;