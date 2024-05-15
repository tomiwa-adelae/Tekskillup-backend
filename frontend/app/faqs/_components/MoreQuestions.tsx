import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MoreQuestions = () => {
	return (
		<div className="bg-green-400 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8 px-8">
			<div>
				<h3 className="uppercase text-lg md:text-xl lg:text-2xl text-white">
					Still have some questions?
				</h3>
				<p className="text-xs md:text-sm mt-4 text-slate-200">
					Can&apos;t find the answers you are looking for? Please
					reach out to our friendly team
				</p>
			</div>
			<Button
				className="bg-transparent outline outline-2 outline-white py-8 px-8 uppercase font-semibold"
				asChild
			>
				<Link href="/contact">Get in touch</Link>
			</Button>
		</div>
	);
};

export default MoreQuestions;
