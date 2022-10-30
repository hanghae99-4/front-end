import styled, { css } from "styled-components";

const A = ({ children, ...props }) => {
	return <StA {...props}>{children}</StA>;
};
export default A;

const StA = styled.a`
	border: 0;
	display: inline-block;
	padding: 0 !important;
	align-items: inherit;
	align-self: inherit;
	color: #363636;
	margin: 10px;
	font-size: 14px;
	text-align: center;
	text-overflow: ellipsis;
	text-transform: inherit;
	font-weight: 600;

	${({ variant }) => {
		switch (variant) {
			case "noMargin":
				return css`
					margin: 0 5px 0 0;
				`;
			case "comment":
				return css`
					color: rgb(142, 142, 142);
					margin: 10px 0 0 0px;
					font-weight: 400;
				`;
			default:
				break;
		}
	}};
`;
