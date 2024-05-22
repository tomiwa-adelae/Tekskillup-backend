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
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	newPassword: z.string().min(6, { message: "New password is required!" }),
	confirmPassword: z
		.string()
		.min(2, { message: "Confirm password is required!" }),
});

const UpdatePasswordForm = () => {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const code = searchParams.get("code");
	const email = searchParams.get("email");

	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
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
				const newPassword = values.newPassword;
				const confirmPassword = values.confirmPassword;
				await axios.post(
					`${BASE_URL}${USERS_URL}/update-password/${id}/${code}`,
					{ id, code, newPassword, confirmPassword },
					config
				);
				setLoading(false);
				toast({
					title: "Successful!",
					description: "Please enter login with your new password😁",
				});
				router.push(`/login`);
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
		<div className="bg-green-400 shadow-lg rounded-2xl py-12 px-8 text-white">
			<h3 className="md:hidden text-center text-3xl mb-6">
				Update new password
			</h3>
			<p className="md:hidden text-center text-sm mb-4 text-slate-200">
				Your email address is {email}
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
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							"Continue"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default UpdatePasswordForm;
