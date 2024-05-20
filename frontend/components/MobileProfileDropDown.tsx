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
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="absolute bottom-0 left-0 w-full">
					<div className="border-t-2 border-gray-100 flex items-center justify-start gap-4 hover:bg-slate-100 transition ease-in-out cursor-pointer px-4 py-3">
						<Image
							src={"/speaker-two.jpg"}
							alt={"Test"}
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
				{isAdmin && (
					<Link href="/admindashboard">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<LayoutDashboard className="mr-2 h-4 w-4" />
							<span>Admin dashboard</span>
						</DropdownMenuItem>
					</Link>
				)}
				<DropdownMenuSeparator />
				<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
