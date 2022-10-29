import styled, { css } from "styled-components";

const Div = ({ children, ...props }) => {
	return <StDiv {...props}>{children}</StDiv>;
};
export default Div;

const StDiv = styled.div`
	display: flex;
	align-items: center;

	${({ variant }) => {
		switch (variant) {
			case "header":
				return css`
					width: 100%;
					height: 60px;
					padding: 0 16px;
					justify-content: space-between;
					border-bottom: 1px solid rgb(219, 219, 219);
				`;
			default:
				break;
		}
	}}
`;
