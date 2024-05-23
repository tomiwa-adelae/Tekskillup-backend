import { Button } from "@/components/ui/button";
import { BadgeCheck, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { DeleteCourseAlertDialog } from "./DeleteCourseAlertModal";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { ConfettiProvider } from "./Confetti";

const CourseHeader = ({
	id,
	title,
	isPublished,
	completedText,
	isComplete,
	successUpdate,
}: {
	id: string;
	title: string;
	isPublished: boolean;
	isComplete: boolean;
	completedText: string;
	successUpdate: any;
}) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [openConfetti, setOpenConfetti] = useState<boolean>(false);

	const handlePublished = async () => {
		try {
			setLoading(true);

			const config = {
				headers: {
					"Content-type": "application/json",
				},
				withCredentials: true,
			};

			const endpoint = isPublished ? "unpublish" : "publish";

			const res = await axios.put(
				`${BASE_URL}${COURSES_URL}/${id}/${endpoint}`,
				{},
				config
			);

			setLoading(false);
			successUpdate(res.data);
			toast({
				title: "Success!",
				description: `You have successfully ${endpoint} the course😁`,
			});
			if (res.data.isPublished) {
				return setOpenConfetti(true);
			}
		} catch (error: any) {
			setLoading(false);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
			{openConfetti && <ConfettiProvider />}
			<div className="space-y-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl text-green-400">
					{title}
				</h1>
				<p className="text-xs md:text-sm">
					Completed fields ({completedText})
				</p>
			</div>
			<div className="flex w-full md:w-auto items-center justify-center gap-4">
				<Button
					variant="ghost"
					className={cn(
						"uppercase transition ease-in-out hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100 w-full",
						isPublished &&
							"bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					)}
					onClick={handlePublished}
					disabled={loading || !isComplete}
				>
					<BadgeCheck className="h-4 w-4 mr-2" />
					{loading ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
							Please wait
						</>
					) : isPublished ? (
						"Unpublish"
					) : (
						"Publish"
					)}
				</Button>
				<DeleteCourseAlertDialog id={id} />
			</div>
		</div>
	);
};

export default CourseHeader;
