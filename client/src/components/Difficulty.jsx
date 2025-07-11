import React from 'react'

const Difficulty = () => {
    return (
        <div className="difficulty rounded-xl border-1 border-gray-200 text-center mt-5">
            <h3 className='mt-5 font-bold'>Choose Difficulty</h3>
            <div className="flex flex-col justify-self-center text-left mt-2.5 mb-5">
                <div className="flex">
                    <p className="mr-2">Beginner</p> <input type="radio" name="diff" id="beginner" />
                </div>
                <div className="flex">
                    <p className="mr-2">Intermediate</p> <input type="radio" name="diff" id="inter" />
                </div>
                <div className="flex">
                    <p className="mr-2">Expert</p> <input type="radio" name="diff" id="expert" />
                </div>
            </div>
        </div>
    )
}

export default Difficulty