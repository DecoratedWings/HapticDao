import React from 'react'
import HapticVibrationService from '../services/HapticVibrationService';
import { useSpeechSynthesis } from 'react-speech-kit';

const DaoCard = (props) => {
  
    const hapticVibrationService = new HapticVibrationService();
    const { speak } = useSpeechSynthesis();

    async function readCard(){
        var status = await hapticVibrationService.selectionVibrate(function (fallback) {
            console.log("Vibration encountered an error: ", fallback);
        });
        speak({ text: props.description });
        console.log(props.description);
    }
    

    return (
        <div className="w-full py-2 gap-4 flex-wrap flex justify-center items-center bg-teal-100" onClick={readCard}>
            <div className="w-80 p-4 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <div className="p-2">
                    {/* <!-- Heading --> */}
                    <h2 className="font-bold text-lg mb-2 ">{props.title}</h2>
                    {/* <!-- Description --> */}
                    <p className="text-sm text-gray-600">{props.description}</p>
                </div>
                <br/>
                <p className="text-sm text-gray-600">Score is:{props.score}</p>

                <div className="m-2">
                    <a role='button' className="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700" onClick={null}>Upvote</a>
                    &nbsp;
                    <a role='button' className="text-white bg-red-600 px-3 py-1 rounded-md hover:bg-red-700">Downvote</a>
                </div>
            </div>

        </div>
    )
}

export default DaoCard;