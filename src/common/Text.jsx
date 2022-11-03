import styled, { css } from "styled-components";

const Text = ({ children, ...props }) => {
	return <StText {...props}>{children}</StText>;
};
export default Text;

const StText = styled.span`
	display: flex;
	flex-direction: row;
	margin-left: 5px;
	font-size: 14px;
	line-height: 18px;

	${({ variant }) => {
		switch (variant) {
			case "":
				return css``;
			default:
				break;
		}
	}};
`;
