import React from 'react'

const Options = () => {
    return (
        <>
            <div className="flex">
                <input type="checkbox" name="chest" id="chest" /><p className="ml-3">Chest</p>
            </div>
            <div className="flex">
                <input type="checkbox" name="shoulder" id="shoulder" /><p className="ml-3">Shoulder</p>
            </div>
            <div className="flex">
                <input type="checkbox" name="back" id="back" /><p className="ml-3">Back</p>
            </div>
            <div className="flex">
                <input type="checkbox" name="arms" id="arms" /><p className="ml-3">Arms</p>
            </div>
            <div className="flex">
                <input type="checkbox" name="legs" id="legs" /><p className="ml-3">Legs</p>
            </div>
            <div className="flex">
                <input type="checkbox" name="abs" id="abs" /><p className="ml-3">Abs</p>
            </div>
        </>
    )
}

export default Options