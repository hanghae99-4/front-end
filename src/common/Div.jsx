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
			// 공통
			case "photoAndId":
				return css`
					height: 60px;
					width: 100%;
					justify-content: flex-start;
					align-items: center;
				`;

			// 헤더
			case "header":
				return css`
					width: 100%;
					height: 60px;
					padding: 0 16px;
					justify-content: center;
					border-bottom: 1px solid rgb(219, 219, 219);
				`;

			// 모달창
			case "modalContents":
				return css`
					width: 100%;
					height: 100%;
				`;
			case "modalBox":
				return css`
					width: 696px;
					height: 420px;
					justify-content: center;
					flex-direction: column;
					border-radius: 10px;
					background-color: #ffffff;
					text-align: center;
				`;
			case "modalHeader":
				return css`
					width: 100%;
					height: 42px;
					border-bottom: 1px solid #dbdbdb;
					padding: 0 16px;
					justify-content: space-between;
				`;
			case "overlay":
				return css`
					background-color: rgba(0, 0, 0, 0.6);
					position: fixed;
					width: 100%;
					height: 100%;
				`;
			case "closeModalBtn":
				return css`
					position: fixed;
					top: 20px;
					right: 20px;
				`;
			case "uploadImageArea":
				return css`
					height: 100%;
					width: 100%;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 30px;
					border-right: 1px solid #dbdbdb;
				`;
			case "modalPostion":
				return css`
					justify-content: center;
					align-items: center;
					width: 100vw;
					height: 100vh;
				`;
			case "modalWriteArea":
				return css`
					width: 100%;
					height: 100%;
					flex-direction: column;
					align-items: center;
				`;
			default:
				break;
		}
	}}
`;
