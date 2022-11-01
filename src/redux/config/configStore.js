import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import users from "../modules/usersSlice";
import feedSlice from "../modules/feedSlice";

const store = configureStore({
	reducer: {
		users,
		modalSlice,
		feedSlice,
	},
});

export default store;
