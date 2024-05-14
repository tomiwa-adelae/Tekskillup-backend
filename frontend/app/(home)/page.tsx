import { Separator } from "@/components/ui/separator";
import OurOffers from "./_components/OurOffers";
import Showcase from "./_components/Showcase";
import { StudentTestimonials } from "./_components/StudentTestimonials";
import WhereGraduatesWorks from "./_components/WhereGraduatesWorks";
import WhyTekskillup from "./_components/WhyTekskillup";
import StartToday from "./_components/StartToday";

export default function Home() {
	return (
		<>
			<Showcase />
			<WhyTekskillup />
			<OurOffers />
			<WhereGraduatesWorks />
			<StudentTestimonials />
			<div className="container">
				<Separator className="bg-green-400" />
			</div>
			<StartToday />
		</>
	);
}
