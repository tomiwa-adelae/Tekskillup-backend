import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/redux-provider";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Tekskillup",
	description:
		"Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ReduxProvider>
					<Header />
					{children}
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
}
