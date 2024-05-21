import React from "react";

import CourseContainer from "./_components/CourseContainer";

interface CourseProps {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
}

const page = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<CourseContainer id={params.id} />
		</div>
	);
};

export default page;
