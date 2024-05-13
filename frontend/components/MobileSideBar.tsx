import React from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

const MobileSideBar = () => {
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
					className="bg-green-400 border-none text-white lg:hidden pt-10"
				>
					<nav className="flex items-start justify-center flex-col gap-5 font-semibold text-sm text-white">
						<Link
							className="transition ease-in-out hover:text-gray-100 cursor-pointer w-full"
							href="/about"
						>
							About us
						</Link>
						<Separator />
						<Link
							className="transition ease-in-out hover:text-gray-100 cursor-pointer w-full"
							href="/our-courses"
						>
							Our courses
						</Link>
						<Separator />

						<Link
							className="transition ease-in-out hover:text-gray-100 cursor-pointer w-full"
							href="/faqs"
						>
							FAQs
						</Link>
						<Separator />
						<Link
							className="transition ease-in-out hover:text-gray-100 cursor-pointer w-full"
							href="/contact"
						>
							Contact us
						</Link>
						<Separator />
					</nav>
					<Button className="mt-6" asChild>
						<Link
							className="transition ease-in-out bg-gray-50 text-green-400 font-semibold text-base py-6 px-8 hover:bg-gray-200 w-full"
							href="/register"
						>
							Get started
						</Link>
					</Button>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileSideBar;
