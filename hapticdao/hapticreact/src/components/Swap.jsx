import React from 'react'


const Swap = () => {

    return (
        <div name='dex' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic DEX</h1>
            </div>
            <br/><br/>
            <iframe name='uniswap'src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
                height="660px"
                width="100%"
                style={{border: 0, margin: '0 auto', marginBottom: '0.5rem', 
                display:'block', borderRadius:'10px', maxWidth:'960px', minWidth:'300px'}}
            />


     
          
        </div>
    )
}

export default Swap