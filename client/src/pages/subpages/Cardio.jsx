import { lazy } from 'react'
import { motion } from 'framer-motion';
const Duration = lazy(() => import('../../components/Duration'));
const Difficulty = lazy(() => import('../../components/Difficulty'));
const Card = lazy(() => import('../../components/Card'));

const Cardio = () => {
	return (
		<div className='flex justify-evenly'>
			<motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.1 }}>
				<div className="sidebar max-w-xs bg-gray-900 p-4 ml-4 mt-4 rounded-lg">
					<Difficulty />
					<div className="m-grp rounded-xl border-1 border-gray-200 text-center mt-5">
						<h3 className='font-bold mt-5'>Muscle Group(cardio trains heart)</h3>
						<div className="check-boxes flex items-center justify-center mt-2.5 mb-5">
							<input type="checkbox" name="Heart" id="heart" disabled checked/><p className='ml-3'>Heart</p>
						</div>
					</div>
					<div className="equipment rounded-xl border-1 border-gray-200 text-center mt-5">
						<h3 className='font-bold mt-5'>Equipment</h3>
						<div className="radio-boxes flex flex-col justify-self-center text-right mt-2.5 mb-5">
							{/* <input type="radio" name="eq" id="clear" /><p className="ml-3">Clear</p> */}
							<div className="flex">
								<input type="radio" name="eq" id="elliptical" /><p className='ml-3'>Elliptical Trainer</p>
							</div>
							<div className="flex">
								<input type="radio" name="eq" id="st-bike" /><p className='ml-3'>Stationary Bike</p>	
							</div>
							<div className="flex">
								<input type="radio" name="eq" id="treadmill" /><p className='ml-3'>Treadmill</p>
							</div>
							<div className="flex">
								<input type="radio" name="eq" id="stair-master" /><p className='ml-3'>Stair Master</p>
							</div>
							<div className="flex">
								<input type="radio" name="eq" id="st-rowing" /><p className='ml-3'>Stationary Rowing Machine</p>
							</div>
						</div>
					</div>
					<Duration />
				</div>
			</motion.div>
			<div className="cards grid grid-cols-2 grid-rows-4 gap-6 mt-[100px] px-4">
				<Card name="Elliptical Trainer" />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default Cardio