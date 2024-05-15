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
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					Our core values
				</h3>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Similique ea repellendus vel impedit corrupti sapiente ipsum
					reprehenderit, in enim doloribus.
				</p>
				<div className="mt-8 grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3">
					{values.map((value, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center justify-center gap-4 md:gap-8 bg-green-100 rounded-lg py-4"
						>
							<Image
								src={value.icon}
								alt={value.value}
								height={1000}
								width={1000}
								className="w-16 md:w-24"
							/>
							<h5 className="text-base md:text-lg lg:text-xl">
								{value.value}
							</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
