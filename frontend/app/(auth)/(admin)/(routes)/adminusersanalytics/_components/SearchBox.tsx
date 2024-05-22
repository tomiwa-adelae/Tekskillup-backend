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
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2, UserRoundSearch } from "lucide-react";

const formSchema = z.object({
	keyword: z.string(),
});

const SearchBox = ({ successUpdate }: any) => {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			keyword: "",
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
			const res = await axios.get(
				`${BASE_URL}${USERS_URL}?keyword=${values.keyword}`,
				config
			);
			setLoading(false);
			successUpdate(res.data);
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
		<div className="my-6">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-x-2 flex flex-col md:flex-row w-full items-center"
				>
					<FormField
						control={form.control}
						name="keyword"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										placeholder="e.g Search users..."
										{...field}
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className="ml-4 bg-green-400 uppercase w-auto"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							<>
								<UserRoundSearch className="mr-2 h-4 w-4" />{" "}
								Search user
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default SearchBox;
