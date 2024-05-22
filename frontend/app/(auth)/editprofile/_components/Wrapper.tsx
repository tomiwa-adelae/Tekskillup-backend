"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound, Replace } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FirstNameBox from "./FirstNameBox";
import LastNameBox from "./LastNameBox";
import EmailBox from "./EmailBox";
import PhoneNumberBox from "./PhoneNumberBox";
import BioBox from "./BioBox";
import { useSelector } from "react-redux";
import Image from "next/image";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	bio: string;
	phoneNumber: string;
}

const Wrapper = () => {
	const [user, setUser] = useState<UserProps>();
	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return;
		}
		setUser(userInfo);
	}, [userInfo]);

	if (!user) return <p>Loading...</p>;

	return (
		<div className="mt-8">
			<div className="flex items-center justify-center md:justify-start gap-4">
				<Image
					src={user?.image!}
					alt={user?.firstName!}
					width={1000}
					height={1000}
					className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
				/>
				<Button
					className="outline outline-1 outline-green-400 hover:bg-green-400 transition ease-in-out hover:text-white text-black bg-transparent uppercase"
					asChild
				>
					<Link href="/changeimage">
						<Replace className="mr-2 h-4 w-4" />
						Change image
					</Link>
				</Button>
			</div>
			<Separator className="my-6" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FirstNameBox firstName={user?.firstName!} />
				<LastNameBox lastName={user?.lastName!} />
				<EmailBox email={user?.email!} />
				<PhoneNumberBox phoneNumber={user?.phoneNumber!} />
				<BioBox bio={user?.bio!} />
			</div>
		</div>
	);
};

export default Wrapper;
