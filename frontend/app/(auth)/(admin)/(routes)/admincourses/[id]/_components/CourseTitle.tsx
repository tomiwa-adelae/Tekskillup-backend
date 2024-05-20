"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Pencil, X } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";

const formSchema = z.object({
	title: z
		.string()
		.min(3, { message: "The course title is required!" })
		.max(50, { message: "Course title is too long!" }),
});

const CourseTitle = ({
	title,
	id,
	successUpdate,
}: {
	title: string;
	id: string;
	successUpdate: any;
}) => {
	const { toast } = useToast();
	const [editTitle, setEditTitle] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
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

			const res = await axios.put(
				`${BASE_URL}${COURSES_URL}/${id}`,
				values,
				config
			);
			setLoading(false);
			setEditTitle(!editTitle);
			toast({
				title: "Success!",
				description: "You have successfully updated the course title😁",
			});
			successUpdate(res.data);
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-gray-100 p-4 md:p-8 rounded-lg">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-lg md:text-xl">Course title</h4>
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
						{editTitle ? "Cancel" : "Edit"}
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
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="e.g Advanced web development"
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											This is your course title.
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
				<div>
					{title ? (
						<p className="text-sm">{title}</p>
					) : (
						<p className="text-sm italic font-light">No title</p>
					)}
				</div>
			)}
		</div>
	);
};

export default CourseTitle;
