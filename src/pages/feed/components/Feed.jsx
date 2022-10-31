import React from "react";

import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";

import Text from "../../../common/Text";
import TextArea from "../../../common/TextArea";
import FeedContent from "./FeedContent";
import FeedLike from "./FeedLike";
import FeedIcon from "./FeedIcon";

const Feed = () => {
	const userNickname = "user_nickname";

	return (
		<Div variant="feedBox">
			{/* Feed Header */}
			<Div variant="feedHeader">
				<Image variant="profileDefaultIconMid"></Image>
				<A>{userNickname}</A>
			</Div>
			{/* Feed Img */}
			<Div>
				<Image variant="feedImg"></Image>
			</Div>
			{/* Feed Icon */}
			<FeedIcon />
			{/* Feed Like */}
			<FeedLike />
			{/* Feed content */}
			<FeedContent userNickname={userNickname} />
		</Div>
	);
};

export default Feed;
