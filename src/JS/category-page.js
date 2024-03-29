let click_times = 0;

$(".search-btn").on("click", function (event) {
  click_times = 0;

  // disable buttons untill load finish
  $(".search-btn").prop("disabled", true);
  // loading
  $(".search-btn").text("Finding...");
  history.pushState(
    null,
    null,
    `/category?skip=${0}&update_day=${$(".update_day").val()}&types=${
      listObj.tempValues
    }&num_chaps=${$(".num_chaps").val()}&status=${$(
      ".status"
    ).val()}&sort_by=${$(".sort_by").val()}`
  );
  url = `/api/advanced_search?skip=${0}&update_day=${$(
    ".update_day"
  ).val()}&types=${listObj.tempValues}&num_chaps=${$(
    ".num_chaps"
  ).val()}&status=${$(".status").val()}&sort_by=${$(".sort_by").val()}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        response
          .json()
          .then((data) => {
            // render all more data
            $(".novel").empty();
            data_truyen = data.novel;
            if (data_truyen.length > 0) {
              for (truyen of data_truyen) {
                $(".novel").append(`
                            <a href="/reviews/${truyen._id}" class="novel_item">
                                <div>
                                    <div class="novel_item_main">
                                        <div class="novel_item_main_img">
                                            <img src="${truyen.image}" alt referrerpolicy="no-referrer">
                                        </div>
                                        <div class="novel_title" onclick="myFunction()">
                                            <div class="novel_name">
                                                ${truyen.name}
                                            </div>
                                            <div class="novel_author">
                                                Tác giả : <span>
                                                    ${truyen.author}
                                                </span>
                                            </div>
                                            <div class="novel_chapter">
                                                Chap : <span>
                                                    ${truyen.no_chapters}
                                                </span>
                                                <div style="font-size: 13px;">
                                                    ${truyen.status}
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

            // reset to nomal
            $(".search-btn").prop("disabled", false);

            $(".search-btn").text("Lọc Truyện");
            // remove search more buttom if no more movels and search more button is exist
            if (data.more_novel) {
              if ($(".search_more_btn").length < 1) {
                $("novel_wrap").append(`
                        <div class="search_more">
                            <button class="search_more_btn">
                            <span>Xem thêm</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="var(--black-text)" stroke-width="3"></circle>
                                <path
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                fill="var(--black-text)"></path>
                            </svg>
                            </button>
                        </div>
                        `);
              } else {
                $(".search_more_btn").prop("disabled", false);
                $(".search_more_btn").empty();
                $(".search_more_btn").append(`
                            
                                <span>Xem thêm</span>
                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37" cy="37" r="35.5" stroke="var(--black-text)" stroke-width="3"></circle>
                                    <path
                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    fill="var(--black-text)"></path>
                                </svg>
                               
                            `);
                $(".search_more_btn").show();
              }
            } else if (!data.more_novel && $(".search_more_btn")) {
              $(".search_more_btn").hide();
            }
          })
          .catch((error) => {
            console.error("Error parsing JSON:", error);
          });
      } else {
        console.log("err");
      }
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
});

// Let time you click on more novel button
$(".search_more_btn").on("click", function () {
  // up time it was click:
  click_times += 1;
  // disable buttons untill load finish
  $(".search_more_btn").prop("disabled", true);
  // loading
  $(".search_more_btn").text("Finding...");

  url = `/api/advanced_search?skip=${click_times}&update_day=${$(
    ".update_day"
  ).val()}&types=${listObj.tempValues}&num_chaps=${$(
    ".num_chaps"
  ).val()}&status=${$(".status").val()}&sort_by=${$(".sort_by").val()}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        response
          .json()
          .then((data) => {
            // render all more data
            data_truyen = data.novel;
            for (truyen of data_truyen) {
              $(".novel").append(`
                        <a href="/reviews/${truyen._id}" class="novel_item">
                            <div>
                                <div class="novel_item_main">
                                    <div class="novel_item_main_img">
                                        <img src="${truyen.image}" alt referrerpolicy="no-referrer">
                                    </div>
                                    <div class="novel_title" onclick="myFunction()">
                                        <div class="novel_name">
                                            ${truyen.name}
                                        </div>
                                        <div class="novel_author">
                                            Tác giả : <span>
                                                ${truyen.author}
                                            </span>
                                        </div>
                                        <div class="novel_chapter">
                                            Chap : <span>
                                                ${truyen.no_chapters}
                                            </span>
                                            <div style="font-size: 13px;">
                                                ${truyen.status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `);
            }

            // remove if more true else reset to nomal
            if (data.more_novel) {
              $(".search_more_btn").prop("disabled", false);
              $(".search_more_btn").empty();
              $(".search_more_btn").append(`
                            
                                <span>Xem thêm</span>
                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37" cy="37" r="35.5" stroke="var(--black-text)" stroke-width="3"></circle>
                                    <path
                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    fill="var(--black-text)"></path>
                                </svg>
                               
                            `);
            } else {
              $(".search_more_btn").hide();
            }
          })
          .catch((error) => {
            console.error("Error parsing JSON:", error);
          });
      } else {
        console.log("err");
      }
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
});

const showButton = document.querySelector(".show_menu");
const sortMenu = document.querySelector(".sort-menu");
if (showButton) {
  showButton.addEventListener("click", () => {
    sortMenu.classList.toggle("show");
    showButton.classList.toggle("show_menu_hover");
  });
}
