import NeedHelp from "@/components/NeedHelp";
import React from "react";
import Showcase from "./_components/Showcase";
import NextEncounter from "./_components/NextEncounter";
import Lessons from "./_components/Lessons";
import WhereGraduatesWorks from "@/components/WhereGraduatesWorks";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import { Separator } from "@/components/ui/separator";

const page = () => {
	return (
		<div>
			<Showcase />
			<NextEncounter />
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
