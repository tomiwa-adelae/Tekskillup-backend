import { Button } from "@/components/ui/button";
import { Folder, LayoutDashboard, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

const DashboardBoxes = () => {
	return (
		<div className="pt-8">
			<h3 className="text-green-400 text-2xl md:text-3xl">
				<LayoutDashboard
					size={30}
					strokeWidth={0.75}
					className="text-green-400 inline mr-2"
				/>
				Dashboard
			</h3>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<Link
					href="/admincourses"
					className="transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 col-span-2 md:col-span-1 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100"
				>
					<Image
						src={"/pace-img.png"}
						alt="Test"
						height={1000}
						width={1000}
						className="w-20 h-20 md:w-28 md:h-28 object-cover"
					/>
					<h4 className="text-xl md:text-2xl text-green-400">
						Courses
					</h4>
					<h4 className="font-semibold text-lg md:text-xl">7</h4>
				</Link>

				<Link
					href="/admin-users"
					className="transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 col-span-2 md:col-span-1 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100"
				>
					<Image
						src={"/pace-img.png"}
						alt="Test"
						height={1000}
						width={1000}
						className="w-20 h-20 md:w-28 md:h-28 object-cover"
					/>
					<h4 className="text-xl md:text-2xl text-green-400">
						Users
					</h4>
					<h4>7</h4>
				</Link>

				<div className="relative transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 col-span-2 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100">
					<Badge
						className="absolute top-5 text-green-400 right-5 border-dashed border-green-400 p-4"
						variant="outline"
					>
						Latest user
					</Badge>
					<div className="flex items-center gap-4 justify-start w-full">
						<Image
							src={"/speaker-two.jpg"}
							alt="Test"
							height={1000}
							width={1000}
							className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
						/>
						<div className="space-y-2">
							<h4 className="text-lg md:text 2xl text-green-400">
								John Doe
							</h4>
							<p className="text-sm">john@gmail.com</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-between gap-4">
						<Button
							className="transition ease-in-out uppercase bg-green-400 hover:bg-green-500 w-full"
							asChild
						>
							<Link href="/send-email">
								<Mail className="mr-2 h-4 w-4" />
								Email
							</Link>
						</Button>
						<Button
							className="transition ease-in-out uppercase outline outline-green-100 bg-transparent text-green-400 hover:bg-green-100 w-full"
							asChild
						>
							<Link href="/send-email">
								<Folder className="mr-2 h-4 w-4" />
								Visit profile
							</Link>
						</Button>
					</div>
				</div>

				<Link
					href="/admin-users"
					className="transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 col-span-2 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100"
				>
					<Image
						src={"/pace-img.png"}
						alt="Test"
						height={1000}
						width={1000}
						className="w-20 h-20 md:w-28 md:h-28 object-cover"
					/>
					<h4 className="text-xl md:text-2xl text-green-400">
						Courses
					</h4>
					<h4>7</h4>
				</Link>

				<div className="transition duration-100 ease-in-out flex flex-col items-center justify-center gap-6 col-span-2 bg-gray-50 shadow-lg rounded-lg py-6 px-8 hover:bg-gray-100">
					<Image
						src={"/pace-img.png"}
						alt="Test"
						height={1000}
						width={1000}
						className="w-20 h-20 md:w-28 md:h-28 object-cover"
					/>
					<h4 className="text-xl md:text-2xl text-green-400">
						Courses
					</h4>
					<h4>7</h4>
				</div>
			</div>
		</div>
	);
};

export default DashboardBoxes;
