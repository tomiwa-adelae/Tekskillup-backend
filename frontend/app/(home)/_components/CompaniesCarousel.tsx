"use client";

import React from "react";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

const CompaniesCarousel = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const companies: any = [
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
		{
			name: "UBA",
			image: "/tekskillup-logo.png",
		},
	];

	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{
				align: "center",
				loop: true,
				dragFree: true,
			}}
			className="flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row mt-8"
		>
			<CarouselContent>
				{companies.map((company: any, index: number) => (
					<CarouselItem
						key={index}
						className="basis-1/2 md:basis-1/4 lg:basis-1/5"
					>
						<Link href="/">
							<Image
								src={company.image}
								alt={company.name}
								height={1000}
								width={1000}
								className="w-32 mx-auto"
							/>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default CompaniesCarousel;
