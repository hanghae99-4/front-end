import React from "react";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import FeedContent from "./FeedContent";
import FeedIcon from "./FeedIcon";
import { useDispatch } from "react-redux";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";
import { getFeedItem } from "../../../redux/modules/feedSlice";

const Feed = ({ feedItem }) => {
	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		memberId,
		nickname,
		heartNum,
	} = feedItem;

	const dispatch = useDispatch();

	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};

	const userNickname = "user_nickname";

	return (
		<Div variant="feedBox">
			{/* Feed Header */}
			<Div variant="feedHeader">
				<Image variant="profileDefaultIconMid"></Image>
				<A>{nickname}</A>
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
			<FeedIcon />
			{/* Feed content */}
			<FeedContent contents={contents} nickname={nickname} />
		</Div>
	);
};

export default Feed;
