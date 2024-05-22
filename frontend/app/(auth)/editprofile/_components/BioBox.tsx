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
import { Editor } from "@/components/Editor";
import { setCredentials } from "@/app/slices/authSlice";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import axios from "axios";
import { Preview } from "@/components/Preview";

const formSchema = z.object({
	bio: z.string().min(2).max(1000),
});

const BioBox = ({ bio }: { bio: string }) => {
	const dispatch = useDispatch();
	const { toast } = useToast();
	const [editBio, setEditBio] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			bio: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);

			const config = {
				headers: {
					"Content-type": "application/json",
				},
				withCredentials: true,
			};

			const res = await axios.put(
				`${BASE_URL}${USERS_URL}/profile`,
				values,
				config
			);
			dispatch(setCredentials({ ...res.data }));
			setLoading(false);
			setEditBio(!editBio);
			toast({
				title: "Success!",
				description: "You have successfully updated your bio😁",
			});
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
				<h4 className="text-lg md:text-xl">Bio</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditBio(!editBio)}
				>
					{editBio ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editBio ? "Cancel" : "Edit"}
					</span>
				</Button>
			</div>
			{editBio ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="bio"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Editor {...field} />
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											This is your public biography.
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
					{bio ? (
						<Preview value={bio} />
					) : (
						<p className="text-sm italic font-light">No bio</p>
					)}
				</div>
			)}
		</div>
	);
};

export default BioBox;
