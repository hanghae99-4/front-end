import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// InitialState

const initialState = {
	Post: [],
};

export const __getFeed = createAsyncThunk(
	"feed/getFeed",
	async (feedId, thunkAPI) => {
		const response = await axios.get(
			`http://13.125.198.85:8080/feeds/${feedId}`,
		);
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
		try {
			const token = localStorage.getItem("token");
			const refreshToken = localStorage.getItem("refresh-token");
			const response = await axios.post(
				`http://13.125.198.85:8080/feeds/${feedId}/heart}`,
				{
					headers: {
						Authorization: `${token}`,
						"refresh-token": `${refreshToken}`,
					},
				},
			);
			console.log(response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
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
