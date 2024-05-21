"use client";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseHeader from "./CourseHeader";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

import CourseTitle from "./CourseTitle";
import { LayoutDashboard } from "lucide-react";
import CourseDescription from "./CourseDescription";
import CourseOnlinePrice from "./CourseOnlinePrice";
import CourseLessons from "./CourseLessons";
import CourseWeekendStartDate from "./CourseWeekendStartDate";
import CourseWeekdayStartDate from "./CourseWeekdayStartDate";
import CourseWeekendPrice from "./CourseWeekendPrice";
import CourseWeekdayPrice from "./CourseWeekdayPrice";
import CourseImage from "./CourseImage";
import { Banner } from "./Banner";

interface CourseProps {
	_id: string;
	title: string;
	image: string;
	isPublished: boolean;
	description: string;
	lessons: {}[];
	onlinePrice: number;
	weekendPrice: number;
	weekendStartDate: string;
	weekdayPrice: number;
	weekdayStartDate: string;
}

const CourseContainer = ({ id }: { id: string }) => {
	const { toast } = useToast();
	const [course, setCourse] = useState<CourseProps>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchCourseDetails = async () => {
			try {
				setLoading(true);
				const res = await axios(`${BASE_URL}${COURSES_URL}/${id}`);
				setCourse({ ...res.data });
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
		fetchCourseDetails();
	}, [id, toast]);

	const requiredFields = [
		course?.image,
		course?.title,
		course?.description,
		course?.onlinePrice,
		course?.weekendPrice,
		course?.weekdayPrice,
		course?.weekendStartDate,
		course?.weekdayStartDate,
		course?.lessons.length !== 0,
	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;
	const completedText = `${completedFields}/${totalFields}`;

	const isComplete = requiredFields.every(Boolean);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			{!course?.isPublished && <Banner />}
			<CourseHeader
				id={course?._id!}
				title={course?.title!}
				isPublished={course?.isPublished!}
				completedText={completedText}
				isComplete={isComplete}
				successUpdate={(updatedCourse: CourseProps) => {
					setCourse(updatedCourse);
				}}
			/>
			<Separator className="my-8" />
			<div className="p-3 bg-white md:p-8 rounded-lg shadow">
				<h3 className="text-green-400 text-2xl mb-6 md:text-3xl">
					<LayoutDashboard
						size={30}
						className="text-green-400 inline mr-2"
					/>
					Customize your course
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<CourseTitle
						title={course?.title!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseDescription
						description={course?.description!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseImage
						title={course?.title!}
						image={course?.image!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseLessons
						lessons={course?.lessons!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseOnlinePrice
						onlinePrice={course?.onlinePrice!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseWeekendPrice
						weekendPrice={course?.weekendPrice!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseWeekendStartDate
						weekendStartDate={course?.weekendStartDate!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseWeekdayPrice
						weekdayPrice={course?.weekdayPrice!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
					<CourseWeekdayStartDate
						weekdayStartDate={course?.weekdayStartDate!}
						id={course?._id!}
						successUpdate={(updatedCourse: CourseProps) => {
							setCourse(updatedCourse);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseContainer;
