import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import courseReducer from "./slices/courseSlice";

export function makeStore() {
	return configureStore({
		reducer: {
			[apiSlice.reducerPath]: apiSlice.reducer,
			auth: authReducer,
			course: courseReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(apiSlice.middleware),
		devTools: true,
	});
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
