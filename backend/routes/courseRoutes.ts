import express from "express";

import {
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
	uploadCourseImage,
} from "../controllers/courseController";
import { admin, protect } from "../middleware/authMiddleware";
import { courseLessonValidator, validate } from "../utils/validators";

const router = express.Router();

router.route("/published").get(getPublishedCourses);
router
	.route("/")
	.get(protect, admin, getCoursesByAdmin)
	.post(protect, admin, createCourse);
router
	.route("/:id/lessons")
	.post(protect, admin, validate(courseLessonValidator), createCourseLesson);
router
	.route("/:id/lessons/:lessonId")
	.delete(protect, admin, deleteCourseLesson);
router
	.route("/:id")
	.get(getCourseById)
	.put(protect, admin, updateCourse)
	.delete(protect, admin, deleteCourse);
router.route("/:id/publish").put(protect, admin, publishCourse);
router.route("/:id/unpublish").put(protect, admin, unpublishCourse);
router.route("/:id/image").put(protect, admin, uploadCourseImage);

export default router;
