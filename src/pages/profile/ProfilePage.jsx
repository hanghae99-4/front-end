import { useParams } from "react-router-dom";
import Layout from "../../common/Layout";
import ProfileFeedsArea from "./components/ProfileFeedsArea";
import ProfilePageHeader from "./components/ProfilePageHeader";

const ProfilePage = () => {
	const memberId = useParams()?.userId;
	return (
		<>
			<Layout variant="mainContentsLayout">
				{/* 프로필 페이지 헤더 */}
				<ProfilePageHeader memberId={memberId}></ProfilePageHeader>
				{/* 프로필 페이지 피드 */}
				<ProfileFeedsArea />
			</Layout>
		</>
	);
};

export default ProfilePage;
