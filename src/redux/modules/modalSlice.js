import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModalOpen: false,
};

export const modalSlice = createSlice({
	name: "modalSlice",
	initialState,
	reducers: {
		updateIsModalOpen: (state, action) => {
			console.log("dispatch");
			state.isModalOpen = !state.isModalOpen;
		},
	},
});

export const { updateIsModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
