import React from 'react'
import { Link } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';

const Card = (props) => {

    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();

    async function selectSend() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Send" });
    }
    async function selectDao() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        //DAO pronunciation lol
        speak({ text: "dow" });
    }
    async function selectSwap() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Swap" });
    }
    async function selectMarketplace() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Marketplace" });
    }

    async function selectDashboard() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Dashboard" });
    }
    return (
        <Link to={`/${props.page}`} className='hover:bg-teal-500 hover:text-white rounded-2xl py-8 px-6' onClick={props.choice}>
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                    <div className='bg-[#02f9ab] inline-flex p-2 rounded-full'>
                        {props.icon}
                    </div>
                    <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
                    <p>
                        {props.text}
                    </p>

                </div>
            </div>
        </Link>
    )
}

export default Card;