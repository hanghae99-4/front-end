import styled from "styled-components";
import Div from "../../../common/Div";
import StImg from "../components/StImg";
import img1 from "../../../static/images/screenshot1.png";
import Input from "../../../common/Input";
import Button from "../../../common/Button";

const SigninPage = () => {
	return (
		<Main>
			<StArticle>
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
							placeholder="전화번호, 사용자 이름 또는 이메일"
						></Input>
						<Input variant="join" placeholder="비밀번호"></Input>
					</InputBox>
					<Button variant="longBlue">로그인</Button>
				</Div>
			</StArticle>
		</Main>
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

const Main = styled.div`
	align-items: stretch;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0;
	order: 4;
	padding: 0;
	position: relative;
	background-color: rgb(250, 250, 250);
`;

const StArticle = styled.article`
	justify-content: center;
	padding-left: 0;
	width: 100%;
	margin-top: 32px;
	margin-bottom: 0;
	padding-top: 0;
	padding-right: 0;
	padding-bottom: 32px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	flex-grow: 1;
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
