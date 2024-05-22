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

	const [courses, setCourses] = useState<CoursesProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchAllCourses = async () => {
			try {
				const config = {
					headers: {
						"Content-type": "application/json",
					},
					withCredentials: true,
				};
				setLoading(true);
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}/mine/personal`,
					config
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
	}, [toast]);

	if (loading) return <p>Loading</p>;

	return (
		<div className="">
			<h3 className="text-green-400 text-2xl md:text-3xl">
				<BookOpenCheck
					size={30}
					strokeWidth={0.75}
					className="text-green-400 inline mr-2"
				/>
				Registered courses ({courses.length})
			</h3>
			{courses.length === 0 && <NoCoursesAlert />}
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				{courses.map((course: any) => (
					<Course
						key={course._id}
						title={course.course.title}
						image={course.course.image}
						createdAt={course.createdAt}
					/>
				))}
			</div>
		</div>
	);
};

export default RegisteredCourses;
