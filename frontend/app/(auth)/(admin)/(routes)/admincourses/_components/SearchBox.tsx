import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchBox = () => {
	return (
		<div className="my-6 flex flex-col md:flex-row w-full items-center space-x-2">
			<Input type="text" placeholder="Search courses..." />
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
	);
};

export default SearchBox;
