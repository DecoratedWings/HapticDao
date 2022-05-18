import React from 'react'
import DaoCardList from './DaoCardList'

const Dao = () => {
    return (
        <div name='dao' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[300px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />
                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>DAO</h1>
                <br /><br /><br /> <br />
            </div>

            <DaoCardList />

        </div>
    )
}

export default Dao