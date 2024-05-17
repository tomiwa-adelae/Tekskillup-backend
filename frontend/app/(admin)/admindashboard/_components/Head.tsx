import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const Head = () => {
	return (
		<div>
			<h5 className="text-base font-medium text-green-400">
				May 09, 2024
			</h5>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4">
					<div className="flex flex-col md:flex-row items-center justify-start gap-4">
						<CircleUserRound
							size={120}
							strokeWidth={0.75}
							className="inline text-green-400 w-30 h-30"
						/>
						<div className="space-y-2 text-center">
							<h1 className="text-green-400 text-xl md:text-xl lg:text-3xl font-semibold">
								John Doe
							</h1>
							<h5 className="text-sm">johndoe@gmail.com</h5>
						</div>
					</div>

					<Button
						className="bg-transparent text-black outline outline-2 outline-green-400 font-semibold uppercase py-6 px-10 mt-4 md:mt-0"
						asChild
					>
						<Link href={"/edit profile"}>Edit profile</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Head;
