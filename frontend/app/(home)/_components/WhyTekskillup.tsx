import Image from "next/image";
import React from "react";

interface WhysProps {
	img: string;
	title: string;
	details: string;
}

const WhyTekskillup = () => {
	const whys: WhysProps[] = [
		{
			img: "/pace-img.png",
			title: "Go at your pace",
			details:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
		{
			img: "/pace-img.png",
			title: "Go at your pace",
			details:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
		{
			img: "/pace-img.png",
			title: "Go at your pace",
			details:
				"Lorem ipsum, dolor sit amet consectetur adipisicingelit. Praesentium, vitae!",
		},
	];

	return (
		<div className="container bg-white py-16">
			<div className="text-center">
				<h5 className="uppercase text-xs lg:text-sm">
					Why choose Tekskillup?
				</h5>
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					We are customer centric
				</h3>
				<p className="text-xs lg:text-sm mb-8 lg:w-5/6 mx-auto">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Aperiam minima eligendi consectetur libero molestias
					corporis explicabo magni adipisci placeat at.
				</p>

				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
					{whys.map(
						(
							why: {
								img: string;
								title: string;
								details: string;
							},
							index: number
						) => (
							<div
								key={index}
								className="flex flex-col items-center justify-center bg-gray-100 py-8 px-4 rounded-md"
							>
								<Image
									src={why.img}
									alt={why.title}
									height={1000}
									width={1000}
									className="w-20"
								/>
								<div>
									<h4 className="text-green-400 mt-3 text-lg font-medium">
										{why.title}
									</h4>
									<p className="text-xs mt-4">
										{why.details}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default WhyTekskillup;
