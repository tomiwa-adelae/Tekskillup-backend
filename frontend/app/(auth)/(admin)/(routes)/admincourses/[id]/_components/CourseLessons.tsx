"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, Loader2, Pencil, Trash2, X } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";

const formSchema = z.object({
	content: z
		.string()
		.min(3, { message: "Lesson is required!" })
		.max(250, { message: "Lesson is too long!" }),
});

const CourseLessons = ({
	lessons,
	id,
	successUpdate,
}: {
	lessons: any;
	id: string;
	successUpdate: any;
}) => {
	const { toast } = useToast();
	const [editLesson, setEditLesson] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			content: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true);
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			withCredentials: true,
		};

		try {
			setLoading(true);

			const res = await axios.post(
				`${BASE_URL}${COURSES_URL}/${id}/lessons`,
				values,
				config
			);
			setLoading(false);
			setEditLesson(!editLesson);
			toast({
				title: "Success!",
				description: "You have successfully added a lesson😁",
			});
			successUpdate(res.data);
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
	};

	return (
		<div className="bg-gray-100 p-4 md:p-8 rounded-lg">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-lg md:text-xl">Course lessons</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditLesson(!editLesson)}
				>
					{editLesson ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editLesson ? "Cancel" : "Add lesson"}
					</span>
				</Button>
			</div>
			{editLesson ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="content"
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
								disabled={loading}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
										Please wait
									</>
								) : (
									"Save"
								)}
							</Button>
						</form>
					</Form>
				</div>
			) : (
				<div className="space-y-2">
					{lessons?.map(
						(lesson: { _id: string; content: string }) => (
							<h4
								key={lesson._id}
								className="text-sm bg-green-100 rounded-md py-2 px-4 flex items-center justify-between"
							>
								<div>
									<BadgeCheck className="inline mr-2 text-green-400" />
									{lesson.content}
								</div>
								<DeleteCourseLessonAlertDialog
									lessonId={lesson._id}
									courseId={id}
									successUpdate={(data: any) =>
										successUpdate(data)
									}
								/>
							</h4>
						)
					)}
					{lessons?.length === 0 && (
						<p className="text-sm italic font-light">No lessons</p>
					)}
				</div>
			)}
		</div>
	);
};

export default CourseLessons;
