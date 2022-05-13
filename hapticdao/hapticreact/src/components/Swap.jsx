import React, {useEffect} from 'react'
import { useMoralis, useOneInchSwap } from "react-moralis";


const Swap = () => {
    const { Moralis, isInitialized } = useMoralis();

    useEffect(() => {
        if(isInitialized){
         // your code
        }
      }, [isInitialized])

    async function init() {
            await Moralis.initPlugins();
            await Moralis.enableWeb3();
            const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
              chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
            });
            console.log(tokens);
    }


    return (
        <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[300px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic DEX</h1>
                <br /><br /><br /> <br />

                <button onClick={init}>CLICK ME</button>
            </div>
        </div>
    )
}

export default Swap