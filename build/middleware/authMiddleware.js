"use strict";
// import jwt from "jsonwebtoken";
// import asyncHandler from "./asyncHandler";
// import User from "../models/userModel";
// import { NextFunction, Request, Response } from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.protect = void 0;
// const protect = asyncHandler(
// 	async (req: Request, res: Response, next: NextFunction) => {
// 		let token;
// 		token = req.cookies.jwt;
// 		if (token) {
// 			try {
// 				const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
// 					userId: string;
// 				};
// 				if (!decoded.userId) {
// 					res.status(400);
// 					throw new Error("User not found!");
// 				}
// 				// @ts-ignore
// 				req.user = await User.findById(decoded.userId).select(
// 					"-password"
// 				);
// 				next();
// 			} catch (error) {
// 				console.error(error);
// 				res.status(401);
// 				throw new Error("Not authorized, token failed!");
// 			}
// 		} else {
// 			res.status(401);
// 			throw new Error("Not authorized, no token!");
// 		}
// 	}
// );
// // User must be admin
// const admin = (req: Request, res: Response, next: NextFunction) => {
// 	// @ts-ignore
// 	if (req.user && req.user.isAdmin) {
// 		next();
// 	} else {
// 		res.status(401);
// 		throw new Error("Not authorized as an admin");
// 	}
// };
// export { protect, admin };
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = __importDefault(require("./asyncHandler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const protect = (0, asyncHandler_1.default)(async (req, res, next) => {
    const token = req.header("x-auth-token");
    if (token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (!decoded.userId) {
                res.status(400);
                throw new Error("User not found!");
            }
            // @ts-ignore
            req.user = await userModel_1.default.findById(decoded.userId).select("-password");
            next();
        }
        catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed!");
        }
    }
    else {
        res.status(401);
        throw new Error("Not authorized, no token!");
    }
});
exports.protect = protect;
// User must be admin
const admin = (req, res, next) => {
    // @ts-ignore
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
};
exports.admin = admin;
