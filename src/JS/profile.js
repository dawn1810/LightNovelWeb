// avt page1
const avtBtn = document.querySelectorAll(".dropdown-trigger");
const avtUpLoad = document.querySelectorAll(" #file-upload");
const avatar = document.querySelector(".page1 .your-avt");
const dropZone = document.querySelectorAll(".drop-zone");
// avt page1

const maxSizeInBytes = 10485760;
const maxSizeImg = 1048576;
// avt page5
const avatar5 = document.querySelector(".page5_a_up .your-avt");
const dropZone5 = document.querySelector(".page5_a_up .drop-zone");
const avtBtn5 = document.querySelector(".page5_a_up .dropdown-trigger");
const avtUpLoad5 = document.querySelector(".page5_a_up #file-upload");
// avt page5


const Setting_pageWrapper = document.querySelectorAll(".Setting_pageWrapper");
const Setting_item = document.querySelectorAll(".Setting_sidebar-list_item");

const delete_chapter = document.querySelector(".delete_chapter")
const add_new = document.querySelector('.add_new')
const page5_home = document.querySelector('.page5_home')
const page5_a = document.querySelector('.page5_a')
const page5_b = document.querySelector('.page5_b')
const page5_chap = document.querySelector('.page5_chap')
const page5_info = document.querySelector('.page5_info')
const page5_post = document.querySelector('.page5_post')
const page5_last = document.querySelector('.page5_last')
const novel_name = document.querySelector('.n_name');
const author_name = document.querySelector('.author_name');
const novel_status = document.querySelector('.novel_status select');
const novel_descript = document.querySelector('.novel_descript');
const novel_types = document.querySelector('.novel_types select');
const page5_composed = document.querySelectorAll('.page5_composed');
const page5_a_up = document.querySelectorAll('.page5_a_up');
const range = document.querySelector('.range');
const range__label = document.querySelector('.range__label');
const back_btn = document.querySelectorAll('.back_btn')


// toast 
const toast = document.querySelector(".toast");
const closeIcon = document.getElementById("close");
const progress = document.querySelector(".progress");
closeIcon.addEventListener("click", () => {
	toast.classList.remove("active");
})

// dieu khoan dich vu
const checked = document.getElementById("Agree");
// dieu khoan dich vu





window.addEventListener('popstate', function (event) {
	location.reload();
});

function Setting_pageWrapper_drop() {
	for (const key of Setting_pageWrapper) {
		key.style.display = "none";
	}
}

function Setting_item_drop() {
	for (const key of Setting_item) {
		key.style.backgroundColor = "transparent"
	}
}

function page5_composed_drop() {
	// ẩn page5_composed
	for (const key of page5_composed) {
		key.style.display = 'none'
	}
}

function page5_a_up_drop() {
	for (const key of page5_a_up) {
		key.style.display = 'none'
	}
}

