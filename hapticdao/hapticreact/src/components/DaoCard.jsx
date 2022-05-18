import React from 'react'

const DaoCard = (props) => {
    return (
        <div className="w-full py-2 gap-4 flex-wrap flex justify-center items-center">
            <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <div class="p-2">
                    {/* <!-- Heading --> */}
                    <h2 class="font-bold text-lg mb-2 ">{props.title}</h2>
                    {/* <!-- Description --> */}
                    <p class="text-sm text-gray-600">{props.description}</p>
                </div>
                <div class="m-2">
                    <a role='button' class="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700">Upvote</a>
                    &nbsp;
                    <a role='button' class="text-white bg-red-600 px-3 py-1 rounded-md hover:bg-red-700">Downvote</a>
                </div>
            </div>

        </div>
    )
}

export default DaoCard;