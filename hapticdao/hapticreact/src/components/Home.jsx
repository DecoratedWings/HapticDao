import React from 'react'
import Hands3D from './3DHands';

const Home = () => {
    return (

        <div name='home' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />

                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic DAO</h1>
                <br /><br /><br /> <br />
         

            </div>
            <div className='max-w-[200px] mx-auto px-8  justify-center '>

            <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 rounded-full">
                    ENTER APP
                </button>
            </div>
            <br/>

            {/* <iframe src='https://my.spline.design/hapticlogo-fb22e1ef24b65fc8f1b9fe2b5b3f7010/' frameborder='0' width='500px' height='500px' > */}
            {/* </iframe> */}


            <Hands3D />

        </div>

    )
}
export default Home;

