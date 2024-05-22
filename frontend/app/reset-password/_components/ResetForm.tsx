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
import { useRouter } from "next/navigation";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import axios from "axios";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	email: z.string().email().min(2, { message: "Email is required!" }),
});

const ResetForm = () => {
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
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
			await axios.post(
				`${BASE_URL}${USERS_URL}/reset-password`,
				values,
				config
			);
			setLoading(false);
			toast({
				title: "Successful!",
				description:
					"Please enter the code we just sent to your email inbox😁",
			});
			router.push(`/verify-code?email=${values.email}`);
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
		<div className="bg-green-400 shadow-lg rounded-2xl py-12 px-8 text-white">
			<h3 className="md:hidden text-center text-3xl mb-6">
				Reset password
			</h3>
			<p className="md:hidden text-center text-sm mb-4 text-slate-200">
				Please enter the email address you registered with
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email address</FormLabel>
								<FormControl className="text-black">
									<Input
										placeholder="e.g johndoe@gmail.com"
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

export default ResetForm;
