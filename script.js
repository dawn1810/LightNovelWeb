const header_menu = document.querySelector('.header_menu')
const left_item = document.querySelector('.left_item')
const category_btn = document.getElementById('category')
const category_list = document.querySelector('.category_list')

let menuBtnCount = true;

category_btn.onclick = function () {
    category_list.style.display = 'block';
}
document.onclick = function (event) {
    const targetElement = event.target;
    if (!category_list.contains(targetElement) && targetElement !== category_btn) {
        category_list.style.display = 'none';
    }
}

header_menu.onclick = function (event) {
    if (menuBtnCount) {
        event.stopPropagation();
        left_item.classList.remove('close');
        menuBtnCount = false;
    }
    else {
        left_item.classList.add('close');
        menuBtnCount = true;
    }

}
const category = document.querySelector('.category')

left_item.onclick = function (event) {
    event.stopPropagation();
    console.log('ok')
}

// document.querySelector('body').onclick = function () {
//     left_item.classList.add('close')
// }

//
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});