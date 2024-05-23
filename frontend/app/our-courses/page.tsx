import React from "react";
import { Showcase } from "./_components/Showcase";
import { CoursesTabs } from "./_components/CoursesTabs";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<div>
					<Showcase />
					<CoursesTabs />
				</div>
			</div>
		</div>
	);
};

export default page;
