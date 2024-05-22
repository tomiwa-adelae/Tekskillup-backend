import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NoCoursesAlert() {
	return (
		<Alert variant="info" className="my-6">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				No registered courses
			</AlertTitle>
			<AlertDescription>
				You have nothing here because you haven&apos;t registered for
				any course.
				<Button asChild className="text-green-400" variant="link">
					<Link href="/our-courses">
						Start your tech journey today
					</Link>
				</Button>
			</AlertDescription>
		</Alert>
	);
}
