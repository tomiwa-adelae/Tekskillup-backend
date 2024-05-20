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
import { Trash2 } from "lucide-react";

export function DeleteCourseAlertDialog() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="bg-destructive uppercase w-full">
					<Trash2 className="h-4 w-4 mr-2 md:mr-0" />{" "}
					<span className="md:hidden">Delete</span>
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
					<AlertDialogAction className="bg-destructive uppercase">
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
