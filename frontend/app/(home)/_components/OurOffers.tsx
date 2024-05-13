import Image from "next/image";
import React from "react";

const OurOffers = () => {
	const courses = [
		{
			image: "/pace-img.png",
			title: "Go at your pace",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
		{
			image: "/pace-img.png",
			title: "Go at your pace",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
		{
			image: "/pace-img.png",
			title: "Go at your pace",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
	];
	return (
		<div className="container bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="text-center">
				<h5 className="uppercase text-xs lg:text-sm">
					What do we offer?
				</h5>
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					Certified Tech Training Courses
				</h3>
				<p className="text-sm mb-8 lg:w-5/6 mx-auto">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Aperiam minima eligendi consectetur libero molestias
					corporis explicabo magni adipisci placeat at.
				</p>

				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
					{courses.map((course, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center bg-gray-100 py-8 px-4 rounded-md"
						>
							<Image
								src={course.image}
								alt={course.title}
								height={1000}
								width={1000}
								className="w-20"
							/>
							<div>
								<h4 className="text-green-400 mt-3 text-lg font-medium">
									{course.title}
								</h4>
								<p className="text-xs mt-4">
									{course.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurOffers;
