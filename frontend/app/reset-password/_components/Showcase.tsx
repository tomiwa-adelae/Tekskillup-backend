import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ResetForm from "./ResetForm";

const Showcase = () => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/test-image.jpg)` }}
		>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-between">
				<div className="hidden md:block flex-1 text-white">
					<h1 className="text-7xl">Reset password</h1>
					<p className="text-sm mt-4 mb-6 text-slate-200">
						Please enter the email address you registered with
					</p>
				</div>
				<div className="flex-1 w-full lg:max-w-lg">
					<ResetForm />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
