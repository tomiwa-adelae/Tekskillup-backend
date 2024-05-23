import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function Team({
	name,
	image,
	position,
	instagramLink,
	twitterLink,
	facebookLink,
}: {
	name: string;
	image: string;
	position: string;
	instagramLink: string;
	twitterLink: string;
	facebookLink: string;
}) {
	return (
		<div className="w-full relative">
			<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-400 to-green-200 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
			<Card className="relative bg-white border border-green-100  px-4 py-10 h-full overflow-hidden rounded-xl flex flex-col justify-center items-center gap-4">
				<Image
					src={image}
					alt={name}
					height={1000}
					width={1000}
					className="rounded-full w-28 h-28 object-cover"
				/>

				<h4 className="text-lg text-green-400 mb-2 relative z-50">
					{name}
				</h4>

				<Button
					variant="outline"
					className="transition ease-in-out delay-75 bg-transparent text-green-400 hover:bg-gray-50"
				>
					{position}
				</Button>
				<div className="flex items-center justify-center gap-4 mt-4 text-white">
					<div className="bg-[#4267b2] rounded-full p-2 cursor-pointer">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={facebookLink}
						>
							<Facebook />
						</a>
					</div>
					<div className="bg-[#bf2e8e] rounded-full p-2 cursor-pointer">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={instagramLink}
						>
							<Instagram />
						</a>
					</div>
					<div className="bg-[#1e9beb] rounded-full p-2 cursor-pointer">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={twitterLink}
						>
							<Twitter />
						</a>
					</div>
				</div>

				<Meteors number={20} />
			</Card>
		</div>
	);
}
