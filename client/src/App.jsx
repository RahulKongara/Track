import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
const Home = lazy(() => import('./pages/Home'));
const Workouts = lazy(() => import('./pages/Workouts'));
const Food = lazy(() => import('./pages/Food'));
const Profile = lazy(() => import('./pages/Profile'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Posts = lazy(() => import('./pages/Posts'))
const Login = lazy(() => import('./pages/Login'))
const Cardio = lazy(() => import('./pages/subpages/Cardio'));
const Strength = lazy(() => import('./pages/subpages/Strength'));
const Calisthenics = lazy(() => import('./pages/subpages/Calisthenics'));
const HomeWorkouts = lazy(() => import('./pages/subpages/HomeWorkouts'));

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='/workouts' element={<Workouts />} />
				<Route path='/food' element={<Food />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/workouts/cardio' element={<Cardio />} />
				<Route path='/workouts/strength' element={<Strength />} />
				<Route path='/workouts/calisthenics' element={<Calisthenics />} />
				<Route path='/workouts/home_workouts' element={<HomeWorkouts />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}

export default App
