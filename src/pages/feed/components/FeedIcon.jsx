import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Svg from "../../../common/Svg";
import {
	getFeedItem,
	changeFeedItemLike,
} from "../../../redux/modules/feedSlice";
import {
	__changeThunk,
	__likeThunk,
	__getFeed,
} from "../../../redux/modules/likeSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const FeedIcon = ({ feedItem, feedId, memberId, heartByMe, heartNum }) => {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(heartByMe);
	const [heartCount, setHeartCount] = useState(heartNum);

	const onClickLike = () => {
		console.log("LikeBtn");
		dispatch(__likeThunk(`${feedId}`));
		dispatch(changeFeedItemLike({ heartByMe: !isLike, heartNum: heartCount }));
		setIsLike(!isLike);
		dispatch(__changeThunk());
		console.log(heartCount);
	};

	const heartCounting = () => {
		if (isLike) {
			setHeartCount(heartCount - 1);
		} else {
			setHeartCount(heartCount + 1);
		}
	};

	const OpenModal = () => {
		console.log("openModal");
		dispatch(updateDetailModalOpen());
	};

	return (
		<>
			<Div variant="iconArea">
				<Svg
					variant={isLike ? "cancelLike" : "like"}
					heartByMe={heartByMe}
					onClick={() => {
						heartCounting();
						onClickLike();
					}}
				/>
				<Svg
					variant="comment"
					onClick={() => {
						dispatch(getFeedItem(feedItem));
						OpenModal();
					}}
				/>
			</Div>
			<Div variant="likeArea">
				<A>좋아요 {heartNum}개</A>
			</Div>
		</>
	);
};

export default FeedIcon;
