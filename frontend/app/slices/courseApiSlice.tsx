"use client";

import { apiSlice } from "./apiSlice";
import { COURSES_URL } from "./constants";

export const courseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allPublishedCourses: builder.mutation({
			query: () => ({
				url: `${COURSES_URL}/published`,
				method: "GET",
			}),
		}),
	}),
});

export const { useAllPublishedCoursesMutation } = courseApiSlice;
