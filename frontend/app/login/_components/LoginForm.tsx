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
import { setCredentials } from "@/app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	email: z.string().email().min(2, { message: "Email is required!" }),
	password: z.string().min(2, { message: "Password is required!" }),
});

const LoginForm = () => {
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
			email: "",
			password: "",
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
			const res = await axios.post(
				`${BASE_URL}${USERS_URL}/auth`,
				values,
				config
			);
			dispatch(setCredentials({ ...res.data }));
			setLoading(false);
			toast({
				description: "Login successfully!",
			});
			router.push("/");
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
							"Login"
						)}
					</Button>
					<Link
						href="/reset-password"
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
