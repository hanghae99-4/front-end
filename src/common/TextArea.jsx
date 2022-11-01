import styled, { css } from "styled-components";

const TextArea = ({ value, ...props }) => {
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
			case "commentWrite":
				return css`
					width: 410px;
					height: auto;
					align-items: center;
					border: 0;
					display: flex;
					flex-direction: row;
					flex-grow: 1;
					flex-shrink: 1;
					font: inherit;
					font-size: 14px;
					margin: 0;
					padding: 13px 10px 0 10px;
					border-radius: 5px;
					position: relative;
					vertical-align: baseline;
					value: 
					::placeholder {
						color: #8d949e;
					}
					::-webkit-scrollbar {
						display: none;
					}
				`;
			default:
				break;
		}
	}};
`;
