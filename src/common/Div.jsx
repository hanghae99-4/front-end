import styled, { css } from "styled-components";

const Div = ({ children, ...props }) => {
	return <StDiv {...props}>{children}</StDiv>;
};
export default Div;

const ogu = "aa";

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

			case "photoAndId_border":
				return css`
					height: 60px;
					width: 100%;
					justify-content: flex-start;
					align-items: center;
					border-bottom: 1px solid rgb(239, 239, 239);
				`;

			// 헤더
			case "headerBox":
				return css`
					width: 100%;
					height: 60px;
					padding: 0 16px;
					justify-content: center;
					border-bottom: 1px solid rgb(219, 219, 219);
				`;

			// 조인
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
					background-color: rgb(255, 255, 255);
					border: 1px solid rgb(219, 219, 219);
					width: 350px;
					border-radius: 1px;
					box-sizing: border-box;
					flex-direction: column;
					flex-shrink: 0;
					font: inherit;
					font-size: 100%;
					margin: 0 0 10px;
					padding: 10px 0;
					position: relative;
					vertical-align: baseline;
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
			case "modalOverlay":
				return css`
					background-color: rgba(0, 0, 0, 0.6);
					position: fixed;
					width: 100vw;
					height: 100vh;
					z-index: 20;
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

			//디테일 모달
			case "modalContainer":
				return css`
					position: absolute;
					width: 80vw;
					max-width: 1200px;
					height: 80vh;
					justify-content: center;
					flex-direction: column;
					background-color: #ffffff;
					text-align: center;
				`;
			case "detailPostion":
				return css`
					position: absolute;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					margin-top: 0;
				`;
			case "detailContentLayout":
				return css`
					width: 100%;
					height: 100%;
					position: relative;
					align-self: space-between;
					flex-wrap: wrap;
				`;
			case "detailContent":
				return css`
					margin: 5px 5px 5px 12px;
					min-height: 34px;
					height: auto;
					position: relative;
					box-sizing: border-box;
					align-self: flex-start;
					justify-content: flex-start;
					flex-wrap: wrap;
				`;
			case "floatProfile":
				return css`
					display: inline-block;
					float: left;
				`;
			case "writeComment":
				return css`
					width: 100%;
					position: absolute;
					justify-content: flex-end;
					align-items: flex-end;
					align-self: flex-end;
					display: flex;
					flex-direction: column;
				`;
			case "detailCommentArea":
				return css`
					width: inherit;
					position: absolute;
					box-sizing: border-box;
					align-self: flex-start;
					border-top: 1px solid rgb(239, 239, 239);
					color: rgb(142, 142, 142);
					font-size: 14px;
					justify-content: flex-start;
					align-items: flex-start;
					position: relative;
					flex-direction: column;
				`;
			case "CommentList":
				return css`
					height: auto;
					flex-direction: column;
					justify-content: flex-start;
					align-self: flex-start;
					::-webkit-scrollbar {
						display: none;
					}
				`;

			// 프로필 페이지
			case "profileInfoArea":
				return css`
					height: 100%;
					margin-left: 80px;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
				`;
			case "profileInfoCounterArea":
				return css`
					flex-direction: row;
					gap: 60px;
				`;
			case "nicknameAndBtns":
				return css`
					flex-direction: row;
					gap: 25px;
				`;

			// 수정 페이지
			case "sampleInEditor":
				return css`
					width: 100%;
					height: 100%;
					background-image: url("/images/sample.jpg");
					background-size: cover;
				`;

			//피드 리스트 페이지
			case "feedBox":
				return css`
					background-color: rgb(255, 255, 255);
					border: 1px solid rgb(219, 219, 219);
					width: 470px;
					border-radius: 1px;
					box-sizing: border-box;
					flex-grow: 1;
					flex-shrink: 1;
					flex-direction: column;
					flex-shrink: 0;
					font: inherit;
					font-size: 100%;
					margin-top: 20px;
					padding-top: 10px;
					position: relative;
					vertical-align: baseline;
					border-radius: 5px;
				`;
			case "feedHeader":
				return css`
					min-height: 40px;
					flex-flow: row flex-start;
					box-sizing: border-box;
					flex-grow: 1;
					flex-shrink: 1;
					margin-bottom: 5px;
					overflow: hidden;
					position: relative;
					align-self: flex-start;
					left: 10px;
				`;
			case "ImgArea":
				return css`
					min-width: 470px;
					flex-flow: row flex-start;
					box-sizing: border-box;
					flex-grow: 1;
					flex-shrink: 1;
					overflow: hidden;
					position: relative;
				`;
			case "iconArea":
				return css`
					min-height: 40px;
					flex-flow: row flex-start;
					box-sizing: border-box;
					flex-grow: 1;
					flex-shrink: 1;
					overflow: hidden;
					position: relative;
					align-self: flex-start;
					left: 10px;
				`;
			case "likeArea":
				return css`
					position: relative;
					box-sizing: border-box;
					align-self: flex-start;
					left: 2px;
				`;
			case "contentArea":
				return css`
					margin: 5px 5px 5px 12px;
					min-height: 34px;
					height: auto;
					position: relative;
					box-sizing: border-box;
					align-self: flex-start;
					flex-wrap: wrap;
					top: -10px;
				`;
			case "commentArea":
				return css`
					width: 468px;
					flex-direction: column;
					margin: 0;
					height: auto;
					position: relative;
					box-sizing: border-box;
					align-self: flex-start;
					border-top: 1px solid rgb(239, 239, 239);
					color: rgb(142, 142, 142);
					flex-shrink: 0;
					font-size: 14px;
					justify-content: flex-start;
					align-items: flex-start;
					position: relative;
				`;
			default:
				break;
		}
	}}
`;
