import React from "react";
import User from "./User";

interface UsersProps {
	name: string;
	email: string;
	image: string;
	id: string;
	phoneNumber: string;
}
[];

const Users = () => {
	const users: UsersProps[] = [
		{
			name: "Joh Doe",
			email: "john@gmail.com",
			image: "/test-image.jpg",
			id: "1",
			phoneNumber: "08027836001",
		},
		{
			name: "Joh Doe",
			email: "john@gmail.com",
			image: "/test-image.jpg",
			id: "2",
			phoneNumber: "08027836001",
		},
		{
			name: "Joh Doe",
			email: "john@gmail.com",
			image: "/test-image.jpg",
			id: "3",
			phoneNumber: "08027836001",
		},
		{
			name: "Joh Doe",
			email: "john@gmail.com",
			image: "/test-image.jpg",
			id: "4",
			phoneNumber: "08027836001",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
			{users.map((user) => (
				<User
					key={user.id}
					id={user.id}
					name={user.name}
					image={user.image}
					email={user.email}
					phoneNumber={user.phoneNumber}
				/>
			))}
		</div>
	);
};

export default Users;
