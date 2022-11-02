const Image = ({ variant, onClick, feedImage }) => {
	switch (variant) {
		case "navUpload":
			return (
				<img
					onClick={onClick}
					src="/images/addFeed-icon.png"
					width="24"
					height="24"
					alt=""
				/>
			);
		case "profileDefaultIcon":
			return (
				<img
					src="/images/profile-default-icon.png"
					width="24"
					height="24"
					alt=""
				/>
			);
		case "profileDefaultIconMid":
			return (
				<img
					src="/images/profile-default-icon.png"
					width="32px"
					height="32px"
					alt=""
					top="10px"
					left="-5px"
					style={{ cursor: "pointer" }}
				/>
			);
		case "profileDefaultIconBig":
			return (
				<img
					src="/images/profile-default-icon.png"
					width="150"
					height="150"
					alt=""
				/>
			);

		case "navWordMark":
			return (
				<img
					src="/images/Instagram-Wordmark.png"
					width="103"
					height="29"
					objectfit="cover"
					alt=""
				/>
			);
		case "closeModalBtn":
			return (
				<img
					onClick={onClick}
					src="/images/x-mark-icon.png"
					position="fixed"
					width="18"
					height="18"
					top="8px"
					right="8px"
					alt=""
				/>
			);

		//아이콘
		case "uploadImageIcon":
			return (
				<img src="/images/uploadFile-icon.png" width="80" height="77" alt="" />
			);
		case "goBackIcon":
			return <img src="/images/back-icon.png" height="24" width="24" alt="" />;
		case "imgSample":
			return (
				<img
					onClick={onClick}
					src={feedImage}
					style={{ objectFit: "cover" }}
					width="100%"
					height="100%"
					alt=""
				/>
			);

		case "heartIcon":
			return (
				<img
					src="/images/likeicon.jpg"
					position="absoulte"
					height="100%"
					object-fit="cover"
					alt="heartIcon"
				/>
			);

		case "commentIcon":
			return (
				<img
					src="/images/commenticon.jpg"
					position="absoulte"
					height="100%"
					object-fit="cover"
					alt="commentIcon"
				/>
			);

		//피드 이미지
		case "feedImg":
			return (
				<img
					onClick={onClick}
					src={feedImage}
					position="absolute"
					sizes="472px"
					alt=""
					width="472px"
					object-fit="cover"
					transform="translate(-50%, -50%)"
					object-position="center"
					background-position="center"
					style={{ cursor: "pointer" }}
				/>
			);
		case "feedImgDeital":
			return (
				<img
					src={feedImage}
					// position="absolute"
					sizes="800px"
					// sizes="472px"
					alt=""
					width="100%"
					// height="100%"
					object-fit="contain"
					// transform="translate(-50%, -50%)"
					object-position="center"
					// background-position="center"
					// style={{ cursor: "pointer" }}
				/>
			);
		default:
			break;
	}
};

export default Image;
