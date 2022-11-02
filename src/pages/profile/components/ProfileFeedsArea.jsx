import { useDispatch } from "react-redux";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import { getFeedItem } from "../../../redux/modules/feedSlice";
import { updateDetailModalOpen } from "../../../redux/modules/modalSlice";

const ProfileFeedsArea = ({ feedItems }) => {
	const dispatch = useDispatch();
	const OpenModal = feedItem => {
		dispatch(getFeedItem(feedItem));
		dispatch(updateDetailModalOpen(feedItem.feedId));
	};
	const feedsList = feedItems.feedsList;

	return (
		<Layout variant="profileFeedsLayout">
			{feedsList?.map(feedItem => (
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