var currentPath = window.location.href.substring(window.location.href.lastIndexOf('/'));
console.log(currentPath)
if (currentPath == "/novel_following") {
	Setting_pageWrapper_drop()
	Setting_item_drop()
	document.querySelector('.page2').style.display = 'block';
	document.querySelector('.yourfollow').style.backgroundColor = "var(--st-pr-btn-bg)";
}
else if (currentPath == '/change_pass') {
	Setting_pageWrapper_drop()
	Setting_item_drop()
	document.querySelector('.yourchangepass').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page4').style.display = 'block';
}
else if (currentPath == '/my_novel') {
	Setting_pageWrapper_drop()
	Setting_item_drop()
	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page5').style.display = 'block';
}
else if (currentPath == '/add_novel') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()

	document.querySelector('.page5').style.display = 'block'
	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	page5_composed[1].style.display = 'block'
	page5_a_up[0].style.display = 'flex'
	setTimeout(function () {
		range.style.setProperty('--p', '25');
		// range.style.setProperty('--widthbf', '0');

		range__label.classList.remove('anima')

		range__label.classList.add('anima')
	}, 100)
}
else if (currentPath == '/add_content') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()

	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page5').style.display = 'block'
	page5_composed[1].style.display = 'block'
	// page5_a_up[0].style.display = 'flex'
	page5_chap.style.display = 'block'
	range.style.setProperty('--p', '50');
	range.style.setProperty('--widthbf', '25%');

	range__label.classList.remove('anima')

	setTimeout(function () {
		range__label.classList.add('anima')
	}, 50)
}
else if (currentPath == '/post_novel') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()

	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page5').style.display = 'block'
	page5_composed[1].style.display = 'block'
	// page5_a_up[0].style.display = 'flex'
	page5_post.style.display = 'block'
	range.style.setProperty('--p', '75');
	range.style.setProperty('--widthbf', '50%');
	range__label.classList.remove('anima')

	setTimeout(function () {
		range__label.classList.add('anima')
	}, 50)
}
else if (currentPath == '/congratulation') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()

	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page5').style.display = 'block'
	page5_composed[1].style.display = 'block'
	// page5_a_up[0].style.display = 'flex'
	page5_last.style.display = 'block'

	let audio = new Audio('/src/audio/naruto-trap.mp3');
	audio.volume = 0.5;
	audio.play();

	range.style.setProperty('--p', '100');
	range.style.setProperty('--widthbf', '75%');

	range__label.classList.remove('anima')

	setTimeout(function () {
		range__label.classList.add('anima')
	}, 50)
}
else if (currentPath == '/edit') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()
	document.querySelector('.page5').style.display = 'block'

	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";
	page5_composed[3].style.display = 'block'
	page5_a_up[4].style.display = 'flex'
}
else if (currentPath == '/morechap') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()
	document.querySelector('.page5').style.display = 'block'

	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";
	page5_composed[4].style.display = 'block'
	page5_a_up[5].style.display = 'block'
}
else if (currentPath == '/listchap') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()
	document.querySelector('.up_novel').style.backgroundColor = "var(--st-pr-btn-bg)";

	document.querySelector('.page5').style.display = 'block'
	page5_composed[2].style.display = 'block';
	page5_a_up[0].style.display = 'flex';
	console.log('ok')
}


for (let i = 0; i < Setting_item.length; i++) {
	const currentURL = window.location.protocol + "//" + window.location.host + '/profile';

	// console.log(Setting_item[i])
	// console.log(i);
	Setting_item[i].onclick = function () {


		Setting_item_drop()
		if (Setting_item[i].classList[1] == 'yourinfo') {
			Setting_pageWrapper_drop()
			Setting_pageWrapper[0].style.display = 'block';
			history.pushState(null, null, currentURL);
		}
		if (Setting_item[i].classList[1] == 'yourfollow') {

			var newURL = currentURL + '/novel_following';


			history.pushState(null, null, newURL);
			Setting_pageWrapper_drop()
			Setting_pageWrapper[1].style.display = 'block';



		}
		if (Setting_item[i].classList[1] == 'yourchangepass') {



			var newURL = currentURL + '/change_pass';
			history.pushState(null, null, newURL);
			Setting_pageWrapper_drop()
			document.querySelector('.page4').style.display = 'block';
		}

		if (Setting_item[i].classList[1] == 'up_novel') {
			var newURL = currentURL + '/my_novel';
			history.pushState(null, null, newURL);
			Setting_pageWrapper_drop()
			page5_composed_drop()
			page5_a_up_drop()
			page5_composed[0].style.display = 'block';
			page5_a_up[0].style.display = 'flex';
			document.querySelector('.page5').style.display = 'block';
		}

		Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";


	};
}
const button_file = document.querySelectorAll("#button_file");

for (const button of button_file) {
	button.onclick = function (e) {
		e.preventDefault();
		console.log("ok");
		console.log(button.parentElement);
		let file = button.parentElement.querySelector("input");
		file.focus();
		file.setSelectionRange(file.value.length, file.value.length);
	};
}

// change the avatar image
for (const button of avtBtn) {
	button.addEventListener("click", function (event) {
		button.querySelector('#file-upload').click();
		return false;
	});
}
// avtBtn5.addEventListener("click", function (event) {
// 	avtUpLoad5.click();
// 	return false;
// });


function validateFile(file, checkdoc = false) {
	let allowedFormats = undefined; // Allowed file formats
	let maxSize = undefined
	let message_arlet = undefined
	if (checkdoc == true) {
		allowedFormats = ['docx', 'txt']; // Allowed file formats
		maxSize = maxSizeInBytes
		message_arlet = 'Server có hạn, chọn file ảnh <10MB thoi người đẹp!.'
	} else {
		allowedFormats = ['jpg', 'jpeg', 'png']; // Allowed file formats
		maxSize = maxSizeImg
		message_arlet = 'Server có hạn, chọn file ảnh <1MB thoi người đẹp!.'
	}
	console.log('ẹc')
	// Check file format
	const fileName = file.name;
	const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
	if (!allowedFormats.includes(fileExtension)) {
		// Invalid file format
		notify('Chú ý!', 'Sai định dạng file rồi người đẹp!.');
		return false;
	}
	if (file.size > maxSize) {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		notify('Chú ý!', message_arlet);
		return false;



	}

	// File is valid
	return true;
}

