import express from "express";

import {
	getMyCourses,
	getRegisteredCoursesByAdmin,
	getUserRegisteredCoursesByUserId,
	registerCourse,
} from "../controllers/registerCourseController";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();

router
	.route("/")
	.get(protect, admin, getRegisteredCoursesByAdmin)
	.post(protect, registerCourse);
router.route("/:id").get(protect, admin, getUserRegisteredCoursesByUserId);
router.route("/mine/personal").get(protect, getMyCourses);

export default router;
