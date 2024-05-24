"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const registerCourseSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    course: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
}, { timestamps: true });
const RegisterCourse = mongoose_1.default.model("RegisterCourse", registerCourseSchema);
exports.default = RegisterCourse;
