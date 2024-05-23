import Image from "next/image";
import React from "react";

const SmallShowcase = () => {
	return (
		<div className="mt-8 hidden md:flex items-center gap-4 justify-between">
			<div>
				<Image
					src={"/test-image.jpg"}
					alt={"Test"}
					height={1000}
					width={1000}
					className="aspect-video rounded-xl"
				/>
			</div>
			<div>
				<Image
					src={"/test-image.jpg"}
					alt={"Test"}
					height={1000}
					width={1000}
					className="aspect-video rounded-xl"
				/>
			</div>
			<div>
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
