import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

import authReducer from "./slices/authSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			[apiSlice.reducerPath]: apiSlice.reducer,
			auth: authReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(apiSlice.middleware),
		devTools: true,
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
