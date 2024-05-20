"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
	courseTitle: z.string().min(2).max(50),
});

const FormBox = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			courseTitle: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div className="bg-gray-50 mt-8 shadow-lg w-full md:max-w-lg p-8 rounded-lg space-y-6">
			<h1 className="text-2xl md:text-3xl text-green-400">
				Name your course
			</h1>
			<p className="text-xs md:text-sm">
				What would you like to name your course? Don&apos;t worry, you
				can always change this later
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="courseTitle"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course title</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g Advanced web development"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									What would you teach in this course?
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="uppercase" variant="ghost" asChild>
						<Link href="/admincourses">Cancel</Link>
					</Button>
					<Button
						className="ml-4 bg-green-400 uppercase"
						type="submit"
					>
						Continue
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormBox;
