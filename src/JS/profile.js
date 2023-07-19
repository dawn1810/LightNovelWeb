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

const update_current_novel = document.querySelector(".update_current_novel")
const delete_chapter = document.querySelector(".delete_chapter")
const add_new = document.querySelector('.add_new')
const show_list = document.querySelector('.showlist_novel')
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

let finalDataToServer = {
	novel_name: "",
	author_name: "",
	novel_descript: "",
	novel_types: "",
	novel_status: "",
	novel_avt: "",
	name_chapters: [],
	chapters_content: []
};

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
	Setting_pageWrapper[1].style.display = 'block';
	Setting_item[1].style.backgroundColor = "var(--st-pr-btn-bg)";
}
else if (currentPath == '/change_pass') {
	Setting_pageWrapper_drop()
	Setting_item_drop()
	Setting_item[2].style.backgroundColor = "var(--st-pr-btn-bg)";

	Setting_pageWrapper[2].style.display = 'block';
}
else if (currentPath == '/my_novel') {
	Setting_pageWrapper_drop()
	Setting_item_drop()
	Setting_item[3].style.backgroundColor = "var(--st-pr-btn-bg)";

	Setting_pageWrapper[3].style.display = 'block';
}
else if (currentPath == '/add_novel') {
	page5_composed_drop()
	Setting_pageWrapper_drop()
	page5_a_up_drop()
	Setting_item_drop()

	Setting_pageWrapper[3].style.display = 'block'
	Setting_item[3].style.backgroundColor = "var(--st-pr-btn-bg)";

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

	Setting_item[3].style.backgroundColor = "var(--st-pr-btn-bg)";

	Setting_pageWrapper[3].style.display = 'block'
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

	Setting_item[3].style.backgroundColor = "var(--st-pr-btn-bg)";

	Setting_pageWrapper[3].style.display = 'block'
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

	Setting_item[3].style.backgroundColor = "var(--st-pr-btn-bg)";

	Setting_pageWrapper[3].style.display = 'block'
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


for (let i = 0; i < Setting_item.length; i++) {
	const currentURL = 'http://localhost:6969/profile';

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
			Setting_pageWrapper[2].style.display = 'block';
		}

		if (Setting_item[i].classList[1] == 'up_novel') {



			var newURL = currentURL + '/my_novel';
			history.pushState(null, null, newURL);
			Setting_pageWrapper_drop()
			page5_composed_drop()
			page5_a_up_drop()
			page5_composed[0].style.display = 'block';
			page5_a_up[0].style.display = 'flex';
			Setting_pageWrapper[3].style.display = 'block';
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
		toast.classList.add("active");
		toast.querySelector('.text-1').innerHTML = 'Chú ý!'
		toast.querySelector('.text-2').innerHTML = 'Sai định dạng file rồi người đẹp!.'
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);

		return false;
	}
	if (file.size > maxSize) {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		toast.classList.add("active");
		toast.querySelector('.text-1').innerHTML = 'Chú ý!';
		toast.querySelector('.text-2').innerHTML = message_arlet;
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);
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

function uploadFiles(files) {
	var formData = new FormData();

	for (var i = 0; i < files.length; i++) {
		let extension = files[i].name.substring(files[i].name.lastIndexOf('.'));
		let newName = `${i} ` + generateUUID() + extension;
		let renamedFile = new File([files[i]], newName, { type: files[i].type });
		formData.append('files[]', renamedFile);
	}

	fetch('/uploadFile', {
		method: 'POST',
		body: formData
	})
		.then(function (response) {
			if (response.ok) {
				// go to next page
				page5_a_up_drop()
				var newURL = currentURL + '/profile/post_novel';
				history.pushState(null, null, newURL);
				page5_post.style.display = 'block'
				range.style.setProperty('--p', '75');
				range.style.setProperty('--widthbf', '50%');
				range__label.classList.remove('anima')

				setTimeout(function () {
					range__label.classList.add('anima')
				}, 50)
				return response.json();
			} else if (response.status == "400") {
				// Error occurred during upload
				window.alert('Em yêu có file sai định dạng kìa!!!')
				toast.classList.add("active");
				progress.classList.add("active");

				timer1 = setTimeout(() => {
					toast.classList.remove("active");
				}, 5000); //1s = 1000 milliseconds

				timer2 = setTimeout(() => {
					progress.classList.remove("active");
				}, 5300);
				console.error('Error uploading files.');
			}
		})
		.then(function (responseData) {
			console.log('File uploaded!');
			finalDataToServer["chapters_content"] = responseData;
		})
		.catch(function (error) {
			// Error occurred during the request
			console.error('Error uploading files.');
		});
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
		toast.classList.add("active");
		toast.querySelector('.text-1').innerHTML = 'Thông báo!'
		toast.querySelector('.text-2').innerHTML = 'Đang tải lên...chờ một tý!'
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);
		const response = await fetch(url, requestOptions);
		console.log(response.status);
		if (response.status == "200") {
			document.querySelector('.header_user_logo_i p').textContent = document.querySelector("#fullname").value
			document.querySelector('.header_user_logo_i .curent-avt img').src = avatar.src






			toast.classList.add("active");
			toast.querySelector('.text-1').innerHTML = 'Thông báo!'
			toast.querySelector('.text-2').innerHTML = 'Thay đổi thông tin người dùng thành công!'
			progress.classList.add("active");

			timer1 = setTimeout(() => {
				toast.classList.remove("active");
			}, 5000); //1s = 1000 milliseconds

			timer2 = setTimeout(() => {
				progress.classList.remove("active");
			}, 5300);
		}

		// btn_reg.disabled = false;
		// btn_reg.textContent = "Register";
	} catch (error) {
		console.log("Error:", error);
		toast.classList.add("active");
		toast.querySelector('.text-1').innerHTML = 'Lỗi!'
		toast.querySelector('.text-2').innerHTML = 'Thay đổi thông tin người dùng không thành công!'
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);
	}

}

