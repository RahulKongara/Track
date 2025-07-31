import { lazy } from 'react'
import { motion } from 'framer-motion';
const Sidebar = lazy(() => import('../../components/Sidebar'));
import useWorkout from '../../hooks/useWorkout';

const HomeWorkouts = () => {
	return (
		<div className='flex justify-evenly'>
			<motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }}>
				<Sidebar />
			</motion.div>
			<div className="cards grid grid-cols-2 grid-rows-4 gap-6 mt-[100px] px-4">
				{useWorkout('home')}
			</div>
		</div>
	)
}

export default HomeWorkouts