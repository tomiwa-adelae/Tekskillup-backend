import React from "react";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import Showcase from "./_components/Showcase";
import NextEncounter from "./_components/NextEncounter";
import Lessons from "./_components/Lessons";
import { Separator } from "@/components/ui/separator";
import WhereGraduatesWorks from "@/components/WhereGraduatesWorks";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import NeedHelp from "@/components/NeedHelp";

async function fetchCourseDetails(id: string) {
	const res = await axios(`${BASE_URL}${COURSES_URL}/${id}`);
	return await res.data;
}

interface CourseDetailsProps {
	_id: string;
	title: string;
	description: string;
	lessons: {}[];
	image: string;
	weekdayStartDate: Date;
	weekendStartDate: Date;
}

const page = async ({ params }: { params: { id: string } }) => {
	const courseDetails: CourseDetailsProps = await fetchCourseDetails(
		params.id
	);

	return (
		<div>
			<Showcase
				title={courseDetails.title}
				description={courseDetails.description}
			/>
			<NextEncounter
				title={courseDetails.title}
				weekendStartDate={courseDetails.weekendStartDate}
				weekdayStartDate={courseDetails.weekdayStartDate}
			/>
			<Lessons />
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

export default page;
