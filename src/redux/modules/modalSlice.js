import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModalOpen: false,
	isEditorModalOpen: false,
};

export const modalSlice = createSlice({
	name: "modalSlice",
	initialState,
	reducers: {
		updateIsModalOpen: (state, action) => {
			console.log("dispatch");
			state.isModalOpen = !state.isModalOpen;
		},
		updateIsEditorModalOpen: (state, action) => {
			console.log("dispatch");
			state.isEditorModalOpen = !state.isEditorModalOpen;
		},
	},
});

export const { updateIsModalOpen, updateIsEditorModalOpen } =
	modalSlice.actions;

export default modalSlice.reducer;
