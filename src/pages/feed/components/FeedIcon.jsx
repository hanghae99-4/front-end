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

const FeedIcon = ({
	feedItem,
	feedId,
	memberId,
	heartByMe,
	heartNum,
	change,
	setChange,
}) => {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(heartByMe);

	const onClickLike = () => {
		console.log("LikeBtn");
		dispatch(__likeThunk(`${feedId}`));
		dispatch(__changeThunk());
		setIsLike(!isLike);
	};

	const OpenModal = () => {
		console.log("openModal");
		dispatch(updateDetailModalOpen());
	};

	return (
		<>
			<Div variant="iconArea">
				<Svg
					variant={heartByMe ? "cancelLike" : "like"}
					heartByMe={heartByMe}
					onClick={onClickLike}
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
