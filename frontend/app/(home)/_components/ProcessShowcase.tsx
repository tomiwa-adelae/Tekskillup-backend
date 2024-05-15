import { Separator } from "@/components/ui/separator";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProcessShowcase = () => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container flex flex-col items-center justify-center lg:flex-row text-white gap-8">
				<div className="p-8 flex-1 shadow-md bg-green-400 rounded-xl">
					<div>
						<h4 className="text-xl mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Apply
						</h4>
						<p className="text-xs lg:text-sm">
							qqLorem ipsum dolor sit, amet consectetur
							adipisicing elit. Laudantium ad minima maxime
							mollitia similique, quis nobis porro autem, tempora
							voluptatem, voluptates corrupti maiores unde. Velit!
						</p>
					</div>
					<Separator className="my-5" />
					<div>
						<h4 className="text-xl mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Apply
						</h4>
						<p className="text-xs lg:text-sm">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Laudantium ad minima maxime mollitia
							similique, quis nobis porro autem, tempora
							voluptatem, voluptates corrupti maiores unde. Velit!
						</p>
					</div>
					<Separator className="my-5" />
					<div>
						<h4 className="text-xl mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Apply
						</h4>
						<p className="text-xs lg:text-sm">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Laudantium ad minima maxime mollitia
							similique, quis nobis porro autem, tempora
							voluptatem, voluptates corrupti maiores unde. Velit!
						</p>
					</div>
				</div>
				<div className="flex-1">
					<Image
						src={"/tablet-courses-img.png"}
						alt="Courses inside 2 tablets"
						height={1000}
						width={1000}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProcessShowcase;
