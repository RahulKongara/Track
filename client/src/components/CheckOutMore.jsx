import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import wimg from '../assets/workouts-preview-img.jpg'
import fimg from '../assets/food-preview-img.jpg'

const CheckOutMore = () => {
  return (
    <div className="mb-[50px]">
        <h1 className="text-3xl font-medium mb-4 text-center">Check out more Features</h1>
        <div className="flex justify-center">
            <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ twice: true, amount: 0.3 }}>
                <Link to='/workouts'>
                    <div className="rounded-3xl w-[400px] h-[220px] bg-gray-500 mr-4 text-center relative inline-block">
                        <div className="text-overlay absolute top-[50%] left-[50%] -translate-1/2 text-center">
                            <p className="text-2xl text-white font-bold">Workouts</p>
                        </div>
                        <img src={wimg} alt="workout-image" className="object-cover rounded-3xl w-[400px] h-[220px]" />
                    </div>
                </Link>
            </motion.div>
            
            <motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ twice: true, amount: 0.3 }}>
                <Link to='/food'>
                    <div className="rounded-3xl w-[400px] h-[220px] bg-gray-500 ml-4 text-center relative inline-block">
                        <div className="text-overlay absolute top-[50%] left-[50%] -translate-1/2 text-center">
                            <p className="text-2xl text-black font-bold">Foods</p>
                        </div>
                        <img src={fimg} alt="food-image" className="object-cover rounded-3xl w-[400px] h-[220px] block" />
                    </div>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default CheckOutMore