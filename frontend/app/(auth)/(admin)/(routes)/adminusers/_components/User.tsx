import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Folder, Info, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	phoneNumber: string;
}

const User = ({
	id,
	firstName,
	lastName,
	email,
	image,
	phoneNumber,
}: UserProps) => {
	return (
		<div className="transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100">
			<div className="flex items-center gap-4 justify-start w-full md:text-center md:flex-col">
				<Image
					src={image}
					alt="Test"
					height={1000}
					width={1000}
					className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full md:mx-auto"
				/>
				<div className="space-y-2">
					<h4 className="text-lg md:text 2xl text-green-400">
						{firstName} {lastName}
					</h4>
					<p className="text-sm">{email}</p>
					<p className="text-sm">{phoneNumber}</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-between gap-4">
				<Button
					className="transition ease-in-out uppercase bg-green-400 hover:bg-green-500 w-full"
					asChild
				>
					<Link href="/send-email">
						<Mail className="mr-2 h-4 w-4" />
						Email
					</Link>
				</Button>
				<Button
					className="transition ease-in-out uppercase outline outline-green-100 bg-transparent text-green-400 hover:bg-green-100 w-full"
					asChild
				>
					<Link href={`/adminusers/${id}`}>
						<Folder className="mr-2 h-4 w-4" />
						Visit profile
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default User;
