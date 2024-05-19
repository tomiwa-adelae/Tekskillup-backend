import { createSlice } from "@reduxjs/toolkit";

interface AuthProps {
	userInfo: string | null;
}

const initialState: AuthProps = {
	userInfo:
		typeof window !== "undefined" && localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo")!)
			: null,
};

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.userInfo = null;
			localStorage.clear();
		},
	},
});

export const { setCredentials, logout } = auth.actions;
export default auth.reducer;
