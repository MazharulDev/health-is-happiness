import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
const SignUp = () => {
    const location = useLocation();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate=useNavigate();
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithPassword,
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

    if(errorWithGoogle){
        toast(errorWithGoogle?.message);
    }
    if(errorWithPassword){
        toast(errorWithPassword?.message);
    }
    if(userWithEmail){
        toast('Registration Successfully')
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Two password did not match')
            return;
        }
        if(password<5){
            setError('Password must 6 character');
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name });
        
        
    }
    
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    let from = location.state?.from?.pathname || '/';
    if (userWithEmail||userWithGoogle) {
        navigate(from, { replace: true });
    }
    if(loadingWithEmail || loadingWithGoogle|| updating){
        return <Loading></Loading>
    }
    return (
        <div className='mb-5'>
            <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="name" placeholder="Enter Full Name" required />

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
                <Button onClick={handleGoogleSignIn} className='mt-3 w-100 btn btn-light border'><FcGoogle className='me-2 mb-1'></FcGoogle>Sign in with google</Button>
            </Form>
        </div>
    );
};

export default SignUp;