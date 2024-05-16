import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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
				<div
					className="bg-green-400 bg-no-repeat bg-right bg-auto py-4 md:py-8 px-4 md:px-8 lg:px-12 rounded-xl bg-fixed"
					style={{ backgroundImage: `url(/phone-icon.png)` }}
				>
					<h3 className="text-white my-5 text-xl md:text-2xl lg:text-3xl">
						{helpTitle}
					</h3>
					<p className="text-sm text-gray-100 lg:w-8/12 mb-8">
						{helpDescription}
					</p>
					<Button
						className="transition ease-in-out bg-transparent outline outline-2 outline-white p-6 md:p-8 uppercase font-semibold hover:bg-gray-50 hover:text-green-400"
						asChild
					>
						<Link href={helpButtonLink}>{helpButtonName}</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NeedHelp;
