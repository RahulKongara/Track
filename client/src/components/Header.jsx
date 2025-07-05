import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between items-center mt-2">
            <div className="logo">
                <Link to='/'>
                    <h2 className="text-4xl font-bold ml-4">Logo</h2>
                </Link>
            </div>
            <ul className="flex justify-around mr-10">
                <li className="ml-8"><NavLink to='/'>Home</NavLink></li>
                <li className="ml-8"><NavLink to='/workouts'>Workouts</NavLink></li>
                <li className="ml-8"><NavLink to='/food'>Food</NavLink></li>
                <li className="ml-8"><NavLink to='/profile'>Profile</NavLink></li>
                <li className="ml-8"><NavLink to='/posts'>Posts</NavLink></li>
            </ul>
        </div>
    )
}

export default Header