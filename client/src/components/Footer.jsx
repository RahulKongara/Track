import { Link, NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-4 p-4 bg-gray-950">
            <div className="footer flex justify-around">
                <div className="dev-info">
                    <h4 className="text-3xl font-mono mb-4">SusEyez.inc</h4>
                    <p>Developing since 2018.</p>

                    <div className="cta">
                        <p className="mt-3 mb-4">Feel Free to - </p>
                        <Link to='/contact' className="p-2 bg-[#ff5e5e] rounded-lg">Contact Us!</Link>
                    </div>
                </div>
                <div className="nav text-center">
                    <h6 className="mb-3 text-xl font-bold">Navigation</h6>
                    <ul className="font-light">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/workouts'>Workouts</NavLink></li>
                        <li><NavLink to='/food'>Food</NavLink></li>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                        <li><NavLink to='/posts'>Posts</NavLink></li>
                    </ul>
                </div>
                <div className="socials text-center">
                    <h6 className="mb-3 text-xl font-bold">Socials</h6>
                    <ul className="font-light">
                        <li className="mb-2"><Link to='https://www.instagram.com/rahul_kongara_/' target='_blank'>Instagram</Link></li>
                        <li className="mb-2"><Link to={`https://www.x.com/rahulkongara02/`}>X</Link></li>
                        <li className="mb-2"><Link>Discord</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copy text-center mt-4">
                <p>&copy; All rights belong to me lol.</p>
            </div>
        </div>
    )
}

export default Footer