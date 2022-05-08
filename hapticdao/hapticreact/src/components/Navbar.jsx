import React, { useState } from 'react';
import Logo from '../assets/hdLogo.png';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-teal-100 text-gray-500'>
            <div>
                <a href="/">
                    <img src={Logo} alt="Logo Image" style={{ width: '60px' }} />
                </a>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'>Home</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'>DAO</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'>SWAP</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'>MARKETPLACE</li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar