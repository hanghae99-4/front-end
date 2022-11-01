import { useState } from "react";
import { useDispatch } from "react-redux";
import Div from "../../../common/Div";
import Svg from "../../../common/Svg";
import { __likeThunk } from "../../../redux/modules/likeSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const FeedIcon = () => {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(false);

	const onClickLike = () => {
		console.log("LikeBtn");
		// dispatch(__likeThunk(1));
		setIsLike(!isLike);
	};

	const OpenModal = () => {
		console.log("openModal");
		dispatch(updateDetailModalOpen());
	};
	return (
		<Div variant="iconArea">
			<Svg
				variant={isLike ? "cancelLike" : "like"}
				isLike={isLike}
				setIsLike={setIsLike}
				onClick={onClickLike}
			/>
			<Svg variant="comment" onClick={OpenModal} />
		</Div>
	);
};

export default FeedIcon;
