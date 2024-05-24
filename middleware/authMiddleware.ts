import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import User from "../models/userModel";
import { NextFunction, Request, Response } from "express";

const protect = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		let token;

		token = req.cookies.jwt;

		if (token) {
			try {
				const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
					userId: string;
				};

				if (!decoded.userId) {
					res.status(400);
					throw new Error("User not found!");
				}

				// @ts-ignore
				req.user = await User.findById(decoded.userId).select(
					"-password"
				);

				next();
			} catch (error) {
				console.error(error);
				res.status(401);
				throw new Error("Not authorized, token failed!");
			}
		} else {
			res.status(401);
			throw new Error("Not authorized, no token!");
		}
	}
);

// User must be admin
const admin = (req: Request, res: Response, next: NextFunction) => {
	// @ts-ignore
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Not authorized as an admin");
	}
};

export { protect, admin };
