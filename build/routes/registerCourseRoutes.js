"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerCourseController_1 = require("../controllers/registerCourseController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router
    .route("/")
    .get(authMiddleware_1.protect, authMiddleware_1.admin, registerCourseController_1.getRegisteredCoursesByAdmin)
    .post(authMiddleware_1.protect, registerCourseController_1.registerCourse);
router.route("/:id").get(authMiddleware_1.protect, authMiddleware_1.admin, registerCourseController_1.getUserRegisteredCoursesByUserId);
router.route("/mine/personal").get(authMiddleware_1.protect, registerCourseController_1.getMyCourses);
exports.default = router;
