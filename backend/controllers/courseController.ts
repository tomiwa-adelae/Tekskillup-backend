import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import Course from "../models/courseModel";

declare module "express-serve-static-core" {
	export interface Request {
		user: any;
	}
}

// @desc    Fetch all published course
// @route   GET /api/courses/published
// @access  Public
const getPublishedCourses = asyncHandler(
	async (req: Request, res: Response) => {
		const courses = await Course.find({ isPublished: true }).sort({
			createdAt: -1,
		});

		res.status(200).json(courses);
	}
);

// @desc    Fetch all courses by admin
// @route   GET /api/courses
// @access  Private/Admin
const getCoursesByAdmin = asyncHandler(async (req: Request, res: Response) => {
	const keyword = req.query.keyword
		? {
				title: {
					$regex: req.query.keyword,
					$options: "i",
				},
		  }
		: {};
	const courses = await Course.find({ ...keyword }).sort({ createdAt: -1 });

	res.status(200).json(courses);
});

// @desc    Fetch a course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id).sort({ createdAt: -1 });

	if (course) {
		res.status(200).json(course);
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Create a new course by admin
// @route   POST /api/courses
// @access  Private/admin
const createCourse = asyncHandler(async (req: Request, res: Response) => {
	const { title } = req.body;

	if (!title) {
		res.status(400);
		throw new Error("Course title is required!");
	}

	const course = await Course.create({
		user: req.user._id,
		title,
	});

	if (course) {
		res.status(201).json({ message: "Course created successfully!" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Update a course details by admin
// @route   PUT /api/courses/:id
// @access  Private/admin
const updateCourse = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		course.title = req.body.title || course.title;
		course.description = req.body.description || course.description;
		course.image = req.body.image || course.image;
		course.onlinePrice = req.body.onlinePrice || course.onlinePrice;
		course.weekendPrice = req.body.weekendPrice || course.weekendPrice;
		course.weekdayPrice = req.body.weekdayPrice || course.weekdayPrice;
		course.isPublished = req.body.isPublished || course.isPublished;
		course.lessons = req.body.lessons || course.lessons;
		course.duration = req.body.duration || course.duration;
		course.weekendStartDate =
			req.body.weekendStartDate || course.weekendStartDate;
		course.weekdayStartDate =
			req.body.weekdayStartDate || course.weekdayStartDate;

		const updatedCourse = await course.save();

		res.status(200).json(updatedCourse);
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Create a course lesson by admin
// @route   POST /api/courses/:id/lessons
// @access  Private/admin
const createCourseLesson = asyncHandler(async (req: Request, res: Response) => {
	const { content } = req.body;

	const course = await Course.findById(req.params.id);

	if (course) {
		const lesson = {
			content,
		};

		course.lessons.push(lesson);
		await course.save();
		res.status(201).json({ message: "Lesson added successfully!" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Delete a course lesson by admin
// @route   DELETE /api/courses/:id/lessons/:lessonId
// @access  Private/admin
const deleteCourseLesson = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		course.lessons.pull({ _id: req.params.lessonId });
		await course.save();
		res.status(200).json({ message: "Lesson deleted successfully!" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Publish a course by admin
// @route   PUT /api/courses/:id/publish
// @access  Private/admin
const publishCourse = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		const {
			title,
			description,
			image,
			onlinePrice,
			weekendPrice,
			weekdayPrice,
		} = course;
		if (
			!title ||
			!description ||
			!image ||
			!onlinePrice ||
			!weekendPrice ||
			!weekdayPrice
		) {
			res.status(401);
			throw new Error("Complete all fields!");
		}

		course.isPublished = true;

		const publishedCourse = await course.save();

		res.status(200).json(publishedCourse);
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Unpublish a course by admin
// @route   PUT /api/courses/:id/unpublish
// @access  Private/admin
const unpublishCourse = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		course.isPublished = false;

		const unpublishedCourse = await course.save();

		res.status(200).json(unpublishedCourse);
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Delete a course by admin
// @route   DELETE /api/courses/:id
// @access  Private/admin
const deleteCourse = asyncHandler(async (req: Request, res: Response) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		await Course.deleteOne({ _id: course._id });
		res.status(200).json({ message: "Course deleted successfully!" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

export {
	getPublishedCourses,
	getCoursesByAdmin,
	createCourse,
	getCourseById,
	updateCourse,
	publishCourse,
	unpublishCourse,
	deleteCourse,
	createCourseLesson,
	deleteCourseLesson,
};
