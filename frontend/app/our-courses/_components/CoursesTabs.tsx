"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { CalendarClock, CircleDollarSign, Hourglass } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CoursesTabs() {
	const tabs = [
		{
			title: "Product",
			value: "product",
			content: <DummyContent />,
		},
		{
			title: "Services",
			value: "services",
			content: <DummyContent />,
		},
		{
			title: "Playground",
			value: "playground",
			content: <DummyContent />,
		},
		{
			title: "Content",
			value: "content",
			content: <DummyContent />,
		},
		{
			title: "Random",
			value: "random",
			content: <DummyContent />,
		},
	];

	return (
		<div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
			<Tabs tabs={tabs} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<div className="w-full rounded-2xl py-8 px-4 md:px-8 font-bold shadow-lg bg-gradient-to-r from-green-100 via-gray-100 to-green-100 mb-80 text-black">
			<div className="flex flex-col lg:flex-row items-start justify-between gap-6">
				<div className="">
					<Image
						src={"/test-image.jpg"}
						alt={"/Test image"}
						height={1000}
						width={1000}
						className="aspect-video object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<h3 className="text-3xl md:text-4xl font-normal">
						Frontend development
					</h3>
					<p className="text-xs font-normal md:text-sm mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum, accusamus eos voluptates aliquid illum soluta
						deleniti voluptate aliquam eveniet dolorem perferendis!
						At, autem. Possimus quo ipsam sequi vitae facere magni,
						aliquid obcaecati architecto. Magnam natus asperiores
						dolore porro, provident aspernatur consectetur adipisci
						facilis aut accusamus neque temporibus possimus soluta
						consequuntur officia ipsa, debitis fugit! Nesciunt
						pariatur sequi dolorum explicabo sed?
					</p>
				</div>
			</div>
			<Separator className="my-8 bg-green-400" />
			<div className="flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:items-center font-normal">
				<div>
					<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
						Online
					</h6>
					<div className="space-y-2 md:space-y-4">
						<h5 className="text-sm md:text-base">
							<CalendarClock className="inline text-green-400 mr-2" />{" "}
							Start date: May 13, 2024
						</h5>
						<h5 className="text-sm md:text-base">
							<Hourglass className="inline text-green-400 mr-2" />{" "}
							Duration: 12 weeks
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleDollarSign className="inline text-green-400 mr-2" />{" "}
							Price: #200,000
						</h5>
					</div>
				</div>
				<Separator className="my-8 lg:hidden bg-green-400" />
				<div>
					<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
						Online
					</h6>
					<div className="space-y-2 md:space-y-4">
						<h5 className="text-sm md:text-base">
							<CalendarClock className="inline text-green-400 mr-2" />{" "}
							Start date: May 13, 2024
						</h5>
						<h5 className="text-sm md:text-base">
							<Hourglass className="inline text-green-400 mr-2" />{" "}
							Duration: 12 weeks
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleDollarSign className="inline text-green-400 mr-2" />{" "}
							Price: #200,000
						</h5>
					</div>
				</div>
				<Separator className="my-8 lg:hidden bg-green-400" />
				<div>
					<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
						Online
					</h6>
					<div className="space-y-2 md:space-y-4">
						<h5 className="text-sm md:text-base">
							<CalendarClock className="inline text-green-400 mr-2" />{" "}
							Start date: May 13, 2024
						</h5>
						<h5 className="text-sm md:text-base">
							<Hourglass className="inline text-green-400 mr-2" />{" "}
							Duration: 12 weeks
						</h5>
						<h5 className="text-sm md:text-base">
							<CircleDollarSign className="inline text-green-400 mr-2" />{" "}
							Price: #200,000
						</h5>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-end mt-6">
				<Button
					className="bg-green-400 font-semibold py-8 px-8  hover:bg-inherit uppercase"
					asChild
				>
					<Link href="/course">View course details</Link>
				</Button>
			</div>
		</div>
	);
};
