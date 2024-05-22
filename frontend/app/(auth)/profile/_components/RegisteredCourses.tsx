"use client";
import { BookOpenCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { BASE_URL, REGISTERED_COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { NoCoursesAlert } from "./NoCoursesAlert";

interface Courses {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdaysPrice: number;
}

type CoursesProps = Courses[];

const RegisteredCourses = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [courses, setCourses] = useState<CoursesProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	console.log(courses);

	useEffect(() => {
		const fetchAllCourses = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}/mine/personal`,
					{
						withCredentials: true,
					}
				);

				setCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			} finally {
				setLoading(false);
			}
		};
		fetchAllCourses();
	}, [router, toast]);

	if (loading) return <p>Loading</p>;

	return (
		<div className="">
			<h3 className="text-green-400 text-2xl md:text-3xl">
				<BookOpenCheck
					size={30}
					strokeWidth={0.75}
					className="text-green-400 inline mr-2"
				/>
				Registered courses (3)
			</h3>
			{courses.length === 0 && <NoCoursesAlert />}
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
			</div>
		</div>
	);
};

export default RegisteredCourses;
