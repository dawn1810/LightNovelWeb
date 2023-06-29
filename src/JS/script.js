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
// // cho nay cua tao cua t nua//
// async function checkAuthentication() {
//   const accountCookie = getCookie("account");
//   if (accountCookie) {
//     // Gửi cookie "account" lên máy chủ
//     // Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
//     // Ví dụ sử dụng Fetch API:
//     await fetch(`${currentURL}/xacthuc`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ account: accountCookie }),
//     }).then((response) => {
//       if (response.status === 200) {
//         //     document.querySelector('.header_1 ').style.display = 'none'
//         //     return response.text(); // Chuyển đổi phản hồi thành văn bản
//         // } else {
//         //     document.querySelector('.header_2 ').style.display = 'none'
//       }
//     });
//     //         .then(data => {
//     //             responseData = data; // Lưu trữ nội dung phản hồi vào biến
//     //             if (responseData) {
//     //                 document.querySelector('.header_2 #User-btn').innerHTML = responseData;
//     //             }
//     //         }) // In nội dung phản hồi
//     //         // Sử dụng responseData ở những nơi khác trong mã của b
//     //         .catch(error => {
//     //             console.log(error)
//     //         });
//     // }
//     // else {
//     //     document.querySelector('.header_2 ').style.display = 'none'
//   }
// }

///////////////////////////

// $("document").ready(function () {
//     let trigger = $("#hamburger"),
//         isClosed = false;

//     trigger.click(function () {
//         burgerTime();
//     });

//     function burgerTime() {
//         if (isClosed == true) {
//             trigger.removeClass("is-open");
//             trigger.addClass("is-closed");
//             isClosed = false;
//             left_item.classList.add('close');
//         } else {
//             trigger.removeClass("is-closed");
//             trigger.addClass("is-open");
//             isClosed = true;
//             left_item.classList.remove('close');

//         }
//     }
// });

// document.onclick = function (event) {
//     const targetElement = event.target;
//     if (!category_list.contains(targetElement) && targetElement !== category_btn) {
//         category_list.style.display = 'none';
//     }
// }

// header_menu.onclick = function (event) {
//     if (menuBtnCount) {
//         event.stopPropagation();
//         left_item.classList.remove('close');
//         menuBtnCount = false;
//     }
//     else {
//         left_item.classList.add('close');
//         menuBtnCount = true;
//     }

// }
const category = document.querySelector(".category");

// left_item.onclick = function (event) {
//     event.stopPropagation();
//     console.log('ok')
// }

// function toggleSummary() {
//   if (summary_Content.style.display == "none") {
//     summary_Content.style.display = "block";
//     summary_btn.innerHTML = '<i class="fa-solid fa-bars"></i> TÓM TẮT TRUYỆN';
//   } else {
//     summary_Content.style.display = "none";

//     summary_btn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Ẩn tóm tắt';
//   }
// }
// document.querySelector('body').onclick = function () {
//     left_item.classList.add('close')
// }

//
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
  clickable: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

