import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import cardio from '../assets/Cardio.png';
import homeW from '../assets/home-workout.png';
import st from '../assets/st.png';
import c from '../assets/c.jpg';

const Workouts = () => {
	return (
		<div className="mt-[100px] workouts flex flex-col justify-center items-center">
			<div className="types grid grid-cols-2 grid-rows-3 gap-3 w-[1000px] justify-center">
				<motion.div initial={{ y: -200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ twice: true, amount: 0.3 }} className='col-span-2 w-[1000px] h-[300px]'>
					<div className="cardio col-span-2 w-[1000px] h-[300px] text-center relative rounded-lg">
						<Link to='/workouts/cardio'>
							<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<h1 className='text-black font-bold'>Cardio</h1>
							</div>
							<img src={cardio} alt="" className="object-cover w-full h-full rounded-lg" />
						</Link>
					</div>
				</motion.div>
				<motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ twice: true, amount: 0.3 }}>
					<div className="strength row-start-2 w-[494px] h-[300px] text-center relative">
						<Link to='/workouts/strength'>
							<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<h1 className='text-white font-bold'>Strength Training</h1>
							</div>
							<img src={st} alt="" className="object-cover w-full h-full rounded-lg" />
						</Link>
					</div>
				</motion.div>
				<motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ twice: true, amount: 0.3 }}>
					<div className="calisthenics row-start-2 w-[494px] h-[300px] text-center relative">	
						<Link to='/workouts/calisthenics'>
							<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<h1 className='text-black font-bold'>Calisthenics</h1>
							</div>
							<img src={c} alt="" className="object-cover w-full h-full rounded-lg" />
						</Link>
					</div>
				</motion.div>
				<motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ twice: true, amount: 0.3 }}>
					<div className="home-workouts col-span-2 w-[1000px] h-[300px] text-center relative">
						<Link to='/workouts/home_workouts'>
							<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<h1 className='text-black font-bold'>Home Workouts</h1>
							</div>
							<img src={homeW} alt="" className="object-cover w-full h-full rounded-lg" />
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
 	)
}

export default Workouts