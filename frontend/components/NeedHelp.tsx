import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card } from "./ui/card";

const NeedHelp = ({
	helpTitle,
	helpDescription,
	helpButtonName,
	helpButtonLink,
}: {
	helpTitle: string;
	helpDescription: string;
	helpButtonName: string;
	helpButtonLink: string;
}) => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<Card
					className="bg-green-400 text-white bg-no-repeat bg-right bg-auto py-4 md:py-8 px-4 md:px-8 lg:px-12 rounded-xl bg-scroll"
					style={{ backgroundImage: `url(/phone-icon.png)` }}
				>
					<h3 className="mb-5 text-xl lg:text-3xl">{helpTitle}</h3>
					<p className="text-xs lg:text-sm text-gray-100 lg:w-8/12 mb-8">
						{helpDescription}
					</p>
					<Button
						className="transition ease-in-out bg-transparent outline outline-2 outline-white p-6 md:p-8 uppercase font-semibold hover:bg-gray-50 hover:text-green-400"
						asChild
					>
						<Link href={helpButtonLink}>{helpButtonName}</Link>
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default NeedHelp;
