"use client";

import React from "react";

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

const formSchema = z.object({
	email: z.string().email().min(2, { message: "Email is required!" }),
	password: z.string().min(2, { message: "Password is required!" }),
});

const LoginForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="bg-green-400 shadow-lg rounded-2xl py-12 px-8 text-white">
			<h3 className="text-center text-3xl mb-6">Sign in</h3>
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
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl className="text-black">
									<Input
										placeholder="e.g. &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
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
					>
						Login
					</Button>
					<Link
						href="/forgot-password"
						className="transition ease-in-out block text-sm md:text-base font-semibold hover:text-slate-200"
					>
						Forgot password?
					</Link>
					<p className="text-xs md:text-sm text-center text-slate-200">
						Don&apos;t have an account yet?{" "}
						<Link
							href={"/register"}
							className="transition ease-in-out font-semibold text-white hover:text-slate-200"
						>
							Create account now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
