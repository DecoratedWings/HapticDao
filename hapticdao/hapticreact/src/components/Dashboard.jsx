import React from 'react'
import { FaArrowsAltH, FaBtc, FaStore, FaThList } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';

const Dashboard = () => {

    // SpeechRecognition.startListening()
    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();

    async function handleVibrate() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Please State The Token." });
    }

    return (
        <div name='dashboard' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Dashboard</h1>
                <br /><br /><br /> <br />
            </div>

            <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <h2 className='text-slate-300'><b>What Crypto would you like the price of?</b> </h2>
                <br/>
                <div className='max-w-[1000px] mx-auto px-20  justify-center '>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={handleVibrate}>
                   Speak
                </button>
                </div>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-300'><FaBtc className='h-6 text-green-200' /> Coin</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard