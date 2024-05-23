import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

interface CoursesProps {
	id: number;
	title: string;
}
[];

const Footer = () => {
	const courses: CoursesProps[] = [
		{
			id: 1,
			title: "Full stack",
		},
		{
			id: 2,
			title: "Frontend development",
		},
		{
			id: 3,
			title: "Data science",
		},
	];

	return (
		<footer className="bg-green-400 pt-16 pb-8 text-white font-semibold text-xs">
			<div className="container">
				<div className="flex flex-col items-start justify-start gap-8 md:flex-row md:justify-between">
					<div className="transition ease-in-out space-y-6">
						<Link
							className="hover:text-gray-200 block"
							href="/about"
						>
							About us
						</Link>
						<Link
							className="hover:text-gray-200 block"
							href="/faqs"
						>
							FAQs
						</Link>
						<Link
							className="hover:text-gray-200 block"
							href="/contact"
						>
							Contact us
						</Link>
					</div>
					<div className="transition ease-in-out space-y-6">
						{courses.map((course) => (
							<Link
								key={course.id}
								className="block hover:text-gray-200"
								href="/about"
							>
								{course.title}
							</Link>
						))}
					</div>
					<div className="flex items-center justify-start gap-8">
						<Link className="hover:text-gray-200" href="/">
							<Facebook />
						</Link>
						<Link className="hover:text-gray-200" href="/">
							<Instagram />
						</Link>
						<Link className="hover:text-gray-200" href="/">
							<Twitter />
						</Link>
					</div>
				</div>
				<div className="mt-12 flex flex-col  items-start justify-between gap-8 md:flex-row md:items-end">
					<Image
						src={"/tekskillup-logo.png"}
						alt="Tekskillup logo"
						width={1000}
						height={1000}
						className="w-32"
					/>
					<p className="text-xs text-gray-200 font-light">
						&copy; 2024 Tekskillup. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
