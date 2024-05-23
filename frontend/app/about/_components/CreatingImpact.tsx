import Image from "next/image";
import React from "react";

interface ImpactsProps {
	icon: string;
	title: string;
	number: number | string;
}
[];

const CreatingImpact = () => {
	const impacts: ImpactsProps[] = [
		{
			icon: "/pace-img.png",
			title: "Courses",

			number: "7+",
		},
		{
			icon: "/pace-img.png",
			title: "Courses",
			number: 20,
		},
		{
			icon: "/pace-img.png",
			title: "Courses",
			number: 250,
		},
	];

	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<div className="text-center">
					<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
						Creating impact around the world
					</h3>
					<p className="text-xs md:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Similique ea repellendus vel impedit corrupti sapiente
						ipsum reprehenderit, in enim doloribus.
					</p>
					<div className="mt-12 grid grid-cols-3 gap-4 lg:gap-8">
						{impacts.map((impact, index: number) => (
							<div
								key={index}
								className="flex flex-col items-center justify-center gap-4 text-center"
							>
								<Image
									src={impact.icon}
									alt={impact.title}
									height={1000}
									width={1000}
									className="w-16 md:w-24"
								/>
								<h4 className="text-green-400 text-2xl md:text-4xl lg:text-5xl font-semibold">
									{impact.number}
								</h4>
								<p className="text-xs md:text-sm">
									{impact.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatingImpact;
