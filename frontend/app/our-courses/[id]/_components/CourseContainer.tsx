"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import Showcase from "./Showcase";
import NextEncounter from "./NextEncounter";
import Lessons from "./Lessons";
import { Separator } from "@/components/ui/separator";
import WhereGraduatesWorks from "@/components/WhereGraduatesWorks";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import NeedHelp from "@/components/NeedHelp";
import { useToast } from "@/components/ui/use-toast";
import { StepLoader } from "@/components/StepLoader";

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

const CourseContainer = ({ id }: { id: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [course, setCourse] = useState<CourseProps>();

	useEffect(() => {
		const fetchPublishedCourses = async () => {
			try {
				setLoading(true);
				const res = await axios(`${BASE_URL}${COURSES_URL}/${id}`);
				setLoading(false);
				setCourse(res.data);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			}
		};
		fetchPublishedCourses();
	}, [toast, id]);

	if (!course || loading) return <StepLoader />;

	return (
		<div>
			<Showcase
				id={course._id}
				title={course.title}
				description={course.description}
			/>
			<NextEncounter
				title={course.title}
				weekendStartDate={course.weekendStartDate}
				weekdayStartDate={course.weekdayStartDate}
			/>
			<Lessons lessons={course.lessons} />
			<div className="container">
				<Separator className="bg-green-200" />
			</div>
			<WhereGraduatesWorks />
			<StudentTestimonials />
			<NeedHelp
				helpTitle="Need help choosing a course? Talk to an expert"
				helpDescription="Lorem ipsum dolor sit amet consectetur, adipisicing
elit. Quas iste voluptates modi eos, amet iusto ea ad
doloribus, laboriosam quidem odio consequuntur aliquam
voluptatum dignissimos odit. Ut excepturi nostrum,
praesentium obcaecati, nihil a illum consequatur rem
nulla hic culpa aspernatur."
				helpButtonName="Get in touch"
				helpButtonLink="/contact"
			/>
		</div>
	);
};

export default CourseContainer;
