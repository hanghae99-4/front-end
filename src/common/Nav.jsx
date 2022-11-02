import Div from "./Div";
import Margin from "./Margin";
import Image from "./Image";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateIsModalOpen } from "../redux/modules/modalSlice";
import { Link } from "react-router-dom";

const Nav = () => {
	const dispatch = useDispatch();
	const handleOpenModal = () => {
		dispatch(updateIsModalOpen());
	};

	const token = localStorage.getItem("token").replace("Bearer ", "");
	let decode = jwt_decode(token);
	const memberId = decode.sub;

	return (
		<Div>
			<Margin margin="0 20px 0 0">
				<Image variant="navUpload" onClick={handleOpenModal} />
			</Margin>
			<Link to={`/${memberId}`}>
				<Image variant="profileDefaultIcon" />
			</Link>
		</Div>
	);
};

export default Nav;
