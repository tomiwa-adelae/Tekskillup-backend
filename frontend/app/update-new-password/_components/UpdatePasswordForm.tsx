"use client";

import React from "react";

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

const formSchema = z.object({
	newPassword: z.string().min(6, { message: "New password is required!" }),
	confirmPassword: z
		.string()
		.min(2, { message: "Confirm password is required!" }),
});

const UpdatePasswordForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="bg-green-400 shadow-lg rounded-2xl py-12 px-8 text-white">
			<h3 className="md:hidden text-center text-3xl mb-6">
				Update new password
			</h3>
			<p className="md:hidden text-center text-sm mb-4 text-slate-200">
				Your email address is johndoe@gmail.com
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
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
					<Button
						className="bg-green-200 w-full font-semibold uppercase"
						type="submit"
					>
						Continue
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default UpdatePasswordForm;
