"use client";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "./constants";

// import { logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	credentials: "include",
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": `${BASE_URL}`,
	},
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["User", "Course"],
	endpoints: (builder) => ({}),
});
