import Div from "../../common/Div";
import Input from "../../common/Input";
import Nav from "../../common/Nav";

const Header = () => {
	return (
		<Div variant="header">
			<img
				width="103"
				height="29"
				objectFit="cover"
				alt=""
				src="/images/Instagram-Wordmark.png"
			/>
			<Input variant="search" />
			<Nav />
		</Div>
	);
};

export default Header;
