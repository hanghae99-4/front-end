import styled, { css } from "styled-components";

const Text = ({ children, ...props }) => {
	return <StText {...props}>{children}</StText>;
};
export default Text;

const StText = styled.span`
	display: inline !important;
	position: relative;
	font-size: 14px;
	line-height: 18px;
	${({ variant }) => {
		switch (variant) {
			default:
				break;
		}
	}};
`;
