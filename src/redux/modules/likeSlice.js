import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const BASE_URL = process.env.REACT_APP_SERVER;

//token
const token = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refresh-token");

// InitialState
const initialState = {
	Post: [],
};

export const __getFeed = createAsyncThunk(
	"feed/getFeed",
	async (feedId, thunkAPI) => {
		const response = await axios.get(`${BASE_URL}/feeds`, {
			headers: {
				Authorization: token,
				"Refresh-Token": refreshToken,
				"Content-Type": "application/json",
			},
		});
		console.log(response);
		if (response.data.success === true) {
			return response.data.data;
		} else {
			return null;
		}
	},
);

export const __likeThunk = createAsyncThunk(
	"feed/like",
	async (feedId, thunkAPI) => {
		console.log(feedId);
		const response = await axios.get(`${BASE_URL}/feeds/${feedId}/heart`, {
			headers: {
				Authorization: token,
				"Refresh-Token": refreshToken,
				"Content-Type": "application/json",
			},
		});
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data);
	},
);

export const __followThunk = createAsyncThunk(
	"feed/like",
	async (toMemberId, thunkAPI) => {
		console.log(toMemberId);
		try {
			const response = await axios.get(`${BASE_URL}/follow/${toMemberId}`, {
				headers: {
					Authorization: token,
					"Refresh-Token": refreshToken,
					"Content-Type": "application/json",
				},
			});
			console.log(response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return console.log(error);
		}
	},
);

export const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {},
	extraReducers: {
		[__getFeed.fulfilled]: (state, action) => {
			state.post = action.payload;
		},
		[__likeThunk.fulfilled]: (state, action) => {
			console.log(state.post);
		},
	},
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;