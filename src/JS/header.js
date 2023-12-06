const modal = document.querySelector(".modal"); //cam xoa
const modal2 = document.querySelector(".modal2"); //cam xoa
const modal3 = document.querySelector(".modal3"); //cam xoa
const modal4 = document.querySelector(".modal4"); //cam xoa
$("document").ready(function () {
	let trigger = $("#hamburger"),
		isClosed = false;

	trigger.click(function () {
		burgerTime();
	});

	function burgerTime() {
		if (isClosed == true) {
			trigger.removeClass("is-open");
			trigger.addClass("is-closed");
			isClosed = false;
			left_item.classList.add("close");
		} else {
			trigger.removeClass("is-closed");
			trigger.addClass("is-open");
			isClosed = true;
			left_item.classList.remove("close");
		}
	}

	// const category_list = document.querySelector(".category_list");

	// document.onclick = function(event) {
	//   const targetElement = event.target;
	//   if (
	//     !category_list.contains(targetElement) &&
	//     targetElement !== category_btn
	//   ) {
	//     category_list.style.display = "none";
	//   }
	// };
	const header_menu = document.querySelector(".header_menu");
	const left_item = document.querySelector(".left_item");

	header_menu.onclick = function (event) {
		if (menuBtnCount) {
			event.stopPropagation();
			left_item.classList.remove("close");
			menuBtnCount = false;
		} else {
			left_item.classList.add("close");
			menuBtnCount = true;
		}
	};
	const category = document.querySelector(".category");

	left_item.onclick = function (event) {
		event.stopPropagation();
	};
	const checkbox = document.getElementById("checkbox");

	// block devtools
	// function blockDevTool() {
	//   setTimeout(console.clear.bind(console));
	//   setTimeout(() => {
	//     console.log("%cTắt f12 đi bạn nho!!!", "color:red;font-family:system-ui;font-size:100px");
	//   }, 200);
	//   window.location.href = "/403";
	// }

	// class DevChecker extends Error {
	//   toString() {}
	//   get message() {
	//     blockDevTool();
	//   }
	// }
	// console.log(new DevChecker());



	const login_gg = document.querySelector(".login_gg");
	login_gg.onclick = async function () {
		window.open(`/api/auth/google`, "login With Google", "width=500,height=500");
	};
	const login = document.querySelector(".header_login");
	login.onclick = function () {
		modal.style.display = "block";
		if (modal2.style.display == "block") {
			modal2.style.display = "none";
		}
	};
	document.querySelector(".no_login a").onclick = function (e) {
		e.preventDefault();

		login.click();
	};

	const sg = document.querySelector(".header_signup");
	sg.onclick = function () {
		modal2.style.display = "block";
		if (modal.style.display == "block") {
			modal.style.display = "none";
		}
	};
	document.querySelector(".fogot a").onclick = function (e) {
		e.preventDefault();

		modal3.style.display = "block";
		if (modal.style.display == "block") {
			modal.style.display = "none";
		}
	};
	document.querySelector(".no_signup a").onclick = function (e) {
		e.preventDefault();

		sg.click();
	};
	modal.onclick = function (event) {
		if (!event.target.closest(".modal_wrap")) {
			modal.style.display = "none";
		}
	};
	modal2.onclick = function (event) {
		if (!event.target.closest(".modal_wrap")) {
			modal2.style.display = "none";
		}
	};
	modal3.onclick = function (event) {
		if (!event.target.closest(".modal_wrap")) {
			modal3.style.display = "none";
		}
	};

	$(".logout").click(async function (e) {
		e.preventDefault();
		await fetch(`/api/logout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				account: "chaoemcogaidangiu",
			}),
		}).then((response) => {
			if (response.status === 200) {
				window.location.reload();
			}
		});
	});

	// should not turn on this code
	// const header_logo = document.querySelector('.header_logo');
	// let count_logo = 0
	// header_logo.addEventListener("mouseover", (event) => {
	//   let audio = new Audio('/src/audio/yamate-kudesai.mp3');
	//   switch (count_logo) {
	//     case 3:
	//       audio.volume = 0.1;
	//       audio.play();
	//       break;
	//     case 4:
	//       audio.volume = 0.2;
	//       audio.play();
	//       break;
	//     case 5:
	//       audio.volume = 0.4;
	//       audio.play();
	//       break;
	//     case 6:
	//       audio.volume = 0.7;
	//       audio.play();
	//       break;
	//     case 7:
	//       audio.volume = 1;
	//       audio.play();
	//       count_logo--;
	//       break;
	//   };
	//   count_logo++;
	// });

	const right_item_mobile_close = document.querySelector(".right_item_mobile_close");
	const right_item_mobile = document.querySelector(".right_item_mobile");

	if (right_item_mobile_close) {
		right_item_mobile_close.onclick = function () {
			right_item_mobile.style.right = "-100% !important";
		};
	}

	const header_search_input = document.querySelector(".header_search_input input");
	const search_btn = document.querySelector(".header_search_wrap .header_search_logo");

	search_btn.addEventListener("click", handle_search);

	header_search_input.addEventListener("keypress", function (event) {
		// If the user presses the "Enter" key on the keyboard
		if (event.key === "Enter") {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			search_btn.click();
		}
	});

	function handle_search() {
		if (header_search_input.value != "") {
			const newUrl = `${window.location.origin}/search?search=${encodeURI(
				header_search_input.value
			)}`;
			window.location.replace(newUrl);
		}
	}

	let menuBtnCount = true;
	const rootStyle = document.documentElement.style;
	const themes = localStorage.getItem("theme");

	checkbox.addEventListener("change", () => {
		if (checkbox.checked) {
			localStorage.setItem("theme", "dark");

			// home
			rootStyle.setProperty("--header-background", "#292c49");
			rootStyle.setProperty("--black-text", "#fff");
			rootStyle.setProperty("--white-color", "#000");
			rootStyle.setProperty("--background-color", "#1e1e1e");
			rootStyle.setProperty("--category_bg", "#374d88");
			rootStyle.setProperty("--search-bg", "#959595");
			rootStyle.setProperty("--menu-text", "#fff");
			rootStyle.setProperty("--item-color", "#052147");
			rootStyle.setProperty("--button-color", "#23427a");
			rootStyle.setProperty("--login-btn", "#ff971b");
			rootStyle.setProperty("--author-color", "#2a3995");
			rootStyle.setProperty("--header-text", "#ecd9c2");
			rootStyle.setProperty("--link-text", "#c24141");
			rootStyle.setProperty("--novel_author", "#788afc");
			rootStyle.setProperty("--review_bg", "#1e2643");
			rootStyle.setProperty("--chapter_bg", "rgb(3 35 78)");
			rootStyle.setProperty("--chap-item", "rgb(53 58 78)");
			rootStyle.setProperty("--cm_bg", "#25304c");
			rootStyle.setProperty("--cm_text", "#b6b6b7");
			rootStyle.setProperty("--same-propose-item_hv", "#82786ac2");
			rootStyle.setProperty("--chapter-item", "#08397d");
			rootStyle.setProperty("--text_novel", "rgb(154, 134, 134)");
			rootStyle.setProperty("--bg_novel", "#1e1e1e");
			rootStyle.setProperty("--filter_search", "#12407e");
			rootStyle.setProperty("--element-color", "#323558");
			rootStyle.setProperty("--st-pr-btn-bg", "#24263e");
			rootStyle.setProperty("--border-btn-st", "#000");
			rootStyle.setProperty("--button-colors", "#404593");
			rootStyle.setProperty("--white-text", "#000");
		} else {
			localStorage.setItem("theme", "light");
			rootStyle.setProperty("--header-background", "#D4B499");
			rootStyle.setProperty("--black-text", "#000");
			rootStyle.setProperty("--white-color", "#dbd9d9");
			rootStyle.setProperty("--background-color", "#ffffec");
			rootStyle.setProperty("--category_bg", "#889EAF");
			rootStyle.setProperty("--search-bg", "#F3D5C0");
			rootStyle.setProperty("--menu-text", "#063458");
			rootStyle.setProperty("--item-color", "rgba(240, 211, 174, 0.4)");
			rootStyle.setProperty("--button-color", "#884c05");
			rootStyle.setProperty("--login-btn", "#884c05");
			rootStyle.setProperty("--author-color", "#ffb035");
			rootStyle.setProperty("--header-text", "#884c05");
			rootStyle.setProperty("--link-text", "#463797");
			rootStyle.setProperty("--novel_author", "#ffb035");
			rootStyle.setProperty("--review_bg", "antiquewhite");
			rootStyle.setProperty("--chapter_bg", "rgb(158 138 111)");
			rootStyle.setProperty("--chap-item", "rgb(213 148 66)");
			rootStyle.setProperty("--cm_bg", "#ceae80");
			rootStyle.setProperty("--cm_text", "#26262c");
			rootStyle.setProperty("--same-propose-item_hv", "#ff9805c2");
			rootStyle.setProperty("--chapter-item", "#513a13");
			rootStyle.setProperty("--text_novel", "#000");
			rootStyle.setProperty("--bg_novel", "#ffffec");
			rootStyle.setProperty("--element-color", "#ebd6bd");
			rootStyle.setProperty("--filter_search", "#884c05");
			rootStyle.setProperty("--st-pr-btn-bg", "#b0906b");
			rootStyle.setProperty("--border-btn-st", "#a0896e");
			rootStyle.setProperty("--button-colors", "#b0906b");
			rootStyle.setProperty("--white-text", "#fff");
		}
	});

	if (themes) {
		if (themes == "dark") {
			checkbox.click();
		}
	}

	$("document").ready(function () {
		let trigger = $("#hamburger"),
			isClosed = false;

		trigger.click(function () {
			burgerTime();
		});

		function burgerTime() {
			if (isClosed == true) {
				trigger.removeClass("is-open");
				trigger.addClass("is-closed");
				isClosed = false;
				left_item.classList.add("close");
			} else {
				trigger.removeClass("is-closed");
				trigger.addClass("is-open");
				isClosed = true;
				left_item.classList.remove("close");
			}
		}
	});

	header_menu.onclick = function (event) {
		if (menuBtnCount) {
			event.stopPropagation();
			left_item.classList.remove("close");
			menuBtnCount = false;
		} else {
			left_item.classList.add("close");
			menuBtnCount = true;
		}
	};

	left_item.onclick = function (event) {
		event.stopPropagation();
	};

	const header_user_logo = document.querySelector(".header_user_logo_i");

	if (right_item_mobile_close) {
		right_item_mobile_close.onclick = function () {
			right_item_mobile.style.right = "-100%";
		};
		header_user_logo.onclick = function (e) {
			right_item_mobile.style.right = "0%";
		};
	}

	const left_li = document.querySelectorAll(".left_li");
	function drop_menu() {
		for (const tem of left_li) {
			tem.style.color = "var(--login-btn)";
		}
	}
	var currentPath = window.location.href.substring(window.location.href.lastIndexOf("/"));
	if (currentPath == "/" || currentPath == "") {
		drop_menu();
		document.querySelectorAll(".left_li a")[0].style.color = "red";
	} else if (currentPath == "/category") {
		drop_menu();
		document.querySelectorAll(".left_li a")[1].style.color = "red";
	} else if (currentPath == "/my_novel") {
		document.querySelectorAll(".left_li a")[2].style.color = "red";
	} else if (currentPath == "/novel_following") {
		drop_menu();
		document.querySelectorAll(".left_li a")[3].style.color = "red";
	}
});
