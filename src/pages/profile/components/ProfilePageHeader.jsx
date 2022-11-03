import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Layout from "../../../common/Layout";
import Margin from "../../../common/Margin";
import { __getProFileFeedList } from "../../../redux/modules/feedSlice";
import { __followThunk } from "../../../redux/modules/likeSlice";

function ProfilePageHeader({ memberId }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getProFileFeedList(memberId));
	}, [dispatch]);

	const userInfo = useSelector(state => state.feedSlice.profileFeedList);
	const { feedsList, followList, followerList, username } = userInfo;
	console.log(followerList);

	return (
		<Layout variant="profilePageHeaderLayout">
			{/* 프로필 이미지 */}
			<Image variant="profileDefaultIconBig" />

			{/* 프로필 인포 영역 */}
			<Div variant="profileInfoArea">
				{/* 닉네임, 팔로우 버튼 영역 */}
				<Div variant="nicknameAndBtns">
					<span>{memberId}</span>
					<Margin margin="10px 0 0 0">
						{/* {includes(`${memberId}`)} */}
						<Button
							variant="smallBlue"
							onClick={() => dispatch(__followThunk(memberId))}
						>
							팔로우
						</Button>
					</Margin>
				</Div>

				{/* 게시물, 팔로워, 팔로우 수 영역 */}
				<Div variant="profileInfoCounterArea">
					<span>게시물 {feedsList?.length}</span>
					<span>팔로워 {followerList?.length}</span>
					<span>팔로우 {followList?.length}</span>
				</Div>

				{/* 유저네임 영역 */}
				<p>{username}</p>
			</Div>
		</Layout>
	);
}

export default ProfilePageHeader;
