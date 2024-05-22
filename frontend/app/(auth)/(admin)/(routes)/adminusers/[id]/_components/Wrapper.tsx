"use client";
import React, { useEffect, useState } from "react";
import Head from "./Head";
import RegisteredCourses from "./RegisteredCourses";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Separator } from "@/components/ui/separator";

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
				const config = {
					headers: {
						"Content-type": "application/json",
					},
					withCredentials: true,
				};
				const res = await axios(
					`${BASE_URL}${USERS_URL}/${id}`,
					config
				);
				setUser({ ...res.data });
				setLoading(false);
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

	console.log(user);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<Head
				_id={user?._id!}
				firstName={user?.firstName!}
				lastName={user?.lastName!}
				email={user?.email!}
			/>
			<Separator className="my-16" />
			<RegisteredCourses />
		</div>
	);
};

export default Wrapper;
