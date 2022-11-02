import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import Margin from "../../../common/Margin";
import { __followThunk } from "../../../redux/modules/likeSlice";

function ProfilePageHeader({ memberId }) {
	const dispatch = useDispatch();

	return (
		<Layout variant="profilePageHeaderLayout">
			{/* 프로필 이미지 */}
			<Image variant="profileDefaultIconBig" />

			{/* 프로필 인포 영역 */}
			<Div variant="profileInfoArea">
				{/* 닉네임, 팔로우 버튼 영역 */}
				<Div variant="nicknameAndBtns">
					<StDiv variant="memberId">{memberId}</StDiv>
					<Margin margin="10px 0 0 0">
						<Button
							variant="smallBlue"
							onClick={() => dispatch(__followThunk(memberId))}
						>
							팔로우
						</Button>
					</Margin>
				</Div>

				{/* 게시물, 팔로워, 팔로우 수 영역 */}
				<Div variant="profileInfoCounterArea">
					<StDiv>게시물 5</StDiv>
					<StDiv>팔로워 5</StDiv>
					<StDiv>팔로우 5</StDiv>
				</Div>

				{/* 유저네임 영역 */}
				<StDiv variant="smallBold">username</StDiv>
			</Div>
		</Layout>
	);
}

export default ProfilePageHeader;

const StDiv = styled.div`
	font-size: 16px;
	${({ variant }) => {
		switch (variant) {
			case "memberId":
				return css`
					font-size: 28px;
					font-weight: 100;
				`;
			case "smallBold":
				return css`
					font-weight: 600;
				`;
			default:
				break;
		}
	}};
`;
