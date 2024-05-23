"use client";

import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export const ConfettiProvider = () => {
	const { width, height } = useWindowSize();
	return (
		<ReactConfetti
			width={width}
			height={height}
			className="pointer-events-none z-[100]"
			numberOfPieces={500}
			recycle={false}
		/>
	);
};
