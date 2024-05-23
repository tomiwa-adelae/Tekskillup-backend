"use client";
import React, { useEffect, useState } from "react";

import CoursesCarousel from "./CoursesCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { StepLoader } from "@/components/StepLoader";
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

const OurOffers = () => {
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
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container ">
				<div className="text-center">
					<h5 className="uppercase text-xs lg:text-sm">
						What do we offer?
					</h5>
					<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
						Certified Tech Training Courses
					</h3>
					<p className="text-xs lg:text-sm mb-8 lg:w-5/6 mx-auto">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Aperiam minima eligendi consectetur libero
						molestias corporis explicabo magni adipisci placeat at.
					</p>

					<CoursesCarousel courses={courses} />
					<Button
						className="bg-green-400 font-semibold px-12 py-8 mt-8 uppercase shadow"
						asChild
					>
						<Link href="/our-courses">View all courses</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OurOffers;
