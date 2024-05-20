import React from "react";
import Course from "./Course";

interface CoursesProps {
	title: string;
	price: string;
	image: string;
	id: string;
}
[];

const Courses = () => {
	const courses: CoursesProps[] = [
		{
			title: "Data science",
			price: "40,000",
			image: "/test-image.jpg",
			id: "1",
		},
		{
			title: "Data science",
			price: "40,000",
			image: "/test-image.jpg",
			id: "2",
		},
		{
			title: "Data science",
			price: "40,000",
			image: "/test-image.jpg",
			id: "3",
		},
		{
			title: "Data science",
			price: "40,000",
			image: "/test-image.jpg",
			id: "4",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
			{courses.map((course) => (
				<Course
					key={course.id}
					id={course.id}
					title={course.title}
					image={course.image}
					price={course.price}
				/>
			))}
		</div>
	);
};

export default Courses;
