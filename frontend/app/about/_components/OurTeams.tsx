import React from "react";
import { Team } from "./Team";

interface TeamsProps {
	name: string;
	image: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	instagramLink: string;
}
[];

const OurTeams = () => {
	const teams: TeamsProps[] = [
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
	];

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
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					{teams.map((team, index) => (
						<Team
							key={index}
							name={team.name}
							image={team.image}
							position={team.position}
							facebookLink={team.facebookLink}
							twitterLink={team.twitterLink}
							instagramLink={team.instagramLink}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurTeams;
