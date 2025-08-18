import React from 'react'

const Profile = () => {
	return (
		<div>
			<div className="info flex justify-center items-center">
				<div className="p-img rounded-full w-30 h-30 bg-gray-300 mr-5">

				</div>
				<div className="p-info-text flex-col">
					<div className='flex w-[210px] justify-between'>
						<h3>Rahul Kongara</h3> <p>Beginner</p>
					</div>
					<div className="flex">
						<p>rahul.kongara13@gmail.com | 8309921615 | Joined Aug 11, 2025</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile