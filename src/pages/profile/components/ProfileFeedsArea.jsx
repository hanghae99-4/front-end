import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import {
	getFeedItem,
	__getProFileFeedList,
} from "../../../redux/modules/feedSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const ProfileFeedsArea = () => {
	const profileFeedList = useSelector(state => state.feedSlice.profileFeedList);
	const memberId = useParams();
	const dispatch = useDispatch();

	const OpenModal = feedItem => {
		dispatch(getFeedItem(feedItem));
		dispatch(updateDetailModalOpen(feedItem.feedId));
	};

	useEffect(() => {
		dispatch(__getProFileFeedList(memberId.userId));
	}, [dispatch, memberId]);

	return (
		<Layout variant="profileFeedsLayout">
			{profileFeedList?.map(feedItem => (
				<Image
					onClick={() => {
						OpenModal(feedItem);
					}}
					key={feedItem.feedId}
					feedImage={feedItem.feedImage}
					variant="imgSample"
				/>
			))}
		</Layout>
	);
};

export default ProfileFeedsArea;
