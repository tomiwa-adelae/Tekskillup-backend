import React from "react";
import { Menu } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MobileProfileDropDown } from "./MobileProfileDropDown";

const MobileSideBar = ({ user }: any) => {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden">
				<Menu
					className="lg:hidden text-gray-50 cursor-pointer"
					size={32}
				/>
			</SheetTrigger>
			<SheetContent
				side={"right"}
				className="bg-white border-none text-black lg:hidden pt-10 w-full md:w-600px"
			>
				<nav className="flex items-center h-full justify-center text-center flex-col text-xs text-black uppercase">
					<SheetTrigger asChild>
						<Link
							className="transition-all hover:text-green-400 cursor-pointer w-full p-4"
							href="/"
						>
							Home
						</Link>
					</SheetTrigger>
					<Separator />
					<SheetTrigger asChild>
						<Link
							className="transition-all hover:text-green-400 cursor-pointer w-full p-4"
							href="/about"
						>
							About us
						</Link>
					</SheetTrigger>
					<Separator />
					<SheetTrigger asChild>
						<Link
							className="transition-all hover:text-green-400 cursor-pointer w-full p-4"
							href="/our-courses"
						>
							Our courses
						</Link>
					</SheetTrigger>
					<Separator />
					<SheetTrigger asChild>
						<Link
							className="transition-all hover:text-green-400 cursor-pointer w-full p-4"
							href="/faqs"
						>
							FAQs
						</Link>
					</SheetTrigger>
					<Separator />
					<SheetTrigger asChild>
						<Link
							className="transition-all hover:text-green-400 cursor-pointer w-full p-4"
							href="/contact"
						>
							Contact us
						</Link>
					</SheetTrigger>
					<Separator />
				</nav>
				{!user && (
					<SheetTrigger asChild>
						<Button
							className="mt-6 w-full text-green-400 text-base font-semibold transition-all uppercase bg-gray-100 hover:bg-gray-200"
							asChild
						>
							<Link href="/register">Get started</Link>
						</Button>
					</SheetTrigger>
				)}
				{user && (
					<MobileProfileDropDown
						firstName={user.firstName}
						lastName={user.lastName}
						image={user.image}
						isAdmin={user.isAdmin}
					/>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default MobileSideBar;
