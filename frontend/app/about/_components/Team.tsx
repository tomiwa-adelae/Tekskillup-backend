import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";

export function Team() {
	return (
		<div className="">
			<div className=" w-full relative max-w-xs">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-white border border-green-100  px-4 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-4">
					<Image
						src={"/speaker-two.jpg"}
						alt={"Test"}
						height={1000}
						width={1000}
						className="rounded-full w-36 h-36 object-cover"
					/>

					<h4 className="font-bold text-xl text-green-400 mb-4 relative z-50">
						William beck
					</h4>

					<Button
						variant="outline"
						className="transition ease-in-out delay-75 bg-transparent text-green-400 hover:bg-gray-50"
					>
						COO
					</Button>
					<div className="flex items-center justify-center gap-4 mt-6">
						<div className="border-2 border-green-400 text-green-400 rounded-full p-2">
							<Link href="/">
								<Instagram />
							</Link>
						</div>
						<div className="border-2 border-green-400 text-green-400 rounded-full p-2">
							<Link href="/">
								<Instagram />
							</Link>
						</div>
						<div className="border-2 border-green-400 text-green-400 rounded-full p-2">
							<Link href="/">
								<Instagram />
							</Link>
						</div>
					</div>

					<Meteors number={20} />
				</div>
			</div>
		</div>
	);
}