for (const button of avtUpLoad) {
	button.addEventListener("change", function (event) {

		const file = event.target.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				console.log(reader.result)
				button.parentElement.parentElement.querySelector('.your-avt').src = reader.result;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (button.parentElement.parentElement.querySelector('.your-avt').src !== "") {
				button.parentElement.parentElement.querySelector('.drop-zone').innerHTML = "";
			}
		}
	});
}

function allowDrop(event) {
	event.preventDefault();
}

for (const button of dropZone)
	button.ondrop = function (event) {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				button.parentElement.querySelector('.your-avt').src = reader.result;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (avatar5.src !== "") {
				button.parentElement.querySelector('.your-avt').innerHTML = "haha";
			}
		}
	}

function getRandomElement(list) {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}
function generateUUID() {
	// Hàm tạo chuỗi UUID
	// Tham khảo: https://stackoverflow.com/a/2117523/13347726
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

async function uploadFiles(files, type) {
	try {
		var formData = new FormData();

		for (var i = 0; i < files.length; i++) {
			let extension = files[i].name.substring(files[i].name.lastIndexOf('.'));
			let newName = `${i} ` + generateUUID() + extension;
			let renamedFile = new File([files[i]], newName, { type: files[i].type });
			formData.append('files[]', renamedFile);
		}

		const response = await fetch('/uploadFile', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			const responseData = await response.json();
			console.log('File uploaded!');
			sessionStorage.setItem('chapters_content', responseData);
			switch (type) {
				case 0: await uploadNovel();
				case 1: await updateNovel();
				case 2: await editNovel();
			}
		} else if (response.status == 400) {
			// Error occurred during upload
			notify('Chú ý!', 'Sai định dạng file rồi người đẹp!.');
			console.error('Error uploading files.');
		}
	} catch (error) {
		// Error occurred during the request
		console.error('Error uploading files.');
	}
}

async function uploadNovel() {
	// POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
	//gửi request tới csdl server
	const url = `${currentURL}/upload_novel`; // URL của máy chủ mục tiêu

	const postData = JSON.stringify({
		name: sessionStorage.getItem("novel_name"),
		author: sessionStorage.getItem("author_name"),
		name_chaps: sessionStorage.getItem("name_chapters").split(","),
		chap_ids: sessionStorage.getItem("chapters_content").split(","),
		genres: sessionStorage.getItem("novel_types").split(","),
		status: sessionStorage.getItem("novel_status"),
		summary: sessionStorage.getItem("novel_descript"),
		image: sessionStorage.getItem("novel_avt"),
	});
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: postData
	};

	try {
		const response = await fetch(url, requestOptions)
		// taì khoan hơp lệ 
		if (response.status == '200') {
			page5_a_up_drop()
			var newURL = currentURL + '/profile/congratulation';
			history.pushState(null, null, newURL);
			page5_last.style.display = 'block'

			let audio = new Audio('/src/audio/naruto-trap.mp3');
			audio.volume = 0.5;
			audio.play();

			range.style.setProperty('--p', '100');
			range.style.setProperty('--widthbf', '75%');

			range__label.classList.remove('anima')

			setTimeout(function () {
				range__label.classList.add('anima')
			}, 50)
		}
	} catch (error) {
		console.log('Error:', error);
	}
}

async function updateNovel() {
	// POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
	//gửi request tới csdl server
	const url = `${currentURL}/update_upload_novel`; // URL của máy chủ mục tiêu

	const postData = JSON.stringify({
		id: sessionStorage.getItem("currNovelID"),
		name_chaps: sessionStorage.getItem("name_chapters").split(","),
		chap_ids: sessionStorage.getItem("chapters_content").split(","),
	});
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: postData
	};

	try {
		const response = await fetch(url, requestOptions)
		// taì khoan hơp lệ 
		if (response.status == '200') {
			// back to novel list scene
			page5_a_up_drop()
			let newURL = currentURL + '/profile/my_novel';
			window.location.href = newURL;
			// reset sessionStorage
			sessionStorage.clear();
		}
	} catch (error) {
		console.log('Error:', error);
	}
}

