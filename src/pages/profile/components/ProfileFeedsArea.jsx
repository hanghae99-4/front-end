import { Navigate, useNavigate } from "react-router-dom";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";

const ProfileFeedsArea = () => {
	const navigate = useNavigate();
	return (
		<Layout variant="profileFeedsLayout">
			<Image variant="sample" onClick={() => navigate("/1/1")} />
			<Image variant="sample" onClick={() => navigate("/1/1")} />
			<Image variant="sample" onClick={() => navigate("/1/1")} />
			<Image variant="sample" onClick={() => navigate("/1/1")} />
			<Image variant="sample" onClick={() => navigate("/1/1")} />
			<Image variant="sample" onClick={() => navigate("/1/1")} />
		</Layout>
	);
};

export default ProfileFeedsArea;
