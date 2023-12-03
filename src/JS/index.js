let intervalId;
// Lấy các phần tử có class là "left" và "right"
var leftElement = document.querySelectorAll(".left");
var rightElement = document.querySelectorAll(".right");
// Gắn sự kiện cho phần tử có class là "left"
leftElement.forEach((element) => {
  element.addEventListener("mouseover", handleMouseOver);
});
leftElement.forEach((element) => {
  element.addEventListener("mouseout", handleMouseOut);
});

// Gắn sự kiện cho phần tử có class là "right"
rightElement.forEach((element) => {
  element.addEventListener("mouseover", handleMouseOver);
});
rightElement.forEach((element) => {
  element.addEventListener("mouseout", handleMouseOut);
});
// Hàm xử lý khi di chuột vào
function handleMouseOver() {
  clearInterval(intervalId);

  // Thêm logic xử lý khi di chuột vào ở đây
}

// Hàm xử lý khi di chuột ra
function handleMouseOut() {
  intervalId = setInterval(auto_slider, 5000);

  // Thêm logic xử lý khi di chuột ra ở đây
}

var currentIndex = 0; // Biến để lưu trữ chỉ số mục hiện tại
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  clearInterval(intervalId);

  // Thiết lập lại interval
  intervalId = setInterval(auto_slider, 5000);
  document.getElementById("slide").appendChild(lists[0]);
  currentIndex = (currentIndex + 1) % lists.length;
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  clearInterval(intervalId);

  // Thiết lập lại interval
  intervalId = setInterval(auto_slider, 5000);

  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
function auto_slider() {
  document.querySelector("#next").click();
}

// Bắt đầu interval khi trang được tải
intervalId = setInterval(auto_slider, 5000);

var listObj = new ej.dropdowns.MultiSelect(
  {
    // set placeholder to MultiSelect input element
    placeholder: "Chọn thể loại truyện",
  },
  "#ulElement"
);
var ele = document.querySelectorAll("#container");
if (ele) {
  ele.forEach((a) => {
    a.style.visibility = "visible";
  });
}
let url_btn =
  "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=1&sort_by=1";
$(".search_more_btn").on("click", function () {
  window.location.href = url_btn;
});
$(".search-btn").on("click", function () {
  click_times = 0;

  // disable buttons untill load finish
  $(".search-btn").prop("disabled", true);
  // loading
  $(".search-btn").text("Finding...");
  url_btn = `/category?skip=${0}&update_day=${$(".update_day").val()}&types=${
    listObj.tempValues
  }&num_chaps=${$(".num_chaps").val()}&status=${$(".status").val()}&sort_by=${$(
    ".sort_by"
  ).val()}`;
  url = `/api/advanced_search?skip=${0}&update_day=${$(
    ".update_day"
  ).val()}&types=${listObj.tempValues}&num_chaps=${$(
    ".num_chaps"
  ).val()}&status=${$(".status").val()}&sort_by=${$(
    ".sort_by"
  ).val()}&limit=13`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        // disable buttons untill load finish
        $(".search-btn").prop("disabled", false);
        // loading
        $(".search-btn").text("Lọc Truyện");
        response
          .json()
          .then((data) => {
            // render all more data
            $(".novel").first().empty();
            data_truyen = data.novel;
            if (data_truyen.length > 0) {
              for (let i = 0; i < data_truyen.length; i++) {
                $(".novel").first().append(`
                          <a href="/reviews/${data_truyen[i]._id}" class="novel_item">
                              <div>
                                  <div class="novel_item_main">
                                      <div class="novel_item_main_img">
                                          <img src="${data_truyen[i].image}" alt referrerpolicy="no-referrer">
                                      </div>
                                      <div class="novel_title" onclick="myFunction()">
                                          <div class="novel_name">
                                              ${data_truyen[i].name}
                                          </div>
                                          <div class="novel_author">
                                              Tác giả : <span>
                                                  ${data_truyen[i].author}
                                              </span>
                                          </div>
                                          <div class="novel_chapter">
                                              Chap : <span>
                                                  ${data_truyen[i].no_chapters}
                                              </span>
                                              <div style="font-size: 13px;">
                                                  ${data_truyen[i].status}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                          `);
              }
            } else {
              $(".novel").append(
                `<span class="no_novel">Không tìm thấy kết quả</span>`
              );
            }

            if (data.more_novel) {
              $(".search_more_btn").show();
            } else {
              $(".search_more_btn").hide();
            }
          })
          .catch((error) => {
            console.error("Error parsing JSON:", error);
          });
      } else {
        console.log("error");
      }
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
});
$(".top_view h3").on("click", function () {
  window.location.href =
    "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=1&sort_by=1";
});
$(".top_like h3").on("click", function () {
  window.location.href =
    "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=1&sort_by=2";
});
$(".top_view h3").on("click", function () {
  window.location.href =
    "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=1&sort_by=3";
});
$(".hoanthanhdone").on("click", function () {
  window.location.href =
    "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=3&sort_by=3";
});
$(".capnhatnow").on("click", function () {
  window.location.href =
    "/category?skip=0&update_day=1&types=undefined&num_chaps=1&status=2&sort_by=3";
});

// /////////////////////////
