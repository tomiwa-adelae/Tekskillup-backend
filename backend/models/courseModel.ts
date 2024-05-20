import mongoose from "mongoose";

interface ILesson extends mongoose.Document {
	content: string;
}

const lessonSchema: mongoose.Schema<ILesson> = new mongoose.Schema({
	content: {
		type: String,
	},
});

const courseSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
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
	},
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
