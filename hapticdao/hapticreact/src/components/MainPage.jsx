import React from 'react'
import { FaArrowsAltH, FaBtc, FaStore, FaThList } from 'react-icons/fa';
import Card from './Card';
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';


const MainPage = () => {

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

    <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
      <div className='max-w-[300px] mx-auto px-8  justify-center '>
        <br /><br /><br /> <br />
        <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Features</h1>
        <br /><br /><br /> <br />
      </div>

      <div>

        {/* Card Container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

          {/* Card */}
          <Card icon={<FaThList size={40} />} heading='Haptic Dashboard' text='Dashboard For viewing your tokens and NFTs' page='dashboard' choice={selectDashboard}/>
          <Card icon={<FaBtc size={40} />} heading='Haptic Send' text='Transfer from any valid chain that our application supports to recipients addresses on the respective chain.' page='send' choice={selectSend}/>
          <Card icon={<FaArrowsAltH size={40} />} heading='Haptic DEX' text='Decentralized exchange that empowers users to trade their crypto-currencies.'page='swap' choice={selectSwap}/>
          <Card icon={<FaStore size={40} />} heading='Haptic Market' text='NFT Marketplace that meets the needs of the community. Buy/sell NFTs on the marketplace for 0 fees and select your own royalty policies.'page='marketplace' choice={selectMarketplace}/>
        </div>
      </div>

    </div>


  )
}

export default MainPage