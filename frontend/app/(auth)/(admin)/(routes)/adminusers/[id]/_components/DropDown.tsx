import React from "react";

import { Mail, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DeleteUserAlertDialog } from "./DeleteUserAlertModal";

const DropDown = ({ id }: { id: string }) => {
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
				<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
					<Mail className="mr-2 h-4 w-4" />
					<span>Email user</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				{/* <DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100"> */}
				<DeleteUserAlertDialog id={id} />
				{/* </DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropDown;
