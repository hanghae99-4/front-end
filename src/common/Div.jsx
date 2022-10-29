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
			case "logo":
				return css`
					background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yi/r/ZFtnMBJnHU_.png);
					background-position: 0px -554px;
					background-size: auto;
					width: 175px;
					height: 51px;
					margin: 25px auto;
					background-repeat: no-repeat;
					display: inline-block;
				`;
			case "join":
				return css`
					align-items: center;
					background-color: rgb(255, 255, 255);
					border: 1px solid rgb(219, 219, 219);
					width: 350px;
					border-radius: 1px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					flex-shrink: 0;
					font: inherit;
					font-size: 100%;
					margin: 0 0 10px;
					padding: 10px 0;
					position: relative;
					vertical-align: baseline;
				`;
			default:
				break;
		}
	}}
`;
