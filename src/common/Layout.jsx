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
					justify-content: space-between;
				`;
			default:
				break;
		}
	}}
`;
