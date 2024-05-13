import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Showcase = () => {
	return (
		<div className="bg-green-400 py-12">
			<div className="container flex flex-col-reverse items-center justify-center gap-5 lg:flex-row">
				<div className="text-center text-white flex items-center justify-center gap-4 flex-col lg:items-start lg:text-left">
					<h1 className="text-3xl leading-relaxed  lg:text-6xl lg:leading-relaxed">
						<CodeXml className="inline" />
						Upgrade your Tech Skills now!
						<CodeXml className="inline" />
					</h1>
					<p className="text-sm opacity-90">
						Transform your career and become a skilled Tech
						professional by enrolling with Tekskillup
					</p>
					<div className="flex items-center justify-center gap-5 mt-3">
						<Button
							className="bg-green-200 font-semibold py-8 px-8  hover:bg-inherit uppercase"
							asChild
						>
							<Link href="/register">Enroll now</Link>
						</Button>
						<Button
							className="bg-transparent outline outline-2 outline-green-200 font-semibold py-8 px-8 uppercase"
							asChild
						>
							<Link href="/our-courses">Explore courses</Link>
						</Button>
					</div>
				</div>
				<div>
					<Image
						src={"/home-showcase-img.png"}
						alt="Home showcase image"
						height={1000}
						width={1000}
						className="w-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
