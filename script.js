const header_menu = document.querySelector('.header_menu')
const left_item = document.querySelector('.left_item')

let menuBtnCount = true;

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

document.querySelector('body').onclick = function () {
    left_item.classList.add('close')
}

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