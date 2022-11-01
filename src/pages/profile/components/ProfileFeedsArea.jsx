import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const ProfileFeedsArea = ({ feedItem }) => {
	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		memberId,
		nickname,
		heartNum,
	} = feedItem;
	const dispatch = useDispatch();
	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};
	return (
		<Layout variant="profileFeedsLayout">
			<Image variant="imgSample" feedImage={feedImage} onClick={OpenModal} />
		</Layout>
	);
};

export default ProfileFeedsArea;
