import React from 'react'
import HapticVibrationService from '../services/HapticVibrationService';
import { useSpeechSynthesis } from 'react-speech-kit';

const Swap = () => {

    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();

    async function instructions() {
        await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: `Haptic dex uses uniswaps dex to allow you to swap tokens.
                        If you are signed into Haptic Dao you are automatically connected
                        to uniswap with your wallet and may begin trading.` });
      }

    return (
        <div name='dex' className='w-full h-[120vh] justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic DEX</h1>
                <br/>
                <div className='max-w-[1000px] mx-auto px-20  justify-center'>
                    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={instructions}>
                        Instructions
                    </button>
                </div>
             </div>
       
            <br/>
            <iframe name='uniswap' src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
                height="660px"
                width="100%"
                style={{
                    border: 0, margin: '0 auto', marginBottom: '0.5rem',
                    display: 'block', borderRadius: '10px', maxWidth: '960px', minWidth: '300px'
                }}
            />

        </div>
    )
}

export default Swap