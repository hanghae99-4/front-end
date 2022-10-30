const Image = ({ variant, onClick }) => {
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
		case "uploadImageIcon":
			return (
				<img src="/images/uploadFile-icon.png" width="80" height="77" alt="" />
			);
		case "goBackIcon":
			return <img src="/images/back-icon.png" height="24" width="24" alt="" />;
		case "sample":
			return <img onClick={onClick} src="/images/sample.jpg" alt="" />;
		default:
			break;
	}
};

export default Image;
