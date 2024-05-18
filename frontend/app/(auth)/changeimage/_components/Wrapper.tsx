"use client";

import { Separator } from "@/components/ui/separator";
import { CircleUserRound, CloudUpload } from "lucide-react";
import React, { useCallback, useEffect } from "react";

import { useDropzone } from "react-dropzone";

const Wrapper = () => {
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

	useEffect(() => {
		acceptedFiles.map((file) => {
			console.log(file);
		});

		fileRejections.map(({ file, errors }) => {
			console.log("rejected");
		});
	}, [acceptedFiles, fileRejections]);

	return (
		<div className="mt-8">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-green-400">
					Profile image
				</h1>
				<CircleUserRound
					strokeWidth={0.75}
					className="text-green-400 w-60 h-60"
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
				<CloudUpload className="w-14 h-14 text-green-400" />
				<p className="text-sm text-center">
					Drag and drop some files here, or click to select files
				</p>
			</div>
		</div>
	);
};

export default Wrapper;
