"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import MobileSideBar from "./MobileSideBar";
import { useSelector } from "react-redux";
import { ProfileDropDown } from "./ProfileDropDown";

interface UserInfoProps {
	firstName: string;
	lastName: string;
	email: string;
	image: string;
	isAdmin: boolean;
}

const Header = () => {
	const [user, setUser] = useState<UserInfoProps>();
	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (userInfo) {
			return setUser(userInfo);
		}
	}, [userInfo]);

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
				<nav className="hidden lg:flex items-center justify-center gap-6 font-semibold uppercase text-xs text-white">
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
				<div className="flex items-center justify-center gap-6">
					{!user && (
						<Button
							className="hidden uppercase bg-white text-green-400 font-semibold transition ease-in-out py-6 px-8 hover:bg-gray-100 lg:flex"
							asChild
						>
							<Link href="/register">Get started</Link>
						</Button>
					)}

					{user && (
						<div className="hidden lg:block">
							<ProfileDropDown
								firstName={user.firstName}
								image={user.image}
								isAdmin={user.isAdmin}
							/>
						</div>
					)}

					<div className="lg:hidden">
						<MobileSideBar user={user} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
