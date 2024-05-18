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

export function DeleteCourseLessonAlertDialog() {
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
					<AlertDialogAction className="bg-destructive uppercase">
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
