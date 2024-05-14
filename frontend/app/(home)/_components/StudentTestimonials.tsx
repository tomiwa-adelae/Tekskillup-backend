"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function StudentTestimonials() {
	const plugin = React.useRef(
		Autoplay({ delay: 8000, stopOnInteraction: true })
	);

	const testimonies: {
		name: string;
		image: string;
		portfolio: string;
		testimony: string;
	}[] = [
		{
			name: "Joseph Barack",
			image: "/speaker-two.jpg",
			portfolio: "Full stack developer",
			testimony:
				"Lorem ipsum dolor sit amet consecteturadipisicing elit. Neque, magni sitminima cumque dicta, iste ipsam aliquam,totam reprehenderit rerum veritatis eiusmolestiae dolorem libero maxime.Temporibus debitis mollitia nam rerum eaque aliquam modi sapiente accusantium, beatae perferendi Atque quia eostemporibus dolor ullam corporisvoluptate necessitatibus eligendi, id nobis harum rerum laborum officiis,facilis sunt saepe tempora animidolorem",
		},
		{
			name: "Michael Jordan",
			image: "/speaker-two.jpg",
			portfolio: "Full stack developer",
			testimony:
				"Lorem ipsum dolor sit amet consecteturadipisicing elit. Neque, magni sitminima cumque dicta, iste ipsam aliquam,totam reprehenderit rerum veritatis eiusmolestiae dolorem libero maxime.Temporibus debitis mollitia nam rerum eaque aliquam modi sapiente accusantium, beatae perferendi Atque quia eostemporibus dolor ullam corporisvoluptate necessitatibus eligendi, id nobis harum rerum laborum officiis,facilis sunt saepe tempora animidolorem",
		},
		{
			name: "Brad Traversy",
			image: "/speaker-two.jpg",
			portfolio: "Full stack developer",
			testimony:
				"Lorem ipsum dolor sit amet consecteturadipisicing elit. Neque, magni sitminima cumque dicta, iste ipsam aliquam,totam reprehenderit rerum veritatis eiusmolestiae dolorem libero maxime.Temporibus debitis mollitia nam rerum eaque aliquam modi sapiente accusantium, beatae perferendi Atque quia eostemporibus dolor ullam corporisvoluptate necessitatibus eligendi, id nobis harum rerum laborum officiis,facilis sunt saepe tempora animidolorem",
		},
	];

	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-2xl text-green-400 lg:text-4xl dark:text-white">
							What our graduates are saying
						</h1>
					</>
				}
			>
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
						{testimonies.map(
							(
								testimony: {
									name: string;
									image: string;
									testimony: string;
									portfolio: string;
								},
								index: number
							) => (
								<CarouselItem key={index}>
									<div className="flex flex-col items-center justify-center gap-6">
										<p className="text-center text-sm flex-1">
											{testimony.testimony}
										</p>
										<div className="flex-1 flex flex-col items-center justify-center">
											<Image
												src={testimony.image}
												alt="Test"
												height={1000}
												width={1000}
												className="w-36 h-36 border-2 border-green-100 rounded-full"
											/>
											<h4 className="text-green-100 text-2xl my-2">
												{testimony.name}
											</h4>
											<p className="text-xs">
												{testimony.portfolio}
											</p>
										</div>
									</div>
								</CarouselItem>
							)
						)}
					</CarouselContent>
				</Carousel>
			</ContainerScroll>
		</div>
	);
}

export const users = [
	{
		name: "Manu Arora",
		designation: "Founder, Algochurn",
		image: "https://picsum.photos/id/10/300/300",
		badge: "Mentor",
	},
	{
		name: "Sarah Singh",
		designation: "Founder, Sarah's Kitchen",
		image: "https://picsum.photos/id/11/300/300",
		badge: "Mentor",
	},
	{
		name: "John Doe",
		designation: "Software Engineer, Tech Corp",
		image: "https://picsum.photos/id/12/300/300",
		badge: "Mentor",
	},
	{
		name: "Jane Smith",
		designation: "Product Manager, Innovate Inc",
		image: "https://picsum.photos/id/13/300/300",
		badge: "Mentor",
	},
	{
		name: "Robert Johnson",
		designation: "Data Scientist, DataWorks",
		image: "https://picsum.photos/id/14/300/300",
		badge: "Mentor",
	},
	{
		name: "Emily Davis",
		designation: "UX Designer, DesignHub",
		image: "https://picsum.photos/id/15/300/300",
		badge: "Mentor",
	},
	{
		name: "Michael Miller",
		designation: "CTO, FutureTech",
		image: "https://picsum.photos/id/16/300/300",
		badge: "Mentor",
	},
	{
		name: "Sarah Brown",
		designation: "CEO, StartUp",
		image: "https://picsum.photos/id/17/300/300",
	},
	{
		name: "James Wilson",
		designation: "DevOps Engineer, CloudNet",
		image: "https://picsum.photos/id/18/300/300",
		badge: "Something",
	},
	{
		name: "Patricia Moore",
		designation: "Marketing Manager, MarketGrowth",
		image: "https://picsum.photos/id/19/300/300",
		badge: "Mentor",
	},
	{
		name: "Richard Taylor",
		designation: "Frontend Developer, WebSolutions",
		image: "https://picsum.photos/id/20/300/300",
	},
	{
		name: "Linda Anderson",
		designation: "Backend Developer, ServerSecure",
		image: "https://picsum.photos/id/21/300/300",
	},
	{
		name: "William Thomas",
		designation: "Full Stack Developer, FullStack",
		image: "https://picsum.photos/id/22/300/300",
		badge: "Badger",
	},
	{
		name: "Elizabeth Jackson",
		designation: "Project Manager, ProManage",
		image: "https://picsum.photos/id/23/300/300",
		badge: "Mentor",
	},
	{
		name: "David White",
		designation: "Database Administrator, DataSafe",
		image: "https://picsum.photos/id/24/300/300",
		badge: "Advocate",
	},
	{
		name: "Jennifer Harris",
		designation: "Network Engineer, NetConnect",
		image: "https://picsum.photos/id/25/300/300",
	},
	{
		name: "Charles Clark",
		designation: "Security Analyst, SecureIT",
		image: "https://picsum.photos/id/26/300/300",
	},
	{
		name: "Susan Lewis",
		designation: "Systems Analyst, SysAnalyse",
		image: "https://picsum.photos/id/27/300/300",
	},
	{
		name: "Joseph Young",
		designation: "Mobile Developer, AppDev",
		image: "https://picsum.photos/id/28/300/300",
		badge: "Mentor",
	},
	{
		name: "Margaret Hall",
		designation: "Quality Assurance, BugFree",
		image: "https://picsum.photos/id/29/300/300",
		badge: "Developer",
	},
];
