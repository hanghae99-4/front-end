import Div from "../../common/Div";
import Image from "../../common/Image";
import Input from "../../common/Input";
import Layout from "../../common/Layout";
import Margin from "../../common/Margin";
import Nav from "../../common/Nav";

const Header = () => {
	return (
		<Div variant="header">
			<Layout variant="header">
				<Margin margin="5px 0 0 0">
					<Image variant="navMarkInsta" />
				</Margin>
				<Input variant="search" />
				<Nav />
			</Layout>
		</Div>
	);
};

export default Header;
