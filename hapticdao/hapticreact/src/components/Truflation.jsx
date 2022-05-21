import React, { useEffect, useState }  from 'react'
import TruflationCardList from './TruflationCardList';
import TruflationCard from './TruflationCard';
import truflationYoyABI from './utils/TruflationContract.json';
import { ethers } from "ethers";
import HapticVibrationService from '../services/HapticVibrationService';
import { useSpeechSynthesis } from 'react-speech-kit';

const Truflation = () => {

  const [yoyInflation, setYoyInflation] = useState('');
  const hapticVibrationService = new HapticVibrationService;
  const { speak } = useSpeechSynthesis();

  const contractAddress = "0x5fc949612bCf622A63C4D66B1aA132728Cc0eb1C";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const truflationContract = new ethers.Contract(contractAddress, truflationYoyABI, signer);

  async function getYoYInflation() {
    console.log("calling ... ")
    truflationContract.yoyInflation().then(result=>{
      setYoyInflation(Number(result).toFixed(2));
      console.log("inflation is: ",result)
    });
  }

  useEffect(() => {
    getYoYInflation();
  });

  async function readInflation(){
    await hapticVibrationService.selectionVibrate(function (fallback) {
        console.log("Vibration encountered an error: ", fallback);
    });
    speak({ text: `The Rate for why oh why Inflation is approximately ${yoyInflation} %` });
}

async function instructions(){
  await hapticVibrationService.selectionVibrate(function (fallback) {
      console.log("Vibration encountered an error: ", fallback);
  });
  speak({ text: `For each inflation category, select its corresponding card in order to hear its respective inflation data.` });
}

  return (
    <div name='dao' className='w-full h-[110vh] justify-center bg-teal-100'>
      <div className='max-w-[300px] mx-auto px-8  justify-center '>
        <br /><br /><br /> <br />
        <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Truflation</h1>
        <br /><br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center'>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={instructions}>
            Instructions
          </button>
        </div>
        <br /> <br />
      </div>

      <br />
      <div class="mx-4 space-y-60">

      <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
        <h2 className='text-slate-300 text-2xl'><b>Inflation Data Powered by chainlink oracles. <br/>Currently fetches Yoy inflation<br /></b> </h2>
        <br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center '>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={null}>
            Fetch Inflation
          </button>
          <br/> <br/>   

            <div class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl" onClick={readInflation}>
            <div class="p-2">
                {/* <!-- Heading --> */}
                <h2 class="font-bold text-lg mb-2 ">Yoy Inflation: {yoyInflation} %</h2>
            </div>

        </div>

        
            <br />

        
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-10 py-2 text-teal-300 text-2xl'>{ }</p>
          </div>

        </div>

      

      </div>

      <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2'>
            <TruflationCardList/>

     </div>


     </div>


    </div>
  )
}

export default Truflation