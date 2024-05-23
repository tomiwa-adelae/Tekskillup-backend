"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { FaNairaSign } from "react-icons/fa6";
import { Separator } from "./separator";
import Moment from "react-moment";
import Image from "next/image";

type Tab = {
	title: string;
	_id: string;
	image: string;
	description: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);
	console.log(tabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<>
			<div className="w-full flex items-center justify-center">
				<div
					className={cn(
						"flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
						containerClassName
					)}
				>
					{propTabs.map((tab, idx) => (
						<button
							key={tab.title}
							onClick={() => {
								moveSelectedTabToTop(idx);
							}}
							onMouseEnter={() => setHovering(true)}
							onMouseLeave={() => setHovering(false)}
							className={cn(
								"transition ease-in-out bg-transparent relative px-6 py-4 rounded-full hover:bg-gray-100",
								tabClassName
							)}
							style={{
								transformStyle: "preserve-3d",
							}}
						>
							{active?._id === tab?._id && (
								<motion.div
									layoutId="clickedbutton"
									transition={{
										type: "spring",
										bounce: 0.3,
										duration: 0.6,
									}}
									className={cn(
										"absolute inset-0 bg-gradient-to-r from-green-100 via-gray-100 to-green-100 dark:bg-zinc-800 rounded-full ",
										activeTabClassName
									)}
								/>
							)}

							<span className="relative block text-black dark:text-white font-semibold">
								{tab.title}
							</span>
						</button>
					))}
				</div>
			</div>
			<FadeInDiv
				tabs={tabs}
				active={active}
				key={active?._id}
				hovering={hovering}
				className={cn("mt-24 md:mt-16", contentClassName)}
			/>
		</>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering,
}: {
	className?: string;
	key?: string;
	tabs: Tab[];
	active: Tab;
	hovering?: boolean;
}) => {
	const isActive = (tab: Tab) => {
		return tab._id === tabs[0]._id;
	};
	return (
		<div className="relative w-full h-full">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab._id}
					layoutId={tab._id}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn(
						"w-full h-full absolute top-0 left-0",
						className
					)}
				>
					<div className="w-full rounded-2xl py-8 px-4 md:px-8 font-bold shadow-lg bg-gradient-to-r from-green-100 via-gray-100 to-green-100 mb-80 text-black">
						<div className="flex flex-col md:flex-row items-start justify-between gap-6">
							<div className="flex-1 md:flex-none">
								<Image
									src={tab.image}
									alt={tab.title}
									height={1000}
									width={1000}
									className="aspect-video md:w-80 object-cover rounded-xl"
								/>
							</div>
							<div className="flex-1">
								<h3 className="text-3xl md:text-4xl font-normal">
									{tab.title}
								</h3>
								<p className="text-xs font-normal md:text-sm mt-4">
									{tab.description}
								</p>
							</div>
						</div>
						<Separator className="my-8 bg-green-400" />
						<div className="flex flex-col lg:flex-row items-start justify-start lg:justify-between font-normal">
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Online
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2" />{" "}
										Price: #{tab.onlinePrice}
									</h5>
								</div>
							</div>
							<Separator className="my-8 lg:hidden bg-green-400" />
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Weekdays
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<CalendarClock className="inline text-green-400 mr-2" />{" "}
										Start date:
										<Moment format="DD-MMM-YYYY">
											{tab.weekdayStartDate}
										</Moment>
									</h5>
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2" />{" "}
										Price: #{tab.weekdayPrice}
									</h5>
								</div>
							</div>
							<Separator className="my-8 lg:hidden bg-green-400" />
							<div>
								<h6 className="font-semibold text-xs md:text-sm uppercase mb-4">
									Weekend
								</h6>
								<div className="space-y-2 md:space-y-4">
									<h5 className="text-sm md:text-base">
										<CalendarClock className="inline text-green-400 mr-2" />{" "}
										Start date:{" "}
										<Moment format="DD-MMM-YYYY">
											{tab.weekendStartDate}
										</Moment>
									</h5>
									<h5 className="text-sm md:text-base">
										<FaNairaSign className="inline text-green-400 mr-2" />{" "}
										Price: #{tab.weekendPrice}
									</h5>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end mt-6">
							<Button
								className="bg-green-400 font-semibold py-8 px-8  hover:bg-inherit uppercase"
								asChild
							>
								<Link href={`/our-courses/${tab._id}`}>
									View course details
								</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};
