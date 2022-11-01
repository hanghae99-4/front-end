import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Svg from "../../../common/Svg";
import {
	__changeThunk,
	__followThunk,
	__getFeed,
	__likeThunk,
} from "../../../redux/modules/likeSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const FeedIcon = ({ feedId, memberId, heartByMe, heartNum }) => {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(heartByMe);

	const onClickLike = () => {
		console.log("LikeBtn");
		dispatch(__likeThunk(`${feedId}`));
		dispatch(__changeThunk());
		setIsLike(!isLike);
	};

	const OpenModal = ({ feedId, heartByMe, heartNum }) => {
		console.log("openModal");
		dispatch(updateDetailModalOpen());
	};
	return (
		<>
			<Div variant="iconArea">
				<Svg
					variant={isLike ? "cancelLike" : "like"}
					isLike={isLike}
					setIsLike={setIsLike}
					onClick={onClickLike}
				/>
				<Svg variant="comment" onClick={OpenModal} />
			</Div>
			<Div variant="likeArea">
				<A>좋아요 {heartNum}개</A>
			</Div>
		</>
	);
};

export default FeedIcon;
