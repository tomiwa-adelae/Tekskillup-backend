import type { Metadata } from "next";

import React from "react";
import Head from "./_components/Head";
import { Separator } from "@/components/ui/separator";
import DashboardBoxes from "./_components/DashboardBoxes";

export const metadata: Metadata = {
	title: "Dashboard | Tekskillup",
	description:
		"Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<Head />
				<Separator />
				<DashboardBoxes />
			</div>
		</div>
	);
};

export default page;
