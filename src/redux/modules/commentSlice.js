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
		const { feedId, comments } = payload;
		console.log(payload);
		try {
			const response = await axios.post(
				`${BASE_URL}/${feedId}/comments`,
				{ feedId: feedId, contents: comments },
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
		try {
			const response = await axios.delete(`${BASE_URL}/comments/${payload}`, {
				headers: {
					Authorization: token,
				},
			});
			console.log(response);
			return thunkAPI.fulfillWithValue(payload);
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
			state.commentList.push(action.payload);
		},
		[__addComment.rejected]: (state, action) => {
			console.log(action.payload);
		},
		// // 댓글 삭제
		[__delComment.fulfilled]: (state, action) => {
			state.commentList.filter(comments => comments.id !== action.payload);
		},
		[__delComment.rejected]: (state, action) => {},
	},
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
