import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NoCoursesAlert({
	firstName,
	email,
}: {
	firstName: string;
	email: string;
}) {
	return (
		<Alert variant="info" className="my-6">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				No registered courses
			</AlertTitle>
			<AlertDescription>
				{firstName} have nothing here because they haven&apos;t
				registered for any course.{" "}
				<Link href={`mailto:${email}`} className="underline text-black">
					Reach out to {firstName} via an email
				</Link>
			</AlertDescription>
		</Alert>
	);
}
