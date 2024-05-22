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
import { logout } from "@/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useToast } from "./ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";

export function ProfileDropDown({
	firstName,
	image,
	isAdmin,
}: {
	firstName: string;
	image: string;
	isAdmin: boolean;
}) {
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
				<Image
					src={image}
					alt={firstName}
					height={1000}
					width={1000}
					className="w-10 h-10 transition ease-in-out border-0 rounded-full cursor-pointer hover:border border-1 border-green-100 object-cover"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/profile">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<User className="mr-2 h-4 w-4" />
						<span>My Profile</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<Link href="/editprofile">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<Pencil className="mr-2 h-4 w-4" />
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
				{isAdmin && (
					<Link href="/admindashboard">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<LayoutDashboard className="mr-2 h-4 w-4" />
							<span>Admin dashboard</span>
						</DropdownMenuItem>
					</Link>
				)}
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
}
