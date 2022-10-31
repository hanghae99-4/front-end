import Layout from "../../common/Layout";
import Feed from "./components/Feed";

function FeedPage() {
	return (
		<Layout variant="feedPageLayout">
			<Feed />
			<Feed />
		</Layout>
	);
}
export default FeedPage;
