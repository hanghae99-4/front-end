import Layout from "../../common/Layout";
import Feed from "./components/Feed";

function FeedPage() {
	return (
		<>
			{/* 메인 피드페이지 */}
			<Layout variant="feedPageLayout">
				<Feed />
				<Feed />
			</Layout>
		</>
	);
}
export default FeedPage;
