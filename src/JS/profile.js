const avtBtn = document.querySelector(".dropdown-trigger");
const avtUpLoad = document.getElementById("file-upload");
const avatar = document.querySelector(".your-avt");
const dropZone = document.querySelector(".drop-zone");

const Setting_pageWrapper = document.querySelectorAll(".Setting_pageWrapper");
const Setting_item = document.querySelectorAll(".Setting_sidebar-list_item");

for (let i = 0; i < Setting_item.length; i++) {
	// console.log(Setting_item[i])
	console.log(i);
	Setting_item[i].onclick = function () {

		if (Setting_item[i].classList[1] == 'yourinfo') {
			const currentURL = window.location.href;
			const currentPath = currentURL.substring(currentURL.lastIndexOf('/'));

			if (currentPath == '/profile') {
				var newURL = currentURL + '/my-info';
				history.pushState(null, null, newURL);
			} else {
				// Thay thế phần cuối của URL bằng "/change_pass"
				const newURL = currentURL.replace(currentPath, '/my_info');

				// Thực hiện thay đổi URL
				history.pushState(null, null, newURL);
			}
		}
		if (Setting_item[i].classList[1] == 'yourfollow') {
			const currentURL = window.location.href;
			const currentPath = currentURL.substring(currentURL.lastIndexOf('/'));
			if (currentPath == '/profile') {
				var newURL = currentURL + '/novel_following';
				history.pushState(null, null, newURL);
			} else {
				// Thay thế phần cuối của URL bằng "/change_pass"
				const newURL = currentURL.replace(currentPath, '/novel_following');

				// Thực hiện thay đổi URL
				history.pushState(null, null, newURL);
			}

		}
		if (Setting_item[i].classList[1] == 'yourchangepass') {
			const currentURL = window.location.href;
			const currentPath = currentURL.substring(currentURL.lastIndexOf('/'));

			if (currentPath == '/profile') {
				var newURL = currentURL + '/change_pass';
				history.pushState(null, null, newURL);
			} else {
				// Thay thế phần cuối của URL bằng "/change_pass"
				const newURL = currentURL.replace(currentPath, '/change_pass');

				// Thực hiện thay đổi URL
				history.pushState(null, null, newURL);
			}
		}

		if (Setting_item[i].classList[1] == 'up_novel') {
			const currentURL = window.location.href;
			const currentPath = currentURL.substring(currentURL.lastIndexOf('/'));

			if (currentPath == '/profile') {
				var newURL = currentURL + '/my_novel';
				history.pushState(null, null, newURL);
			} else {
				// Thay thế phần cuối của URL bằng "/change_pass"
				const newURL = currentURL.replace(currentPath, '/my_novel');

				// Thực hiện thay đổi URL
				history.pushState(null, null, newURL);
			}
		}
		for (const key of Setting_item) {
			key.style.backgroundColor = "transparent";
			console.log(key);
		}
		Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
		for (const key of Setting_pageWrapper) {
			key.style.display = "none";
			console.log(key);
		}
		if (i == Setting_pageWrapper.length) {
			// Setting_pageWrapper[i].style.display = 'none'
		} else {
			Setting_pageWrapper[i].style.display = "block";
		}
		console.log(i);

		console.log(Setting_pageWrapper[i]);
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
// document.querySelector('.button_file').onclick = function(e){
//     e.preventDefault();
//     console.log('ok')
//     button.parentElement.querySelector('#fullname').click()
// }

// // Set avt as default:
// if (localStorage.getItem('avt')) {
// 	setAvtDefault(localStorage.getItem('avt'));
// }

// function setAvtDefault(base64Data) {
// 	avatar.src = base64Data;
// }

// change the avatar image
avtBtn.addEventListener("click", function (event) {
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

function getRandomElement(list) {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
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

const range = document.querySelector('.range')
const range__label = document.querySelector('.range__label');
add_new.onclick = function () {
	page5_home.style.display = 'none'
	page5_a.style.display = 'block'
	setTimeout(function () {
		range.style.setProperty('--p', '25');
		// range.style.setProperty('--widthbf', '0');

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
	page5_info.style.display = 'none'
	page5_chap.style.display = 'block'
	range.style.setProperty('--p', '50');
	range.style.setProperty('--widthbf', '25%');

	range__label.classList.remove('anima')

	setTimeout(function () {
		range__label.classList.add('anima')
	}, 50)


	sessionStorage.setItem("novel_name", novel_name.value);
	sessionStorage.setItem("author_name", author_name.value);
	sessionStorage.setItem("novel_descript", novel_descript.valu);
	sessionStorage.setItem("novel_types", novel_types.options[novel_types.selectedIndex].text);
	sessionStorage.setItem("novel_status", novel_status.options[novel_status.selectedIndex].text);
}
document.querySelector('.page5_chap .next_btn').onclick = function () {
	page5_chap.style.display = 'none'
	page5_post.style.display = 'block'
	range.style.setProperty('--p', '75');
	range.style.setProperty('--widthbf', '50%');
	range__label.classList.remove('anima')

	setTimeout(function () {
		range__label.classList.add('anima')
	}, 50)
}
document.querySelector('.page5_post .post_btn').onclick = function () {
	page5_post.style.display = 'none'
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



// xử lí page





