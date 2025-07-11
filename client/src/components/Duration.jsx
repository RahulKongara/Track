import { useState } from "react"

const Duration = () => {
    const [dur, setDur] = useState(0);

    return (
        <div className="m-grp rounded-xl border-1 border-gray-200 text-center mt-5">
            <h3 className='mt-5 font-bold'>Duration</h3>
            <div className="flex flex-col justify-self-center text-left mt-2.5 mb-5">
                <input type="range" min="1" max="120" name="slider" id="slider" defaultValue={60} onChange={(e) => setDur(e.target.value)} className="appearance-auto accent-orange-600" />
                <div className="flex justify-between">
                    <p>0</p><p>60</p><p>120</p>
                </div>
            </div>
        </div>
    )
}

export default Duration