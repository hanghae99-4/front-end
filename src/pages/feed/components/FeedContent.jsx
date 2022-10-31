import styled from "styled-components";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Text from "../../../common/Text";
import TextArea from "../../../common/TextArea";
import Button from "../../../common/Button";

const FeedContent = ({ userNickname }) => {
	return (
		<>
			<Div variant="contentArea">
				<NicknameWrap>
					<A variant="noMargin">{userNickname}</A>
				</NicknameWrap>
				<Text>우리집 고양이는 바깥 구경을 좋아해요!</Text>
				<A variant="comment">댓글 5개 모두 보기</A>
			</Div>
			<Div variant="commentArea">
				<TextArea variant="commentWrite" placeholder="댓글 달기..." />
				<Button variant="smallWhite-position">게시</Button>
			</Div>
		</>
	);
};

export default FeedContent;

const NicknameWrap = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	height: 34px;
`;
