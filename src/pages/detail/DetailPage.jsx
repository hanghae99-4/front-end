import { useDispatch, useSelector } from "react-redux";
import { updateDetailModalOpen } from "../../redux/modules/modalSlice";
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
import { __delFeedItem } from "../../redux/modules/feedSlice";

const DetailPage = () => {
	const token = localStorage.getItem("token").replace("Bearer ", "");
	let decode = jwt_decode(token);
	const myId = decode.sub;
	const Author = "testid1234";

	const isDetailOpen = useSelector(state => state.modalSlice.isDetailModalOpen);
	const feedItem = useSelector(state => state.feedSlice.feedItem);
	const isLoading = useSelector(state => state.feedSlice.isLoading);

	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		heartNum,
		memberId,
		nickname,
		username,
	} = feedItem;
	const dispatch = useDispatch();
	const CloseModal = () => {
		dispatch(updateDetailModalOpen());
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
									<A variant="noMargin">{nickname}</A>
									{myId === Author ? (
										<BtnBox>
											<Button variant="smallWhite">수정</Button>
											<Button
												onClick={() => {
													dispatch(__delFeedItem(feedId));
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
									<A>{nickname}</A>
									<Text>{contents}</Text>
								</Div>
								{/* 댓글목록 */}
								<Margin margin="10px 0" />
								<Div variant="CommentList">
									<Comment />
									<Comment />
									<Comment />
								</Div>
							</Div>
							{/* 댓글 작성 영역 */}
							<Div variant="writeComment">
								<LikeBox>
									<FeedIcon />
								</LikeBox>
								<Div variant="detailCommentArea">
									<TextArea variant="commentWrite" placeholder="댓글 달기..." />
									<Button variant="smallWhite-position">게시</Button>
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
