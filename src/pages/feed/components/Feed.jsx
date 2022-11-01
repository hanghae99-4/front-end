import React from "react";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import FeedContent from "./FeedContent";
import FeedIcon from "./FeedIcon";

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

	return (
		<Div variant="feedBox">
			{/* Feed Header */}
			<Div variant="feedHeader">
				<Image variant="profileDefaultIconMid"></Image>
				<A>{nickname}</A>
			</Div>
			{/* Feed Img */}
			<Image feedImage={feedImage} variant="feedImg"></Image>
			{/* Feed Icon & Like count*/}
			<FeedIcon
				feedId={feedId}
				memberId={memberId}
				heartByMe={heartByMe}
				heartNum={heartNum}
			/>
			{/* Feed content */}
			<FeedContent contents={contents} nickname={nickname} />
		</Div>
	);
};

export default Feed;
