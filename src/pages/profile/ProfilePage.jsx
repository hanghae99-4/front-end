import Layout from "../../common/Layout";
import ProfileFeedsArea from "./components/ProfileFeedsArea";
import ProfilePageHeader from "./components/ProfilePageHeader";

const ProfilePage = () => {
	return (
		<>
			<Layout variant="mainContentsLayout">
				{/* 프로필 페이지 헤더 */}
				<ProfilePageHeader></ProfilePageHeader>
				{/* 프로필 페이지 피드 */}
				<ProfileFeedsArea></ProfileFeedsArea>
			</Layout>
		</>
	);
};

export default ProfilePage;
