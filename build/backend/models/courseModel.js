"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const lessonSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
    },
});
const courseSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    imageId: {
        type: String,
    },
    onlinePrice: {
        type: Number,
    },
    weekendPrice: {
        type: Number,
    },
    weekdayPrice: {
        type: Number,
    },
    lessons: [lessonSchema],
    isPublished: {
        type: Boolean,
        required: true,
        default: false,
    },
    duration: {
        type: String,
    },
    weekendStartDate: {
        type: String,
    },
    weekdayStartDate: {
        type: String,
    },
}, { timestamps: true });
const Course = mongoose_1.default.model("Course", courseSchema);
exports.default = Course;
