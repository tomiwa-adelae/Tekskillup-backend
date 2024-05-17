import React from "react";
import { Showcase } from "./_components/Showcase";
import { CoursesTabs } from "./_components/CoursesTabs";
import Footer from "@/components/Footer";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<Showcase />
			<CoursesTabs />
		</div>
	);
};

export default page;
