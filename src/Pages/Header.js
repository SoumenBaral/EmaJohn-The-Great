import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../images/Logo.svg'
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>

            <div className='bg-slate-800 flex justify-around items-center h-20'>
                <img src={logo} alt="" />
                <div className='text-white text-xl  '>
                    <Link className='mr-5 hover:text-orange-600' to={'/'}>Orders</Link>
                    <Link className='mr-5 hover:text-orange-600' to={'/review'}>Review</Link>
                    <Link className='mr-5 hover:text-orange-600' to={'/inventory'}>Inventory</Link>
                    {
                        user ? <button className='mr-5 hover:text-orange-600' onClick={handleSignOut}>Sign Out</button> : <Link className='mr-5 hover:text-orange-600' to={'/login'}>Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;