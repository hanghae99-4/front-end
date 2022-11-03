import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const BASE_URL = `http://13.125.198.85:8080`;

//token
const token = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refresh-token");

// InitialState
const initialState = {
	feed: [],
	isChanged: false,
	reduxLike: false,
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
		console.log(response.data.data);
		return thunkAPI.fulfillWithValue(response.data.data);
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

			console.log(response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return console.log(error);
		}
	},
);

export const __likeChange = createAsyncThunk(
	"feed/like",
	async (like, thunkAPI) => {
		return thunkAPI.fulfillWithValue(like);
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

		[__likeThunk.fulfilled]: (state, action) => {
			state.reduxLike = action.payload;
		},
		[__likeChange.fulfilled]: (state, action) => {
			state.reduxLike = action.payload;
		},

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
