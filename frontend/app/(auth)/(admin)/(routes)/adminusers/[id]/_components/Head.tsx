import { CircleUserRound } from "lucide-react";
import React from "react";
import DropDown from "./DropDown";
import Image from "next/image";

const Head = ({
	_id,
	firstName,
	lastName,
	image,
	email,
}: {
	_id: string;
	image: string;
	firstName: string;
	lastName: string;
	email: string;
}) => {
	return (
		<div>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4">
					<div className="flex flex-col md:flex-row items-center justify-start gap-4">
						<Image
							src={
								image ||
								"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
							}
							alt={firstName || "USER"}
							width={1000}
							height={1000}
							className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full md:mx-auto"
						/>
						<div className="space-y-2 text-center md:text-left">
							<h1 className="text-green-400 text-2xl lg:text-3xl font-semibold">
								{firstName} {lastName}
							</h1>
							<h5 className="text-sm">{email}</h5>
						</div>
					</div>

					<div className=" mt-4 md:mt-0">
						<DropDown id={_id} email={email} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Head;
