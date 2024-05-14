import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartToday = () => {
	return (
		<div className="container flex flex-col lg:flex-row items-start justify-center gap-8 pb-16">
			<Image
				src={"/speaker-two.jpg"}
				alt="Speakers"
				width={1000}
				height={1000}
				className="w-full lg:w-2/5 rounded-2xl"
			/>
			<div>
				<h5 className="uppercase text-xs lg:text-sm">
					Start your course today
				</h5>
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					Acquire a Tech skill to transcend your current earning
					status
				</h3>
				<p className="text-small">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quaerat, deserunt molestiae amet incidunt dolorem fuga eum
					obcaecati eaque neque. Doloremque quia earum odit excepturi
					magnam quis nulla debitis totam saepe qui quae, omnis, id
					vitae porro tempora a accusantium neque voluptas vero minus
					fugit beatae ipsum reiciendis non? At, vitae?
				</p>
				<Button
					className="bg-green-400 px-12 py-8 text-lg mt-8 shadow"
					asChild
				>
					<Link href="/our-courses">Get started</Link>
				</Button>
			</div>
		</div>
	);
};

export default StartToday;
