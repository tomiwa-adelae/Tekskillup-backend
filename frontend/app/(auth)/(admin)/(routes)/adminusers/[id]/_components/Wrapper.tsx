"use client";
import React, { useEffect, useState } from "react";
import Head from "./Head";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import {
	BASE_URL,
	REGISTERED_COURSES_URL,
	USERS_URL,
} from "@/app/slices/constants";
import { Separator } from "@/components/ui/separator";
import RegisteredCourses from "./RegisteredCourses";
import { StepLoader } from "@/components/StepLoader";

interface UsersProps {
	firstName: string;
	lastName: string;
	email: string;
	image: string;
	_id: string;
	phoneNumber: string;
}

const Wrapper = ({ id }: { id: string }) => {
	const { toast } = useToast();
	const [user, setUser] = useState<UsersProps>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${BASE_URL}${USERS_URL}/${id}`, {
					withCredentials: true,
				});
				setUser(res.data);
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

		fetchUserDetails();
	}, [id, toast]);

	if (loading) return <StepLoader />;

	return (
		<div>
			<Head
				_id={user?._id!}
				firstName={user?.firstName!}
				lastName={user?.lastName!}
				email={user?.email!}
				image={user?.image!}
			/>
			<Separator className="my-16" />
			<RegisteredCourses
				id={id}
				firstName={user?.firstName!}
				email={user?.email!}
			/>
		</div>
	);
};

export default Wrapper;
