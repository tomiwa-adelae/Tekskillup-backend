"use client";
import { Button } from "@/components/ui/button";
import { Folder, LayoutDashboard, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
	BASE_URL,
	COURSES_URL,
	REGISTERED_COURSES_URL,
	USERS_URL,
} from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import UserAnalyticsCharts from "./UserAnalyticsCharts";
import { Card } from "@/components/ui/card";
import RegisteredCoursesAnalyticsCharts from "./RegisteredCoursesAnalyticsCharts";
import { StepLoader } from "@/components/StepLoader";

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
	const [registeredCourses, setRegisteredCourses] = useState<any>([]);
	const [loadingCourses, setLoadingCourses] = useState<boolean>(false);
	const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
	const [loadingRegisteredCourses, setLoadingRegisteredCourses] =
		useState<boolean>(false);

	console.log(registeredCourses);

	useEffect(() => {
		const fetchAllCourses = async () => {
			try {
				setLoadingCourses(true);
				const res = await axios.get(`${BASE_URL}${COURSES_URL}`, {
					withCredentials: true,
				});

				setCourses(res.data);
				setLoadingCourses(false);
			} catch (error: any) {
				setLoadingCourses(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoadingCourses(false);
			}
		};
		const fetchAllUsers = async () => {
			try {
				setLoadingUsers(true);
				const res = await axios.get(`${BASE_URL}${USERS_URL}`, {
					withCredentials: true,
				});

				setUsers(res.data);
				setLoadingUsers(false);
			} catch (error: any) {
				setLoadingUsers(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoadingUsers(false);
			}
		};
		const fetchAllRegisteredCourses = async () => {
			try {
				setLoadingRegisteredCourses(true);
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}`,
					{
						withCredentials: true,
					}
				);

				setRegisteredCourses(res.data);
				setLoadingRegisteredCourses(false);
			} catch (error: any) {
				setLoadingRegisteredCourses(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoadingRegisteredCourses(false);
			}
		};
		fetchAllCourses();
		fetchAllUsers();
		fetchAllRegisteredCourses();
	}, [toast, router, setCourses]);

	if (loadingCourses || loadingUsers) return <StepLoader />;

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
				{courses && (
					<Card className="flex items-center justify-center hover:bg-slate-50">
						<Link
							href="/admincourses"
							className="flex flex-col items-center justify-center gap-6 col-span-2 md:col-span-1"
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
								{courses?.length}
							</h4>
						</Link>
					</Card>
				)}

				{users && (
					<Card className="flex items-center justify-center hover:bg-slate-50">
						<Link
							href="/adminusers"
							className="flex flex-col items-center justify-center gap-6 col-span-2 md:col-span-1"
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
								{users?.length}
							</h4>
						</Link>
					</Card>
				)}

				{users && (
					<Card className="flex items-center justify-center hover:bg-slate-50 col-span-2">
						<div className="relative w-full flex flex-col items-center justify-center gap-6  py-6 px-8">
							<Badge
								className="absolute top-5 text-green-400 right-5 border-dashed border-green-400 p-2 md:p-4"
								variant="outline"
							>
								Latest user
							</Badge>
							<div className="flex items-center gap-4 justify-start w-full">
								<Image
									src={
										users[0]?.image ||
										"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
									}
									alt={users[0]?.firstName || "Picture"}
									height={1000}
									width={1000}
									className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
								/>
								<div className="space-y-2">
									<h4 className="text-lg md:text 2xl text-green-400">
										{users[0]?.firstName}
										{users[0]?.lastName}
									</h4>
									<p className="text-sm">{users[0]?.email}</p>
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
										href={`mailto:${users[0]?.email}`}
									>
										<Mail className="mr-2 h-4 w-4" />
										Email
									</a>
								</Button>
								<Button
									className="transition ease-in-out uppercase outline outline-green-100 bg-transparent text-green-400 hover:bg-green-100 w-full"
									asChild
								>
									<Link href={`/adminusers/${users[0]?._id}`}>
										<Folder className="mr-2 h-4 w-4" />
										Visit profile
									</Link>
								</Button>
							</div>
						</div>
					</Card>
				)}

				<Card className="flex items-center justify-center col-span-2 hover:bg-slate-50">
					<div className="flex w-full flex-col items-center justify-center gap-6 py-6 px-8">
						<UserAnalyticsCharts users={users} />
					</div>
				</Card>

				<Card className="flex items-center justify-center col-span-2 hover:bg-slate-50">
					<div className="flex w-full flex-col items-center justify-center gap-6 py-6 px-8">
						<RegisteredCoursesAnalyticsCharts
							courses={registeredCourses}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default DashboardBoxes;
