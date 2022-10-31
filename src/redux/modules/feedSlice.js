import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;

// InitialState
const initialState = {
	feedItem: {},
};

// 로그인
export const __addFeed = createAsyncThunk(
	"feed/addFeed",
	async (payload, thunkAPI) => {
		try {
			const token = localStorage.getItem("jwtToken");
			const response = await axios.post(`${BASE_URL}/feeds`, payload, {
				headers: {
					Authorization: `${token}`,
					"Content-Type": "multipart/form-data",
				},
			});
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 슬라이스
export const feedSlice = createSlice({
	name: "feed",
	initialState,
	reducers: {},
	extraReducers: {
		// __addFeed
		[__addFeed.fulfilled]: (state, action) => {
			console.log("@ __addFeed fullfilled", action.payload);
			state.feedItem = action.payload;
			console.log("@ __addFeed state change", state.feedItem);
		},
		[__addFeed.rejected]: (state, action) => {
			console.log("@ __addFeed rejected", action.payload);
		},
	},
});

export const {} = feedSlice.actions;
export default feedSlice.reducer;
