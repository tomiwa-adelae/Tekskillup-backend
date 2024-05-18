import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseProps {
	id: string;
	title: string;
	image: string;
	price: string;
}

const Course = ({ id, title, price, image }: CourseProps) => {
	return (
		<div className="bg-gray-50 py-6 px-8 space-y-4 rounded-xl shadow-lg transition-all ease-in-out hover:bg-gray-100">
			<Image
				src={image}
				alt={title}
				height={1000}
				width={1000}
				className="w-full h-48 aspect-video object-cover rounded-lg mb-4"
			/>
			<h4 className="text-lg md:text-xl text-green-400">{title}</h4>
			<h5 className="text-sm">#{price}</h5>
			<Button asChild className="uppercase bg-green-400 w-full">
				<Link href={`/${id}`}>
					<Info className="mr-2 h-4 w-4" />
					View details
				</Link>
			</Button>
		</div>
	);
};

export default Course;
