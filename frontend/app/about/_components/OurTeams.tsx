import React from "react";
import { Team } from "./Team";

const OurTeams = () => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container text-center">
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					Meet our team
				</h3>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Similique ea repellendus vel impedit corrupti sapiente ipsum
					reprehenderit, in enim doloribus.
				</p>
				<div className="mt-8 flex items-center justify-start flex-wrap gap-4 md:gap-8">
					<Team />
					<Team />
					<Team />
					<Team />
					<Team />
					<Team />
					<Team />
					<Team />
				</div>
			</div>
		</div>
	);
};

export default OurTeams;
