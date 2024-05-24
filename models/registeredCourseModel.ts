import mongoose from "mongoose";

const registerCourseSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		course: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Course",
		},
	},
	{ timestamps: true }
);

const RegisterCourse = mongoose.model("RegisterCourse", registerCourseSchema);

export default RegisterCourse;
