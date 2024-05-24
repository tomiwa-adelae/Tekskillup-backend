"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCourseImage = exports.deleteCourseLesson = exports.createCourseLesson = exports.deleteCourse = exports.unpublishCourse = exports.publishCourse = exports.updateCourse = exports.getCourseById = exports.createCourse = exports.getCoursesByAdmin = exports.getPublishedCourses = void 0;
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const courseModel_1 = __importDefault(require("../models/courseModel"));
const cloudinaryMiddleware_1 = __importDefault(require("../middleware/cloudinaryMiddleware"));
// @desc    Fetch all published course
// @route   GET /api/courses/published
// @access  Public
const getPublishedCourses = (0, asyncHandler_1.default)(async (req, res) => {
    const courses = await courseModel_1.default.find({ isPublished: true }).sort({
        createdAt: -1,
    });
    res.status(200).json(courses);
});
exports.getPublishedCourses = getPublishedCourses;
// @desc    Fetch all courses by admin
// @route   GET /api/courses
// @access  Private/Admin
const getCoursesByAdmin = (0, asyncHandler_1.default)(async (req, res) => {
    const keyword = req.query.keyword
        ? {
            $or: [
                {
                    title: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                },
                {
                    description: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                },
            ],
        }
        : {};
    const courses = await courseModel_1.default.find({ ...keyword }).sort({ createdAt: -1 });
    res.status(200).json(courses);
});
exports.getCoursesByAdmin = getCoursesByAdmin;
// @desc    Fetch a course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id).sort({ createdAt: -1 });
    if (course) {
        res.status(200).json(course);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.getCourseById = getCourseById;
// @desc    Create a new course by admin
// @route   POST /api/courses
// @access  Private/admin
const createCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const { title } = req.body;
    if (!title) {
        res.status(400);
        throw new Error("Course title is required!");
    }
    const course = await courseModel_1.default.create({
        user: req.user._id,
        title,
    });
    if (course) {
        res.status(201).json(course);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.createCourse = createCourse;
// @desc    Update a course details by admin
// @route   PUT /api/courses/:id
// @access  Private/admin
const updateCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id);
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
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.updateCourse = updateCourse;
// @desc    Create a course lesson by admin
// @route   POST /api/courses/:id/lessons
// @access  Private/admin
const createCourseLesson = (0, asyncHandler_1.default)(async (req, res) => {
    const { content } = req.body;
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        const lesson = {
            content,
        };
        course.lessons.push(lesson);
        const updatedCourse = await course.save();
        res.status(201).json(updatedCourse);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.createCourseLesson = createCourseLesson;
// @desc    Delete a course lesson by admin
// @route   DELETE /api/courses/:id/lessons/:lessonId
// @access  Private/admin
const deleteCourseLesson = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        course.lessons.pull({ _id: req.params.lessonId });
        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.deleteCourseLesson = deleteCourseLesson;
// @desc    Publish a course by admin
// @route   PUT /api/courses/:id/publish
// @access  Private/admin
const publishCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        const { title, description, image, onlinePrice, weekendPrice, weekdayPrice, weekendStartDate, weekdayStartDate, lessons, } = course;
        if (!title ||
            !description ||
            !image ||
            !onlinePrice ||
            !weekendPrice ||
            !weekdayPrice ||
            !weekendStartDate ||
            !weekdayStartDate ||
            lessons.length === 0) {
            res.status(401);
            throw new Error("Complete all fields!");
        }
        course.isPublished = true;
        const publishedCourse = await course.save();
        res.status(200).json(publishedCourse);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.publishCourse = publishCourse;
// @desc    Unpublish a course by admin
// @route   PUT /api/courses/:id/unpublish
// @access  Private/admin
const unpublishCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        course.isPublished = false;
        const unpublishedCourse = await course.save();
        res.status(200).json(unpublishedCourse);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.unpublishCourse = unpublishCourse;
// @desc    Delete a course by admin
// @route   DELETE /api/courses/:id
// @access  Private/admin
const deleteCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        if (course.imageId) {
            await cloudinaryMiddleware_1.default.uploader.destroy(course.imageId, {
                invalidate: true,
            });
            await courseModel_1.default.deleteOne({ _id: course._id });
            res.status(200).json({ message: "Course deleted successfully!" });
        }
        else {
            await courseModel_1.default.deleteOne({ _id: course._id });
            res.status(200).json({ message: "Course deleted successfully!" });
        }
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.deleteCourse = deleteCourse;
// @desc    Update a course image by admin
// @route   PUT /api/courses/:id/image
// @access  Private/admin
const uploadCourseImage = (0, asyncHandler_1.default)(async (req, res) => {
    const { image } = req.body;
    const course = await courseModel_1.default.findById(req.params.id);
    if (course) {
        if (course.imageId) {
            await cloudinaryMiddleware_1.default.uploader.destroy(course.imageId, {
                invalidate: true,
            });
            const uploadResponse = await cloudinaryMiddleware_1.default.uploader.upload(image, {
                upload_preset: "tekskillup",
            });
            course.image = uploadResponse.url;
            course.imageId = uploadResponse.public_id;
            const updatedCourse = await course.save();
            res.status(200).json(updatedCourse);
        }
        else {
            const uploadResponse = await cloudinaryMiddleware_1.default.uploader.upload(image, {
                upload_preset: "tekskillup",
            });
            course.image = uploadResponse.url;
            course.imageId = uploadResponse.public_id;
            const updatedCourse = await course.save();
            res.status(200).json(updatedCourse);
        }
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.uploadCourseImage = uploadCourseImage;
