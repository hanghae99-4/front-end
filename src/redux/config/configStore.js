import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import users from "../modules/usersSlice";
import feedSlice from "../modules/feedSlice";
import like from "../modules/likeSlice";


const store = configureStore({
	reducer: {
		users,
		modalSlice,
		feedSlice,
		like,
	},
});

export default store;
