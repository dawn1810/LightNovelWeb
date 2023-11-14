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

const slider = document.querySelector('.slide_bg')
slider.style.backgroundImage = `url("${document.querySelectorAll('.item')[0].querySelector("img").src}")`;

var currentIndex = 0; // Biến để lưu trữ chỉ số mục hiện tại
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
  currentIndex = (currentIndex + 1) % lists.length;
  console.log(currentIndex)
  slider.style.backgroundImage = `url("${lists[currentIndex].querySelector("img").src}")`;
}

document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// setInterval(function() {
//   document.querySelector('#next').click();
// }, 5000);


