import React from "react";
import { Showcase } from "./_components/Showcase";
import CreatingImpact from "./_components/CreatingImpact";
import CoreValues from "./_components/CoreValues";
import OurTeams from "./_components/OurTeams";

const page = () => {
	return (
		<div>
			<Showcase />
			<CreatingImpact />
			<CoreValues />
			<OurTeams />
		</div>
	);
};

export default page;
