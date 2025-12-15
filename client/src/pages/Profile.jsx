import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState("");

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



	return (
		<div>
			<div className="info flex justify-center items-center">
				<div className="p-img rounded-full w-30 h-30 bg-gray-300 mr-5">

				</div>
				<div className="p-info-text flex-col">
					<div className='flex w-[210px] justify-between'>
						<h3>{user.name}</h3> <p>Beginner</p>
					</div>
					<div className="flex">
						<p>{user.email} | {user.createdAt}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile