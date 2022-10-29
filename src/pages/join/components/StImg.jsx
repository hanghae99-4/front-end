import styled, { css } from "styled-components";

const StImg = ({ ...props }) => {
	return <PhoneImg {...props}></PhoneImg>;
};
export default StImg;

const PhoneImg = styled.img`
	src: ${props => props.src};
	border: 0;
	font: inherit;
	font-size: 100%;
	height: 538.84px;
	left: 0;
	margin: 26px 0 0 112px;
	opacity: 0;
	padding: 0;
	position: absolute;
	top: 0;
	vertical-align: baseline;
	visibility: hidden;
	width: 250px;

	${({ variant }) => {
		switch (variant) {
			case "1":
				return css`
					opacity: 1;
					visibility: visible;
					z-index: 2;
					transition: 0.5s;
				`;
			case "2":
				return css`
					opacity: 1;
					visibility: visible;
					z-index: 2;
					transition: 0.5s;
				`;
			default:
				break;
		}
	}};
`;
