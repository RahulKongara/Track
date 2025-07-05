import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";


const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();
    
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignInSubmit = () => {
        console.log('Sign In Data: ', signInData);
        setLoggedIn(true);
        if (loggedIn) {
            navigate('/profile', { replace: true });
        }
    };

    const handleSignUpSubmit = () => {
        console.log('Sign Up Data: ', signUpData);
        setLoggedIn(true);
    };


    return (
        <div className="flex items-center justify-center font-sans h-[600px]">
            <div className={`cont ${isRightPanelActive ? 'right-panel-active' : ''} bg-gray-800 rounded-lg shadow-2xl shadow-orange-50 relative overflow-hidden w-full max-w-4xl min-h-120`}>
                {/* Sign Up Form */}
                <div className="form-container sign-up-container absolute top-0 left-0 w-1/2 h-full">
                    <div className="bg-gray-950 flex items-center justify-center flex-col px-12 h-full text-center">
                        <h1 className="font-bold text-2xl mb-0 text-white">Create Account</h1>

                        <div className="auth-login my-5">
                            <p>Google Auth</p>
                        </div>

                        <span className="text-xs text-white mb-4">or use your email for registration</span>

                        <input type="text" className='bg-gray-200 text-black border-none py-3 px-4 my-2 w-full rounded text-sm' placeholder='Name' value={signUpData.name} onChange={(e) => setSignUpData({...signUpData, name: e.target.value})} />
                        <input type="email" name="email" className='bg-gray-200 text-black border-none py-3 px-4 my-2 w-full rounded text-sm' placeholder='Email' value={signUpData.email} onChange={(e) => setSignUpData({...signUpData, email: e.target.value})} />
                        <input type="password" placeholder='Password' className='bg-gray-200 text-black border-none py-3 px-4 my-2 w-full rounded text-sm' value={signUpData.password} onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
                        <button onClick={handleSignUpSubmit} className='btn-style rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-11 tracking-wide uppercase transition-transform duration-75 hover:bg-red-600 mt-4'>Sign Up</button>
                    </div>
                </div>
                {/* Sign In Form */}
                <div className="form-container sign-in-container absolute top-0 left-0 w-1/2 h-full">
                    <div className="bg-gray-950 flex items-center justify-center flex-col px-12 h-full text-center">
                        <div className="font-bold text-2xl mb-0 text-white">Sign In</div>

                        <div className="auth-login my-5">
                            <p>Google Auth</p>
                        </div>

                        <span className="text-xs text-white mb-4">or use your account</span>

                        <input type="email" name="email" id="email" placeholder="Email" className='bg-gray-200 text-black border-none py-3 px-4 my-2 w-full rounded text-sm' value={signInData.email} onChange={(e) => setSignInData({...signInData, email: e.target.value})} />
                        <input type="password" name="password" id="password" placeholder="Password" className='bg-gray-200 text-black border-none py-3 px-4 my-2 w-full rounded text-sm' value={signInData.password} onChange={(e) => setSignInData({...signInData, password: e.target.value})} />
                        <Link className="text-gray-100 text-sm no-underline my-4 cursor-pointer hover:underline" onClick={() => alert('Forgot Password clicked!')}>Forgot your password?</Link>
                        <button onClick={handleSignInSubmit} className="btn-style rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-11 tracking-wide uppercase transition-transform duration-75 hover:bg-red-600">Sign In</button>
                    </div>
                </div>

                {/* Overlay */}
                <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-50">
                    <div className="overlay relative -left-full h-full w-full text-white" style={{width: '200%'}}>
                        <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2">
                            <h1 className='font-bold text-2xl mb-0'>Welcome Back!</h1>
                            <p className="text-sm font-light leading-5 tracking-wide my-5">
                                To keep connected with us please login with your info
                            </p>
                            <button onClick={handleSignInClick} className="btn-style rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 tracking-wide uppercase transition-transform duration-75 hover:bg-white hover:text-red-500">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 right-0">
                            <h1 className='font-bold text-2xl mb-0'>Hello, Gym Bro!</h1>
                            <p className="text-sm font-light leading-5 tracking-wide my-5">
                                Enter your personal details and start tracking your gains
                            </p>
                            <button onClick={handleSignUpClick} className="btn-style rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 tracking-wide uppercase transition-transform duration-75 hover:bg-white hover:text-red-500">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login