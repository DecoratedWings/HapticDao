import { React, useState } from 'react'
import HapticVibrationService from '../services/HapticVibrationService';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useWeb3Transfer, ReactMoralisError, useERC20Balances, useMoralis } from "react-moralis";

const Swap = () => {

    const [amount, setAmount] = useState('');
    const { Moralis } = useMoralis();
    let dex = Moralis.Plugins.oneInch;

    //Tokens we support based on 1INCH offerings on eth chain: 
    let tokenMap = new Map();
    tokenMap.set('geome', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm
    tokenMap.set('giong', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm
    tokenMap.set('gion', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm
    tokenMap.set('g home', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm
    tokenMap.set('ohm', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm
    tokenMap.set('home', '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f'); //gOhm

    tokenMap.set('die', '0x6b175474e89094c44da98b954eedeac495271d0f'); //dai lol
    // tokenMap.set('yearn', '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c'); //yearn yUSD
    tokenMap.set('pool', '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'); 
    tokenMap.set('sushi', '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2');
    tokenMap.set('Morpheus', '0x7b0c06043468469967dba22d1af33d77d44056c8');
    //Matic
    tokenMap.set('Matic', '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0');
    tokenMap.set('Maddock', '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0');

    tokenMap.set('robo nomics', '0x7de91b204c1c737bcee6f000aaa6569cf7061cb7');
    tokenMap.set('Ave', '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'); //aave
    tokenMap.set('math', '0x08d967bb0134f2d07f7cfb6e246680c53927dd30');


    const commands = [
        {
            command: "swap * of * to *",
            callback: (amount, token1, token2) => {
                swapTokens(amount, token1, token2).then(result=>console.log(result));
            },
        },
        {
            command: "tokens",
            callback: () => {
                getSupportedTokens().then(result =>console.log(result));
            },
        },
        {
            command: "quote * of * to *",
            callback: (amount, token1, token2) => {
                getQuote(amount, token1, token2).then(result =>console.log(result));
            },
        },
    ]
    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    const [isListening, setIsListening] = useState(false);
    const hapticVibrationService = new HapticVibrationService;
    const { speak } = useSpeechSynthesis();

    async function instructions() {
        await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: `Haptic dex uses uniswaps dex to allow you to swap tokens.
                        If you are signed into Haptic Dao you are automatically connected
                        to uniswap with your wallet and may begin trading. Alternatively there 
                        is a speak button below the instructions where you may request a token swap 
                        quote. After finding out the quote amount you may then request that swap.
                        Strong vibrations will indicate that a swap is occurring.` });
      }

      const fetchTokenBalances = async () => {
        const options = {
            chain: 'rinkeby',
        }
        const balances = await Moralis.Web3API.account.getTokenBalances(options);
        const balance = await Moralis.Web3API.account.getNativeBalance(options);
        
        // let balance = Number(balances[0].balance) / 10**18;
        console.log("user balances: " + balances);
        speak({ text: "User has the following token balances in their connected wallet address." })
        for (let i = 0; i < balances.length; i++) {
            console.log(balances[i]);
            speak({ text: `Porfolio balance of ${balances[i].name} is: ${(Number(balances[i].balance) / 10 ** 18).toString()}.` });
        }
    };

    async function getSupportedTokens() {
        const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
          chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
        });
        console.log(tokens);
      }

      async function callCommands() {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            console.log("Browser Does Not Support Listening");
        }
        setIsListening(true);
        SpeechRecognition.startListening();
        console.log("transcript is: ", transcript);
   
        await hapticVibrationService.warningVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
    }

    async function getQuote(amount, token1, token2) {
        const quote = await Moralis.Plugins.oneInch.quote({
          chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: tokenMap.get(token1), // The token you want to swap --> gOhm
          toTokenAddress: tokenMap.get(token2), // The token you want to receive --> Pool
          amount: amount,
        });
        console.log(quote);
        console.log("Amount of token 2 is :", quote.toTokenAmount);

        await hapticVibrationService.successVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: `Amount of ${token2} you would be receiving for ${amount} of ${token1} is: ${quote.toTokenAmount}` });

      }
  
      async function swapTokens(amount, token1, token2) {

        const currentUser = Moralis.User.current();
        if (!currentUser) {
            currentUser = Moralis.authenticate();
        }

        console.log("Current User is : ", currentUser);

        const options = {chain: "eth",
                            fromTokenAddress: tokenMap.get(token1),
                            toTokenAddress: tokenMap.get(token2),
                            amount: Number(amount),
                            fromAddress: currentUser.get("ethAddress"),
                            slippage: 1
                        }
                        
        let receipt = await dex.swap(options)
        console.log(receipt);

        await hapticVibrationService.warningVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: `Transaction for swapping ${amount} of ${token1} to ${token2} is being processed. 
        Upon completion you may check your wallet balance on the dashboard screen.` });

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
                    <br/><br/>
                    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={callCommands}>
                        Speak Swap
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