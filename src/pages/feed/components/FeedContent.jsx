import styled from "styled-components";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Text from "../../../common/Text";
import TextArea from "../../../common/TextArea";
import Button from "../../../common/Button";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";
import { useDispatch } from "react-redux";
import { getFeedItem } from "../../../redux/modules/feedSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { __addComment } from "../../../redux/modules/commentSlice";
import { __changeThunk } from "../../../redux/modules/likeSlice";

const FeedContent = ({
	feedItem,
	nickname,
	contents,
	memberId,
	feedId,
	commentsList,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};

	// Add Comment
	const [comment, setComment] = useState("");

	const commentChange = e => {
		setComment(e.target.value);
	};
	const addCommentHandler = () => {
		const commentInfo = { feedId: feedId, comments: comment };
		dispatch(__addComment(commentInfo));
		dispatch(__changeThunk());
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
				{commentsList.length === 0 ? null : (
					<A
						variant="comment"
						onClick={() => {
							dispatch(getFeedItem(feedItem));
							OpenModal();
						}}
					>
						댓글 {commentsList.length}개 모두 보기
					</A>
				)}
			</Div>
			<Div variant="commentArea">
				<TextArea
					variant="commentWrite"
					value={comment}
					onChange={commentChange}
					placeholder="댓글 달기..."
				/>
				<Button
					variant="smallWhite-position"
					onClick={() => {
						addCommentHandler();
						setComment("");
						dispatch();
					}}
				>
					게시
				</Button>
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
