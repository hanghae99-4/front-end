import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import Text from "../../../common/Text";
import delBtn from "../../../static/images/delete.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __delComment } from "../../../redux/modules/commentSlice";
import jwt_decode from "jwt-decode";
import { __changeThunk } from "../../../redux/modules/likeSlice";

const Comment = ({ comment }) => {
	//토큰 디코드
	const token = localStorage.getItem("token").replace("Bearer ", "");
	let decode = jwt_decode(token);
	const myId = decode.sub;

	const dispatch = useDispatch();
	const { id, memberId, memberImage, contents, feedId } = comment;
	return (
		<Div variant="detailContent">
			<Image variant="profileDefaultIconMid"></Image>
			<A>{memberId}</A>
			<Text>{contents}</Text>
			{memberId === myId ? (
				<DelBtn
					src={delBtn}
					alt=""
					onClick={() => {
						dispatch(__delComment(id));
						dispatch(__changeThunk());
					}}
				/>
			) : null}
		</Div>
	);
};

export default Comment;

const DelBtn = styled.img`
	margin-left: 10px;
	width: 15px;
	height: 15px;
	opacity: 0.7;
	cursor: pointer;
	:hover {
		opacity: 0.4;
	}
`;
