import { useDispatch } from "react-redux";
import Button from "../../common/Button";
import { updateIsEditorModalOpen } from "../../redux/modules/modalSlice";

const DetailPage = () => {
	const dispatch = useDispatch();
	const handleOpenEditorModal = () => {
		dispatch(updateIsEditorModalOpen());
	};

	return <Button onClick={handleOpenEditorModal}>수정</Button>;
};

export default DetailPage;
