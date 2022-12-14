import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
	return <StBtn {...props}>{children}</StBtn>;
};
export default Button;

const StBtn = styled.button`
	cursor: pointer;
	box-sizing: border-box;
	border-radius: 4px;
	display: block;
	margin-bottom: 6px;
	font-size: ${({ fs }) => (fs ? fs : "14px")};
	font-weight: 700;
	padding: 5px 9px !important;
	text-align: center;
	text-overflow: ellipsis;
	text-transform: inherit;
	-webkit-user-select: none;

	${({ variant }) => {
		switch (variant) {
			case "smallBlue":
				return css`
					width: auto;
					background-color: #0095f6;
					color: white;
					padding: 1px 5px !important;
					border: 1px solid transparent;
					font-size: 12px;
				`;
			case "smallWhite":
				return css`
					width: auto;
					background-color: white;
					color: #0095f6;
					border: 1px solid transparent;
				`;
			case "smallWhite-position":
				return css`
					width: 60px;
					position: absolute;
					left: 83%;
					justify-content: flex-end;
					background-color: white;
					margin: 5px 10px auto 10px;
					color: #0095f6;
					border: 1px solid transparent;
				`;
			case "smallBlack":
				return css`
					width: auto;
					background-color: white;
					border: 1px solid transparent;
				`;
			case "longBlue":
				return css`
					width: 268px;
					height: 30px;
					background-color: #0095f6;
					color: white;
				`;
			case "longWhite":
				return css`
					width: 268px;
					height: 30px;
					background-color: white;
					color: #002952;
				`;
			default:
				break;
		}
	}};
`;
