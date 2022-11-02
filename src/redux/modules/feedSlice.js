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
	isLoading: false,
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

// 게시물 삭제
export const __delFeedItem = createAsyncThunk(
	"feed/delFeedItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.delete(`${BASE_URL}/feeds/${payload}`, {
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

// 게시물 수정
export const __updateFeedItem = createAsyncThunk(
	"feed/updateFeedItem",
	async (payload, thunkAPI) => {
		console.log("@ 수정 payload =>", payload);
		const editedItem = { contents: payload.contents };
		console.log("다시만든거", editedItem);
		try {
			const response = await axios.put(
				`${BASE_URL}/feeds/${payload.feedId}`,
				editedItem,
				{
					headers: {
						Authorization: token,
					},
				},
			);
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
			state.feedItem = action.payload;
		},
	},
	extraReducers: {
		//! 게시물 업로드
		[__addFeed.pending]: (state, action) => {
			state.isAddFeedLoading = true;
		},
		[__addFeed.fulfilled]: (state, action) => {
			// console.log("@ __addFeed fullfilled", action.payload);
			alert("게시물이 공유되었습니다.");
			state.feedItem = action.payload;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__addFeed.rejected]: (state, action) => {
			// console.log("@ __addFeed rejected", action.payload);
		},

		//! 프로필 페이지 조회
		[__getProFileFeedList.fulfilled]: (state, action) => {
			// console.log("@ __getProFileFeedList fullfilled", action.payload);
			state.profileFeedList = action.payload;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__getProFileFeedList.rejected]: (state, action) => {
			// console.log("@ __getProFileFeedList rejected", action.payload);
		},

		//! 메인 페이지 조회
		[__getMainFeedList.fulfilled]: (state, action) => {
			// console.log("@ __getMainFeedList fullfilled", action.payload);
			state.mainFeedList = action.payload.data;
			// console.log("@ __addFeed state change", state.feedItem);
		},
		[__getMainFeedList.rejected]: (state, action) => {
			// console.log("@ __getMainFeedList rejected", action.payload);
		},

		//! 게시물 삭제
		[__delFeedItem.fulfilled]: (state, action) => {
			// console.log("@ __delFeedItem fullfilled", action.payload);
			if (action.payload.success === false) {
				alert("작성자가 일치하지 않습니다.");
			}
			// hook은 여기서 못 부름
			// const dispatch = useDispatch();
			// dispatch(updateDetailModalOpen());
			state.isLoading = !state.isLoading;
		},
		[__delFeedItem.rejected]: (state, action) => {
			// console.log("@ __delFeedItem rejected", action.payload);
		},

		//! 게시물 수정
		[__updateFeedItem.fulfilled]: (state, action) => {
			console.log("@ __updateFeedItem fullfilled", action.payload);
		},
		[__updateFeedItem.rejected]: (state, action) => {
			console.log("@ __updateFeedItem rejected", action.payload);
		},
	},
});

export const { getFeedItem } = feedSlice.actions;
export default feedSlice.reducer;
