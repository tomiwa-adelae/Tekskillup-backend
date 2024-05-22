import { CircleUserRound } from "lucide-react";
import React from "react";
import DropDown from "./DropDown";

const Head = ({
	_id,
	firstName,
	lastName,
	email,
}: {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
}) => {
	return (
		<div>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4">
					<div className="flex flex-col md:flex-row items-center justify-start gap-4">
						<CircleUserRound
							size={120}
							strokeWidth={0.75}
							className="inline text-green-400 w-30 h-30"
						/>
						<div className="space-y-2 text-center md:text-left">
							<h1 className="text-green-400 text-2xl lg:text-3xl font-semibold">
								{firstName} {lastName}
							</h1>
							<h5 className="text-sm">{email}</h5>
						</div>
					</div>

					<div className=" mt-4 md:mt-0">
						<DropDown id={_id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Head;