async function editNovel() {
	// POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
	//gửi request tới csdl server
	const url = `${currentURL}/edit_novel`; // URL của máy chủ mục tiêu

	const postData = JSON.stringify({
		id: sessionStorage.getItem("currNovelID"),
		name_chaps: sessionStorage.getItem("name_chapters").split(","),
		chap_ids: sessionStorage.getItem("chapters_content").split(","),
		edit_index: sessionStorage.getItem("edit_indexes").split(","),
		remove_list:  sessionStorage.getItem("remove_list").split(",")
	});
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: postData
	};

	try {
		const response = await fetch(url, requestOptions)
		// taì khoan hơp lệ 
		if (response.status == '200') {
			// back to novel list scene
			page5_a_up_drop()
			let newURL = currentURL + '/profile/my_novel';
			window.location.href = newURL;
			// reset sessionStorage
			sessionStorage.clear();
		}
	} catch (error) {
		console.log('Error:', error);
	}
}


function notify(text_1, text_2) {
	toast.classList.add("active");
	toast.querySelector('.text-1').innerHTML = text_1;
	toast.querySelector('.text-2').innerHTML = text_2;
	progress.classList.add("active");

	timer1 = setTimeout(() => {
		toast.classList.remove("active");
	}, 5000); //1s = 1000 milliseconds

	timer2 = setTimeout(() => {
		progress.classList.remove("active");
	}, 5300);
}

// Danh sách các phần tử
const myList = [
	"Súng ống đầy đủ",
	"Ngực công, mông thủ",
	"Thay đổi theo nồng độ cồn",
	"3D siêu chân thực",
	"Không có giới tính",
	"Sướng là được",
	"Thú tính",
	"Lưỡng long nhất thể",
	"Quan trọng là thần thái",
];
const randomElement = getRandomElement(myList);
document.querySelector(".sex_random").innerHTML = randomElement;
document.querySelector(".button_random").onclick = function (e) {
	e.preventDefault();
	// Gọi hàm để tạo số ngẫu nhiên
	const randomElement = getRandomElement(myList);
	console.log(randomElement);
	document.querySelector(".sex_random").innerHTML = randomElement;
};

// update info
const Save_btn = document.querySelector('.Save_btn')
Save_btn.onclick = async function (e) {
	e.preventDefault()
	const url = `${currentURL}/updateInfo`; // URL của máy chủ mục tiêu
	let sex = 'null'
	if (document.querySelector('#nam').checked) {
		sex = 'nam'
	}
	else if (document.querySelector('#nu').checked) {
		sex = 'nu'
	}
	const postData = JSON.stringify({
		// thông tin đăng kýýý
		img: `${avatar.src}`,
		usr: `${document.querySelector("#username").innerText}`,
		hoten: `${document.querySelector("#fullname").value}`,
		email: `${document.querySelector("#email").value}`,
		sex: `${sex}`,
	});

	//gửi lên 
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: postData,
	};


	try {
		notify('Thông báo!', 'Đang tải lên...chờ một tý!');
		const response = await fetch(url, requestOptions);
		console.log(response.status);
		if (response.status == "200") {
			document.querySelector('.header_user_logo_i p').textContent = document.querySelector("#fullname").value
			document.querySelector('.header_user_logo_i .curent-avt img').src = avatar.src

			notify('Thông báo!', 'Thay đổi thông tin người dùng thành công!');
		}
	} catch (error) {
		console.log("Error:", error);
		notify('Lỗi!', 'Thay đổi thông tin người dùng không thành công!');
	}

}



// change pass
add_new.onclick = function () {
	page5_composed_drop()
	var newURL = currentURL + '/profile' + '/add_novel';
	history.pushState(null, null, newURL);
	page5_composed[1].style.display = 'block'
	page5_a_up[0].style.display = 'flex'
	setTimeout(function () {
		range.style.setProperty('--p', '25');
		// range.style.setProperty('--widthbf', '0');

		range__label.classList.remove('anima')

		range__label.classList.add('anima')
	}, 100)
}

