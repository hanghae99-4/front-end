import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://13.125.198.85:8080`;
const token = localStorage.getItem("token");

// InitialState
const initialState = {
	feedItem: {},
	mainFeedList: [],
	profileFeedList: [],
	profile: [],
	isLoading: false,
	isUpdate: false,
};

//! 게시물 업로드
export const __addFeed = createAsyncThunk(
	"feed/addFeed",
	async (payload, thunkAPI) => {
		try {
			const frm = new FormData();
			frm.append("image", payload.image);
			frm.append("contents", payload.contents);

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

//! 검색
export const __requestSearch = createAsyncThunk(
	"feed/requestSearch",
	async (payload, thunkAPI) => {
		console.log("payload", payload);
		try {
			const response = await axios.post(`${BASE_URL}/search`, payload, {
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

//! 프로필 페이지 리스트
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

//! 프로필 유저 정보
export const __getProFile = createAsyncThunk(
	"feed/getProFile",
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

//! 메인 페이지 피드 리스트
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

//! 게시물 삭제
export const __delFeedItem = createAsyncThunk(
	"feed/delFeedItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.delete(`${BASE_URL}/feeds/${payload}`, {
				headers: {
					Authorization: token,
				},
			});
			return thunkAPI.fulfillWithValue(payload);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

//! 특정 피드 상세 페이지 조회
export const __getFeedItem = createAsyncThunk(
	"feed/getFeedItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}/feeds/${payload}`, {
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

//! 게시물 수정
export const __updateFeedItem = createAsyncThunk(
	"feed/updateFeedItem",
	async (payload, thunkAPI) => {
		const frm = new FormData();
		frm.append("contents", payload.contents);
		try {
			const response = await axios.put(
				`${BASE_URL}/feeds/${payload.feedId}`,
				frm,
				{
					headers: {
						Authorization: token,
					},
				},
			);
			return thunkAPI.fulfillWithValue(response.data);
			// return thunkAPI.fulfillWithValue(response.data);
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
			state.feedItem = action.payload;
		},
		changeFeedItemLike: (state, action) => {
			state.feedItem = {
				...state.feedItem,
				heartByMe: action.payload.heartByMe,
				heartNum: action.payload.heartNum,
			};
		},
		delFeedComment: (state, action) => {
			state.feedItem.commentsList = state.feedItem.commentsList.filter(
				comment => comment.id !== action.payload,
			);
		},
	},
	extraReducers: {
		//! 게시물 업로드
		[__addFeed.pending]: (state, action) => {
			state.isAddFeedLoading = true;
		},
		[__addFeed.fulfilled]: (state, action) => {
			const newFeedItem = action.payload.data;
			alert("게시물이 공유되었습니다.");
			state.profileFeedList.push(newFeedItem);
			state.mainFeedList.push(newFeedItem);
		},
		[__addFeed.rejected]: (state, action) => {},

		//! 검색
		[__requestSearch.fulfilled]: (state, action) => {
			console.log("__requestSearch fullfilled", action.payload);
		},
		[__requestSearch.rejected]: (state, action) => {
			console.log("__requestSearch rejected", action.payload);
		},
		//! 유저 정보 조회
		[__getProFile.fulfilled]: (state, action) => {
			state.profile = action.payload;
		},
		[__getProFile.rejected]: (state, action) => {},

		//! 프로필 페이지 조회
		[__getProFileFeedList.fulfilled]: (state, action) => {
			state.profileFeedList = action.payload.feedsList;
		},
		[__getProFileFeedList.rejected]: (state, action) => {},

		//! 메인 페이지 조회
		[__getMainFeedList.fulfilled]: (state, action) => {
			state.mainFeedList = action.payload.data;
		},
		[__getMainFeedList.rejected]: (state, action) => {},

		//! 게시물 삭제
		[__delFeedItem.fulfilled]: (state, action) => {
			state.profileFeedList = state.profileFeedList.filter(
				feedItem => feedItem.feedId !== action.payload,
			);
			state.mainFeedList = state.mainFeedList.filter(
				feedItem => feedItem.feedId !== action.payload,
			);
		},
		[__delFeedItem.rejected]: (state, action) => {},

		//! 게시물 수정
		[__updateFeedItem.fulfilled]: (state, action) => {
			const editedItem = action.payload.data.contents;
			state.feedItem = { ...state.feedItem, contents: editedItem };
			state.profileFeedList = state.profileFeedList.map(feedItem => {
				return feedItem.feedId === action.payload.data.feedId
					? action.payload.data
					: feedItem;
			});
			state.mainFeedList = state.mainFeedList.map(feedItem => {
				return feedItem.feedId === action.payload.data.feedId
					? action.payload.data
					: feedItem;
			});
		},
		[__updateFeedItem.rejected]: (state, action) => {},
	},
});

export const {
	getFeedItem,
	changeFeedItemLike,
	addFeedComment,
	delFeedComment,
} = feedSlice.actions;
export default feedSlice.reducer;
