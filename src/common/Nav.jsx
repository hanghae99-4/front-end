import Div from "./Div";
import Margin from "./Margin";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { updateIsModalOpen } from "../redux/modules/modalSlice";

const Nav = () => {
	const dispatch = useDispatch();
	const handleOpenModal = () => {
		dispatch(updateIsModalOpen());
	};

	return (
		<Div>
			<Margin margin="0 20px 0 0">
				<Image variant="navUpload" onClick={handleOpenModal} />
			</Margin>
			<Image variant="profileDefaultIcon" />
		</Div>
	);
};

export default Nav;
