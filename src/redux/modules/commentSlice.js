import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;
const token = localStorage.getItem("token");

// InitialState
const initialState = {
	commentList: [],
};

// 댓글 등록
export const __addComment = createAsyncThunk(
	"feed/addComment",
	async (payload, thunkAPI) => {
		console.log(payload);
		const { feedId, comments } = payload;
		try {
			const response = await axios.post(
				`${BASE_URL}`,
				{ feedId: feedId, comments: comments },
				{
					headers: {
						Authorization: token,
					},
				},
			);
			console.log(response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);
// 댓글삭제
export const __delComment = createAsyncThunk(
	"feed/delComment",
	async (payload, thunkAPI) => {
		console.log(payload);
		const { feedId, commentId } = payload;
		try {
			const response = await axios.post(
				`${BASE_URL}/feed/${feedId}/commnets/${commentId}`,
				{
					headers: {
						Authorization: token,
					},
				},
			);
			console.log(response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 슬라이스
export const commentSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers: {
		// 댓글 등록
		[__addComment.fulfilled]: (state, action) => {
			console.log("sucsess");
		},
		[__addComment.rejected]: (state, action) => {
			console.log(action.payload);
		},
		// // 댓글 삭제
		[__delComment.fulfilled]: (state, action) => {
			console.log("sucsess");
		},
		[__delComment.rejected]: (state, action) => {
			console.log(action.payload);
		},
	},
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
