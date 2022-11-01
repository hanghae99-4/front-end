import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import users from "../modules/usersSlice";
import like from "../modules/likeSlice";

const store = configureStore({
	reducer: {
		users,
		modalSlice,
		like,
	},
});

export default store;