async function get_popular_novel() {
  // const url = `${currentURL}/get_ds`; // URL của máy chủ mục tiêu
  // const postData = JSON.stringify({
  //     // thông tin đăng nhậpppp
  //     'status': 'popular_novel',
  //     // 'password': `${document.querySelector('#password').value}`,
  //     // 'cccd': `${document.querySelector('#cccd').value}`,
  // });

  //bình minh khùng điêu điên
  //
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "applicaiton/json",
      "Content-Type": "applicaiton/json",
    },
    // body: postData,
    withCredentials: true, // should be there
    credentials: "include", // should be there
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response);
    // if (response.status == 200) {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.querySelector('.chat').style.display = 'inline-block';
    //     document.querySelector('.chat2').style.display = 'none';
    //     document.querySelector('.chat .message #noity-mess').innerHTML = 'Chào mừng ngươi đến địa ngục'

    //     setTimeout(function () {
    //         document.querySelector('.popup').style.display = 'none';
    //         document.querySelector('.chat').style.display = 'none';
    //     }, 5000)

    //     location.reload();
    // }
    // else if (response.status == 204) {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.querySelector('.chat2').style.display = 'inline-block';
    //     document.querySelector('.chat').style.display = 'none';

    //     document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi đã từng đến đây rồi'

    //     setTimeout(function () {
    //         document.querySelector('.popup').style.display = 'none';
    //         document.querySelector('.chat2').style.display = 'inline-block';
    //     }, 5000)

    // }
    // else if (response.status == 403) {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.querySelector('.chat2').style.display = 'inline-block';
    //     document.querySelector('.chat').style.display = 'none';

    //     document.querySelector('#noity-mess').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
    //     setTimeout(function () {
    //         document.querySelector('.popup').style.display = 'none';
    //         document.querySelector('.chat2').style.display = 'inline-block';

    //     }, 5000)

    // }
    // else if (response.status == '404') {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.querySelector('.chat').style.display = 'none';

    //     document.querySelector('.chat2').style.display = 'inline-block';
    //     document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi Không Tồn Tại'
    //     setTimeout(function () {
    //         document.querySelector('.popup').style.display = 'none';
    //         document.querySelector('.chat2').style.display = 'inline-block';

    //     }, 5000)

    // }
    // else {
    //     document.querySelector('.popup').style.display = 'block';
    //     document.querySelector('.chat').style.display = 'none';

    //     document.querySelector('.chat2').style.display = 'inline-block';
    //     setTimeout(function () {
    //         document.querySelector('.popup').style.display = 'none';
    //         document.querySelector('.chat2').style.display = 'none';
    //     }, 5000)

    // }
    // btn_login.disabled = false;
    // btn_login.textContent = "Login";
  } catch (error) {
    console.log("Error:", error);
  }
}
async function get_popular_novel() {
  const url = `${currentURL}/get_ds`; // URL của máy chủ mục tiêu
  // const postData = JSON.stringify({
  //     // thông tin đăng nhậpppp
  //     'status': 'popular_novel',
  //     // 'password': `${document.querySelector('#password').value}`,
  //     // 'cccd': `${document.querySelector('#cccd').value}`,
  // });

  //bình minh khùng điêu điên
  //
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "applicaiton/json",
      "Content-Type": "applicaiton/json",
    },
    // body: postData,
    withCredentials: true, // should be there
    credentials: "include", // should be there
  };

  try {
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    console.log(json);

    if (response.status == 200) {
      const novel_item = document.querySelector(".novel");
      let info_novel = "";
      function siuu(helop) {
        info_novel = "";
        for (let i = 0; i < helop.length; i++) {
          info_novel += `<div class="novel_item">
                    <div class="novel_item_main">
                        <img src="https://st.nettruyenplus.com/data/comics/171/gay-go-cap-99-5344.jpg" alt="image">
                        <div class="novel_title" onclick="myFunction()">
                            <a href="/reviews/${helop[i]._id}" class="novel_name">${helop[i].name}</a>
                            <div class="novel_author">
                                Tác giả : <span>${helop[i].author}</span>
                            </div>
                            <div class="novel_chapter">
                                Chap : <span>${helop[i].no_chapters}</span>
                                <div>Full</div>
                            </div>
    
                        </div>
                    </div>
                </div>`;
        }
      }

      document.querySelector("#value-1").onchange = function () {
        console.log("ok 1");
        siuu(json.by_week);
        console.log("ok 1");
        novel_item.innerHTML = info_novel;
      };
      document.querySelector("#value-2").onchange = function () {
        console.log("ok 2");
        siuu(json.by_month);
        console.log("ok 2");
        novel_item.innerHTML = info_novel;
      };
      document.querySelector("#value-2").onchange = function () {
        console.log("ok 3");
        siuu(json.all_time);
        console.log("ok 3");
        novel_item.innerHTML = info_novel;
      };
      if (document.querySelector("#value-1").checked) {
        console.log("ok 1");
        siuu(json.by_week);
        console.log("ok 1");
        novel_item.innerHTML = info_novel;
      }

      const novel_update = document.querySelectorAll(".novel")[1];
      siuu(json.nearby);
      novel_update.innerHTML = info_novel;
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

get_popular_novel();

