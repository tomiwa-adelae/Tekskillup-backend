"use client";

import React, { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import axios from "axios";
import { setCredentials } from "@/app/slices/authSlice";

const formSchema = z.object({
	firstName: z.string().min(2, { message: "First name is required!" }),
	lastName: z.string().min(2, { message: "Last name is required!" }),
	email: z.string().email().min(2, { message: "Email is required!" }),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number is required!" })
		.max(11, { message: "Enter valid number" }),
	password: z
		.string()
		.min(6, { message: "Password should be at least 6 characters!" }),
	confirmPassword: z
		.string()
		.min(2, { message: "Confirm password is required!" }),
});

const RegisterCourseForm = () => {
	const { toast } = useToast();
	const dispatch = useDispatch();
	const router = useRouter();

	const { userInfo } = useSelector((state: any) => state.auth);

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (userInfo) {
			return router.push("/");
		}
	}, [userInfo, router]);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		if (values.password !== values.confirmPassword) {
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

				const res = await axios.post(
					`${BASE_URL}${USERS_URL}`,
					values,
					config
				);
				dispatch(setCredentials({ ...res.data }));
				setLoading(false);
				toast({
					title: "Registration successfully!",
					description: "You have successfully created an account😁",
				});
				// router.push("/");
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
			<h3 className="text-center text-3xl mb-6">
				Register or login to learn more about the program pricing and
				curriculum
			</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl className="text-black">
										<Input
											placeholder="e.g John"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last name</FormLabel>
									<FormControl className="text-black">
										<Input
											placeholder="e.g Doe"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone number</FormLabel>
									<FormControl className="text-black">
										<Input
											placeholder="e.g 08012345678"
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
					</div>
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
							"Register"
						)}
					</Button>
					<p className="text-xs md:text-sm text-center text-slate-200">
						Already have an account?{" "}
						<Link
							href={"/login"}
							className="transition ease-in-out font-semibold text-white hover:text-slate-200"
						>
							Sign in now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
};

export default RegisterCourseForm;