document.querySelector('.change-pass-btn').onclick = async function (e) {
	console.log('cut di bn oi');
	e.preventDefault();
	//gửi request tới csdl server
	const url = `${currentURL}/changepass`; // URL của máy chủ mục tiêu
	const postData = JSON.stringify({
		// thông tin đăng kýýý
		'status': 'Change Pass',
		'Old-Password': `${document.querySelector('.old-password').value}`,
		'new-Password': `${document.querySelector('.new-password').value}`,
		'new-Password-again': `${document.querySelector('.new-password-again').value}`
	});


	//BM  _______
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: postData
	};

	let btn_reg = document.querySelector('.change-pass-btn');
	btn_reg.disabled = true;
	btn_reg.textContent = "LOADING...";
	try {
		const response = await fetch(url, requestOptions)
		// taì khoan hơp lệ 
		if (response.status == '200') {
			// location.reload();
		}

		else if (response.status == '204') {

		}

		else if (response.status == '403') {

		}
		else if (response.status == '404') {

		}
		else {

		}
		btn_reg.disabled = false;
		// btn_reg.textContent = "Register";
	} catch (error) {
		console.log('Error:', error);

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

update_current_novel.onclick = function () {
	page5_composed_drop()
	var newURL = currentURL + '/profile' + '/update';
	history.pushState(null, null, newURL);

	page5_composed[3].style.display = 'block'
	page5_a_up[4].style.display = 'flex'
	setTimeout(function () {
		range.style.setProperty('--p', '25');

		range__label.classList.remove('anima')

		range__label.classList.add('anima')
	}, 100)
}
document.querySelector('.add_novel_more_chap ').onclick = function () {
	page5_composed_drop()
	var newURL = currentURL + '/profile' + '/morechap';
	history.pushState(null, null, newURL);

	page5_composed[4].style.display = 'block'
	page5_a_up[5].style.display = 'block'
	setTimeout(function () {
		range.style.setProperty('--p', '25');

		range__label.classList.remove('anima')

		range__label.classList.add('anima')
	}, 100)
}


show_list.onclick = function () {
	page5_home.style.display = 'none'
	page5_b.style.display = 'block'
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

		finalDataToServer["novel_name"] = novel_name.value;
		finalDataToServer["author_name"] = author_name.value;
		finalDataToServer["novel_descript"] = novel_descript.value;
		finalDataToServer["novel_types"] = listObj.tempValues;
		finalDataToServer["novel_status"] = novel_status.options[novel_status.selectedIndex].text;
		finalDataToServer["novel_avt"] = document.querySelector('.page5_info_img .your-avt').src
	} else {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		toast.querySelector('.text-1').innerHTML = 'Lỗi'
		toast.querySelector('.text-2').innerHTML = 'Hãy vui lòng điền đủ thông tin!'
		toast.classList.add("active");
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);

	}
}

