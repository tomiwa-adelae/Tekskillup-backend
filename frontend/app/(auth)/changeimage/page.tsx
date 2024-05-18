import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Wrapper from "./_components/Wrapper";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<Button
					className="transition ease-in-out hover:font-semibold"
					asChild
					variant="ghost"
				>
					<Link href="/editprofile">Back</Link>
				</Button>
				<Wrapper />
			</div>
		</div>
	);
};

export default page;
