import { Link } from "react-router-dom"
import image from '../assets/hero-img.jpg';
const Hero = () => {
  return (
    <div className="Hero-section flex justify-around mt-[100px]">
        <div className="hero-text w-[500px] flex flex-col items-start justify-center">
            <h1 className="text-6xl font-bold">Numbers meet Hypertrophy</h1>    
            <p className="text-xl font-light mt-4 mb-6">Everything makes sense when you know the numbers. So why not <b className="font-mono">track</b> them?</p>
            <button><Link to='/login' className="p-2 bg-[#ff5e5e] rounded-lg">Start Tracking!</Link></button>
        </div>  
        <div className="hero-img bg-gray-500 w-[400px] h-[400px] rounded-full flex justify-center items center"> 
            <img src={image} alt="Hero-image" className="object-cover rounded-full"/>
        </div>      
    </div>
  )
}

export default Hero