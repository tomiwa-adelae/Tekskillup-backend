"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseController_1 = require("../controllers/courseController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const validators_1 = require("../utils/validators");
const router = express_1.default.Router();
router.route("/published").get(courseController_1.getPublishedCourses);
router
    .route("/")
    .get(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.getCoursesByAdmin)
    .post(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.createCourse);
router
    .route("/:id/lessons")
    .post(authMiddleware_1.protect, authMiddleware_1.admin, (0, validators_1.validate)(validators_1.courseLessonValidator), courseController_1.createCourseLesson);
router
    .route("/:id/lessons/:lessonId")
    .delete(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.deleteCourseLesson);
router
    .route("/:id")
    .get(courseController_1.getCourseById)
    .put(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.updateCourse)
    .delete(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.deleteCourse);
router.route("/:id/publish").put(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.publishCourse);
router.route("/:id/unpublish").put(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.unpublishCourse);
router.route("/:id/image").put(authMiddleware_1.protect, authMiddleware_1.admin, courseController_1.uploadCourseImage);
exports.default = router;
