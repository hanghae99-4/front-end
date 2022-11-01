import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import users from "../modules/usersSlice";
import feedSlice from "../modules/feedSlice";
import like from "../modules/likeSlice";
import comments from "../modules/commentSlice";

const store = configureStore({
	reducer: {
		users,
		modalSlice,
		feedSlice,
		like,
		comments,
	},
});

export default store;
