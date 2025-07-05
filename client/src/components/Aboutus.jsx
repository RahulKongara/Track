import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import img from "../assets/aboutus-img.jpg";

const Aboutus = () => {
  return (
    <div className="flex justify-center items-center mt-[200px]">
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ twice: true, amount: 0.3 }} className="">
            <div className="abt-img bg-gray-500 rounded-3xl w-[400px] h-[400px] mr-[100px]">
                <img src={img} alt="about-us-image" className="w-[400px] h-[400px] object-cover rounded-3xl" />
            </div>
        </motion.div>
        <div className="abt-text ml-[100px] flex flex-col justify-center items-start">
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ twice: true, amount: 0.3 }}
                className="">
                <h1 className="text-3xl font-medium mb-6">About Us</h1>
                <p className="">Knowledge is Power!</p>
                <p className="">How about we level up together. To know more-</p>
                <h1 className="mt-[20px]"><Link to='/about' className="p-2 bg-[#ff5e5e] rounded-lg">Read more!</Link></h1>
            </motion.div>
        </div>

    </div>
  )
}

export default Aboutus