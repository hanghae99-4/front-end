import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// InitialState

const initialState = {
	users: [],
	loading: false,
	error: null,
};

export const __Signin = createAsyncThunk(
	"users/signin",
	async ({ userInfo, navigate }, thunkAPI) => {
		try {
			const data = await axios.post(
				`http://13.125.198.85:8080/login`,
				userInfo,
			);
			console.log(data);
			// localStorage.setItem("token", data.headers.authorization);
			// localStorage.setItem("refresh-token", data.headers.refreshtoken);
			// if (data.data.success === true) {
			// 	alert("로그인 성공");
			// 	navigate("/");
			// }
			return thunkAPI.fulfillWithValue(data.data);
		} catch (error) {
			console.log(error);
			alert("로그인 실패!");
			return console.log(error);
		}
	},
);

// 슬라이스
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: {
		[__Signin.pending]: (state, action) => {
			state.loading = true;
		},
		[__Signin.fulfilled]: (state, action) => {
			state.loading = false;
			console.log(action.payload);
		},
	},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
