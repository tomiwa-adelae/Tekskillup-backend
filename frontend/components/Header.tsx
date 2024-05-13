import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import MobileSideBar from "./MobileSideBar";

const Header = () => {
	return (
		<header className="bg-green-400 h-24 flex items-center border-b border-green-200 shadow-md justify-center">
			<div className="container flex items-center justify-between">
				<Link href="/">
					<Image
						src={"/tekskillup-logo.png"}
						alt="Tekskillup logo"
						width={1000}
						height={1000}
						className="w-36"
					/>
				</Link>
				<nav className="hidden lg:flex items-center justify-center gap-5 font-semibold uppercase text-xs text-white">
					<Link
						className="transition ease-in-out hover:text-gray-100"
						href="/about"
					>
						About us
					</Link>
					<Link
						className="transition ease-in-out hover:text-gray-100"
						href="/our-courses"
					>
						Our courses
					</Link>
					<Link
						className="transition ease-in-out hover:text-gray-100"
						href="/faqs"
					>
						FAQs
					</Link>
					<Link
						className="transition ease-in-out hover:text-gray-100"
						href="/contact"
					>
						Contact us
					</Link>
				</nav>
				<Button
					className="hidden uppercase bg-white text-green-400 font-semibold transition ease-in-out py-6 px-8 hover:bg-gray-100 lg:flex"
					asChild
				>
					<Link href="/register">Get started</Link>
				</Button>
				<div className="lg:hidden">
					<MobileSideBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
