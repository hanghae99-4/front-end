import styled, { css } from "styled-components";

const TextArea = ({ ...props }) => {
	return <StTextArea {...props}></StTextArea>;
};
export default TextArea;

const StTextArea = styled.textarea`
	width: 100%;
	height: 100%;
	${({ variant }) => {
		switch (variant) {
			case "modalWrite":
				return css`
					height: 100%;
					background-color: transparent;
					padding: 0 16px;
					::placeholder {
						color: #bec3c9;
					}
				`;
			default:
				break;
		}
	}};
`;
