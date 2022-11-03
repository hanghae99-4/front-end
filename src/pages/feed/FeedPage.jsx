import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../common/Layout";
import { __getMainFeedList, __test } from "../../redux/modules/feedSlice";
import Feed from "./components/Feed";

function FeedPage() {
	const dispatch = useDispatch();
	const mainFeedList = useSelector(state => state.feedSlice.mainFeedList);
	const isLikeChanged = useSelector(state => state.like.isChanged);

	useEffect(() => {
		dispatch(__getMainFeedList());
	}, [dispatch, isLikeChanged]);

	// useEffect(() => {
	// 	dispatch(__test());
	// }, [dispatch]);

	return (
		<>
			{/* 메인 피드페이지 */}
			<Layout variant="feedPageLayout">
				{mainFeedList.map(feedItem => (
					<Feed key={feedItem.feedId} feedItem={feedItem} />
				))}
			</Layout>
		</>
	);
}
export default FeedPage;
