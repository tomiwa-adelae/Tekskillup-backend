import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import RegisterCourse from "../models/registeredCourseModel";

// @desc    Fetch all registered courses by admin
// @route   GET /api/register-courses
// @access  Private/Admin
const getRegisteredCoursesByAdmin = asyncHandler(
	async (req: Request, res: Response) => {
		const courses = await RegisterCourse.find().sort({ createdAt: -1 });

		res.status(200).json(courses);
	}
);

// @desc    Fetch all registered courses of a student
// @route   GET /api/register-courses/:id
// @access  Private/Admin
const getRegisteredCoursesById = asyncHandler(
	async (req: Request, res: Response) => {
		const courses = await RegisterCourse.findById({ user: req.params.id })
			.sort({ createdAt: -1 })
			.populate({
				path: "course",
				populate: { path: "user" },
			});

		res.status(200).json(courses);
	}
);

// Desc Get all registered courses for a user
// @route GET /api/register-courses/mine
// @access Private
const getMyCourses = asyncHandler(async (req: Request, res: Response) => {
	const courses = await RegisterCourse.find({ user: req.user._id }).sort({
		createdAt: -1,
	});

	res.status(200).json(courses);
});

// @desc    Register a course by student
// @route   POST /api/register-courses
// @access  Private
const registerCourse = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.body;
	const course = await RegisterCourse.create({
		user: req.user._id,
		course: id,
	});

	if (course) {
		res.status(201).json({ message: "Successful registration for course" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

export {
	getRegisteredCoursesByAdmin,
	getRegisteredCoursesById,
	registerCourse,
	getMyCourses,
};
