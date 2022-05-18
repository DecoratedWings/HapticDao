import React from 'react'
import DaoCardList from './DaoCardList'

const Dao = () => {
    return (
        <>
            <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
                <div className='max-w-[300px] mx-auto px-8  justify-center '>
                    <br /><br /><br /> <br />
                    <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>DAO</h1>
                    <br /><br />
                    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 justify-center items-center rounded-full" onClick={null}>
                        Add Proposal
                    </button>
                    <br /><br />

                </div>

                <DaoCardList />

            </div>
        </>
    )
}

export default Dao