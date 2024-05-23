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
		<div className="lg:hidden">
			<Sheet>
				<SheetTrigger className="lg:hidden">
					<Menu
						className="lg:hidden text-white cursor-pointer"
						size={32}
					/>
				</SheetTrigger>
				<SheetContent
					side={"right"}
					className="bg-white border-none text-black lg:hidden pt-10 w-full md:w-600px"
				>
					<nav className="flex items-start justify-center flex-col gap-5 font-semibold text-sm text-black">
						<SheetTrigger asChild>
							<Link
								className="transition ease-in-out hover:text-green-400 cursor-pointer w-full"
								href="/"
							>
								Home
							</Link>
						</SheetTrigger>
						<Separator />
						<SheetTrigger asChild>
							<Link
								className="transition ease-in-out hover:text-green-400 cursor-pointer w-full"
								href="/about"
							>
								About us
							</Link>
						</SheetTrigger>
						<Separator />
						<SheetTrigger asChild>
							<Link
								className="transition ease-in-out hover:text-green-400 cursor-pointer w-full"
								href="/our-courses"
							>
								Our courses
							</Link>
						</SheetTrigger>
						<Separator />
						<SheetTrigger asChild>
							<Link
								className="transition ease-in-out hover:text-green-400 cursor-pointer w-full"
								href="/faqs"
							>
								FAQs
							</Link>
						</SheetTrigger>
						<Separator />
						<SheetTrigger asChild>
							<Link
								className="transition ease-in-out hover:text-green-400 cursor-pointer w-full"
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
								className="mt-6 w-full text-green-400 text-base font-semibold transition ease-in-out uppercase bg-gray-100 hover:bg-gray-200"
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
		</div>
	);
};

export default MobileSideBar;
