import { lazy } from "react"
const Difficulty = lazy(() => import('./Difficulty'));
const Duration = lazy(() => import('./Duration'));
const Options = lazy(() => import('./Options'));

const Sidebar = ({section}) => {
    return (
        <div className="sidebar w-xs bg-gray-900 p-4 ml-4 mt-4 rounded-lg">
            <Difficulty />
            <div className="m-grp rounded-xl border-1 border-gray-200 text-center mt-5">
                <h3 className='font-bold mt-5'>Muscle Group</h3>
                <div className="check-boxes flex flex-col justify-self-center mt-2.5 mb-5">
                    {section === 'cardio' ? 
                    <div className="flex">
                        <input type="checkbox" name="Heart" id="heart" disabled checked /><p className='ml-3'>Heart</p>
                    </div>
                    : 
                    <Options />}
                </div>
            </div>
            <div className="equipment rounded-xl border-1 border-gray-200 text-center mt-5">
                <h3 className='font-bold mt-5'>Location</h3>
                <div className="radio-boxes flex flex-col justify-self-center text-right mt-2.5 mb-5">
                    {/* <input type="radio" name="eq" id="clear" /><p className="ml-3">Clear</p> */}
                    <div className="flex">
                        <input type="radio" name="lc" id="home" /><p className='ml-3'>Home</p>
                    </div>
                    <div className="flex">
                        <input type="radio" name="lc" id="gym" /><p className='ml-3'>Gym</p>
                    </div>
                    <div className="flex">
                        <input type="radio" name="lc" id="outdoor" /><p className='ml-3'>Outdoor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar