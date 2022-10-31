import styled, { css } from "styled-components";

const Text = ({ children, ...props }) => {
	return <StText {...props}>{children}</StText>;
};
export default Text;

const StText = styled.span`
	position: relative;
	font-size: 14px;
	line-height: 18px;
	word-break: break-all;

	${({ variant }) => {
		switch (variant) {
			case "":
				return css``;
			default:
				break;
		}
	}};
`;
