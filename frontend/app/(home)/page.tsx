import { Separator } from "@/components/ui/separator";
import OurOffers from "./_components/OurOffers";
import Showcase from "./_components/Showcase";
import { StudentTestimonials } from "./_components/StudentTestimonials";
import WhereGraduatesWorks from "./_components/WhereGraduatesWorks";
import WhyTekskillup from "./_components/WhyTekskillup";
import StartToday from "./_components/StartToday";
import NeedHelp from "@/components/NeedHelp";
import ProcessShowcase from "./_components/ProcessShowcase";
import OurFacilities from "./_components/OurFacilities";
import UpcomingClasses from "./_components/UpcomingClasses";

export default function Home() {
	return (
		<>
			<Showcase />
			<WhyTekskillup />
			<OurOffers />
			<WhereGraduatesWorks />
			<StudentTestimonials />
			<StartToday />
			<ProcessShowcase />
			<OurFacilities />
			<UpcomingClasses />
			<NeedHelp />
		</>
	);
}