function cancel() {
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
		document.body.appendChild(elem);

		let audio = new Audio('/src/audio/shinra.mp3');
		audio.volume = 0.5;
		audio.play();

		setTimeout(function () {
			// back to novel list scene
			page5_a_up_drop()
			let newURL = currentURL + '/profile/my_novel';
			window.location.href = newURL;

			// reset finalDataToServer
			finalDataToServer = {
				novel_name: "",
				author_name: "",
				novel_descript: "",
				novel_types: "",
				novel_status: "",
				novel_avt: "",
				name_chapters: [],
				chapters_content: []
			};
		}, 8000)
	} else {
		text = "You canceled!";
	}
}

function setupPrivateData(element) {
	var private = 1;
	element.setPrivate = function (d) { private = d; }
	element.getPrivate = function () { return private; }
}

document.querySelector('.page5_info .close_btn').onclick = function () {
	cancel();
}

document.querySelector('.page5_chap .more_chap_btn').onclick = function () {
	const newElement = document.createElement('div');
	newElement.className = 'info-wrapper-container';
	newElement.innerHTML = `
			< div class="laocacho" style = "display: flex; justify-content: flex-end;" >
				<button class="delete_chap">
					<i class="fa-solid fa-xmark"></i>
				</button>
		</ >

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
});

// next page btn of .page5_chap
document.querySelector('.page5_chap .next_btn').onclick = function () {
	console.log("Click")
	let files = []
	let full = false
	// Loop through all elements
	$('.page5_a .page5_chap .info-wrapper-container').each(function () {
		// Get the input element inside the current element
		let chapNum = $(this).find('.chap_num').val();
		let chapName = $(this).find('.chap_name').val();
		let curr_file = $(this).find('.file-input')[0].files[0];
		if (chapNum != '' && chapName != '' && curr_file) {
			finalDataToServer["name_chapters"].push(`Chương ${chapNum}: ${chapName} `);
			files.push(curr_file);
			full = true;
		} else {
			full = false;
		};
	});

	if (full) {
		document.querySelector('.page5_chap .next_btn').innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `

		// window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
		toast.classList.add("active");
		toast.querySelector('.text-1').innerHTML = 'Rasengan'
		toast.querySelector('.text-2').innerHTML = 'Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)'
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);

		uploadFiles(files);
	} else {
		// window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
		toast.classList.add("active");
		progress.classList.add("active");

		timer1 = setTimeout(() => {
			toast.classList.remove("active");
		}, 5000); //1s = 1000 milliseconds

		timer2 = setTimeout(() => {
			progress.classList.remove("active");
		}, 5300);
	}

}

// cancel 2nd page
document.querySelector('.page5_chap .close_btn').onclick = function () {
	cancle();
}

document.querySelector('.page5_post .post_btn').onclick = async function () {

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

	// POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
	//gửi request tới csdl server
	const url = `${currentURL}/upload_novel`; // URL của máy chủ mục tiêu

	const postData = JSON.stringify({
		name: finalDataToServer["novel_name"],
		author: finalDataToServer["author_name"],
		name_chaps: finalDataToServer["name_chapters"],
		chap_ids: finalDataToServer["chapters_content"],
		genres: finalDataToServer["novel_types"],
		status: finalDataToServer["novel_status"],
		summary: finalDataToServer["novel_descript"],
		image: finalDataToServer["novel_avt"],
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
			console.log('đăng truyện thành công!!!')
		}
	} catch (error) {
		console.log('Error:', error);
	}
}

document.querySelector('.page5_post .close_btn').onclick = async function () {
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
		document.body.appendChild(elem);

		let audio = new Audio('/src/audio/shinra.mp3');
		audio.volume = 0.5;
		audio.play();

		// remove all chapters
		const url = `${currentURL}/cancel`; // URL của máy chủ mục tiêu

		const postData = JSON.stringify({
			chap_ids: finalDataToServer["chapters_content"]
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
					// reset finalDataToServer
					finalDataToServer = {
						novel_name: "",
						author_name: "",
						novel_descript: "",
						novel_types: "",
						novel_status: "",
						novel_avt: "",
						name_chapters: [],
						chapters_content: []
					};
				}, 7000)
			}
		} catch (error) {
			console.log('Error:', error);
		}
	} else {
		text = "You canceled!";
	}
}

document.querySelector('.page5_last .page5_last_btn').onclick = function () {
	// back to novel list scene
	page5_a_up_drop()
	let newURL = currentURL + '/profile/my_novel';
	window.location.href = newURL;

	// reset finalDataToServer
	finalDataToServer = {
		novel_name: "",
		author_name: "",
		novel_descript: "",
		novel_types: "",
		novel_status: "",
		novel_avt: "",
		name_chapters: [],
		chapters_content: []
	};
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
