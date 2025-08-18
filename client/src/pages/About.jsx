import img from '../assets/aboutImg.jpg'
import { motion } from 'framer-motion'

const About = () => {
	return (

		<div className='mt-[150px] flex justify-around items-center'>
			<motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }}>
				<div className="about-text w-[400px]">
					<h3 className='text-6xl'>Hi!</h3>
					<h4 className='text-3xl'>I am Rahul,</h4>
					<p>a <b>CS student</b> studying in a tier-4 college in India. This is what I learnt while studying in my college,</p>
					<p className='text-2xl italic'>No One is Coming to Save You.</p>
					<p>So, I took control of my life, started to workout, learn new skills, start doing stuff that are uncomfortable. <p className='text-2xl'>It was not easy!</p> but they had to be done. They are what transform 'you' into a better "YOU".</p>
				</div>
			</motion.div>
			<motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }}>
				<div className="about-img w-[400px] h-[400px] border-1 rounded-full">
					<img src={img} alt="about-image" className='w-[400px] h-[400px] rounded-full object-cover' />
				</div>
			</motion.div>
		</div>
	)
}

export default About