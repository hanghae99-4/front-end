import React from "react";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import FeedContent from "./FeedContent";
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
			{/* Feed Icon & Like count*/}
			<FeedIcon />
			{/* Feed content */}
			<FeedContent userNickname={userNickname} />
		</Div>
	);
};

export default Feed;
