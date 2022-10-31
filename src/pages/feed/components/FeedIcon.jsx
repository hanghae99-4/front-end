import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Div from "../../../common/Div";
import Svg from "../../../common/Svg";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const FeedIcon = () => {
	const [isLike, setIsLike] = useState(false);

	const onClickLike = () => {
		console.log("LikeBtn");
		setIsLike(!isLike);
	};
	const dispatch = useDispatch();
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
