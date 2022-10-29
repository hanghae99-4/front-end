import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SigninPage } from "..";
import Modal from "../components/modal/Modal";
import Header from "../components/Header";

const Homepage = () => {
	const [token, setToken] = useState(true);

	return (
		<>
			{token ? (
				<>
					<Modal />
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
