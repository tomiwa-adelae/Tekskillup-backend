import React from "react";
import { Showcase } from "./_components/Showcase";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";

const page = () => {
	return (
		<div>
			<Showcase />
			<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16 container flex flex-col gap-6 md:flex-row items-center justify-between md:gap-8">
				<div className="flex-1 w-full">
					<ContactForm />
				</div>
				<div className="flex-1 w-full">
					<ContactInfo />
				</div>
			</div>
		</div>
	);
};

export default page;
