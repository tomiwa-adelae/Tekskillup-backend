"use client";

import { BookOpenCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, REGISTERED_COURSES_URL } from "@/app/slices/constants";
import { NoCoursesAlert } from "./NoCoursesAlert";

const RegisteredCourses = ({
	id,
	firstName,
	email,
}: {
	id: string;
	firstName: string;
	email: string;
}) => {
	const { toast } = useToast();
	const [courses, setCourses] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchUserRegisteredCourses = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}/${id}`,
					{
						withCredentials: true,
					}
				);
				setCourses(res.data);
				console.log(res.data);
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
		fetchUserRegisteredCourses();
	}, [id, toast]);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="">
			<h3 className="text-green-400 text-2xl md:text-3xl">
				<BookOpenCheck
					size={30}
					strokeWidth={0.75}
					className="text-green-400 inline mr-2"
				/>
				Registered courses ({courses?.length})
			</h3>
			{courses?.length === 0 && (
				<NoCoursesAlert firstName={firstName} email={email} />
			)}
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				{courses?.map((course: any) => (
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
