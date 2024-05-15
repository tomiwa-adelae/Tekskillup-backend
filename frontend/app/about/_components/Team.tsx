import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";

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
			<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
			<div className="relative shadow-xl bg-white border border-green-100  px-4 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-4">
				<Image
					src={image}
					alt={name}
					height={1000}
					width={1000}
					className="rounded-full w-36 h-36 object-cover"
				/>

				<h4 className="font-bold text-xl text-green-400 mb-4 relative z-50">
					{name}
				</h4>

				<Button
					variant="outline"
					className="transition ease-in-out delay-75 bg-transparent text-green-400 hover:bg-gray-50"
				>
					{position}
				</Button>
				<div className="flex items-center justify-center gap-4 mt-6">
					<div className="border-2 border-green-400 text-green-400 rounded-full p-2 cursor-pointer">
						<Link href={facebookLink}>
							<Instagram />
						</Link>
					</div>
					<div className="border-2 border-green-400 text-green-400 rounded-full p-2 cursor-pointer">
						<Link href={twitterLink}>
							<Instagram />
						</Link>
					</div>
					<div className="border-2 border-green-400 text-green-400 rounded-full p-2 cursor-pointer">
						<Link href={instagramLink}>
							<Instagram />
						</Link>
					</div>
				</div>

				<Meteors number={20} />
			</div>
		</div>
	);
}
