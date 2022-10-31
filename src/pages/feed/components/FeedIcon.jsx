import styled from "styled-components";
import Div from "../../../common/Div";
import Image from "../../../common/Image";

const FeedIcon = () => {
	return (
		<Div variant="iconArea">
			<IconWrap>
				<Image variant="heartIcon"></Image>
			</IconWrap>
			<IconWrap>
				<Image variant="commentIcon"></Image>
			</IconWrap>
		</Div>
	);
};

export default FeedIcon;

const IconWrap = styled.div`
	height: 32px;
	width: 32px;
	overflow: hidden;
	position: relative;
	margin-right: 9px;
	margin-top: 7px;
`;
