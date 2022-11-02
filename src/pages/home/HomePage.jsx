import { Outlet } from "react-router-dom";
import { SigninPage, DetailPage } from "..";
import PostingModal from "../components/modal/PostingModal";
import Header from "../components/Header";
import EditorModal from "../components/modal/EditorModal";

const Homepage = () => {
	const token = localStorage.getItem("token");

	return (
		<>
			{token ? (
				<>
					<PostingModal />
					<EditorModal />
					<DetailPage />
					<Header />
					<Outlet></Outlet>
				</>
			) : (
				<SigninPage />
			)}
		</>
	);
};

export default Homepage;
