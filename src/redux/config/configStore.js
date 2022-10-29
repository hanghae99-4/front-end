import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";

export const store = configureStore({
	reducer: {
		modalSlice,
	},
});

export default store;