document.querySelector('.page5_info .next_btn').onclick = function () {
	if (novel_name.value != '' && author_name.value != '' && novel_descript.value && listObj.tempValues) {
		page5_a_up_drop()
		let newURL = currentURL + '/profile/add_content';
		history.pushState(null, null, newURL);
		page5_chap.style.display = 'block'
		range.style.setProperty('--p', '50');
		range.style.setProperty('--widthbf', '25%');

		range__label.classList.remove('anima')

		setTimeout(function () {
			range__label.classList.add('anima')
		}, 50)

		sessionStorage.setItem("novel_name", novel_name.value);
		sessionStorage.setItem("author_name", author_name.value);
		sessionStorage.setItem("novel_descript", novel_descript.value);
		sessionStorage.setItem("novel_types", listObj.tempValues);
		sessionStorage.setItem("novel_status", novel_status.options[novel_status.selectedIndex].text);
		sessionStorage.setItem("novel_avt", document.querySelector('.page5_info_img .your-avt').src);
	} else {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		notify('Lỗi', 'Hãy vui lòng điền đủ thông tin!');
	}
}

async function cancel() {
	// remove all chapters
	if (confirm("Shinra tensei - Hủy diệt mọi thứ. Are you sure about that? ( ⚆ _ ⚆ )") == true) {
		// create shinra tensei 
		var elem = document.createElement('div');
		elem.className = 'shinra'
		elem.style.cssText = `
				position:absolute;
				top: 0;
				left: 0;
				width:100vw;
				height:130%;
				margin-top: -100px;
				z-index:99999999999999999;
				background:#000;
				background-image: url('https://media.tenor.com/WNyMsbIJmBMAAAAC/naruto-shinra.gif');
				`
		// background-image: url('https://cdn.discordapp.com/attachments/1119221555566751754/1132280018534408233/thien.webp');
		document.body.appendChild(elem);

		let audio = new Audio('/src/audio/shinra.mp3');
		audio.volume = 0.5;
		audio.play();
		if (sessionStorage.getItem("chapters_content")) {
			// remove all chapters
			const url = `${currentURL}/cancel`; // URL của máy chủ mục tiêu

			const postData = JSON.stringify({
				chap_ids: sessionStorage.getItem("chapters_content").split(","),
				status: 'cancel'
			});
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: postData
			};

			try {
				const response = await fetch(url, requestOptions)
				// taì khoan hơp lệ 
				if (response.status == '200') {
					setTimeout(function () {
						// back to novel list scene
						page5_a_up_drop()
						let newURL = currentURL + '/profile/my_novel';
						window.location.href = newURL;
						// reset sessionStorage
						sessionStorage.clear();
					}, 7000)
				}
			} catch (error) {
				console.log('Error:', error);
			}
		}
		else {
			setTimeout(function () {
				// back to novel list scene
				page5_a_up_drop()
				let newURL = currentURL + '/profile/my_novel';
				window.location.href = newURL;
				// reset sessionStorage
				sessionStorage.clear();
			}, 7000)
		}
	} else {
		notify('Thông báo', 'Đã huỷ!');
	}
}

function setupPrivateData(element) {
	var private = 1;
	element.setPrivate = function (d) { private = d; }
	element.getPrivate = function () { return private; }
}

document.querySelector('.page5_info .close_btn').onclick = async function () {
	await cancel();
}

document.querySelector('.page5_chap .more_chap_btn').onclick = function () {
	const newElement = document.createElement('div');
	newElement.className = 'info-wrapper-container';
	newElement.innerHTML = `
		<div class="laocacho" style = "display: flex; justify-content: flex-end;" >
				<button class="delete_chap">
					<i class="fa-solid fa-xmark"></i>
				</button>
		</div>

		<div class="information_name_wrap">
			<h3>Thứ tự chương</h3>
			<div class="information_name">
				<input class="profile_input chap_num" type="number" id="name_novel"
					placeholder="Nhập thứ tự chương(e.g. 1, 1.1, 1.5, 2,...)" />
			</div>
		</div>

		<div class="information_name_wrap">
			<h3>Tên chương</h3>
			<div class="information_name">
				<input class="profile_input chap_name" type="text" id="fullname"
					placeholder="Nhập tên chương" />
			</div>
		</div>



		<div class="information_name_wrap">
			<div class="head">
				<h3>Nội Dung</h3>
				<pre class="file-content" style="margin: 1rem 20px;"></pre>
				<input type="file" class="file-input" style="display:none;" accept=".txt, .docx"/>
				<button class="upfile">
					<i class="fa-solid fa-upload"></i>
				</button>
			</div>
		</div>
		
		<p style="text-align: center;">[------------------------------------ 🦊🍜🍥 ------------------------------------]</p>
		`;
	document.querySelector('.page5_chap .page5_info_main').appendChild(newElement);
};


