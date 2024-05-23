import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import React from "react";
import Moment from "react-moment";

const NextEncounter = ({
	title,
	weekendStartDate,
	weekdayStartDate,
}: {
	title: string;
	weekendStartDate: string;
	weekdayStartDate: string;
}) => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<Card
					className="bg-green-400 bg-no-repeat bg-right bg-auto py-8 px-6 md:px-8 lg:px-12 rounded-xl bg-scroll text-white"
					style={{ backgroundImage: `url(/phone-icon.png)` }}
				>
					<h3 className="text-xl md:text-2xl mb-6">
						Next {title} class is:
					</h3>
					<div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
						<div className="space-y-2">
							<h4 className="text-base md:text-lg">
								<Moment format="DD-MMM-YYYY">
									{weekendStartDate}
								</Moment>
							</h4>
							<p className="text-slate-100 text-xs md:text-sm">
								Weekend classes: Saturday & Sunday (10am - 5pm)
							</p>
						</div>
						<Separator className="my-4 lg:hidden" />
						<div className="space-y-2">
							<h4 className="text-base md:text-lg">
								<Moment format="DD-MMM-YYYY">
									{weekdayStartDate}
								</Moment>
							</h4>
							<p className="text-slate-100 text-xs md:text-sm">
								Weekdays classes: Monday - Friday (10am - 5pm)
							</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default NextEncounter;
