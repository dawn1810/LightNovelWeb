const header_menu = document.querySelector(".header_menu");
const left_item = document.querySelector(".left_item");
const category_btn = document.getElementById("category");
const category_list = document.querySelector(".category_list");
const summary_Content = document.querySelector(".summary-Content");
const summary_btn = document.querySelector(".summary-btn");


let menuBtnCount = true;
///anh zai xin chỗ
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  mousewheel: {
    enabled: true, // Cho phép sử dụng chuột để kéo ảnh
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },


  // // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});


