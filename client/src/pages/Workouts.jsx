import { Link } from 'react-router-dom';
import img from '../assets/workouts-preview-img.jpg';

const Workouts = () => {
	return (
		<div className="mt-[100px] workouts flex flex-col justify-center items-center">
			<div className="types grid grid-cols-2 grid-rows-3 gap-3 w-[1000px] justify-center">
				<div className="cardio col-span-2 h-[300px] text-center relative rounded-lg">
					<Link to='/workouts/cardio'>
						<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
							<h1>Cardio</h1>
						</div>
						<img src={img} alt="" className="object-cover w-full h-full rounded-lg" />
					</Link>
				</div>
				<div className="strength row-start-2 h-[300px] text-center relative">
					<Link to='/workouts/strength'>
						<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
							<h1>Strength Training</h1>
						</div>
						<img src={img} alt="" className="object-cover w-full h-full rounded-lg" />
					</Link>
				</div>
				<div className="calisthenics row-start-2 h-[300px] text-center relative">	
					<Link to='/workouts/calisthenics'>
						<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
							<h1>Calisthenics</h1>
						</div>
						<img src={img} alt="" className="object-cover w-full h-full rounded-lg" />
					</Link>
				</div>
				<div className="home-workouts col-span-2 h-[300px] text-center relative">
					<Link to='/workouts/home_workouts'>
						<div className="text-overlay absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
							<h1>Home Workouts</h1>
						</div>
						<img src={img} alt="" className="object-cover w-full h-full rounded-lg" />
					</Link>
				</div>
			</div>
		</div>
 	)
}

export default Workouts