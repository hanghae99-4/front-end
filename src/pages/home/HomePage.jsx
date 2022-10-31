import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SigninPage } from "..";
import Modal from "../components/modal/Modal";
import Header from "../components/Header";
import EditorModal from "../components/modal/EditorModal";

const Homepage = () => {
	const token = localStorage.getItem("token");
	useEffect(() => {});
	return (
		<>
			{token ? (
				<>
					<Modal />
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
