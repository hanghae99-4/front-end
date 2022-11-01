import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import Margin from "../../../common/Margin";
import { __getProFileFeedList } from "../../../redux/modules/feedSlice";

function ProfilePageHeader() {
	const dispatch = useDispatch();
	// const { username, nickname, follower, follow } = useSelector(
	// 	state => state.feedSlice.profileFeedList,
	// );
	// console.log(username, nickname, follower, follow);

	useEffect(() => {
		// dispatch(__getProFileFeedList());
		dispatch(__getProFileFeedList("ckd12394"));
	}, []);

	return (
		<Layout variant="profilePageHeaderLayout">
			{/* 프로필 이미지 */}
			<Image variant="profileDefaultIconBig" />

			{/* 프로필 인포 영역 */}
			<Div variant="profileInfoArea">
				{/* 닉네임, 팔로우 버튼 영역 */}
				<Div variant="nicknameAndBtns">
					<span>nickname</span>
					<Margin margin="10px 0 0 0">
						<Button variant="smallBlue">팔로우</Button>
					</Margin>
				</Div>

				{/* 게시물, 팔로워, 팔로우 수 영역 */}
				<Div variant="profileInfoCounterArea">
					<span>게시물 5</span>
					<span>팔로워 5</span>
					<span>팔로우 5</span>
				</Div>

				{/* 유저네임 영역 */}
				<p>username</p>
			</Div>
		</Layout>
	);
}

export default ProfilePageHeader;
