import React from "react";
import styled from "styled-components";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import Button from "../../../common/Button";
import Text from "../../../common/Text";
import TextArea from "../../../common/TextArea";

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
			<Div variant="iconArea">
				<IconWrap>
					<Image variant="heartIcon"></Image>
				</IconWrap>
				<IconWrap>
					<Image variant="commentIcon"></Image>
				</IconWrap>
			</Div>
			{/* Feed Like */}
			<Div variant="likeArea">
				<A>좋아요 40개</A>
			</Div>
			{/* Feed content */}
			<Div variant="contentArea">
				<NicknameWrap>
					<A variant="noMargin">{userNickname}</A>
				</NicknameWrap>
				<Text>우리집 고양이는 바깥 구경을 좋아해요!</Text>
				<A variant="comment">댓글 5개 모두 보기</A>
			</Div>
			<Div variant="commentArea">
				<TextArea variant="commentWrite" placeholder="댓글 달기..." />
				<Button variant="smallWhite-position">게시</Button>
			</Div>
		</Div>
	);
};

export default Feed;

const IconWrap = styled.div`
	height: 32px;
	width: 32px;
	overflow: hidden;
	position: relative;
	margin-right: 9px;
	margin-top: 7px;
`;

const NicknameWrap = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	height: 34px;
`;
