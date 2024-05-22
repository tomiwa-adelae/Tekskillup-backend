"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Pencil, X } from "lucide-react";
import React, { useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { setCredentials } from "@/app/slices/authSlice";

const formSchema = z.object({
	phoneNumber: z.string().min(2).max(50),
});

const PhoneNumberBox = ({ phoneNumber }: { phoneNumber: string }) => {
	const dispatch = useDispatch();
	const { toast } = useToast();
	const [editPhoneNumber, setEditPhoneNumber] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phoneNumber: "",
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
			setEditPhoneNumber(!editPhoneNumber);
			toast({
				title: "Success!",
				description:
					"You have successfully updated your phone number😁",
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
				<h4 className="text-lg md:text-xl">Phone number</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditPhoneNumber(!editPhoneNumber)}
				>
					{editPhoneNumber ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editPhoneNumber ? "Cancel" : "Edit"}
					</span>
				</Button>
			</div>
			{editPhoneNumber ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="phoneNumber"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="e.g Doe"
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											This is your public display phone
											number.
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
					<p className="text-sm">{phoneNumber}</p>
				</div>
			)}
		</div>
	);
};

export default PhoneNumberBox;
