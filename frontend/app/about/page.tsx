import React from "react";
import { Showcase } from "./_components/Showcase";
import CreatingImpact from "./_components/CreatingImpact";
import CoreValues from "./_components/CoreValues";
import OurTeams from "./_components/OurTeams";
import NeedHelp from "@/components/NeedHelp";

const page = () => {
	return (
		<div>
			<Showcase />
			<CreatingImpact />
			<CoreValues />
			<OurTeams />
			<NeedHelp
				helpTitle="Still have some question?"
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
