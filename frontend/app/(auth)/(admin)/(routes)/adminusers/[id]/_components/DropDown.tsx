import React from "react";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteUserAlertDialog } from "./DeleteUserAlertModal";

const DropDown = ({ id, email }: { id: string; email: string }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="outline outline-1 outline-green-400 uppercase"
				>
					Settings
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Account actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<div className="">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`mailto:${email}`}
						className="flex items-center justify-start cursor-pointer py-3 px-2 hover:bg-slate-100 transition ease-in-out"
					>
						<Mail className="mr-2 h-4 w-4" />
						<span>Email user</span>
					</a>
				</div>
				<DropdownMenuSeparator />

				<DeleteUserAlertDialog id={id} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropDown;
