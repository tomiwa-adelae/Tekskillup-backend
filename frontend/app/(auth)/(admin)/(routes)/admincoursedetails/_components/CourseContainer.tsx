import React from "react";
import CourseHeader from "./CourseHeader";
import { Separator } from "@/components/ui/separator";
import CourseDetails from "./CourseDetails";

const CourseContainer = () => {
	return (
		<div>
			<CourseHeader />
			<Separator className="my-8" />
			<CourseDetails />
		</div>
	);
};

export default CourseContainer;
