import OurOffers from "./_components/OurOffers";
import Showcase from "./_components/Showcase";
import WhyTekskillup from "./_components/WhyTekskillup";
import StartToday from "./_components/StartToday";
import NeedHelp from "@/components/NeedHelp";
import ProcessShowcase from "./_components/ProcessShowcase";
import OurFacilities from "./_components/OurFacilities";
import NewlyAddedCourse from "./_components/NewlyAddedCourse";
import WhereGraduatesWorks from "@/components/WhereGraduatesWorks";
import { StudentTestimonials } from "@/components/StudentTestimonials";

const Home = async () => {
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
			<NewlyAddedCourse />
			<NeedHelp
				helpTitle="Need help choosing a course? Talk to an expert"
				helpDescription="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quas iste voluptates modi eos, amet iusto ea ad
						doloribus, laboriosam quidem odio consequuntur aliquam
						voluptatum dignissimos odit. Ut excepturi nostrum,
						praesentium obcaecati, nihil a illum consequatur rem
						nulla hic culpa aspernatur."
				helpButtonName="Get in touch"
				helpButtonLink="/contact"
			/>
		</>
	);
};

export default Home;
