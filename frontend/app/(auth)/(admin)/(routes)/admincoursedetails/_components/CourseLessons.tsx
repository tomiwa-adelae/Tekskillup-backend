"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, Pencil, Trash2, X } from "lucide-react";
import React, { useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DeleteCourseLessonAlertDialog } from "./DeleteCourseLessonAlertModal";

const formSchema = z.object({
	lesson: z.string().min(2).max(50),
});

const CourseLessons = () => {
	const [editTitle, setEditTitle] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			lesson: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="bg-gray-100 p-4 md:p-8 rounded-lg">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-lg md:text-xl">Course lessons</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditTitle(!editTitle)}
				>
					{editTitle ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editTitle ? "Cancel" : "Add lesson"}
					</span>
				</Button>
			</div>
			{editTitle ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="lesson"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="e.g Learn HTML & CSS"
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											What will be taught in the course.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className="bg-green-400 uppercase"
								type="submit"
							>
								Save
							</Button>
						</form>
					</Form>
				</div>
			) : (
				<div className="space-y-2">
					<h4 className="text-sm bg-green-100 rounded-md py-2 px-4 flex items-center justify-between">
						<div>
							<BadgeCheck className="inline mr-2 text-green-400" />
							Be able to learn good things
						</div>
						<DeleteCourseLessonAlertDialog />
					</h4>
					<h4 className="text-sm bg-green-100 rounded-md py-2 px-4 flex items-center justify-between">
						<div>
							<BadgeCheck className="inline mr-2 text-green-400" />
							Be able to learn good things
						</div>
						<DeleteCourseLessonAlertDialog />
					</h4>
					<h4 className="text-sm bg-green-100 rounded-md py-2 px-4 flex items-center justify-between">
						<div>
							<BadgeCheck className="inline mr-2 text-green-400" />
							Be able to learn good things
						</div>
						<DeleteCourseLessonAlertDialog />
					</h4>
					<h4 className="text-sm bg-green-100 rounded-md py-2 px-4 flex items-center justify-between">
						<div>
							<BadgeCheck className="inline mr-2 text-green-400" />
							Be able to learn good things
						</div>
						<DeleteCourseLessonAlertDialog />
					</h4>
				</div>
			)}
		</div>
	);
};

export default CourseLessons;
