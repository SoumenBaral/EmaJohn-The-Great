import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <div>
            <div className='bg-slate-800 flex justify-around items-center h-20'>
                <img src={logo} alt="" />
                <div className='text-white text-xl  '>
                    <Link className='mr-5 hover:text-orange-600' to={'/'}>Orders</Link>
                    <Link className='mr-5 hover:text-orange-600' to={'/review'}>Review</Link>
                    <Link className='mr-5 hover:text-orange-600' to={'/inventory'}>Inventory</Link>
                    <Link className='mr-5 hover:text-orange-600' to={'/login'}>Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;