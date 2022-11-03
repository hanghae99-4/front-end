import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const BASE_URL = process.env.REACT_APP_SERVER;

//token
const token = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refresh-token");

// InitialState
const initialState = {
	feed: [],
	isChanged: false,
};

// 특정 피드 조회
export const __getFeed = createAsyncThunk(
	"feed/getFeed",
	async (feedId, thunkAPI) => {
		const response = await axios.get(`${BASE_URL}/feeds/${feedId}`, {
			headers: {
				Authorization: token,
				"Refresh-Token": refreshToken,
				"Content-Type": "application/json",
			},
		});
		if (response.data.success === true) {
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
	},
);

// 좋아요
export const __likeThunk = createAsyncThunk(
	"feed/like",
	async (feedId, thunkAPI) => {
		const response = await axios.get(`${BASE_URL}/feeds/${feedId}/heart`, {
			headers: {
				Authorization: token,
				"Refresh-Token": refreshToken,
				"Content-Type": "application/json",
			},
		});
		return thunkAPI.fulfillWithValue(response.data);
	},
);

// 리렌더링
export const __changeThunk = createAsyncThunk(
	"feed/change",
	async (payload, thunkAPI) => {
		return thunkAPI.fulfillWithValue();
	},
);

// 팔로우
export const __followThunk = createAsyncThunk(
	"feed/like",
	async (toMemberId, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}/follow/${toMemberId}`, {
				headers: {
					Authorization: token,
					"Refresh-Token": refreshToken,
					"Content-Type": "application/json",
				},
			});
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {}
	},
);

export const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {},
	extraReducers: {
		[__getFeed.fulfilled]: (state, action) => {
			state.feed = action.payload;
		},
		[__likeThunk.fulfilled]: (state, action) => {},
		[__changeThunk.pending]: (state, action) => {
			state.isChanged = true;
		},
		[__changeThunk.fulfilled]: (state, action) => {
			state.isChanged = false;
		},
	},
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;
