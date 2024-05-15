import Image from "next/image";
import React from "react";
import SmallShowcase from "./SmallShowcase";

export function Showcase() {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<div className="container">
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<div className="flex-1 text-center lg:text-left">
						<h5 className="uppercase text-xs lg:text-sm">
							Know more about us
						</h5>
						<h1 className="text-[44px] leading-relaxed md:text-6xl md:leading-snug lg:text-7xl lg:leading-relaxed text-green-400">
							About us
						</h1>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Error eveniet adipisci ipsum neque quasi earum
							ratione possimus minima nulla et tenetur tempore eos
							at, incidunt ab beatae omnis, provident consequatur
							quis, fugit laborum facilis natus atque. Illo,
							reiciendis. Voluptate quaerat asperiores
							perspiciatis dignissimos, explicabo iusto sit quasi
							laborum atque eveniet, sint exercitationem ipsam,
							minus aut aspernatur sed itaque! Labore iure
							obcaecati totam facere modi neque quod commodi. Ea,
							repellendus beatae?
						</p>
						<br />
						<p className="text-sm">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sapiente temporibus sed nostrum, et, numquam
							cumque quam adipisci recusandae quos quo id iusto,
							accusamus corporis molestias enim architecto earum
							dolorem! Temporibus accusantium eos omnis libero
							possimus deleniti ipsum. Nesciunt eligendi hic
							voluptates nobis eveniet nemo qui!
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
				<SmallShowcase />
			</div>
		</div>
	);
}
