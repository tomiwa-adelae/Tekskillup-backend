"use client";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";

export function DeleteCourseLessonAlertDialog({
	lessonId,
	courseId,
	successUpdate,
}: {
	lessonId: string;
	courseId: string;
	successUpdate: any;
}) {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const handleDelete = async () => {
		setLoading(true);
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			withCredentials: true,
		};

		try {
			const res = await axios.delete(
				`${BASE_URL}${COURSES_URL}/${courseId}/lessons/${lessonId}`,
				config
			);
			successUpdate(res.data);
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully deleted a lesson😁",
			});
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
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					className="bg-transparent transition ease-in-out hover:bg-transparent"
					size={"icon"}
				>
					<Trash2 className="text-destructive" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="space-y-6">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-destructive text-2xl font-normal">
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="uppercase">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="bg-destructive uppercase"
						onClick={handleDelete}
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							"Continue"
						)}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
