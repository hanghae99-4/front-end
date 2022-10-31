import Button from "../../../common/Button";
import Div from "../../../common/Div";
import Image from "../../../common/Image";
import Margin from "../../../common/Margin";
import TextArea from "../../../common/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { updateIsModalOpen } from "../../../redux/modules/modalSlice";
import { useRef, useState } from "react";
import { __addFeed } from "../../../redux/modules/feedSlice";

function PostingModal() {
	const isModalOpen = useSelector(state => state.modalSlice.isModalOpen);
	const dispatch = useDispatch();
	const [imgFile, setImgFile] = useState({});
	const [feedItem, setFeedItem] = useState({});
	const imgInput = useRef();
	const reader = new FileReader();

	const handleImgChange = e => {
		const img = e.target.files[0];
		if (!img) return;
		setImgFile(img);
		const formData = new FormData();
		formData.append("img", img, img.name);
		setFeedItem({ image: formData });
	};

	const handleTxtChange = e => {
		const text = e.target.value;
		setFeedItem({ ...feedItem, contents: text });
	};

	const handleUpload = () => {
		dispatch(__addFeed(feedItem));
	};

	if (!isModalOpen) return null;

	return (
		// 모달 뒷배경을 눌렀을 때 모달이 사라짐(사실 안 사라짐)
		<Div
			variant="modalOverlay"
			onClick={() => {
				dispatch(updateIsModalOpen());
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
							dispatch(updateIsModalOpen());
							setImgFile(null);
						}}
					/>
				</Div>

				{/* 모달창 */}
				<Div variant="modalPostion">
					<Div variant="modalBox">
						{/* 모달창 헤더 */}
						<Div variant="modalHeader">
							<Image variant="goBackIcon" />
							<p>새 게시물 만들기</p>
							<Button onClick={handleUpload} variant="smallWhite">
								공유하기
							</Button>
						</Div>

						{/* 모달창 컨텐츠 영역 */}
						<Div variant="modalContents">
							{/* 모달창 왼쪽: 사진 업로드 영역 */}
							{/* 업로드 안내 또는 이미지 미리보기 */}
							{imgFile ? (
								<Div variant="sampleInEditor" />
							) : (
								<Div variant="uploadImageArea">
									<Image variant="uploadImageIcon" />
									<h2>사진과 동영상을 여기에 끌어다 놓으세요</h2>
									<input
										style={{ display: "none" }}
										ref={imgInput}
										type="file"
										accept="image/*"
										onChange={handleImgChange}
									/>
									<Button
										onClick={() => {
											imgInput.current.click();
										}}
										variant="smallBlue"
									>
										컴퓨터에서 선택
									</Button>
								</Div>
							)}
							{/* 모달창 오른쪽: 게시글 작성 영역 */}
							<Div variant="modalWriteArea">
								{/* 프로필 */}
								<Div variant="photoAndId">
									<Margin margin="0 12px 0 16px">
										<Image variant="profileDefaultIcon" />
									</Margin>
									<span>아이디</span>
								</Div>

								{/* 작성 영역 */}
								<TextArea
									onChange={handleTxtChange}
									variant="modalWrite"
									placeholder="문구 입력..."
								/>
							</Div>
						</Div>
					</Div>
				</Div>
			</div>
		</Div>
	);
}

export default PostingModal;
