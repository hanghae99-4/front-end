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
import { useEffect, useState } from "react";
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

	useEffect(() => {
		dispatch(__changeThunk());
	}, [dispatch]);

	// Add Comment
	const [comment, setComment] = useState("");
	const [isChanged, setIsChanged] = useState(false);

	const commentChange = e => {
		setComment(e.target.value);
	};
	const addCommentHandler = () => {
		const commentInfo = { feedId: feedId, comments: comment };
		dispatch(__addComment(commentInfo));
		dispatch(__changeThunk());
		setIsChanged(true);
	};

	return (
		<>
			{isChanged && <div></div>}
			<Div variant="contentArea">
				<Wrap>
					<NicknameWrap>
						<A variant="noMargin" onClick={() => navigate(`/${memberId}`)}>
							{memberId}
						</A>
						<Text>{contents}</Text>
					</NicknameWrap>
				</Wrap>
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
						dispatch(__changeThunk());
					}}
				>
					게시
				</Button>
			</Div>
		</>
	);
};

export default FeedContent;

const Wrap = styled.div`
	margin-top: 5px;
	width: 468px;
	min-height: 14px;
	height: auto;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const NicknameWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
