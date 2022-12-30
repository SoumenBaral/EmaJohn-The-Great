import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container  flex justify-center border-slate-400  mx-auto'>
            <div className='w-[600px] rounded-sm border  m-10'>
                <h2 className='form-title mt-3 text-2xl text-center font-semibold'>Sign Up</h2>
                <form onSubmit={handleCreateUser} className='text-lg m-10' >
                    <div className="mb-5">
                        <label className='block' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='w-[500px] border  h-[55px]' type="email" name="email" id="" required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='w-[500px] border  h-[55px]' type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label className='block' htmlFor="password">Confirm  Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className='w-[500px] border  h-[55px]' type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit w-[500px] h-[55px] bg-orange-400 mt-10 rounded-md hover:bg-orange-500 cursor-pointer text-white font-semibold' type="submit" value="Sign Up" />
                </form>
                <p className='m-10'>
                    Already have an account? <Link className='form-link text-orange-600' to="/login">Login</Link>
                </p>
                <div className='flex justify-center items-center'>
                    <div className=' w-[200px] h-[2px]  bg-slate-400 m-3'></div>
                    <div>
                        or
                    </div>
                    <div className=' m-3 w-[200px] h-[2px]  bg-slate-400 ' ></div>
                </div>
                <button className='w-[500px] h-[55px] border  font-semibold text-center m-10'><i className="fa-brands fa-google text-blue-700"></i> Continue with Google</button>
            </div>
        </div>

    );
};

export default SignUp;