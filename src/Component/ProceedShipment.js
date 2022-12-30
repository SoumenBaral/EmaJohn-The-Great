import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../src/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const ProceedShipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }

    return (
        <div className='form-container  flex justify-center border-slate-400  mx-auto'>
            <div className='w-[600px] rounded-sm border  m-10'>
                <h2 className='form-title mt-3 text-2xl text-center font-semibold'>Shipping</h2>
                <form onSubmit={handleCreateUser} className='text-lg m-10' >
                    <div className="mb-5">
                        <label className='block' htmlFor="Name">Name</label>
                        <input onBlur={handleNameBlur} className='w-[500px] border  h-[55px]' type="text" name="email" id="" required />
                    </div>
                    <div className="mb-5">
                        <label className='block' htmlFor="email">Email</label>
                        <input value={user?.email} readOnly className='w-[500px] border  h-[55px]' type="email" name="email" id="" required />
                    </div>
                    <div className="input-group mb-5">
                        <label className='block' htmlFor="password">Address </label>
                        <input onBlur={handleAddressBlur} className='w-[500px] border  h-[55px]' type="text" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label className='block' htmlFor="password">Phone</label>
                        <input onBlur={handlePhoneBlur} className='w-[500px] border  h-[55px]' type="text" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit w-[500px] h-[55px] bg-orange-400 mt-10 rounded-md hover:bg-orange-500 cursor-pointer text-white font-semibold' type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    )
};

export default ProceedShipment;