import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { ChevronDownIcon } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger
} from "@/components/ui/dialog";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

	const handleEdit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formJson = Object.fromEntries(formData.entries());
		
		const profileData = {
			name: formJson.name,
			weight: formJson.weight,
			height: formJson.height,
			dob: date,
			level: formJson.level
		};
		
		console.log("Form Data:", profileData);
		
		const token = localStorage.getItem("token");

		if (!token) {
			navigate("/login");
			return;
		}

		// TODO: Send to API
		// await fetch('/api/users/update', {
		//   method: 'PUT',
		//   headers: {
		//     'Authorization': `Bearer ${token}`,
		//     'Content-Type': 'application/json'
		//   },
		//   body: JSON.stringify(profileData)
		// });

		setModalOpen(false);
	}

	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(Date | undefined);
	return (
		<div className='flex flex-col justify-center items-center'>
			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogTrigger asChild>
					<button className="btn flex justify-center items-center p-2 m-2 rounded-2xl ml-10 bg-green-400 text-lg hover:border cursor-pointer" onClick={() => setModalOpen(true)}><FaPen className='mr-2' />Edit Details</button>
				</DialogTrigger>
				<form action="" onSubmit={handleEdit} id="edit-form">
					<DialogContent className="sm:max-w-[425px] bg-gray-800">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you&apos;re
								done.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4">
							<div className="grid gap-3">
								<label htmlFor="name-1">Name</label>
								<Input id="name-1" name="name" defaultValue={user.name} />
							</div>
							<div className="grid gap-3">
								<label htmlFor="dob">Date of Birth (DOB)</label>
								<Popover open={open} onOpenChange={setOpen}>
									<PopoverTrigger asChild>
										<Button variant='outline' id="dob" className={`w-48 justify-between font-normal`}>
											{date ? date.toLocaleString() : "Select Date"}
											<ChevronDownIcon />
										</Button>
									</PopoverTrigger>
									<PopoverContent className={`w-auto overflow-hidden bg-gray-900 p-0`} align='start'>
										<Calendar
											mode="single"
											className={`bg-gray-800 text-white`}
											selected={date}
											captionLayout='dropdown'
											onSelect={(date) => {
												setDate(date)
												setOpen(false)
											}}
										/>
									</PopoverContent>
								</Popover>
							</div>
							<div className="grid gap-3">
								<label htmlFor="weight">Weight [kg]</label>
								<Input id="weight" name="weight" type="number" defaultValue={0} />
							</div>
							<div className="grid gap-3">
								<label htmlFor="height">Height [cm]</label>
								<Input id="height" name="height" type="number" defaultValue={0} />
							</div>
							<div className="grid gap-3">
								<Select>
									<SelectTrigger className={`w-[180px]`}>
										<SelectValue placeholder="Seelct Level" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Level</SelectLabel>
											<SelectItem value="Beginner">Beginner (0-1 yrs)</SelectItem>
											<SelectItem value="Intermediate">Intermediate (2-3yrs)</SelectItem>
											<SelectItem value="Expert">Expert (4+ yrs)</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button className='bg-green-600' type="submit" form="edit-form">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</form>
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