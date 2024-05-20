import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import React from "react";
import { DeleteCourseAlertDialog } from "./DeleteCourseAlertModal";
import { cn } from "@/lib/utils";

const CourseHeader = ({
	title,
	isPublished,
}: {
	title: string;
	isPublished: boolean;
}) => {
	return (
		<div className="my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
			<div className="space-y-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl text-green-400">
					{title}
				</h1>
				<p className="text-xs md:text-sm">Completed fields (2/5)</p>
			</div>
			<div className="flex w-full md:w-auto items-center justify-center gap-4">
				<Button
					variant="ghost"
					className={cn(
						"uppercase transition ease-in-out hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100 w-full",
						isPublished &&
							"bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					)}
				>
					<BadgeCheck className="h-4 w-4 mr-2" />
					{isPublished ? "Published" : "Publish"}
				</Button>
				<DeleteCourseAlertDialog />
			</div>
		</div>
	);
};

export default CourseHeader;
