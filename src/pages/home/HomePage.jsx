import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SigninPage } from "..";
import Header from "../components/Header";

const Homepage = () => {
	const [token, setToken] = useState(true);

	return (
		<>
			{token ? (
				<>
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
