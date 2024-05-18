import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  UserRoundSearch } from "lucide-react";
import React from "react";

const SearchBox = () => {
	return (
		<div className="my-6 flex flex-col md:flex-row w-full items-center space-x-2">
			<Input type="text" placeholder="Search users..." />
			<Button
				className="uppercase mt-4 md:mt-0 w-full md:w-auto bg-green-400"
				type="submit"
			>
				<UserRoundSearch className="mr-2 h-4 w-4" />
				Search user
			</Button>
		</div>
	);
};

export default SearchBox;
