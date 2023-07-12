const avtBtn = document.querySelector(".dropdown-trigger");
const avtUpLoad = document.getElementById("file-upload");
const avatar = document.querySelector(".your-avt");
const dropZone = document.querySelector(".drop-zone");
const avatar5 = document.querySelector(".page5_info_img .your-avt");
const dropZone5 = document.querySelector(".page5_info_img .drop-zone");
const avtBtn5 = document.querySelector(".dropdown-trigger");
const avtUpLoad5 = document.getElementById("file-upload");

const Setting_pageWrapper = document.querySelectorAll(".Setting_pageWrapper");
const Setting_item = document.querySelectorAll(".Setting_sidebar-list_item");

const update_current_novel = document.querySelector(".update_current_novel")
const delete_chapter = document.querySelector(".delete_chapter")
const add_new = document.querySelector('.add_new')
const add_new_chapter = document.querySelector('.add_new_chapter')
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

let finalDataToServer = {
	novel_name: "",
	author_name: "",
	novel_descript: "",
	novel_types: "",
	novel_status: "",
	name_chapters: [],
	chapters_content: [],
	chapter_content_remove : []
};

window.addEventListener('popstate', function (event) {
	location.reload();
});

function Setting_pageWrapper_drop() {
	for (const key of Setting_pageWrapper) {
		key.style.display = "none";
		console.log(key);
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
	Setting_pageWrapper[3].style.display = 'block'
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
	console.log(i);
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
avtBtn.addEventListener("click", function (event) {
	avtUpLoad.click();
	return false;
});
avtBtn5.addEventListener("click", function (event) {
	avtUpLoad.click();
	return false;
});

avtUpLoad.addEventListener("change", function (event) {
	const file = event.target.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result;
		avatar.src = reader.result;
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar.src !== "") {
		dropZone.innerHTML = "";
	}
});
avtUpLoad5.addEventListener("change", function (event) {
	const file = event.target.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result;
		avatar5.src = reader.result;// live stream di a zai
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar5.src !== "") {
		dropZone5.innerHTML = "";
	}
});

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result;
		avatar.src = reader.result;
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar.src !== "") {
		dropZone.innerHTML = "";
	}
}
function drop5(event) {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result;
		avatar.src = reader.result;
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar.src !== "") {
		dropZone.innerHTML = "";
	}
}

function getRandomElement(list) {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}
function generateUUID() {
	// Hàm tạo chuỗi UUID
	// Tham khảo: https://stackoverflow.com/a/2117523/13347726
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = (Math.random() * 16) | 0,
		v = c === 'x' ? r : (r & 0x3) | 0x8;
	  return v.toString(16);
	});
  }
function uploadFile(file) {
	let formData = new FormData();

	let extension = file.name.substring(file.name.lastIndexOf('.'));
	let newName = generateUUID() + extension;
	let renamedFile = new File([file], newName, { type: file.type });
	formData.append('file', renamedFile);

	fetch('/uploadFile', {
		method: 'POST',
		body: formData
	})
		.then(function (response) {
			if (response.ok) {
				// File uploaded successfully
				// luu id vao chap content
				// finalDataToServer.chapters_content.push(response.text())
				console.log('File uploaded!');
			} else {
				// Error occurred during upload
				console.error('Error uploading file.');
			}
		})
		.catch(function (error) {
			// Error occurred during the request
			console.error('Error uploading file.');
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

document.querySelector(".button_random").onclick = function (e) {
	e.preventDefault();
	// Gọi hàm để tạo số ngẫu nhiên
	const randomElement = getRandomElement(myList);
	console.log(randomElement);
	document.querySelector(".sex_random").innerHTML = randomElement;
};

// update info
const Save_btn = document.querySelector('.Save_btn')
Save_btn.onclick = function () {
	const url = `${currentURL}/updateInfo`; // URL của máy chủ mục tiêu
	let sex = 0
	if (document.querySelector('#nam').checked) {
		sex = 0
	}
	else {
		sex = 1
	}
	const postData = JSON.stringify({
		// thông tin đăng kýýý
		img: `${avatar.src}`,
		usr: `${document.querySelector("#username").value}`,
		pass: `${document.querySelector("#fullname").value}`,
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
		const response = fetch(url, requestOptions);
		console.log(response.status);
		if (response.status == "200") {

			location.reload()
		}

		// btn_reg.disabled = false;
		// btn_reg.textContent = "Register";
	} catch (error) {
		console.log("Error:", error);
	}

}

// change pass
document.querySelector('.change-pass-btn').onclick = async function (e) {
	console.log('cut di bn oi');
	e.preventDefault();
	//gửi request tới csdl server
	const accountCookie = getCookie('account')
	const url = `${currentURL}changepass`; // URL của máy chủ mục tiêu
	const postData = JSON.stringify({
		// thông tin đăng kýýý
		'status': 'Change Pass',
		'account': `${accountCookie}`,
		'Old-Password': `${document.querySelector('#old-Password').value}`,
		'new-Password': `${document.querySelector('#new-Password').value}`,
		'new-Password-again': `${document.querySelector('#new-Password-again').value}`
	});


	//bình minh bị gà
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
			location.reload();
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
	page5_a_up[0].style.display = 'flex'
	setTimeout(function () {
		range.style.setProperty('--p', '25');

		range__label.classList.remove('anima')

		range__label.classList.add('anima')
	}, 100)
}

add_new_chapter.onclick = function () {
	page5_b.style.display = 'none'
	page5_a.style.display = 'block'
}

show_list.onclick = function () {
	page5_home.style.display = 'none'
	page5_b.style.display = 'block'
}

document.querySelector('.page5_info .next_btn').onclick = function () {
	page5_a_up_drop()
	var newURL = currentURL + '/profile/add_content';
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
	finalDataToServer["novel_types"] = novel_types.options[novel_types.selectedIndex].text;
	finalDataToServer["novel_status"] = novel_status.options[novel_status.selectedIndex].text;
}

document.querySelector('.page5_chap .more_chap_btn').onclick = function () {
	const newElement = document.createElement('div');
	newElement.className = 'info-wrapper-container';
	newElement.innerHTML = `
		<div class="laocacho" style="display: flex; justify-content: flex-end;"> 
			<button class="delete_chap">
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>

		<div class="information_name_wrap">
			<h3>Thứ tự chương</h3>
			<div class="information_name">
				<input class="profile_input chap_num" type="text" id="name_novel"
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
				<input type="file" class="file-input" style="display:none;" />
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
		// up file len drive
		uploadFile(file);
		$(this).parent().find('.file-content').text(file.name)

	});
});

// next page btn of .page5_chap
document.querySelector('.page5_chap .next_btn').onclick = function () {
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

	// -----------------------------------------------------------------------------------------
	// Loop through all elements
	$('.page5_chap .info-wrapper-container').each(function () {
		// Get the input element inside the current element
		let chapNum = $(this).find('.chap_num').val();
		let chapName = $(this).find('.chap_name').val();

		finalDataToServer["name_chapters"].push(`Chương ${chapNum}: ${chapName}`);

	});
	// -----------------------------------------------------------------------------------------
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