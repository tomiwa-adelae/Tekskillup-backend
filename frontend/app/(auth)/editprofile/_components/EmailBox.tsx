import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React from "react";

const EmailBox = () => {
	return (
		<div className="bg-gray-100 p-4 md:p-8 rounded-lg">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-lg md:text-xl">Email address</h4>
				<Button variant="ghost" disabled className="uppercase">
					<Pencil className="w-4 h-4 mr-2" />
					<span className="text-xs font-semibold">Edit</span>
				</Button>
			</div>
			<p className="text-sm">johndoe@gmail.com</p>
		</div>
	);
};

export default EmailBox;
