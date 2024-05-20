"use client";

import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { FaNairaSign } from "react-icons/fa6";
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

const formSchema = z.object({
	price: z.string().min(2).max(50),
});

const CourseWeekdaysPrice = () => {
	const [editPrice, setEditPrice] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			price: "",
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
				<h4 className="text-lg md:text-xl">Weekdays price</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditPrice(!editPrice)}
				>
					{editPrice ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editPrice ? "Cancel" : "Edit"}
					</span>
				</Button>
			</div>
			{editPrice ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="price"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Input
													placeholder="e.g 200,000"
													className="pl-8"
													{...field}
												/>
												<FaNairaSign className="absolute top-1/2 left-2 w-4 h-4 text-gray-400 -translate-y-1/2" />
											</div>
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											This is the weekdays course price.
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
				<div>
					<p className="text-sm font-light italic">No price</p>
				</div>
			)}
		</div>
	);
};

export default CourseWeekdaysPrice;
