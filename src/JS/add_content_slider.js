const avtBtn = document.querySelectorAll(".dropdown-trigger");
const avtUpLoad = document.querySelector("#file-upload");
const avatar = document.querySelector(".page1 .your-avt");
const dropZone = document.querySelectorAll(".drop-zone");
const maxSizeInBytes = 10485760;
const maxSizeImg = 1048576;
for (const button of avtBtn) {
	button.addEventListener("click", function (event) {
		button.querySelector("#file-upload").click();
		return false;
	});
}

	avtUpLoad.addEventListener("change", function (event) {
		const file = event.target.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				avtUpLoad.parentElement.parentElement.querySelector(".your-avt").src = base64;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (avtUpLoad.parentElement.parentElement.querySelector(".your-avt").src !== "") {
				avtUpLoad.parentElement.parentElement.querySelector(".drop-zone").innerHTML = "";
			}
		}
	});

function allowDrop(event) {
	event.preventDefault();
}
function validateFile(file, checkdoc = false) {
	let allowedFormats = undefined; // Allowed file formats
	let maxSize = undefined;
	let message_arlet = undefined;
	if (checkdoc == true) {
		allowedFormats = ["docx", "txt"]; // Allowed file formats
		maxSize = maxSizeInBytes;
		message_arlet = "Server có hạn, chọn file ảnh <10MB thoi người đẹp!.";
	} else {
		allowedFormats = ["jpg", "jpeg", "png"]; // Allowed file formats
		maxSize = maxSizeImg;
		message_arlet = "Server có hạn, chọn file ảnh <1MB thoi người đẹp!.";
	}
	console.log("ẹc");
	// Check file format
	const fileName = file.name;
	const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
	if (!allowedFormats.includes(fileExtension)) {
		// Invalid file format
		notify("!", "Sai định dạng file!");
		return false;
	}
	if (file.size > maxSize) {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		notify("!", message_arlet);
		return false;
	}

	// File is valid
	return true;
}

dropZone.ondrop = function (event) {
    console.log('hahaha')
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				dropZone.parentElement.querySelector(".your-avt").src = base64;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (avatar5.src !== "") {
				dropZone.parentElement.querySelector(".your-avt").innerHTML = "haha";
			}
		}
	};

