import React from "react";
import CompaniesCarousel from "./CompaniesCarousel";

const WhereGraduatesWorks = () => {
	return (
		<div className="container pt-16 ">
			<div className="text-center flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:text-left gap-6">
				<div className="flex-1">
					<h5 className="uppercase text-xs lg:text-sm">
						Life after training
					</h5>
					<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
						Where our graduates work
					</h3>
				</div>
				<div className="flex-1">
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dicta iusto rerum dolore recusandae ducimus iure. Odio
						hic dolor architecto dolorem eum porro nesciunt error,
						soluta pariatur facere nihil nobis possimus.
					</p>
				</div>
			</div>
			<CompaniesCarousel />
		</div>
	);
};

export default WhereGraduatesWorks;
