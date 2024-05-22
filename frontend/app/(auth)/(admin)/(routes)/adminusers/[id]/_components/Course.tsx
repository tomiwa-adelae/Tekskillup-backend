import Image from "next/image";
import React from "react";

const Course = () => {
	return (
		<div className="bg-gray-50 py-6 px-6 space-y-4 rounded-xl shadow-lg transition-all ease-in-out hover:bg-gray-100">
			<Image
				src={"/test-image.jpg"}
				alt="Test"
				height={1000}
				width={1000}
				className="w-full h-48 aspect-video object-cover rounded-lg mb-4"
			/>
			<h4 className="text-lg md:text-xl text-green-400">Data science</h4>
			<h5 className="text-sm">Registered date: May 11, 2024</h5>
		</div>
	);
};

export default Course;
