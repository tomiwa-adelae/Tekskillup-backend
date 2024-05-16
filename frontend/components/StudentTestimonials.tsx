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
