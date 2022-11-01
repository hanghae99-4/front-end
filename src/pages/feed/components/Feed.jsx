import React from "react";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import FeedContent from "./FeedContent";
import FeedIcon from "./FeedIcon";
import { useDispatch } from "react-redux";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";
import { getFeedItem } from "../../../redux/modules/feedSlice";
import { useNavigate } from "react-router-dom";

const Feed = ({ feedItem }) => {
	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		memberId,
		nickname,
		heartNum,
		commentsList,
	} = feedItem;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};

	return (
		<Div variant="feedBox">
			{/* Feed Header */}
			<Div variant="feedHeader">
				<Image variant="profileDefaultIconMid"></Image>
				<A onClick={() => navigate(`/${memberId}`)}>{memberId}</A>
			</Div>
			{/* Feed Img */}
			<Image
				onClick={() => {
					dispatch(getFeedItem(feedItem));
					OpenModal();
				}}
				feedImage={feedImage}
				variant="feedImg"
			></Image>
			{/* Feed Icon & Like count*/}
			<FeedIcon
				feedItem={feedItem}
				feedId={feedId}
				memberId={memberId}
				heartByMe={heartByMe}
				heartNum={heartNum}
			/>
			{/* Feed content */}
			<FeedContent
				feedId={feedId}
				memberId={memberId}
				feedItem={feedItem}
				contents={contents}
				nickname={nickname}
				commentsList={commentsList}
			/>
		</Div>
	);
};

export default Feed;
