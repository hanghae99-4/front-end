import styled, { css } from "styled-components";

const Input = ({ chilren, ...props }) => {
	return <StInput {...props}>{chilren}</StInput>;
};
export default Input;

const StInput = styled.input`
	width: 268px;
	height: 38px;
	font-size: 14px;
	color: rgb(38, 38, 38);
	::placeholder {
		color: rgb(142, 142, 142);
		font-size: 12px;
	}
	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					padding: 9px 8px 7px 8px;
					background-color: #fafafa;
					border: 1px solid rgb(219, 219, 219);
					border-radius: 3px;
					margin-bottom: 7px;
				`;
			case "join_s":
				return css`
					width: 204px;
					height: 38px;
					padding: 9px 8px 7px 8px;
					background-color: #fafafa;
					border: 1px solid rgb(219, 219, 219);
					border-radius: 3px;
					margin-bottom: 7px;
				`;
			case "searchInput":
				return css`
					padding: 16px 8px;
					background-color: rgb(239, 239, 239);
					border-radius: 8px;
					padding: 3px 16px;
				`;
			default:
				break;
		}
	}};
`;
