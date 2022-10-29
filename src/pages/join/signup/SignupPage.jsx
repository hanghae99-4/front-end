import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	__checkIdThunk,
	__checkNicknameThunk,
	__signupThunk,
} from "../../../redux/modules/usersSlice";
//style
import styled from "styled-components";
import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Input from "../../../common/Input";
import Layout from "../components/Layout";

function SignupPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		memberId: "",
		username: "",
		nickname: "",
		password: "",
	});

	const onChangeIdHandler = e => {
		setUserInfo({ ...userInfo, memberId: e.target.value });
	};
	const onChangeUsernameHandler = e => {
		setUserInfo({ ...userInfo, username: e.target.value });
	};
	const onChangeNicknameHandler = e => {
		setUserInfo({ ...userInfo, nickname: e.target.value });
	};
	const onChangePasswordHandler = e => {
		setUserInfo({ ...userInfo, password: e.target.value });
	};

	const checkIdHandler = e => {
		dispatch(__checkIdThunk(userInfo.memberId));
	};
	const checkNicknameHandler = e => {
		dispatch(__checkNicknameThunk(userInfo.nickname));
	};

	const signupHandler = () => {
		dispatch(__signupThunk({ userInfo, navigate }));
		setUserInfo({
			memberId: "",
			username: "",
			nickname: "",
			password: "",
		});
	};

	return (
		<Layout>
			<Div variant="join">
				<LogoBox>
					<Div variant="logo"></Div>
				</LogoBox>
				<StH2>친구들의 사진과 동영상을 보려면 가입하세요.</StH2>
				<Button variant="longBlue" fs="13px">
					⏹ Facebook으로 로그인
				</Button>
				<Button variant="smallwhite">또는</Button>
				<InputWrap>
					<Input
						variant="join_s"
						placeholder="아이디"
						value={userInfo.memberId}
						onChange={onChangeIdHandler}
					></Input>
					<Button variant="smallBlue" onClick={checkIdHandler}>
						중복확인
					</Button>
				</InputWrap>
				<InputWrap>
					<Input
						variant="join_s"
						placeholder="닉네임"
						value={userInfo.nickname}
						onChange={onChangeNicknameHandler}
					></Input>
					<Button variant="smallBlue" onClick={checkNicknameHandler}>
						중복확인
					</Button>
				</InputWrap>
				<Input
					variant="join"
					placeholder="성명"
					value={userInfo.username}
					onChange={onChangeUsernameHandler}
				></Input>
				<Input
					variant="join"
					placeholder="비밀번호"
					type="password"
					value={userInfo.password}
					onChange={onChangePasswordHandler}
				></Input>
				<P>
					저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
					업로드했을 수도 있습니다.
				</P>
				<Button variant="longBlue" onClick={signupHandler}>
					가입
				</Button>
				<P></P>
			</Div>
		</Layout>
	);
}

export default SignupPage;

const LogoBox = styled.div`
	margin-top: 10px;
	margin-bottom: 50px;
	padding: 10px;
	width: 175px;
	height: 51px;
`;

const StH2 = styled.h2`
	color: rgb(142, 142, 142);
	font-size: 17px;
	font-weight: 600;
	line-height: 20px;
	margin: 0 40px 10px;
	text-align: center;
`;

const P = styled.p`
	color: rgb(142, 142, 142);
	font-size: 12px;
	line-height: 16px;
	margin: 10px 40px 30px;
	text-align: center;
`;

const InputWrap = styled.div`
	display: flex;
`;
