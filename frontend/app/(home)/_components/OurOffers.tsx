"use client";
import React from "react";

import CoursesCarousel from "./CoursesCarousel";

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
				<h3 className="text-green-400 font-semibold my-5 text-2xl lg:text-3xl">
					Certified Tech Training Courses
				</h3>
				<p className="text-sm mb-8 lg:w-5/6 mx-auto">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Aperiam minima eligendi consectetur libero molestias
					corporis explicabo magni adipisci placeat at.
				</p>

				<CoursesCarousel courses={courses} />
			</div>
		</div>
	);
};

export default OurOffers;
