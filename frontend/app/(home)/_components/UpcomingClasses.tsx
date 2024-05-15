import { Button } from "@/components/ui/button";
import { CalendarClock, Hourglass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingClasses = () => {
	return (
		<div className="bg-white mb-16">
			<div className="container flex flex-col lg:flex-row-reverse gap-8">
				<div className="flex-1">
					<Image
						src={"/test-image.jpg"}
						alt="tomiwa"
						height={1000}
						width={1000}
						className="aspect-video rounded-lg object-cover"
					/>
				</div>
				<div className="flex-1">
					<h5 className="uppercase text-xs lg:text-sm">
						Upcoming classes
					</h5>
					<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
						User interface and graphics design
					</h3>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quaerat, deserunt molestiae amet incidunt dolorem fuga
						eum obcaecati eaque neque. Doloremque quia earum odit
						excepturi magnam quis nulla debitis totam saepe qui
						quae, omnis, id vitae porro tempora a accusantium neque
						voluptas vero minus fugit beatae ipsum reiciendis non?
						At, vitae?
					</p>
					<div className="font-bold space-y-4 text-xs lg:text-sm mt-6">
						<h6>
							<CalendarClock className="inline text-green-400 mr-2" />
							Start date: May 13, 2024
						</h6>
						<h6>
							<Hourglass className="inline text-green-400 mr-2" />
							Duration: 12 weeks
						</h6>
					</div>
					<Button
						className="bg-green-400 px-12 py-8 font-semibold mt-8 shadow uppercase"
						asChild
					>
						<Link href="/">Enroll now</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UpcomingClasses;