$(document).ready(function () {
	// Add event listener to all buttons
	$(document).on('click', '.page5_chap .delete_chap', function () {
		// Delete the grandparent node
		$(this).parent().parent().remove();
	});

	$(document).on('click', '.page5_chap .upfile', function () {
		console.log('upfile');
	});

	$(document).on('click', '.back_btn', function () {
		history.back();
	});

	// upload content file
	$(document).on('click', '.page5_chap .upfile', function () {
		$(this).parent().find('.file-input').click()
	});

	$(document).on('change', '.page5_chap .file-input', function () {
		const file = $(this)[0].files[0];
		if (validateFile(file, true)) {
			$(this).parent().find('.file-content').text(file.name)
		}

	});

	// delete one file
	$(document).on('click', '.delete_chapter ', async function () {
		// Delete the grandparent node
		let id_truyen = $(this).parent().parent().attr('id');
		if (confirm("Bạn có chắc chắn muốn xoá truyện?") == true) {

			const url = `${currentURL}/cancel`; // URL của máy chủ mục tiêu

			const postData = JSON.stringify({
				id: id_truyen,
				status: 'delete'
			});
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: postData
			};

			try {
				notify('Thông báo', 'Đang xoá...!');
				const response = await fetch(url, requestOptions)
				// taì khoan hơp lệ 
				if (response.status == '200') {
					$(this).parent().parent().parent().remove();
					notify('Thông báo', 'Xoá truyện thành công!');
				} else {
					notify('Lỗi', 'Xoá truyện không thành công!');
				}
			} catch (error) {
				console.log('Error:', error);
			}
		}

	});

	// load update edit (chỉnh sửa) page
	$(document).on('click', '.update_current_novel ', function () {
		// Delete the grandparent node
		let grandparentID = $(this).parent().parent().attr('id');
		sessionStorage.setItem('currNovelID', grandparentID);
		page5_composed_drop()
		var newURL = currentURL + '/profile/update/' + grandparentID + '/edit';
		window.location.href = newURL;

		console.log(grandparentID); // This will log 'grandparent'
	});

	// load update edit (chỉnh sửa) page
	$(document).on('click', '.delete-follow', async function () {
		// Delete the grandparent node
		let grandparentID = $(this).parent().parent().parent().parent().attr("id");
		page5_composed_drop();

		const accountCookie = getCookie('account');
		if (accountCookie) {
			// Gửi cookie "account" lên máy chủ
			// Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
			// Ví dụ sử dụng Fetch API:
			await fetch(`${currentURL}/updatelike`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					liked: 0,
					id_truyen: grandparentID
				})
			})
				.then(response => {
					if (response.ok) {
						notify('Thông báo', 'Bỏ theo dõi thành công!')
						$(this).parent().parent().parent().parent().remove();
					}
				})
				.catch(error => {
					notify('Lỗi', 'Có lỗi xảy ra!')
					console.log(error)
				});
		}

	});

	// load update show list (danh sách chương) page
	$(document).on('click', '.showlist_novel ', function () {
		// Delete the grandparent node
		let grandparentID = $(this).parent().parent().attr('id');
		page5_composed_drop()
		sessionStorage.setItem('currNovelID', grandparentID);
		var newURL = currentURL + '/profile/update/' + grandparentID + '/listchap';
		window.location.href = newURL;
	});

	// load update add more chapter (thêm chương) page
	$(document).on('click', '.add_novel_more_chap ', function () {
		let grandparentID = $(this).parent().parent().attr('id');
		// change to add more chap page
		page5_composed_drop()
		sessionStorage.setItem('currNovelID', grandparentID);
		var newURL = currentURL + '/profile/update/' + grandparentID + '/morechap';
		window.location.href = newURL;

	});

	$(document).on('click', '.page5_b .edit_btn', function () {
		$(this).parent().find('.file-input').click()
	});

	$(document).on('change', '.page5_b .file-input', function () {
		const file = $(this)[0].files[0];
		if (validateFile(file, true)) {
			$(this).parent().find('.file-content').text(file.name)
		}
	});

	$(document).on('click', '.page5_b .download_btn', async function () {
		let grandGrandParentID = $(this).parent().parent().parent().attr('id');
		const url = `${currentURL}/download_chap`; // URL của máy chủ mục tiêu

		const postData = JSON.stringify({
			id: grandGrandParentID
		});

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: postData
		};

		fetch(url, requestOptions)
			.then(response => {
				// extract the filename from the response header
				const filename = response.headers.get('Content-Disposition').split('filename=')[1];

				// create a new blob object from the response body
				return response.blob().then(blob => {
					// create a temporary URL for the blob object
					const url = window.URL.createObjectURL(blob);

					// create a new anchor element to download the file
					const a = document.createElement('a');
					a.href = url;
					a.download = filename;
					a.click();

					// release the temporary URL
					window.URL.revokeObjectURL(url);
				});
			})
			.catch(error => {
				console.error('Error downloading file:', error);
			});
	});

	$(document).on('click', '.page5_b .remove_chap', async function () {
		if (confirm("Hãy chắc chắn sẽ xóa chapter này? hành động của bạn là không thể thu hồi!!!") == true) {
			let grandGrandParentID = $(this).parent().parent().parent().attr('id');
			let remove_list = []
			// if already have remove list
			if (sessionStorage.getItem("remove_list")) {
				remove_list = sessionStorage.getItem("remove_list").split(",");
			};
			// set new remove to sessionStorage:
			remove_list.push($(this).parent().parent().parent().index());
			sessionStorage.setItem("remove_list", remove_list);
			//////-----------nho set file ve rong-------------------///////
			// // remove current chapter items
			// $(this).parent().parent().parent().remove()
		} else {
			notify('Thông báo', 'Đã huỷ!');
		}
	});
});

