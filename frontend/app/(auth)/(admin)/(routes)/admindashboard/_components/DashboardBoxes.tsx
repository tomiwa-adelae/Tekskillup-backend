"use client";
import { Button } from "@/components/ui/button";
import { Folder, LayoutDashboard, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { BASE_URL, COURSES_URL, USERS_URL } from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface Courses {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
}

interface Users {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	image: string;
}

type CoursesProps = Courses[];
type UsersProps = Users[];

const DashboardBoxes = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [courses, setCourses] = useState<CoursesProps>([]);
	const [users, setUsers] = useState<UsersProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchAllCourses = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${BASE_URL}${COURSES_URL}`, {
					withCredentials: true,
				});

				setCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoading(false);
			}
		};
		const fetchAllUsers = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${BASE_URL}${USERS_URL}`, {
					withCredentials: true,
				});

				setUsers(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoading(false);
			}
		};
		fetchAllCourses();
		fetchAllUsers();
	}, [toast, router, setCourses]);

	if (loading) return "Loading";

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
					<h4 className="font-semibold text-lg md:text-xl">
						{courses.length}
					</h4>
				</Link>

				<Link
					href="/adminusers"
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
					<h4 className="font-semibold text-lg md:text-xl">
						{users.length}
					</h4>
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
							src={users[0].image}
							alt={users[0].firstName}
							height={1000}
							width={1000}
							className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
						/>
						<div className="space-y-2">
							<h4 className="text-lg md:text 2xl text-green-400">
								{users[0].firstName}
								{users[0].lastName}
							</h4>
							<p className="text-sm">{users[0].email}</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-between gap-4">
						<Button
							className="transition ease-in-out uppercase bg-green-400 hover:bg-green-500 w-full"
							asChild
						>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`mailto:${users[0].email}`}
							>
								<Mail className="mr-2 h-4 w-4" />
								Email
							</a>
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
					href="/adminusers"
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
