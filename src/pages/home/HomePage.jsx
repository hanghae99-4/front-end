import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SigninPage } from "..";
import PostingModal from "../components/modal/PostingModal";
import Header from "../components/Header";
import EditorModal from "../components/modal/EditorModal";

const Homepage = () => {
	const token = localStorage.getItem("token");
	useEffect(() => {});
	return (
		<>
			{token ? (
				<>
					<PostingModal />
					<EditorModal />
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
