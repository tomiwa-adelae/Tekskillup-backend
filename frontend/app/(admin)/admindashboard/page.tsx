import React from "react";
import Head from "./_components/Head";
import { Separator } from "@/components/ui/separator";
import DashboardBoxes from "./_components/DashboardBoxes";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<Head />
				<Separator />
				<DashboardBoxes />
			</div>
		</div>
	);
};

export default page;
