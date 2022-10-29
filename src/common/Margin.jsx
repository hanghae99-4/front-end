import styled from "styled-components";

const Margin = ({ ...props }) => {
	return <StMargin {...props}></StMargin>;
};
export default Margin;

const StMargin = styled.div`
	margin: ${({ margin }) => (margin ? margin : "")};
`;
