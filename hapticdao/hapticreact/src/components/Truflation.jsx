import React from 'react'

const Truflation = () => {
  return (
    <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
      <div className='max-w-[300px] mx-auto px-8  justify-center '>
        <br /><br /><br /> <br />
        <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Truflation</h1>
        <br /><br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center '>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={null}>
            Instructions
          </button>
        </div>
        <br /> <br />
      </div>

      <br />
      <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
        <h2 className='text-slate-300 text-2xl'><b>Inflation Data Powered by chainlink oracles. <br/>Currently fetches Yoy inflation<br /></b> </h2>
        <br />
        <div className='max-w-[1000px] mx-auto px-20  justify-center '>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold px-10 py-2 rounded-full" onClick={null}>
            Fetch Inflation
          </button>
          <div className='flex justify-between flex-wrap px-4'>
        
            <br />
            {/* <p>{display}</p> */}

          </div>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-10 py-2 text-teal-300 text-2xl'>{ }</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Truflation