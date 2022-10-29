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
				alert("환영합니다!");
				window.location.reload();
			}
			return thunkAPI.fulfillWithValue(data.data);
		} catch (error) {
			alert("아이디 혹은 비밀번호를 확인해주세요");
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
			return thunkAPI.fulfillWithValue(data.data.success);
		} catch (error) {
			console.log(error);
		}
	},
);

// Check ID
export const __checkIdThunk = createAsyncThunk(
	"users/signup/checkId",
	async (memberId, thunkAPI) => {
		try {
			const data = await axios.get(
				`http://13.125.198.85:8080/signup/checkid/${memberId}`,
			);
			if (data.data.success === true) {
				alert(`${data.data.data}`);
			}
			return console.log(data.data);
		} catch (error) {
			console.log(error);
		}
	},
);

// Check Nickname
export const __checkNicknameThunk = createAsyncThunk(
	"users/signup/checkNickname",
	async (nickname, thunkAPI) => {
		try {
			const checkNickname = { nickname: nickname };
			console.log(checkNickname);
			const data = await axios.get(
				`http://13.125.198.85:8080/signup/checknickname/${nickname}`,
			);
			if (data.data.success === true) {
				alert("사용 가능한 닉네임입니다");
			}
			return console.log(data.data);
		} catch (error) {
			console.log(error);
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
		},
		[__signupThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[__signupThunk.fulfilled]: (state, action) => {
			state.loading = false;
			state.users.push(action.payload);
		},
		[__checkIdThunk.fulfilled]: (state, action) => {
			state.loading = false;
		},
		[__checkIdThunk.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
