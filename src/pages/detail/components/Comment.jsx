import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import Text from "../../../common/Text";

const Comment = ({ comment }) => {
	const { id, memberId, memberImage, contents, feedId } = comment;
	return (
		<Div variant="detailContent">
			<Image variant="profileDefaultIconMid"></Image>
			<A>{memberId}</A>
			<Text>{contents}</Text>
		</Div>
	);
};

export default Comment;
