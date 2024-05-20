import React from "react";
import RegisterCourseForm from "./RegisterCourseForm";
// import RegisterCourseForm from "./RegisterCourseForm";

const Showcase = ({
	title,
	description,
}: {
	title: string;
	description: String;
}) => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/test-image.jpg)` }}
		>
			<div className="container flex flex-col lg:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="flex-1 text-white mt-10">
					<h1 className="text-3xl text-center lg:text-6xl lg:text-left lg:leading-tight">
						{title}
					</h1>
					<p className="text-xs md:text-sm text-center lg:text-left mt-4 mb-6 text-slate-200">
						{description}
					</p>
				</div>
				<div className="flex-auto w-full lg:max-w-screen-sm">
					<RegisterCourseForm />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
