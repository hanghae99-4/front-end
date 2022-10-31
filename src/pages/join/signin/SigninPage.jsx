import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __signinThunk } from "../../../redux/modules/usersSlice";
// style
import styled from "styled-components";
import Div from "../../../common/Div";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import Layout from "../components/JoinLayout";
import StImg from "../components/StImg";
import img1 from "../../../static/images/screenshot1.png";

const SigninPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		memberId: "",
		password: "",
	});

	const onChangeIdhandler = e => {
		setUserInfo({ ...userInfo, memberId: e.target.value });
	};
	const onChangePwhandler = e => {
		setUserInfo({ ...userInfo, password: e.target.value });
	};

	const signinHandler = e => {
		dispatch(__signinThunk(userInfo));
		setUserInfo({
			memberId: "",
			password: "",
		});
	};

	return (
		<Layout>
			<StImgBox>
				<StImg variant="1" src={img1}></StImg>
			</StImgBox>
			<Div variant="join">
				<LogoBox>
					<Div variant="logo"></Div>
				</LogoBox>
				<InputBox>
					<Input
						variant="join"
						placeholder="아이디를 입력해주세요"
						value={userInfo.memberId}
						onChange={onChangeIdhandler}
					></Input>
					<Input
						variant="join"
						type="password"
						placeholder="비밀번호를 입력해주세요"
						value={userInfo.id}
						onChange={onChangePwhandler}
					/>
				</InputBox>
				<Button variant="longBlue" onClick={signinHandler}>
					로그인
				</Button>
				<Button
					variant="smallWhite"
					onClick={() => {
						navigate("/signup");
					}}
				>
					회원가입
				</Button>
			</Div>
		</Layout>
	);
};

export default SigninPage;

const InputBox = styled.div`
	margin-top: 75px;
	display: flex;
	flex-direction: column;
`;

const LogoBox = styled.div`
	padding: 10px;
	width: 175px;
	height: 51px;
`;

const StImgBox = styled.div`
	position: relative;
	align-self: center;
	background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png);
	background-position: -46px 0;
	background-size: 468.32px 634.15px;
	flex-basis: 380.32px;
	height: 581.15px;
	margin-bottom: 12px;
	margin-right: 32px;
	display: block;
`;
