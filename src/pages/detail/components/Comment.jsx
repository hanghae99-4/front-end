import Div from "../../../common/Div";
import Image from "../../../common/Image";
import A from "../../../common/A";
import Text from "../../../common/Text";

const Comment = () => {
	return (
		<Div variant="detailContent">
			<Image variant="profileDefaultIconMid"></Image>
			<A>user1</A>
			<Text>너무 귀여워요!</Text>
			<A variant="inDetail"> 답글 달기</A>
		</Div>
	);
};

export default Comment;
