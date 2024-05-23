"use client";

import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserAnalyticsCharts from "./UsersAnalyticsCharts";
import User from "./User";
import SearchBox from "./SearchBox";
import { Separator } from "@/components/ui/separator";
import { StepLoader } from "@/components/StepLoader";

interface Users {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	image: string;
	phoneNumber: string;
	bio: any;
}

type UsersProps = Users[];

const Wrapper = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [users, setUsers] = useState<UsersProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchAllUsers = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${BASE_URL}${USERS_URL}`, {
					withCredentials: true,
				});

				setUsers(res.data);
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
		fetchAllUsers();
	}, [toast, router, setUsers]);

	if (loading) return <StepLoader />;

	return (
		<div className="mt-8">
			<h3 className="text-green-400 text-2xl md:text-3xl mb-6">
				Total users ({users?.length})
			</h3>
			<UserAnalyticsCharts users={users} />
			<Separator className="my-16" />
			<div>
				<SearchBox
					successUpdate={(data: UsersProps) => setUsers(data)}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					{users.map((user) => (
						<User
							key={user._id}
							id={user._id}
							firstName={user.firstName}
							lastName={user.lastName}
							image={user.image}
							email={user.email}
							phoneNumber={user.phoneNumber}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
