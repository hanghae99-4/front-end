import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../common/Layout";
import { __getMainFeedList } from "../../redux/modules/feedSlice";
import Feed from "./components/Feed";

function FeedPage() {
	const dispatch = useDispatch();

	const mainFeedList = useSelector(state => state.feedSlice.mainFeedList);

	useEffect(() => {
		dispatch(__getMainFeedList());
	}, []);

	return (
		<>
			{/* 메인 피드페이지 */}
			<Layout variant="feedPageLayout">
				{mainFeedList.map(feedItem => (
					<Feed key={feedItem.feedId} feedItem={feedItem} />
				))}
				{/* <Feed />
				<Feed /> */}
			</Layout>
		</>
	);
}
export default FeedPage;
