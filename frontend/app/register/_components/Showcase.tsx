import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

const Showcase = () => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/test-image.jpg)` }}
		>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="hidden lg:block flex-none text-white mt-10">
					<h1 className="text-7xl">Welcome back</h1>
					<p className="text-sm mt-4 mb-6 text-slate-200">
						Already have an account? Sign in now
					</p>
					<Button
						className="bg-green-400 font-semibold py-8 px-8  hover:bg-inherit uppercase"
						asChild
					>
						<Link href="/login">Login</Link>
					</Button>
				</div>
				<div className="flex-auto w-full lg:max-w-screen-sm">
					<RegisterForm />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
