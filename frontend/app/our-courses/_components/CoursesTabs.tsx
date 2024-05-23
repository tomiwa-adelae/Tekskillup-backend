"use client";

import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { StepLoader } from "@/components/StepLoader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import Moment from "react-moment";

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

	if (!courses || loading) return <StepLoader />;

	return (
		<Tabs defaultValue={courses[0]?.title} className="w-full">
			<TabsList className="flex items-center justify-start">
				{courses.map((course) => (
					<TabsTrigger key={course._id} value={course.title}>
						{course.title}
					</TabsTrigger>
				))}
			</TabsList>
			{courses.map((course) => (
				<TabsContent key={course._id} value={course.title}>
					<Card className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 p-4 md:p-6 lg:p-8">
						<div className="flex flex-col lg:flex-row items-start justify-between gap-6">
							<div className="">
								<Image
									src={course.image}
									alt={course.title}
									height={1000}
									width={1000}
									className="aspect-video lg:w-96 object-cover rounded-lg"
								/>
							</div>
							<div className="flex-1">
								<h3 className="text-2xl md:text-3xl">
									{course.title}
								</h3>
								<p className="text-xs md:text-sm mt-2 md:mt-4">
									{course.description}
								</p>
							</div>
						</div>
						<Separator className="my-8 bg-green-400" />
						<div className="flex flex-col lg:flex-row items-start justify-start lg:justify-between">
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Online
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2 w-4 h-4" />{" "}
										Price: #{course.onlinePrice}
									</h5>
								</div>
							</div>
							<Separator className="my-8 lg:hidden bg-green-400" />
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Weekdays
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<CalendarClock className="inline text-green-400 mr-2 w-5 h-5" />{" "}
										Start date:
										<Moment format="DD-MMM-YYYY">
											{course.weekdayStartDate}
										</Moment>
									</h5>
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2 w-4 h-4" />{" "}
										Price: #{course.weekdayPrice}
									</h5>
								</div>
							</div>
							<Separator className="my-8 lg:hidden bg-green-400" />
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Weekend
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<CalendarClock className="inline text-green-400 mr-2 w-5 h-5" />{" "}
										Start date:{" "}
										<Moment format="DD-MMM-YYYY">
											{course.weekendStartDate}
										</Moment>
									</h5>
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2 w-4 h-4" />{" "}
										Price: #{course.weekendPrice}
									</h5>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end mt-8">
							<Button
								className="bg-green-400 font-semibold py-8 px-8  hover:bg-inherit uppercase w-full md:w-auto"
								asChild
							>
								<Link href={`/our-courses/${course._id}`}>
									View course details
								</Link>
							</Button>
						</div>
					</Card>
				</TabsContent>
			))}
		</Tabs>
	);
}
