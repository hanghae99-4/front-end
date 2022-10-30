import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Margin from "../../../common/Margin";
import TextArea from "../../../common/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { updateIsEditorModalOpen } from "../../../redux/modules/modalSlice";

function EditorModal() {
	const isEditorModalOpen = useSelector(
		state => state.modalSlice.isEditorModalOpen,
	);
	const dispatch = useDispatch();

	if (!isEditorModalOpen) return null;

	return (
		// 모달 뒷배경을 눌렀을 때 모달이 사라짐(사실 안 사라짐)
		<Div
			variant="modalOverlay"
			onClick={() => {
				dispatch(updateIsEditorModalOpen());
			}}
		>
			{/* 이벤트 버블링을 막아줌(사실 안 막아줌) */}
			<div
				onClick={e => {
					e.stopPropagation();
				}}
			>
				{/* 닫기 버튼 */}
				<Div variant="closeModalBtn">
					<Image
						variant="closeModalBtn"
						onClick={e => {
							dispatch(updateIsEditorModalOpen());
						}}
					/>
				</Div>

				{/* 모달창 */}
				<Div variant="modalPostion">
					<Div variant="modalBox">
						{/* 모달창 헤더 */}
						<Div variant="modalHeader">
							<Button variant="smallBlack">취소</Button>
							<p>정보 수정</p>
							<Button variant="smallWhite">완료</Button>
						</Div>

						{/* 모달창 컨텐츠 영역 */}
						<Div variant="modalContents">
							{/* 모달창 왼쪽: 사진 영역 */}
							<Div variant="uploadImageArea">
								<Div variant="sampleInEditor" />
							</Div>

							{/* 모달창 오른쪽: 게시글 수정 영역 */}
							<Div variant="modalWriteArea">
								{/* 프로필 */}
								<Div variant="photoAndId">
									<Margin margin="0 12px 0 16px">
										<Image variant="profileDefaultIcon" />
									</Margin>
									<span>아이디</span>
								</Div>
								{/* 게시글 수정 영역 */}
								<TextArea variant="modalWrite" placeholder="문구 입력..." />
							</Div>
						</Div>
					</Div>
				</Div>
			</div>
		</Div>
	);
}

export default EditorModal;
