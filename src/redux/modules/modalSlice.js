import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModalOpen: false,
	isEditorModalOpen: false,
	isDetailModalOpen: false,
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
		updateDetailModalOpen: (state, action) => {
			state.isDetailModalOpen = !state.isDetailModalOpen;
		},
	},
});

export const {
	updateIsModalOpen,
	updateIsEditorModalOpen,
	updateDetailModalOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
