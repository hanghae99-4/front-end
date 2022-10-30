import styled, { css } from "styled-components";

const Text = ({ chilren, ...props }) => {
	return <StText {...props}>{chilren}</StText>;
};
export default Text;

const StText = styled.span`
	${({ variant }) => {
		switch (variant) {
			default:
				break;
		}
	}};
`;
