import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import users from "../modules/usersSlice";

const store = configureStore({
	reducer: {
		users,
		modalSlice,
	},
});

export default store;
