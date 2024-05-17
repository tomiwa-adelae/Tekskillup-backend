import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SearchBox from "./_components/SearchBox";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<Button
					className="transition ease-in-out hover:bg-green-100"
					asChild
					variant="ghost"
				>
					<Link href="/admindashboard">Back</Link>
				</Button>
				<SearchBox />
			</div>
		</div>
	);
};

export default page;
