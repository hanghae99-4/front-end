import Div from "./Div";
import Margin from "./Margin";

const Nav = () => {
	return (
		<Div>
			<Margin margin="0 20px 0 0">
				<img width="24" height="24" alt="" src="/images/addFeed-icon.png" />
			</Margin>
			<img
				width="24"
				height="24"
				alt=""
				src="/images/profile-default-icon.png"
			/>
		</Div>
	);
};

export default Nav;
