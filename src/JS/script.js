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


async function get_popular_novel() {
  const url = `${currentURL}/get_ds`; // URL của máy chủ mục tiêu

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
          info_novel += `
                <div class="novel_item">
                  <a href="/reviews/${helop[i]._id}">
                    <div class="novel_item_main">
                    <div class="novel_item_main_img">
                    <img src="${helop[i].image}" referrerpolicy="no-referrer alt="image">
                </div>
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
                    </a>
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

