"use client";

import {
	BASE_URL,
	REGISTERED_COURSES_URL,
	USERS_URL,
} from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import RegisteredCoursesAnalyticsCharts from "./RegisteredCoursesAnalyticsCharts";
import { StepLoader } from "@/components/StepLoader";

const Wrapper = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [registeredCourses, setRegisteredCourses] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchAllRegisteredCourses = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}`,
					{
						withCredentials: true,
					}
				);

				setRegisteredCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoading(false);
			}
		};
		fetchAllRegisteredCourses();
	}, [toast, router]);

	if (loading) return <StepLoader />;

	return (
		<div className="mt-8">
			<h3 className="text-green-400 text-2xl md:text-3xl mb-6">
				Total registered courses ({registeredCourses?.length})
			</h3>
			<RegisteredCoursesAnalyticsCharts courses={registeredCourses} />
		</div>
	);
};

export default Wrapper;
