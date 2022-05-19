import {React, useState} from 'react'
import { FaArrowsAltH, FaBtc, FaStore, FaThList } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';
import usdPriceABI from './utils/USDPriceConverter.json';
import PriceConversionService from '../services/PriceConversionService';
import { ethers } from "ethers";


const Dashboard = () => {

    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [price, setPrice] = useState(``);

    // SpeechRecognition.startListening()
    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();

    async function handleVibrate() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Select the Speak button and state which token to retrieve price data for." });
        resetTranscript();
    }

    async function getTokenData() {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            console.log("Browser Does Not Support Listening");
        }
        setIsListening(true);
        SpeechRecognition.startListening();
        console.log("transcript is: ",transcript);

        await hapticVibrationService.successVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
    }

    ////////////////////////////////////////////////////////////////////////
    /*{ CODE TO FETCH FROM ORACLE: }*/
    
    const contractAddress = "0xBbdf8aB081eafB5Ea25745EBC1271fA9F8817671";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const usdPriceConverterContract = new ethers.Contract(contractAddress, usdPriceABI.abi, signer);

    async function getPriceEth(){
        let ethPrice = await usdPriceConverterContract.getLatestPriceEth() / 10**8;
        return ethPrice;
    }



    return (
        <div name='dashboard' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Dashboard</h1>
                <br /><br />
                <div className='max-w-[1000px] mx-auto px-20  justify-center '>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={handleVibrate}>
                   Instructions
                </button>
            </div>
                {console.log(getPriceEth().then(result=>console.log(result)))}
               
                <br/><br />
            </div>
            
            <br/>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <h2 className='text-slate-300 text-2xl'><b>What Crypto would you like the price of?</b> </h2>
                <br/>
                <div className='max-w-[1000px] mx-auto px-20  justify-center '>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={getTokenData}>
                   Speak
                </button>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-300'><FaBtc className='h-6 text-green-200'/>&nbsp;Token Selected :</p>
                    <br/>
                   
                </div>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-10 py-2 text-teal-300 text-2xl'>{transcript}</p>
                </div>

                </div>
           
            </div>

        </div>
    )
}

export default Dashboard