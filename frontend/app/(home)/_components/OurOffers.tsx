"use client";

import CoursesCarousel from "./CoursesCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CoursesProps {
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

const OurOffers = ({ courses }: { courses: CoursesProps[] }) => {
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
					<p className="text-xs md:text-sm mb-8 lg:w-5/6 mx-auto">
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
