import React from "react";

import Faq from "./Faq";
import MoreQuestions from "./MoreQuestions";

interface QuestionsProps {
	question: string;
	answer: string;
}
[];

const Faqs = () => {
	const questions: QuestionsProps[] = [
		{
			question: "What is Tekskillup?",
			answer: "The best",
		},
		{
			question: "What is Tekskillup?",
			answer: "The best",
		},
		{
			question: "What is Tekskillup?",
			answer: "The best",
		},
		{
			question: "What is Tekskillup?",
			answer: "The best",
		},
		{
			question: "What is Tekskillup?",
			answer: "The best",
		},
	];

	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<div className="px-0 md:px-10 mb-8">
					{questions.map((question, index) => (
						<Faq
							key={index}
							question={question.question}
							answer={question.answer}
						/>
					))}
				</div>
				<MoreQuestions />
			</div>
		</div>
	);
};

export default Faqs;
