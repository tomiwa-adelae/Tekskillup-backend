import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: object) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: "14d",
	});

	res.cookie("jwt", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV! !== "development",
		sameSite: "none",
		maxAge: 14 * 24 * 60 * 60 * 1000,
	});
};

export default generateToken;
