import React from "react";
import Showcase from "./_components/Showcase";
import NeedHelp from "@/components/NeedHelp";

const page = () => {
	return (
		<div>
			<Showcase />
			<NeedHelp
				helpTitle="Need help with your account? Talk to an expert"
				helpDescription="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quas iste voluptates modi eos, amet iusto ea ad
						doloribus, laboriosam quidem odio consequuntur aliquam
						voluptatum dignissimos odit. Ut excepturi nostrum,
						praesentium obcaecati, nihil a illum consequatur rem
						nulla hic culpa aspernatur."
				helpButtonName="Get in touch"
				helpButtonLink="/contact"
			/>
		</div>
	);
};

export default page;
