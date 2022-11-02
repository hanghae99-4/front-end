import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import Div from "../../common/Div";
import Image from "../../common/Image";
import Input from "../../common/Input";
import Layout from "../../common/Layout";
import Margin from "../../common/Margin";
import Nav from "../../common/Nav";
import { __getProFileFeedList } from "../../redux/modules/feedSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onLogout = () => {
		localStorage.clear();
		alert("로그아웃 되었습니다!");
		window.location.reload();
	};

	const onUserInfo = () => {
		dispatch(__getProFileFeedList("dbsqhfk123"));
	};

	return (
		<Div variant="headerBox">
			<Layout variant="headerLayout">
				<Margin margin="5px 0 0 0">
					<Image variant="navWordMark" />
				</Margin>
				<Input variant="searchInput" />
				<Button variant="smallWhite" onClick={onUserInfo}>
					로그아웃
				</Button>
				<Nav />
			</Layout>
		</Div>
	);
};

export default Header;
