import Image from "next/image";
import React from "react";

const SmallShowcase = () => {
	return (
		<div className="mt-8 hidden md:flex flex-cols items-center gap-4 lg:gap-8 justify-between lg:flex-row">
			<div className="flex-1">
				<Image
					src={"/test-image.jpg"}
					alt={"Test"}
					height={1000}
					width={1000}
					className="aspect-video rounded-xl"
				/>
			</div>
			<div className="flex-1">
				<Image
					src={"/test-image.jpg"}
					alt={"Test"}
					height={1000}
					width={1000}
					className="aspect-video rounded-xl"
				/>
			</div>
			<div className="flex-1">
				<Image
					src={"/test-image.jpg"}
					alt={"Test"}
					height={1000}
					width={1000}
					className="aspect-video rounded-xl"
				/>
			</div>
		</div>
	);
};

export default SmallShowcase;
