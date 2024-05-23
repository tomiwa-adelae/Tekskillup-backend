import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const CoreValues = () => {
	const values = [
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
		{
			icon: "/pace-img.png",
			value: "Flexibility",
		},
	];

	return (
		<div className="bg-white py-16">
			<div className="container text-center">
				<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
					Our core values
				</h3>
				<p className="text-xs md:text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Similique ea repellendus vel impedit corrupti sapiente ipsum
					reprehenderit, in enim doloribus.
				</p>
				<div className="mt-8 grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3">
					{values.map((value, index) => (
						<Card
							key={index}
							className="flex flex-col items-center text-center justify-center gap-4 md:gap-8 bg-green-100 rounded-xl py-4"
						>
							<Image
								src={value.icon}
								alt={value.value}
								height={1000}
								width={1000}
								className="w-16 md:w-24"
							/>
							<h5 className="text-sm md:text-base lg:text-lg font-semibold">
								{value.value}
							</h5>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
