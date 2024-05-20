import { LayoutDashboard } from "lucide-react";
import React from "react";
import CourseTitle from "./CourseTitle";
import CourseDescription from "./CourseDescription";
import CourseOnlinePrice from "./CourseOnlinePrice";
import CourseOnlineStartDate from "./CourseOnlineStartDate";
import CourseWeekendPrice from "./CourseWeekendPrice";
import CourseWeekendStartDate from "./CourseWeekendStartDate";
import CourseWeekdaysPrice from "./CourseWeekdaysPrice";
import CourseWeekdaysStartDate from "./CourseWeekdaysStartDate";
import CourseImage from "./CourseImage";
import CourseLessons from "./CourseLessons";

const CourseDetails = () => {
	return (
		<div className="p-3 bg-white md:p-8 rounded-lg shadow">
			<h3 className="text-green-400 text-2xl mb-6 md:text-3xl">
				<LayoutDashboard
					size={30}
					className="text-green-400 inline mr-2"
				/>
				Customize your course
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<CourseTitle />
				<CourseDescription />
				<CourseImage />
				<CourseLessons />
				<CourseOnlinePrice />
				<CourseOnlineStartDate />
				<CourseWeekdaysPrice />
				<CourseWeekdaysStartDate />
				<CourseWeekendPrice />
				<CourseWeekendStartDate />
			</div>
		</div>
	);
};

export default CourseDetails;
