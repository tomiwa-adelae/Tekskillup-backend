"use client";
import React from "react";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

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

const CoursesCarousel = ({ courses }: { courses: CoursesProps[] }) => {
	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnInteraction: true })
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{
				align: "center",
				loop: true,
			}}
			className="flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row"
		>
			<CarouselContent>
				{courses.map((course) => (
					<CarouselItem
						key={course._id}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="flex flex-col items-center justify-center py-8 px-4 rounded-md gap-6">
							<div className="flex-1">
								<Image
									src={course.image}
									alt={course.title}
									height={1000}
									width={1000}
									className="aspect-video rounded-2xl object-cover"
								/>
							</div>
							<div className="space-y-4 flex-1">
								<h4 className="text-green-400 text-lg font-medium md:text-2xl">
									{course.title}
								</h4>
								<p className="text-xs">{course.description}</p>
							</div>
							<Button
								className="transition ease-in-out bg-transparent px-6 outline outline-1 outline-green-400 text-green-400 hover:bg-green-400 uppercase hover:text-white"
								asChild
							>
								<Link href={`/our-courses/${course._id}`}>
									View course
								</Link>
							</Button>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default CoursesCarousel;