// next page btn of .page5_chap
document.querySelector('.page5_chap .next_btn').onclick = async function () {
	let files = []
	let full = false
	let name_chaprters = []
	// Loop through all elements
	$('.page5_a .page5_chap .info-wrapper-container').each(function () {
		// Get the input element inside the current element
		let chapNum = $(this).find('.chap_num').val();
		let chapName = $(this).find('.chap_name').val();
		let curr_file = $(this).find('.file-input')[0].files[0];
		if (chapNum != '' && chapName != '' && curr_file) {
			name_chaprters.push(`Chương ${chapNum}: ${chapName} `);
			files.push(curr_file);
			full = true;
		} else {
			full = false;
		};
	});

	sessionStorage.setItem("name_chapters", name_chaprters);

	if (full) {

		if (confirm("Khi tiến hành đăng truyện, bạn đã chấp nhận các chính sách và quy định của WTFNovel về Nội dung và Chính sách chia sẻ quyền lợi. Bạn có chắc sẽ đăng truyện này?") == true) {
			document.querySelector('.page5_chap .next_btn').innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `
			// window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
			notify('Rasengan', 'Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)');
			await uploadFiles(files, 0);
		} else {
			notify('Thông báo', 'Đã huỷ!');
		}
	} else {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		notify('Lỗi', 'Hãy vui lòng điền đủ thông tin!');
	}

}

// cancel 2nd page
document.querySelector('.page5_chap .close_btn').onclick = async function () {
	await cancel();
}

document.querySelector('.page5_last .page5_last_btn').onclick = function () {
	// back to novel list scene
	page5_a_up_drop()
	let newURL = currentURL + '/profile/my_novel';
	window.location.href = newURL;

	// reset sessionStorage
	sessionStorage.clear();
}

// trang danh sách chương:
// nút hủy 
document.querySelector('.page5_b .close_btn').onclick = function () {
	cancel();
};

// nút chấp nhận
document.querySelector('.page5_b .next_btn').onclick = async function () {
	console.log('next_btn')
	let files = []
	let edit_indexes = []
	let name_chaprters = []
	// Loop through all elements
	$('.page5_b .my_novel_item').each(function () {
		// Get the input element inside the current element
		let chapNum = $(this).find('.n_num').val();
		let chapName = $(this).find('.n_name').val();
		let curr_file = $(this).find('.file-input')[0].files[0];
		name_chaprters.push(`Chương ${chapNum}: ${chapName} `);
		if (curr_file) {
			files.push(curr_file);
			edit_indexes.push($(this).index());
			console.log($(this).index());
		}
	});

	sessionStorage.setItem("name_chapters", name_chaprters);
	sessionStorage.setItem("edit_indexes", edit_indexes);

	if (confirm("Khi tiến hành đăng truyện, bạn đã chấp nhận các chính sách và quy định của WTFNovel về Nội dung và Chính sách chia sẻ quyền lợi. Bạn có chắc sẽ đăng truyện này?") == true) {
		document.querySelector('.page5_b .next_btn').innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `
		// window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
		notify('Rasengan', 'Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)');
		await uploadFiles(files, 2);
	} else {
		notify('Thông báo', 'Đã huỷ!');
	}
}

// trang thêm chương 
// nút hủy 
document.querySelector('.page5_d .close_btn').onclick = function () {
	cancel();
}
// nút thêm trương
document.querySelector('.page5_d .more_chap_btn').onclick = function () {
	const newElement = document.createElement('div');
	newElement.className = 'info-wrapper-container';
	newElement.innerHTML = `
		<div class="laocacho" style = "display: flex; justify-content: flex-end;" >
				<button class="delete_chap">
					<i class="fa-solid fa-xmark"></i>
				</button>
		</div>

		<div class="information_name_wrap">
			<h3>Thứ tự chương</h3>
			<div class="information_name">
				<input class="profile_input chap_num" type="number" id="name_novel"
					placeholder="Nhập thứ tự chương(e.g. 1, 1.1, 1.5, 2,...)" />
			</div>
		</div>

		<div class="information_name_wrap">
			<h3>Tên chương</h3>
			<div class="information_name">
				<input class="profile_input chap_name" type="text" id="fullname"
					placeholder="Nhập tên chương" />
			</div>
		</div>



		<div class="information_name_wrap">
			<div class="head">
				<h3>Nội Dung</h3>
				<pre class="file-content" style="margin: 1rem 20px;"></pre>
				<input type="file" class="file-input" style="display:none;" accept=".txt, .docx"/>
				<button class="upfile">
					<i class="fa-solid fa-upload"></i>
				</button>
			</div>
		</div>
		
		<p style="text-align: center;">[------------------------------------ 🦊🍜🍥 ------------------------------------]</p>
		`;
	document.querySelector('.page5_d .page5_info_main').appendChild(newElement);
}

// nut cập nhạt truyện
document.querySelector('.page5_d .post_btn').onclick = async function () {
	let files = []
	let full = false
	let name_chaprters = []
	// Loop through all elements
	$('.page5_d .page5_chap .info-wrapper-container').each(function () {
		// Get the input element inside the current element
		let chapNum = $(this).find('.chap_num').val();
		let chapName = $(this).find('.chap_name').val();
		let curr_file = $(this).find('.file-input')[0].files[0];
		if (chapNum != '' && chapName != '' && curr_file) {
			name_chaprters.push(`Chương ${chapNum}: ${chapName} `);
			files.push(curr_file);
			full = true;
		} else {
			full = false;
		};
	});

	sessionStorage.setItem("name_chapters", name_chaprters);

	if (full) {
		if (confirm("Bạn có chắc sẽ cập nhật truyện này?") == true) {
			document.querySelector('.page5_chap .post_btn').innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `
			// window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
			notify('Rasengan', 'Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)');
			await uploadFiles(files, 1);
		} else {
			notify('Thông báo', 'Đã huỷ!');
		}
	} else {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		notify('Lỗi', 'Hãy vui lòng điền đủ thông tin!');
	}
}

// change
document.querySelector('.page5_c .next_btn').onclick = function () {

	const regex = /\/([a-fA-F0-9]+)\/edit/;

	// Use the exec method to extract the matching part from the URL
	const match = regex.exec(window.location.href);

	// Extracted ID will be in match[1]
	const extractedID = match ? match[1] : null;

	const postData = JSON.stringify({
		'id': extractedID,
		'novel_name': document.querySelector('.page5_c  .profile_input ').value,
		'author_name': document.querySelector('.page5_c  .author_name').value,
		'novel_descript': document.querySelector('.page5_c  .novel_descript').value,
		'novel_types': listObj2.tempValues,
		'novel_status': document.querySelector('.page5_c  .novel_status select').options[document.querySelector('.page5_c  .novel_status select').selectedIndex].text,
		'novel_avt': document.querySelector('.page5_c  .page5_info_img .your-avt').src,
	});
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: postData
	};
	url = currentURL + '/api/edit_info_novel'
	fetch(url, requestOptions)
		.then(response => {
			if (response.ok) {
				notify("Thông báo", "Thay đổi thông tin thành công!");
			}
			else {
				notify("Lỗi", "Có lỗi xảy ra!");
			}
		})
		.catch(error => {
			console.error('Error downloading file:', error);
		});

};
// my space
document.querySelector('.page5_c .close_btn').onclick = function () {
	cancel()
}


let check = 0
const page5_post_check = document.querySelector('.page5_post_check')
page5_post_check.onclick = function () {
	if (check == 0) {
		page5_post_check.innerHTML = `<i class="fa-regular fa-square-check"></i>`
		check = 1
	}
	else {

		page5_post_check.innerHTML = `<i class="fa-regular fa-square"></i>`
		check = 0
	}

}
