"use client";

import { Separator } from "@/components/ui/separator";
import { CircleUserRound, CloudUpload, Loader2 } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { setCredentials } from "@/app/slices/authSlice";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	phoneNumber: string;
}

const Wrapper = () => {
	const dispatch = useDispatch();
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const [user, setUser] = useState<UserProps>();
	const { userInfo } = useSelector((state: any) => state.auth);

	const onDrop = useCallback(
		(acceptedFiles: any) => {
			acceptedFiles.forEach(async (file: any) => {
				try {
					const config = {
						headers: {
							"Content-type": "application/json",
						},
						withCredentials: true,
					};

					const reader = new FileReader();

					reader.readAsDataURL(file);
					reader.onload = async () => {
						try {
							const image = reader.result;
							setLoading(true);

							const res = await axios.put(
								`${BASE_URL}${USERS_URL}/image`,
								{ image },
								config
							);
							dispatch(setCredentials({ ...res.data }));
							setLoading(false);
							toast({
								title: "Success!",
								description:
									"You have successfully updated your profile picture😁",
							});
						} catch (error: any) {
							toast({
								variant: "destructive",
								title: "Uh oh! Something went wrong.",
								description:
									"Internal server error. Upload another time.",
							});
							setLoading(false);
						} finally {
							setLoading(false);
						}
					};
				} catch (error: any) {
					toast({
						variant: "destructive",
						title: "Uh oh! Something went wrong.",
						description: error.response.data.message,
					});
					setLoading(false);
				} finally {
					setLoading(false);
				}
			});
		},
		[toast, dispatch]
	);

	const { fileRejections, getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/jpeg": [], "image/png": [] },
	});

	useEffect(() => {
		fileRejections.map(({ file, errors }) => {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: `${errors[0].code} ${errors[0].message}`,
			});
		});

		if (!userInfo) {
			return;
		}
		setUser(userInfo);
	}, [fileRejections, userInfo, toast]);

	if (!user) return <p>Loading...</p>;

	return (
		<div className="mt-8">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-green-400">
					Profile image
				</h1>
				<Image
					src={user?.image!}
					alt={user?.firstName!}
					width={1000}
					height={1000}
					className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full md:mx-auto"
				/>
			</div>
			<Separator className="my-16" />
			<div
				{...getRootProps({
					className:
						"border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center gap-4 rounded-lg h-60",
				})}
			>
				<input {...getInputProps()} />
				{loading ? (
					<Loader2 className="h-8 w-8 animate-spin" />
				) : (
					<>
						<CloudUpload className="w-14 h-14 text-green-400" />
						<p className="text-sm text-center">
							Drag and drop some files here, or click to select
							files
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Wrapper;
