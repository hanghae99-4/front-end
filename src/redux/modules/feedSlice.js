import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;
const token = localStorage.getItem("token");

// InitialState
const initialState = {
	feedItem: {},
	mainFeedList: [],
	profileFeedList: [],
	profile: [],
};

// 포스팅
export const __addFeed = createAsyncThunk(
	"feed/addFeed",
	async (payload, thunkAPI) => {
		try {
			const frm = new FormData();
			frm.append("image", payload.image);
			frm.append("contents", payload.contents);

			// formdata 콘솔로그
			// for (const value of frm.values()) {
			// 	console.log("폼데이터:", value);
			// }

			const response = await axios.post(`${BASE_URL}/feeds`, frm, {
				headers: {
					Authorization: token,
					"Content-Type": "multipart/form-data",
				},
			});
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

//프로필 페이지 리스트
export const __getProFileFeedList = createAsyncThunk(
	"feed/getProFileFeedList",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}/${payload}`, {
				headers: {
					Authorization: token,
				},
			});
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);
//프로필 유저 정보
export const __getProFile = createAsyncThunk(
	"feed/getProFile",
	async (payload, thunkAPI) => {
		console.log(payload);
		try {
			const response = await axios.get(`${BASE_URL}/${payload}`, {
				headers: {
					Authorization: token,
				},
			});
			console.log(response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 메인 페이지
export const __getMainFeedList = createAsyncThunk(
	"feed/getMainFeedList",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}/feeds`, {
				headers: {
					Authorization: token,
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
	reducers: {
		// feedItem state 관리
		getFeedItem: (state, action) => {
			console.log("state변경");
			state.feedItem = action.payload;
		},
	},
	extraReducers: {
		// 게시물 업로드
		[__addFeed.fulfilled]: (state, action) => {
			// console.log("@ __addFeed fullfilled", action.payload);
			state.feedItem = action.payload;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__addFeed.rejected]: (state, action) => {
			// console.log("@ __addFeed rejected", action.payload);
		},

		// 프로필 페이지 조회
		[__getProFileFeedList.fulfilled]: (state, action) => {
			// console.log("@ __getProFileFeedList fullfilled", action.payload);
			state.profileFeedList = action.payload;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__getProFileFeedList.rejected]: (state, action) => {
			// console.log("@ __getProFileFeedList rejected", action.payload);
		},

		// 메인 페이지 조회
		[__getMainFeedList.fulfilled]: (state, action) => {
			// console.log("@ __getMainFeedList fullfilled", action.payload);
			state.mainFeedList = action.payload.data;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__getMainFeedList.rejected]: (state, action) => {
			// console.log("@ __getMainFeedList rejected", action.payload);
		},
	},
});

export const { getFeedItem } = feedSlice.actions;
export default feedSlice.reducer;
