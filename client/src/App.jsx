import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
// import Home from './pages/Home'
const Home = lazy(() => import('./pages/Home'));
const Workouts = lazy(() => import('./pages/Workouts'));
const Food = lazy(() => import('./pages/Food'));
const Profile = lazy(() => import('./pages/Profile'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Posts = lazy(() => import('./pages/Posts'))
const Login = lazy(() => import('./pages/Login'))

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
			</Route>
		)
	)
	return <RouterProvider router={router} />
}

export default App
