import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const ProfileFeedsArea = () => {
	const dispatch = useDispatch();
	const OpenModal = () => {
		dispatch(updateDetailModalOpen());
	};

	return (
		<Layout variant="profileFeedsLayout">
			<Image variant="sample" onClick={OpenModal} />
			<Image variant="sample" />
			<Image variant="sample" />
			<Image variant="sample" />
			<Image variant="sample" />
			<Image variant="sample" />
		</Layout>
	);
};

export default ProfileFeedsArea;
