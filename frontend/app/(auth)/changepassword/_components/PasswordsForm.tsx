"use client";

import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	currentPassword: z
		.string()
		.min(2, { message: "Current password is required!" }),
	newPassword: z
		.string()
		.min(6, { message: "New password should be at least 6 characters!" }),
	confirmPassword: z
		.string()
		.min(2, { message: "Confirm password is required!" }),
});

const PasswordsForm = () => {
	const router = useRouter();
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		if (values.newPassword !== values.confirmPassword) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "Passwords do not match!",
			});
		} else {
			try {
				setLoading(true);

				const config = {
					headers: {
						"Content-type": "application/json",
					},
					withCredentials: true,
				};

				const res = await axios.put(
					`${BASE_URL}${USERS_URL}/password`,
					values,
					config
				);
				setLoading(false);
				toast({
					title: "Success!",
					description:
						"You have successfully updated your password😁",
				});
				router.push("/profile");
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
		}
	};
	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="currentPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Current password</FormLabel>
								<FormControl className="text-black">
									<Input
										placeholder="e.g &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl className="text-black">
									<Input
										placeholder="e.g. &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										type="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm password</FormLabel>
								<FormControl className="text-black">
									<Input
										placeholder="e.g. &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										type="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<Button
							asChild
							className="uppercase mr-4"
							variant="ghost"
						>
							<Link href="/profile">Cancel</Link>
						</Button>
						<Button
							className="bg-green-200 font-semibold uppercase"
							type="submit"
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
									Please wait
								</>
							) : (
								"Save changes"
							)}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default PasswordsForm;
