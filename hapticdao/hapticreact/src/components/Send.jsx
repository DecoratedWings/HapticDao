import { React, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';
import { useWeb3Transfer, ReactMoralisError, useERC20Balances, useMoralis } from "react-moralis";

const Send = () => {

  const commands = [
    {
      command: "transfer * of * to *",
      callback: (coin, recipient, amount) => {
        //MORALIS CODE
        console.log("Coin is: ", coin, " Receiver is: ", recipient, " Amount is: ", amount);
        TransferWeth(coin, recipient, amount);
        handleReset();
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
        console.log("transcript has been reset!");
      },
    },
    {
      command: "get balance",
      callback: () => {
        getUserBalance();
        console.log("transcript has been reset!");
      },
    },
    ,
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);

  const hapticVibrationService = new HapticVibrationService;
  const { speak } = useSpeechSynthesis();
  const { Moralis } = useMoralis();

  async function handleVibrate() {
    await hapticVibrationService.selectionVibrate(function (fallback) {
      console.log("Vibration encountered an error: ", fallback);
    });
    speak({ text: "Select the Speak button and state which token to transfer and to whom you would like to transfer" });
    resetTranscript();
  }

  async function getDataForTransfer() {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.log("Browser Does Not Support Listening");
    }
    setIsListening(true);
    SpeechRecognition.startListening();
    console.log("transcript is: ", transcript);

    await hapticVibrationService.successVibrate(function (fallback) {
      console.log("Vibration encountered an error: ", fallback);
    });
  }

  const handleReset = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  async function getUserBalance() {
    // var user = Moralis.User.current();
    // const balances = await Moralis.Web3.getAllERC20({address:"0x47430D6f05f1A10484B1082ec27883002eA1eE1F"});
    const user = Moralis.User.current();

    const query = new Moralis.Query("EthTransactions");
    query.equalTo("from_address", user.get("ethAddress"));
    const results = await query.find();
    console.log("balance is: ", results, user);
    // speak({ text: balances });
  }

  const TransferWeth = (coin, recipient, amount) => {
    const { fetch, error, isFetching } = useWeb3Transfer({
      amount: Moralis.Units.Token(amount, 18),
      receiver: "0x0000000000000000000000000000000000000000",
      type: "erc20",
      contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    });
    console.log("FETCH IS : ", fetch);

    return (
      // Use your custom error component to show errors
      <div>
        {error && <ReactMoralisError error={error} />}
        <button onClick={() => fetch()} disabled={isFetching}>
          Transfer
        </button>
      </div>
    );
  };

  return (
    <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
      <div className='max-w-[300px] mx-auto px-8  justify-center '>
        <br /><br /><br /> <br />
        <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Transfer</h1>
        <br /><br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center '>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={handleVibrate}>
            Instructions
          </button>
        </div>
        <br /> <br />
      </div>

      <br />
      <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
        <h2 className='text-slate-300 text-2xl'><b>Which Crypo Would you like to send? <br />Please state the recipient as well.</b> </h2>
        <br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center '>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={getDataForTransfer}>
            Speak
          </button>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-300'>
              {transcript}</p>
            <br />

          </div>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-10 py-2 text-teal-300 text-2xl'>{ }</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Send;