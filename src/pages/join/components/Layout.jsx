import styled from "styled-components";

const Layout = ({ children }) => {
	return (
		<Main>
			<StArticle>{children}</StArticle>
		</Main>
	);
};

export default Layout;

const Main = styled.div`
	min-width: 800px;
	align-items: stretch;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0;
	order: 4;
	padding: 0;
	position: relative;
	background-color: rgb(250, 250, 250);
`;

const StArticle = styled.article`
	justify-content: center;
	padding-left: 0;
	width: 100%;
	margin-top: 32px;
	margin-bottom: 0;
	padding-top: 0;
	padding-right: 0;
	padding-bottom: 32px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	flex-grow: 1;
`;
