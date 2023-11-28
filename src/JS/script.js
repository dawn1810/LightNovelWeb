 


let menuBtnCount = true;
///anh zai xin chỗ
// function getCookie(name) {
//   const cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();
//     if (cookie.startsWith(name + "=")) {
//       return cookie.substring(name.length + 1);
//     }
//   }
//   return null;
// }



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







// /////////////////////////

