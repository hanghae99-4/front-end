import styled, { css } from "styled-components";

const A = ({ children, ...props }) => {
	return <StA {...props}>{children}</StA>;
};
export default A;

const StA = styled.a`
	display: inline-block;
	border: 0;
	padding: 0 !important;
	align-items: inherit;
	align-self: inherit;
	color: #363636;
	margin: 10px;
	font-size: 14px;
	text-align: center;
	text-overflow: ellipsis;
	text-transform: inherit;
	float: left;
	font-weight: 600;
	cursor: pointer;

	${({ variant }) => {
		switch (variant) {
			case "noMargin":
				return css`
					margin: 0 5px 0 0;
				`;
			case "comment":
				return css`
					color: rgb(142, 142, 142);
					margin: 10px 0 0 0;
					font-weight: 400;
					display: block;
					cursor: pointer;
				`;
			case "inDetail":
				return css`
					color: rgb(142, 142, 142);
					margin: 10px 0 10px 10px;
					font-weight: 400;
					display: block;
				`;
			default:
				break;
		}
	}};
`;
