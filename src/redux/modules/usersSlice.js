import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// InitialState

const initialState = {
	users: [],
	isLogin: false,
	loading: false,
	error: null,
};

// 로그인
export const __signinThunk = createAsyncThunk(
	"users/signin",
	async (userInfo, thunkAPI) => {
		try {
			const data = await axios.post(
				`http://13.125.198.85:8080/login`,
				userInfo,
			);
			localStorage.setItem("token", data.headers.authorization);
			localStorage.setItem("refresh-token", data.headers["refresh-token"]);
			if (data.data.success === true) {
				alert("로그인 성공");
				window.location.reload();
			}
			return thunkAPI.fulfillWithValue(data.data);
		} catch (error) {
			console.log(error);
			alert("로그인 실패!");
			return console.log(error);
		}
	},
);

// 회원가입
export const __signupThunk = createAsyncThunk(
	"users/signup",
	async ({ userInfo, navigate }, thunkAPI) => {
		try {
			const data = await axios.post(
				`http://13.125.198.85:8080/signup`,
				userInfo,
			);
			if (data.data.success === true) {
				alert("회원가입을 축하드립니다.");
				navigate("/");
			}
			console.log(userInfo);
			console.log(data);
			return thunkAPI.fulfillWithValue(data.data.success);
		} catch (error) {
			if (error.response.data.success === false) {
				alert(`${error.response.data.errorMessage}`);
			}
			return thunkAPI.rejectWithValue(error);
		}
	},
);

// 슬라이스
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: {
		[__signinThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[__signinThunk.fulfilled]: (state, action) => {
			state.loading = false;
			state.isLogin = action.payload;
			console.log(state.isLogin);
		},
		[__signupThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[__signupThunk.fulfilled]: (state, action) => {
			state.loading = false;
			console.log(action.payload);
			// state.users.push(action.payload)
		},
	},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
