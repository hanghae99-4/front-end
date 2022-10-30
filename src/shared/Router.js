import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	ProfilePage,
	HomePage,
	SignupPage,
	FeedPage,
	DetailPage,
} from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="" element={<FeedPage />} />
					<Route path=":userId" element={<ProfilePage />} />
					<Route path=":userId/:feedId" element={<DetailPage />} />
				</Route>
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
