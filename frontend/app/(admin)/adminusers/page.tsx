import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SearchBox from "./_components/SearchBox";
import Users from "./_components/Users";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					All users
				</h1>
				<Button
					className="transition ease-in-out hover:font-semibold"
					asChild
					variant="ghost"
				>
					<Link href="/admindashboard">Back</Link>
				</Button>

				<SearchBox />
				<Users />
			</div>
		</div>
	);
};

export default page;
