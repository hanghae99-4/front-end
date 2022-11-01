import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../common/Layout";
import { __getProFileFeedList } from "../../redux/modules/feedSlice";
import ProfileFeedsArea from "./components/ProfileFeedsArea";
import ProfilePageHeader from "./components/ProfilePageHeader";

const ProfilePage = () => {
	const dispatch = useDispatch();
	const memberId = useParams().userId;
	useEffect(() => {
		dispatch(__getProFileFeedList(memberId));
	}, []);
	const feedItems = useSelector(state => state.feedSlice.profileFeedList);

	return (
		<>
			<Layout variant="mainContentsLayout">
				{/* 프로필 페이지 헤더 */}
				<ProfilePageHeader memberId={memberId}></ProfilePageHeader>
				{/* 프로필 페이지 피드 */}
				{feedItems.map(feedItem => (
					<ProfileFeedsArea
						key={feedItem.feedId}
						feedItem={feedItem}
					></ProfileFeedsArea>
				))}
			</Layout>
		</>
	);
};

export default ProfilePage;
