import { Separator } from "@/components/ui/separator";
import React from "react";

const NextEncounter = ({
	title,
	weekendStartDate,
	weekdayStartDate,
}: {
	title: string;
	weekendStartDate: Date;
	weekdayStartDate: Date;
}) => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<div
					className="bg-green-400 bg-no-repeat bg-right bg-auto py-4 md:py-8 px-4 md:px-8 lg:px-12 rounded-xl bg-scroll text-white"
					style={{ backgroundImage: `url(/phone-icon.png)` }}
				>
					<h3 className="text-2xl md:text-3xl mb-6">
						Next {title} class is:
					</h3>
					<div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
						<div className="space-y-2">
							<h4 className="text-lg md:text-xl">May 13, 2024</h4>
							<p className="text-slate-100 text-xs md:text-sm lg:text-base">
								Weekend classes: Monday - Friday (10am - 5pm)
							</p>
						</div>
						<Separator className="my-4 lg:hidden" />
						<div className="space-y-2">
							<h4 className="text-lg md:text-xl">May 13, 2024</h4>
							<p className="text-slate-100 text-xs md:text-sm lg:text-base">
								Weekend classes: Monday - Friday (10am - 5pm)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NextEncounter;
