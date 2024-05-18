import { BookOpenCheck } from "lucide-react";
import React from "react";
import Course from "./Course";

const RegisteredCourses = () => {
	return (
		<div className="">
			<h3 className="text-green-400 text-2xl md:text-3xl">
				<BookOpenCheck
					size={30}
					strokeWidth={0.75}
					className="text-green-400 inline mr-2"
				/>
				Registered courses (3)
			</h3>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
			</div>
		</div>
	);
};

export default RegisteredCourses;
