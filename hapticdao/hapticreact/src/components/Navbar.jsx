import React, { useState } from 'react';
import Logo from '../assets/hdLogo.png';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
            <div>
                <a href="/">
                    <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
                </a>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>DAO</li>
                    <li>SWAP</li>
                    <li>MARKETPLACE</li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar