"use client";

import { Button } from "@/components/ui/button";
import { CloudUpload, ImageIcon, Loader2, Pencil, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";

const CourseImage = ({
	image,
	title,
	id,
	successUpdate,
}: {
	title: string;
	image: string;
	id: string;
	successUpdate: any;
}) => {
	const { toast } = useToast();
	const [editImage, setEditImage] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

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
								`${BASE_URL}${COURSES_URL}/${id}/image`,
								{ image },
								config
							);
							successUpdate(res.data);
							setEditImage(!editImage);
							setLoading(false);
							toast({
								title: "Success!",
								description:
									"You have successfully updated the course image",
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
		[toast, id, successUpdate, editImage]
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
	}, [toast, fileRejections]);

	return (
		<div className="bg-gray-100 p-4 md:p-8 rounded-lg">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-lg md:text-xl">Course image</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditImage(!editImage)}
				>
					{editImage ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editImage ? "Cancel" : image ? "Edit" : "Add image"}
					</span>
				</Button>
			</div>
			{editImage ? (
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
								Drag and drop some files here, or click to
								select files
							</p>
						</>
					)}
				</div>
			) : (
				<div>
					{image ? (
						<div>
							<Image
								alt={title}
								height={1000}
								width={1000}
								className="object-cover aspect-video rounded-lg"
								src={image}
							/>
						</div>
					) : (
						<div className="flex items-center justify-center flex-col gap-4 h-60 rounded-lg">
							<ImageIcon className="h-10 w-10 text-slate-500" />
							<p className="text-xs italic">No image</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default CourseImage;
