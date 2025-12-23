import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EditForm from '@/components/EditForm';
import { FaPen } from 'react-icons/fa';
import { 
	Dialog,
    DialogClose,
	DialogContent,
	DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Profile = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState("");
	// Fetching data from the backend hydrating the frontend with data
	useEffect(() => {
		console.log("Reload triggered");
		const token = localStorage.getItem("token");

		if (!token) {
			navigate("/login");
			return;
		}

		fetch("/api/users/profile", {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			},
		})
			.then(res => res.json())
			.then(data => {
				setUser(data.user);

			})
			.catch(err => {
				console.error(err);
				navigate('/login');
			});
	}, []);

	const [modalOpen, setModalOpen] = useState(false);



	return (
		<div className='flex flex-col justify-center items-center'>
			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogTrigger asChild>
					<button className="btn flex justify-center items-center p-2 m-2 rounded-2xl ml-10 bg-green-400 text-lg hover:border cursor-pointer" onClick={() => setModalOpen(true)}><FaPen className='mr-2' />Edit Details</button>
				</DialogTrigger>
				<DialogContent>
						<EditForm user={user} onSuccess={() => setModalOpen(false)} />
				</DialogContent>
				
			</Dialog>
			<div className="info flex justify-around items-center">
				<div className="p-img rounded-full w-30 h-30 bg-gray-300 mr-5">

				</div>
				<div className="p-info-text">
					<div className='flex w-[210px] justify-between'>
						<h3>{user.name}</h3> <p>{user.level || 'Beginner (default)'}</p>
					</div>
					<div className="flex">
						<p>{user.email} | {user.createdAt}</p>
					</div>
				</div>
			</div>
			<div className="stats">
				<h3 className="text-xl font-bold font-mono">Stats</h3>
				<p>Age: {user.age || 'Not provided yet'} </p>
				<p>Weight: {user.weight || 'Not provided yet'}</p>
				<p>Height: {user.height || 'Not provided yet'}</p>
				<p>Rank: {user.rank}</p>
			</div>
		</div>
	)
}

export default Profile