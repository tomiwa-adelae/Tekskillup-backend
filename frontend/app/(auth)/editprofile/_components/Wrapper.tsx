import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound, Replace } from "lucide-react";
import Link from "next/link";
import React from "react";
import FirstNameBox from "./FirstNameBox";
import LastNameBox from "./LastNameBox";
import EmailBox from "./EmailBox";
import PhoneNumberBox from "./PhoneNumberBox";
import BioBox from "./BioBox";

const Wrapper = () => {
	return (
		<div className="mt-8">
			<div className="flex items-center justify-center md:justify-start gap-4">
				<CircleUserRound
					size={120}
					strokeWidth={0.75}
					className="inline text-green-400 w-30 h-30"
				/>
				<Button
					className="outline outline-1 outline-green-400 hover:bg-green-400 transition ease-in-out hover:text-white text-black bg-transparent uppercase"
					asChild
				>
					<Link href="/changeimage">
						<Replace className="mr-2 h-4 w-4" />
						Change image
					</Link>
				</Button>
			</div>
			<Separator className="my-6" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FirstNameBox />
				<LastNameBox />
				<EmailBox />
				<PhoneNumberBox />
				<BioBox />
			</div>
		</div>
	);
};

export default Wrapper;
