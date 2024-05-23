"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
	id: number;
	name: string;
	image: string;
};

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: Card[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState<Card[]>(items);

	useEffect(() => {
		startFlipping();

		return () => clearInterval(interval);
	}, []);
	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: Card[]) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()!); // move the last element to the front
				return newArray;
			});
		}, 15000);
	};

	return (
		<div className="relative h-96 w-full md:h-[30rem] md:w-full lg:h-5/6 lg:w-5/6 flex items-center justify-center">
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.id}
						className="absolute dark:bg-black bg-white h-96 w-full md:h-[30rem] md:w-full lg:h-5/6 lg:w-5/6 rounded-xl shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between overflow-hidden"
						style={{
							transformOrigin: "top center",
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, //  decrease z-index for the cards that are behind
						}}
					>
						<Image
							src={card.image}
							alt={card.name}
							className="object-cover aspect-square"
							height={1000}
							width={1000}
						/>
					</motion.div>
				);
			})}
		</div>
	);
};
