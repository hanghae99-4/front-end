import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Div from "../../common/Div";
import Image from "../../common/Image";
import Input from "../../common/Input";
import Layout from "../../common/Layout";
import Margin from "../../common/Margin";
import Nav from "../../common/Nav";
import {
	__getProFileFeedList,
	__requestSearch,
} from "../../redux/modules/feedSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [keyword, setKeyword] = useState("");

	const handleChange = e => {
		const { value } = e.target;
		setKeyword(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(__requestSearch({ keyword: keyword }));
	};

	// const onLogout = () => {
	// 	localStorage.clear();
	// 	alert("로그아웃 되었습니다!");
	// 	window.location.reload();
	// };

	return (
		<Div variant="headerBox">
			<Layout variant="headerLayout">
				<Margin margin="5px 0 0 0">
					<Link to={"./"}>
						<Image variant="navWordMark" />
					</Link>
				</Margin>
				<form onSubmit={handleSubmit}>
					<Input
						onChange={handleChange}
						placeholder="검색"
						variant="searchInput"
					/>
				</form>
				{/* <Button variant="smallWhite" onClick={onLogout}>
					로그아웃
				</Button> */}
				<Nav />
			</Layout>
		</Div>
	);
};

export default Header;
