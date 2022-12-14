import { useDispatch, useSelector } from "react-redux";
import {
	updateDetailModalOpen,
	updateIsEditorModalOpen,
} from "../../redux/modules/modalSlice";
import Button from "../../common/Button";
import Div from "../../common/Div";
import Image from "../../common/Image";
import Margin from "../../common/Margin";
import A from "../../common/A";
import Text from "../../common/Text";
import styled from "styled-components";
import Comment from "./components/Comment";
import FeedIcon from "../feed/components/FeedIcon";
import TextArea from "../../common/TextArea";
import jwt_decode from "jwt-decode";
import {
	addFeedComment,
	delFeedComment,
	__delFeedItem,
} from "../../redux/modules/feedSlice";
import { useEffect, useState } from "react";
import { __changeThunk, __getFeed } from "../../redux/modules/likeSlice";
import { __addComment } from "../../redux/modules/commentSlice";
import { getFeedItem } from "../../redux/modules/feedSlice";

const DetailPage = () => {
	const [change, setChange] = useState(false);

	//토큰 디코드
	const token = localStorage.getItem("token").replace("Bearer ", "");
	let decode = jwt_decode(token);
	const myId = decode.sub;

	const dispatch = useDispatch();

	//useSelector
	const isDetailOpen = useSelector(state => state.modalSlice.isDetailModalOpen);
	const feedItem = useSelector(state => state.feedSlice.feedItem);
	const newFeeds = useSelector(state => state.like.feed);
	const commentList = useSelector(state => state.comments.commentList);
	console.log("commentList", commentList);

	// useEffect(()=>{
	// 	dispatch(__getFeed())
	// },[])

	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		heartNum,
		memberId,
		nickname,
		username,
		commentsList,
	} = feedItem;

	// 작성자 확인
	const Author = `${memberId}`;

	// 모달창
	const CloseModal = () => {
		dispatch(updateDetailModalOpen());
	};

	// Add Comment
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState(commentsList);
	const [isLike, setIsLike] = useState(heartByMe);
	const [heartCount, setHeartCount] = useState(heartNum);

	const commentChange = e => {
		setComment(e.target.value);
	};
	const addCommentHandler = () => {
		const commentInfo = { feedId: feedId, comments: comment };
		dispatch(__addComment(commentInfo));
		// dispatch(addFeedComment({ contents: comment, id:  }));
		dispatch(__changeThunk());
		setComment("");
	};

	const getNewComments = () => {
		dispatch(__getFeed(feedId));
		// if()setComments()
	};

	if (!isDetailOpen) return null;

	return (
		<Div variant="modalOverlay">
			<Div variant="detailPostion">
				<Div variant="modalContainer">
					{/* 닫기버튼 */}
					<Div variant="closeModalBtn" onClick={CloseModal}>
						<Image variant="closeModalBtn" />
					</Div>
					<Div variant="modalContents">
						{/* 사진영역 */}
						<Div variant="detailImageArea">
							<Image variant="feedImgDeital" feedImage={feedImage} />
						</Div>
						{/* 게시글 내용 및 댓글 영역 */}
						<Div variant="detailContentLayout">
							<Div variant="modalWriteArea">
								{/* 게시자 정보 */}
								<Div variant="photoAndId_border">
									<Margin margin="0 12px 0 16px">
										<Image variant="profileDefaultIconMid" />
									</Margin>
									<A variant="noMargin">{memberId}</A>
									{myId === Author ? (
										<BtnBox>
											<Button
												onClick={() => {
													dispatch(getFeedItem(feedItem));
													dispatch(updateIsEditorModalOpen());
												}}
												variant="smallWhite"
											>
												수정
											</Button>
											<Button
												onClick={() => {
													if (window.confirm("삭제하시겠습니까?")) {
														dispatch(__delFeedItem(feedId));
														dispatch(updateDetailModalOpen());
													} else return;
												}}
												variant="smallWhite"
											>
												삭제
											</Button>
										</BtnBox>
									) : null}
								</Div>
								{/* 게시글 내용 - 존재하지 않으면 null반환하도록 추가 꼭하기*/}
								<Div variant="detailContent">
									<Image variant="profileDefaultIconMid"></Image>
									<A>{memberId}</A>
									{contents && <Text>{contents}</Text>}
								</Div>
								<Margin margin="10px 0" />
								{/* 댓글목록 */}
								<Div variant="CommentList">
									{commentsList.map(comment => (
										<Comment key={comment.id} comment={comment} />
									))}
								</Div>
							</Div>
							{/* 댓글 작성 영역 */}
							<Div variant="writeComment">
								<LikeBox>
									<FeedIcon
										change={change}
										setChange={setChange}
										heartByMe={heartByMe}
										heartNum={heartNum}
										feedId={feedId}
									/>
								</LikeBox>
								<Div variant="detailCommentArea">
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
										}}
									>
										게시
									</Button>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
		</Div>
	);
};

export default DetailPage;

const BtnBox = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	margin-right: 10px;
	min-width: 120px;
	width: 100%;
`;

const LikeBox = styled.div`
	width: 100%;
	justify-content: flex-end;
	align-items: flex-end;
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-top: 1px solid rgb(239, 239, 239);
`;
