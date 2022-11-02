import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Margin from "../../../common/Margin";
import { useDispatch, useSelector } from "react-redux";
import { updateIsEditorModalOpen } from "../../../redux/modules/modalSlice";
import { useEffect, useState } from "react";
import { __updateFeedItem } from "../../../redux/modules/feedSlice";

function EditorModal() {
	const dispatch = useDispatch();
	const isEditorModalOpen = useSelector(
		state => state.modalSlice.isEditorModalOpen,
	);
	const feedItem = useSelector(state => state.feedSlice.feedItem);

	const [editedItem, setEditedItem] = useState({});
	const [inputValue, setInputValue] = useState({});

	const {
		feedId,
		feedImage,
		contents,
		heartByMe,
		heartNum,
		memberId,
		nickname,
		username,
		commentsList,
	} = feedItem;

	useEffect(() => {
		setInputValue({ contents: contents });
	}, []);

	const handleTxtChange = e => {
		const txt = e.target.value;
		setInputValue({ ...inputValue, contents: txt });
		setEditedItem({ feedId: feedId, contents: inputValue.contents });
	};

	console.log("@ 보낼거 =>", editedItem);

	const handleSubmit = () => {
		dispatch(__updateFeedItem(editedItem));
	};

	if (!isEditorModalOpen) return null;

	return (
		// 모달 뒷배경을 눌렀을 때 모달이 사라짐(사실 안 사라짐)
		<Div
			variant="editmodalOverlay"
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
							<Button onClick={handleSubmit} variant="smallWhite">
								완료
							</Button>
						</Div>

						{/* 모달창 컨텐츠 영역 */}
						<Div variant="modalContents">
							{/* 모달창 왼쪽: 사진 영역 */}
							<Div variant="uploadImageArea">
								<img
									variant="feedImgEdit"
									alt=""
									src={feedImage}
									width="100%"
									object-fit="contain"
									object-position="center"
								/>
								{/* <Div variant="sampleInEditor" /> */}
							</Div>

							{/* 모달창 오른쪽: 게시글 수정 영역 */}
							<Div variant="modalWriteArea">
								{/* 프로필 */}
								<Div variant="photoAndId">
									<Margin margin="0 12px 0 16px">
										<Image variant="profileDefaultIcon" />
									</Margin>
									<span>{memberId}</span>
								</Div>
								{/* 게시글 수정 영역 */}
								<textarea
									onChange={handleTxtChange}
									value={inputValue.contents}
									variant="modalWrite"
									placeholder="문구 입력..."
									style={{
										height: "100%",
										width: "100%",
										backgroundColor: "transparent",
										padding: "0 16px 16px 16px",
									}}
								/>
							</Div>
						</Div>
					</Div>
				</Div>
			</div>
		</Div>
	);
}

export default EditorModal;
