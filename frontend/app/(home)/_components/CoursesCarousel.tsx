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
	image: string;
	title: string;
	description: string;
}

const CoursesCarousel = ({ courses }: any) => {
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
				{courses.map(
					(
						course: {
							image: string;
							title: string;
							description: string;
						},
						index: number
					) => (
						<CarouselItem
							key={index}
							className="md:basis-1/2 lg:basis-1/3"
						>
							<div
								key={index}
								className="flex flex-col items-center justify-center py-8 px-4 rounded-md"
							>
								<Image
									src={course.image}
									alt={course.title}
									height={1000}
									width={1000}
									className="w-24 lg:w-36"
								/>
								<div>
									<h4 className="text-green-400 mt-3 text-lg font-medium">
										{course.title}
									</h4>
									<p className="text-xs mt-4">
										{course.description}
									</p>
								</div>
								<Button
									className="transition ease-in-out bg-transparent mt-6 px-6 outline outline-1 outline-green-400 text-green-400 hover:bg-green-400 uppercase hover:text-white"
									asChild
								>
									<Link href="/">View course</Link>
								</Button>
							</div>
						</CarouselItem>
					)
				)}
			</CarouselContent>
		</Carousel>
	);
};

export default CoursesCarousel;
