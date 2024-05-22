"use client";

import React, { useState } from "react";

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

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
	code: z.string().min(6, {
		message: "Your one-time password must be 6 characters.",
	}),
});

const VerifyCodeForm = () => {
	const searchParams = useSearchParams();

	const email = searchParams.get("email");

	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			code: "",
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
			const code = values.code;
			const res = await axios.post(
				`${BASE_URL}${USERS_URL}/verify-code`,
				{ email, code },
				config
			);
			setLoading(false);
			toast({
				title: "Successful!",
				description: "Please update your new password😁",
			});
			router.push(
				`/update-new-password?id=${res.data.id}&email=${email}&code=${values.code}`
			);
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
			<h3 className="md:hidden text-center text-3xl mb-6">Verify code</h3>
			<p className="md:hidden text-center text-sm mb-4 text-slate-200">
				Please enter the code sent to your email address inbox
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="code"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="hidden md:block mb-4">
									One-Time Password
								</FormLabel>
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup className="mx-auto md:mx-0">
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
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

export default VerifyCodeForm;
