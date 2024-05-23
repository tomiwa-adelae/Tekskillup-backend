"use client";
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
	CircleUserRound,
	LockKeyhole,
	LayoutDashboard,
	Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { logout, setCredentials } from "@/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useToast } from "./ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";
import { SheetTrigger } from "./ui/sheet";

export function MobileProfileDropDown({
	firstName,
	lastName,
	image,
	isAdmin,
}: {
	firstName: string;
	lastName: string;
	image: string;
	isAdmin: boolean;
}) {
	const router = useRouter();
	const { toast } = useToast();
	const dispatch = useDispatch();
	const handleLogout = async () => {
		try {
			await axios.post(`${BASE_URL}${USERS_URL}/logout`, {
				withCredentials: true,
			});
			dispatch(logout({ message: "logout" }));
			dispatch(setCredentials(null));
			toast({
				// variant: "",
				title: "Successful",
				description: "You have successfully logged out",
			});

			router.push("/login");
			setTimeout(() => {
				window.location.reload();
			}, 2000);
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
				<div className="absolute bottom-0 left-0 w-full">
					<div className="border-t-2 border-gray-100 flex items-center justify-start gap-4 hover:bg-slate-100 transition ease-in-out cursor-pointer px-4 py-3">
						<Image
							src={image}
							alt={firstName}
							height={1000}
							width={1000}
							className="w-12 h-12 transition ease-in-out border-0 rounded-full cursor-pointer hover:border border-1 border-green-100 object-cover"
						/>
						<h3 className="text-base md:text-lg font-semibold text-green-400">
							{firstName} {lastName}
						</h3>
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-screen mx-4 md:mx-0 md:w-72">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<SheetTrigger asChild>
					<Link href="/profile">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<User className="mr-2 h-4 w-4" />
							<span>My Profile</span>
						</DropdownMenuItem>
					</Link>
				</SheetTrigger>
				<DropdownMenuSeparator />
				<SheetTrigger asChild>
					<Link href="/editprofile">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<Pencil className="mr-2 h-4 w-4" />
							<span>Edit Profile</span>
						</DropdownMenuItem>
					</Link>
				</SheetTrigger>
				<DropdownMenuSeparator />
				<SheetTrigger asChild>
					<Link href="/changepassword">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<LockKeyhole className="mr-2 h-4 w-4" />
							<span>Change password</span>
						</DropdownMenuItem>
					</Link>
				</SheetTrigger>
				<DropdownMenuSeparator />
				{isAdmin && (
					<SheetTrigger asChild>
						<Link href="/admindashboard">
							<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
								<LayoutDashboard className="mr-2 h-4 w-4" />
								<span>Admin dashboard</span>
							</DropdownMenuItem>
						</Link>
					</SheetTrigger>
				)}
				<DropdownMenuSeparator />
				<SheetTrigger asChild>
					<DropdownMenuItem
						onClick={handleLogout}
						className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100"
					>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
					</DropdownMenuItem>
				</SheetTrigger>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
