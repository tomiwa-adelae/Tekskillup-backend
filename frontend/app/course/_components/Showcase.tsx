import React from "react";
import RegisterCourseForm from "./RegisterCourseForm";

const Showcase = () => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/test-image.jpg)` }}
		>
			<div className="container flex flex-col lg:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="flex-1 text-white mt-10">
					<h1 className="text-3xl text-center lg:text-6xl lg:text-left lg:leading-tight">
						User interface and UI/UX design
					</h1>
					<p className="text-xs md:text-sm text-center lg:text-left mt-4 mb-6 text-slate-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sint voluptas, fuga assumenda optio excepturi doloribus
						molestiae, recusandae illo atque, cumque magnam delectus
						suscipit veniam inventore corrupti perspiciatis nisi
						odio repellendus repudiandae? Dolores eius laudantium
						pariatur consequatur alias vel deleniti magni eos, amet
						sed laborum repudiandae exercitationem sint a possimus
						nobis? Mollitia nisi provident iste dolorem. Eius
						aliquid ipsum reiciendis at.
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
