import Image from "next/image";
import React from "react";

export function Showcase() {
	return (
		<div className="py-16 w-full dark:bg-black bg-green-400  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<div className="container">
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<div className="flex-1 text-center lg:text-left  text-white">
						<h1 className="text-3xl leading-relaxed md:text-5xl md:leading-snug lg:text-6xl lg:leading-relaxed">
							Frequently asked questions
						</h1>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Error eveniet adipisci ipsum neque quasi earum
							ratione possimus minima nulla et tenetur
						</p>
					</div>
					<div className="flex-1">
						<Image
							src={"/home-showcase-img.png"}
							alt={"About page"}
							height={1000}
							width={1000}
							className="w-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
