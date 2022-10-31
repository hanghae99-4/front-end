import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// InitialState

const initialState = {
	isLike: false,
};

export const __Thunk = createAsyncThunk("like", async (userInfo, thunkAPI) => {
	try {
		return thunkAPI.fulfillWithValue();
	} catch (error) {
		return console.log(error);
	}
});

export const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {},
	extraReducers: {},
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;
