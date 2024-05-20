import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CourseProps {
	publishedCourses: {}[];
}

const initialState: CourseProps = {
	publishedCourses: [],
};

const courseSlice = createSlice({
	name: "course",
	initialState,
	reducers: {
		getPublishedCourses: (state: any, action: PayloadAction) => {
			state.publishedCourses = action.payload;
		},
	},
});

export const { getPublishedCourses } = courseSlice.actions;

export default courseSlice.reducer;
