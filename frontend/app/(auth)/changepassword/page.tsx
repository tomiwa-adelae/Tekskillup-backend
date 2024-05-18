import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import PasswordsForm from "./_components/PasswordsForm";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<h1 className="mb-4 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					Change your password
				</h1>
				<Button
					className="transition ease-in-out hover:font-semibold mb-4"
					asChild
					variant="ghost"
				>
					<Link href="/profile">Back</Link>
				</Button>
				<div>
					<PasswordsForm />
				</div>
			</div>
		</div>
	);
};

export default page;
