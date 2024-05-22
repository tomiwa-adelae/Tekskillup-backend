import express from "express";

import {
	getMyCourses,
	getRegisteredCoursesByAdmin,
	getRegisteredCoursesById,
	registerCourse,
} from "../controllers/registerCourseController";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();

router
	.route("/")
	.get(protect, admin, getRegisteredCoursesByAdmin)
	.post(protect, registerCourse);
router.route("/:id").get(protect, admin, getRegisteredCoursesById);
router.route("/mine/personal").get(protect, getMyCourses);

export default router;
