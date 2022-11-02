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
			if (state.isModalOpen) {
				console.log("열렸다");
				document.body.style.overflow = "hidden";
			} else {
				console.log("닫혔다");
				document.body.style.overflow = "unset";
			}
		},
		updateIsEditorModalOpen: (state, action) => {
			state.isEditorModalOpen = !state.isEditorModalOpen;
		},
		updateDetailModalOpen: (state, action) => {
			state.isDetailModalOpen = !state.isDetailModalOpen;
			if (state.isDetailModalOpen) {
				console.log("열렸다");
				document.body.style.overflow = "hidden";
			} else {
				console.log("닫혔다");
				document.body.style.overflow = "unset";
			}
		},
	},
});

export const {
	updateIsModalOpen,
	updateIsEditorModalOpen,
	updateDetailModalOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
