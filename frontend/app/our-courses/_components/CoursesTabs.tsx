"use client";
import { useEffect, useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";

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
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
}

type CoursesProps = Courses[];

export function CoursesTabs() {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [courses, setCourses] = useState<CoursesProps>([]);

	useEffect(() => {
		const fetchPublishedCourses = async () => {
			try {
				setLoading(true);
				const res = await axios(`${BASE_URL}${COURSES_URL}/published`);
				setLoading(false);
				setCourses(res.data);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			}
		};
		fetchPublishedCourses();
	}, [toast]);

	if (!courses || loading) return <p>loading</p>;

	return (
		<div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
			{<Tabs tabs={courses} />}
		</div>
	);
}
