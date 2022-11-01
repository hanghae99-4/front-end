import { useState } from "react";
import { useDispatch } from "react-redux";
import A from "../../../common/A";
import Div from "../../../common/Div";
import Svg from "../../../common/Svg";
import {
	__followThunk,
	__getFeed,
	__likeThunk,
} from "../../../redux/modules/likeSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const FeedIcon = () => {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(false);

	const onClickLike = () => {
		console.log("LikeBtn");
		// dispatch(__getFeed(2));
		// dispatch(__followThunk("testid1234"));
		dispatch(__likeThunk(3));
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
					variant={isLike ? "cancelLike" : "like"}
					isLike={isLike}
					setIsLike={setIsLike}
					onClick={onClickLike}
				/>
				<Svg variant="comment" onClick={OpenModal} />
			</Div>
			<Div variant="likeArea">
				<A>좋아요 40개</A>
			</Div>
		</>
	);
};

export default FeedIcon;
