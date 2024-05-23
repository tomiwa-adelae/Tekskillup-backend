"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { StepLoader } from "@/components/StepLoader";
import WhyTekskillup from "./WhyTekskillup";
import Showcase from "./Showcase";
import WhereGraduatesWorks from "@/components/WhereGraduatesWorks";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import StartToday from "./StartToday";
import ProcessShowcase from "./ProcessShowcase";
import OurFacilities from "./OurFacilities";
import NewlyAddedCourse from "./NewlyAddedCourse";
import NeedHelp from "@/components/NeedHelp";
import OurOffers from "./OurOffers";

interface Courses {
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
[];

type CoursesProps = Courses[];
const Wrapper = () => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [courses, setCourses] = useState<CoursesProps>([]);

	useEffect(() => {
		const fetchPublishedCourses = async () => {
			try {
				setLoading(true);
				const res = await axios(`${BASE_URL}${COURSES_URL}/published`);
				setLoading(false);
				setCourses(res.data);
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
	}, [toast]);

	if (!courses || loading) return <StepLoader />;

	return (
		<>
			<Showcase />
			<WhyTekskillup />
			<OurOffers courses={courses} />
			<WhereGraduatesWorks />
			<StudentTestimonials />
			<StartToday />
			<ProcessShowcase />
			<OurFacilities />
			<NewlyAddedCourse course={courses[0]} />
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
		</>
	);
};

export default Wrapper;
