import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constants";

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	credentials: "include",
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": `${BASE_URL}`,
	},
});

async function baseQueryWithAuth(args: any, api: any, extra: any) {
	const result = await baseQuery(args, api, extra);
	// Dispatch the logout action on 401.
	if (result.error && result.error.status === 401) {
		// api.dispatch(logout());
	}
	return result;
}

export const apiSlice = createApi({
	baseQuery: baseQueryWithAuth, // Use the customized baseQuery
	tagTypes: ["User"],
	endpoints: (builder) => ({}),
});
