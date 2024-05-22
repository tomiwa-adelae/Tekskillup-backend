"use client";
import React from "react";

import { LockKeyhole, LogOut, User } from "lucide-react";

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
import { logout } from "@/app/slices/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const DropDown = () => {
	const router = useRouter();
	const { toast } = useToast();
	const dispatch = useDispatch();
	const handleLogout = async () => {
		try {
			await axios.post(`${BASE_URL}${USERS_URL}/logout`);
			dispatch(logout({ message: "logout" }));
			router.push("/login");
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		}
	};

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
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/editprofile">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<User className="mr-2 h-4 w-4" />
						<span>Edit Profile</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<Link href="/changepassword">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<LockKeyhole className="mr-2 h-4 w-4" />
						<span>Change password</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleLogout}
					className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100"
				>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropDown;
