"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import AboutFacility from "./AboutFacility";
export function FaciltiesImages() {
	return (
		<div className="h-[40rem] mt-8 relative flex items-center justify-center w-full">
			<CardStack items={CARDS} />
			<AboutFacility />
		</div>
	);
}

const CARDS = [
	{
		id: 0,
		name: "Manu Arora",
		image: "/home-showcase-img.png",
	},
	{
		id: 1,
		name: "Elon Musk",
		image: "/test-image.jpg",
	},
	{
		id: 2,
		name: "Tyler Durden",
		designation: "Manager Project Mayhem",
		image: "/home-showcase-img.png",
	},
];
