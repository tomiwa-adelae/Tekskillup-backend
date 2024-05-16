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

	const companies: { name: string; logo: string; link: string }[] = [
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
		},
		{
			name: "UBA",
			logo: "/tekskillup-logo.png",
			link: "/",
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
				{companies.map(
					(
						company: { name: string; logo: string; link: string },
						index: number
					) => (
						<CarouselItem
							key={index}
							className="basis-1/2 md:basis-1/4 lg:basis-1/5"
						>
							<Link href={company.link}>
								<Image
									src={company.logo}
									alt={company.name}
									height={1000}
									width={1000}
									className="w-32 mx-auto"
								/>
							</Link>
						</CarouselItem>
					)
				)}
			</CarouselContent>
		</Carousel>
	);
};

export default CompaniesCarousel;
