import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Courses from "./_components/Courses";
import { FolderPlus } from "lucide-react";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					All courses
				</h1>
				<div className="flex items-center justify-between">
					<Button
						className="transition ease-in-out hover:font-semibold"
						asChild
						variant="ghost"
					>
						<Link href="/admindashboard">Back</Link>
					</Button>
					<Button
						className="uppercase mt-4 md:mt-0 w-full md:w-auto bg-green-400"
						asChild
					>
						<Link href="/admincreatecourse">
							<FolderPlus className="mr-2 h-4 w-4" />
							Create Course
						</Link>
					</Button>
				</div>

				<Courses />
			</div>
		</div>
	);
};

export default page;
