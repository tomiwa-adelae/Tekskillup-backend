import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

const Lessons = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h3 className="text-green-400 text-center my-5 text-2xl lg:text-3xl">
					What you will learn
				</h3>
				<div className="flex flex-col-reverse gap-4 items-center lg:flex-row lg:justify-between mt-8">
					<div className="space-y-6 flex-2">
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleCheckBig className="text-green-400 inline mr-2" />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit atque libero aliquid eligendi magnam
							iste.
						</h5>
					</div>
					<div className="flex-1 flex items-center justify-center">
						<Image
							src={"/pace-img.png"}
							alt="Study cap"
							height={1000}
							width={1000}
							className="w-24 h-24 md:w-32 md:h-32"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lessons;
