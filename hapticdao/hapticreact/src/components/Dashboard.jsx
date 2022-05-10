import React from 'react'
import { FaArrowsAltH, FaBtc, FaStore, FaThList } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div name='dashboard' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic Dashboard</h1>
                <br /><br /><br /> <br />
            </div>

            <div className='absolute flex flex-col py-8 md:min-w-[760px] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-500
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <h2 className='text-slate-300'><b>What Crypto would you like the price of?</b> </h2>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-300'><FaBtc className='h-6 text-green-200' /> Coin</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard