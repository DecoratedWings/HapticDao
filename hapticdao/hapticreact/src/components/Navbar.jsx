import React, { useState } from 'react';
import Logo from '../assets/hdLogo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import HapticVibrationService from '../services/HapticVibrationService';
import { useSpeechSynthesis } from 'react-speech-kit';



const Navbar = () => {
    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();
    const[nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    async function selectSend(){
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Send" });
    }
    async function selectDao(){
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        //DAO pronunciation lol
        speak({ text: "dow" });
    }
    async function selectSwap(){
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Swap" });
    }
    async function selectMarketplace(){
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Marketplace" });
    }

    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-teal-100 text-gray-500'>
            <div>
                <a href="/">
                    <img src={Logo} alt="Logo Image" style={{ width: '60px' }} />
                </a>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'onClick={selectSend}>SEND</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'onClick={selectDao}>DAO</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'onClick={selectSwap}>SWAP</li>
                    <li className='bg-transparent hover:bg-teal-500 hover:text-white'onClick={selectMarketplace}>MARKETPLACE</li>
                </ul>
            </div>

            {/* Menu bars */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Menu for Mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-teal-100 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><button className='hover:bg-teal-500 hover:text-white' onClick={selectSend}>SEND</button></li>
            <li className='py-6 text-4xl'><button className='hover:bg-teal-500 hover:text-white' onClick={selectDao}>DAO</button></li>
            <li className='py-6 text-4xl'><button className='hover:bg-teal-500 hover:text-white' onClick={selectSwap}>SWAP</button></li>
            <li className='py-6 text-4xl'><button className='hover:bg-teal-500 hover:text-white' onClick={selectMarketplace}>MARKETPLACE</button></li>
        </ul>


        </div>
    )
}

export default Navbar