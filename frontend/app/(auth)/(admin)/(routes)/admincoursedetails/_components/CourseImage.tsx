"use client";

import { Button } from "@/components/ui/button";
import { CloudUpload, ImageIcon, Pencil, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

const formSchema = z.object({
	title: z.string().min(2).max(50),
});

const CourseImage = () => {
	const onDrop = useCallback((acceptedFiles: any) => {
		acceptedFiles.forEach((file: any) => {
			const reader = new FileReader();

			reader.readAsDataURL(file);
			reader.onload = () => {
				const binaryStr = reader.result;

				console.log(binaryStr);
			};
		});
	}, []);

	const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
		useDropzone({ onDrop, accept: { "image/jpeg": [], "image/png": [] } });

	const [editImage, setEditImage] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	useEffect(() => {
		acceptedFiles.map((file) => {
			console.log(file);
		});

		fileRejections.map(({ file, errors }) => {
			console.log("rejected");
		});
	}, [acceptedFiles, fileRejections]);

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
						{editImage ? "Cancel" : "Edit"}
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
					<CloudUpload className="w-14 h-14 text-green-400" />
					<p className="text-sm text-center">
						Drag and drop some files here, or click to select files
					</p>
				</div>
			) : (
				<div>
					<div className="flex items-center justify-center flex-col gap-4 h-60 rounded-lg">
						<ImageIcon className="h-10 w-10 text-slate-500" />
						<p className="text-xs italic">No image</p>
					</div>
					{/* <div className="relative aspect-video">
						<Image
							alt="Upload"
							fill
							className="object-cover rounded-lg"
							src={"/test-image.jpg"}
						/>
					</div> */}
				</div>
			)}
		</div>
	);
};

export default CourseImage;
