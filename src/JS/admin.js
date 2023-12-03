const account_manager = document.querySelector(".account_manager");
const novel_manager = document.querySelector(".novel_manager");
const add_slider = document.querySelector(".add_slider");
const manager_category = document.querySelector(".manager_category");

account_manager.onclick = function (event) {
	event.preventDefault();
	window.location.href = `/accountmanager`;
};
novel_manager.onclick = function (event) {
	event.preventDefault();
	window.location.href = `/auhtormanager`;
};

add_slider.onclick = function (event) {
	event.preventDefault();
	window.location.href = `/addslider`;
};

manager_category.onclick = function (event) {
	event.preventDefault();
	window.location.href = `/manager_category`;
};
