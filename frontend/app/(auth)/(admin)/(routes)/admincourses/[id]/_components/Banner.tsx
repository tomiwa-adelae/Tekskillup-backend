import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function Banner() {
	return (
		<Alert variant="warning" className="my-6">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				Unpublished course
			</AlertTitle>
			<AlertDescription className="text-xs">
				This course has not been published yet. Only you can see this.
			</AlertDescription>
		</Alert>
	);
}
