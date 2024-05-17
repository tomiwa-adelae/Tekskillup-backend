import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchBox = () => {
	return (
		<div className="my-6 flex w-full items-center space-x-2">
			<Input type="email" placeholder="Email" />
			<Button className="uppercase bg-green-400" type="submit">
				Subscribe
			</Button>
		</div>
	);
};

export default SearchBox;
