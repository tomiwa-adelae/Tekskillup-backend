"use client";
import { CircleUserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";

import { useSelector } from "react-redux";
import Image from "next/image";
import Moment from "react-moment";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	phoneNumber: string;
}

const Head = () => {
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
		<div>
			<h5 className="text-base font-medium text-green-400">
				<Moment format="DD-MMM-YYYY">{Date.now()}</Moment>
			</h5>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4">
					<div className="flex flex-col md:flex-row items-center justify-start gap-4">
						<Image
							src={
								userInfo?.image ||
								"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
							}
							alt={userInfo?.firstName || "USER"}
							height={1000}
							width={1000}
							className="rounded-full w-40  object-cover"
						/>
						<div className="space-y-2 text-center md:text-left">
							<h1 className="text-green-400 text-xl md:text-xl lg:text-3xl font-semibold">
								{userInfo?.firstName} {userInfo?.lastName}
							</h1>
							<h5 className="text-sm">{userInfo?.email}</h5>
						</div>
					</div>

					<div className=" mt-4 md:mt-0">
						<DropDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Head;
