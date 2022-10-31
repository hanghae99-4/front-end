import styled, { css } from "styled-components";

const Layout = ({ children, ...props }) => {
	return <StLayout {...props}>{children}</StLayout>;
};
export default Layout;

const StLayout = styled.div`
	display: flex;
	align-items: center;

	${({ variant }) => {
		switch (variant) {
			case "headerLayout":
				return css`
					width: 975px;
					height: 100%;
					justify-content: space-between;
				`;
			case "mainContentsLayout":
				return css`
					width: 975px;
					height: 100%;
					flex-direction: column;
					justify-content: center;
					margin: 0 auto;
				`;
			case "profilePageHeaderLayout":
				return css`
					width: 100%;
					height: 160px;
					padding: 0 0 53px 0;
					margin: 53px 0 50px 0;
					flex-direction: row;
					justify-content: center;
					border-bottom: 1px solid rgb(219 219 219);
				`;
			case "profileFeedsLayout":
				return css`
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-gap: 28px;
				`;
			case "feedPageLayout":
				return css`
					justify-content: center;
					min-width: 470px;
					min-height: 500px;
					box-sizing: border-box;
					flex-direction: column;
					position: relative;
					background-color: rgb(250, 250, 250);
				`;
			default:
				break;
		}
	}}
`;
