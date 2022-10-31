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
			state.isModalOpen = !state.isModalOpen;
		},
		updateIsEditorModalOpen: (state, action) => {
			state.isEditorModalOpen = !state.isEditorModalOpen;
		},
	},
});

export const { updateIsModalOpen, updateIsEditorModalOpen } =
	modalSlice.actions;

export default modalSlice.reducer;
