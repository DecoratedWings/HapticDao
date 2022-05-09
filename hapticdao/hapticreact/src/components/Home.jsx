import {React,Link} from 'react'
import Hands3D from './3DHands';
import { useSpeechSynthesis } from 'react-speech-kit';
import HapticVibrationService from '../services/HapticVibrationService';


const Home = () => {
    const hapticVibrationService = new HapticVibrationService;

    const { speak } = useSpeechSynthesis();

    async function handleVibrate() {
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: "Entering The Application" });
        window.location.href="/main";
    }

    return (

        <div name='home' className='w-full h-screen justify-center bg-teal-100'>
            <div className='max-w-[500px] mx-auto px-8  justify-center '>
                <br /><br /><br /> <br />

                <h1 className='text-4xl sm:text-7xl font-bold items-center justify-center text-gray-500'>Haptic DAO</h1>
                <br /><br /><br /> <br />


            </div>
            <div className='max-w-[200px] mx-auto px-8  justify-center '>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 rounded-full" onClick={handleVibrate}>
                   ENTER APP
                </button>
            </div>
            <br />

            {/* <iframe src='https://my.spline.design/hapticlogo-fb22e1ef24b65fc8f1b9fe2b5b3f7010/' frameborder='0' width='500px' height='500px' > */}
            {/* </iframe> */}

            {/* Hide 3D Design on Mobile to show menu */}
            <div className='hidden md:flex'>
                <Hands3D />
            </div>

        </div>

    )
}
export default Home;

