"use client";
import React, { useState } from "react";
import RegisterCourseForm from "./RegisterCourseForm";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { BASE_URL, REGISTERED_COURSES_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Showcase = ({
	id,
	title,
	description,
}: {
	id: string;
	title: string;
	description: String;
}) => {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const handleRegisterCourse = async () => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
				},
				withCredentials: true,
			};

			const { email, firstName, lastName, phoneNumber } = userInfo;

			const res = await axios.post(
				`${BASE_URL}${REGISTERED_COURSES_URL}`,
				{
					id,
					email,
					firstName,
					lastName,
					description,
					phoneNumber,
					title,
				},
				config
			);
			setSuccess(true);
			setLoading(false);
			toast({
				title: "Registration successfully!",
				description: `You have successfully registered for ${title}😁. An email has been sent to you and our lovely team would be in touch with you.`,
			});
		} catch (error: any) {
			setLoading(false);
			setSuccess(false);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		} finally {
			setLoading(false);
			setSuccess(false);
		}
	};

	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/test-image.jpg)` }}
		>
			<div className="container flex flex-col lg:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="flex-1 w-full text-white mt-10">
					<h1 className="text-3xl text-center lg:text-6xl lg:text-left lg:leading-tight">
						{title}
					</h1>
					<p className="text-xs md:text-sm text-center lg:text-left mt-4 mb-6 text-slate-200">
						{description}
					</p>
				</div>
				<div
					className={cn(
						"flex-auto w-full lg:max-w-screen-sm",
						userInfo && "w-auto flex-0 lg:max-w-96 mx-auto"
					)}
				>
					{userInfo ? (
						<div className="bg-green-400 shadow-lg rounded-2xl py-12 px-8 text-white text-center">
							<h1 className="text-lg md:text-xl mb-6">
								You are already logged in so click the button to
								apply now
							</h1>
							<Button
								onClick={handleRegisterCourse}
								className="bg-green-200 w-full font-semibold uppercase"
								disabled={loading || success}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
										Please wait
									</>
								) : success ? (
									"You've already registered!"
								) : (
									"Apply for course"
								)}
							</Button>
						</div>
					) : (
						<RegisterCourseForm />
					)}
				</div>
			</div>
		</div>
	);
};

export default Showcase;
