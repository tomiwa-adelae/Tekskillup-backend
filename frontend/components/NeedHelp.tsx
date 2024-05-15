import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NeedHelp = () => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<div
					className="bg-green-400 bg-no-repeat bg-right bg-auto py-8 px-12 rounded-xl bg-fixed"
					style={{ backgroundImage: `url(/phone-icon.png)` }}
				>
					<h3 className="text-white my-5 text-2xl lg:text-3xl">
						Need help choosing a course? Talk to an expert
					</h3>
					<p className="text-sm text-gray-100 lg:w-8/12 mb-8">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quas iste voluptates modi eos, amet iusto ea ad
						doloribus, laboriosam quidem odio consequuntur aliquam
						voluptatum dignissimos odit. Ut excepturi nostrum,
						praesentium obcaecati, nihil a illum consequatur rem
						nulla hic culpa aspernatur.
					</p>
					<Button
						className="bg-transparent outline outline-2 outline-white py-8 px-8 uppercase"
						asChild
					>
						<Link href="/contact">Get in touch</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NeedHelp;
