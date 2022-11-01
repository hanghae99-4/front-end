import styled from "styled-components";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Text from "../../../common/Text";
import TextArea from "../../../common/TextArea";
import Button from "../../../common/Button";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";
import { useDispatch } from "react-redux";
import { getFeedItem } from "../../../redux/modules/feedSlice";
import { useNavigate } from "react-router-dom";

const FeedContent = ({ feedItem, nickname, contents, memberId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};
	return (
		<>
			<Div variant="contentArea">
				<NicknameWrap>
					<A variant="noMargin" onClick={() => navigate(`/${memberId}`)}>
						{memberId}
					</A>
				</NicknameWrap>
				<Text>{contents}</Text>
				<A
					variant="comment"
					onClick={() => {
						dispatch(getFeedItem(feedItem));
						OpenModal();
					}}
				>
					댓글 5개 모두 보기
				</A>
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
