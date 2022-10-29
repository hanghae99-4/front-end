import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SigninPage } from "..";
import Nav from "../components/Nav";

const Homepage = () => {
	const token = localStorage.getItem("token");
	useEffect(() => {});
	return (
		<>
			{token ? (
				<>
					<Nav />
					<Outlet></Outlet>
				</>
			) : (
				<SigninPage />
			)}
		</>
	);
};

export default Homepage;
