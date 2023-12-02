// const { getItem } = require("node-persist")

const Evaluate_btn = document.querySelectorAll(".Evaluate_btn");
// import "/";
document.querySelector(".loaded").style.display = "none";

const pg = document.getElementById("pagination");
const pages = document.getElementById("pages");
const curPage = document.getElementById("curpage");
const numLinksTwoSide = document.getElementById("delta");
const checks = document.querySelectorAll(".check");
const btnNextPg = document.querySelector("button.next-page");
const btnPrevPg = document.querySelector("button.prev-page");
const btnFirstPg = document.querySelector("button.first-page");
const btnLastPg = document.querySelector("button.last-page");
const send_comment = document.querySelector(".send_your_cmt");
const summary_btn = document.querySelector(".summary-btn");
const summary_Content = document.querySelector(".summary-Content");
const doctiep = document.querySelector(".curr_chap_local")
//console.log(idtruyen)
if (localStorage.getItem(idtruyen)) {
  doctiep.href = doctiep.href + localStorage.getItem(idtruyen);
} else {
  doctiep.parentElement.parentElement.removeChild(doctiep.parentElement);
}
summary_btn.onclick = () => {
  if (summary_Content.style.display == "none") {
    summary_Content.style.display = "block";
    summary_btn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Ẩn Tóm Tắt'; //gi day a zai
  } else {
    summary_Content.style.display = "none";

    summary_btn.innerHTML = '<i class="fa-solid fa-bars"></i> HIỆN TÓM TẮT';
  }
};

async function like_novel(status) {
  let curr_chap = 1;
  if (localStorage.getItem(idtruyen)) {
    curr_chap = localStorage.getItem(idtruyen);
  }
  // Gửi cookie "account" lên máy chủ
  // Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
  // Ví dụ sử dụng Fetch API:
  await fetch(`/api/updatelike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      liked: status,
      id_truyen: idtruyen,
      curr_chap: curr_chap
    }),
  })
    .then((response) => {
      if (response.status == 403) {
        window.alert("Bạn hãy đăng nhập");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

document.querySelector(".function_item_share").onclick = () => {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
  alert("Copy gòi nha em iuuuu <3");
};

// when page load
// curPage.setAttribute('max', pages.value);
const valuePage = {
  truncate: true,
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 10,
};

function pagination() {
  const { totalPages, curPage, truncate, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4; // use for handle visible number of links left side

  let render = "";
  let renderTwoSide = "";
  let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
  let countTruncate = 0; // use for ellipsis - truncate left side or right side

  // use for truncate two side
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = "";
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? "active" : "";

    // truncate
    if (totalPages >= 2 * range - 1 && truncate) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        // truncate left side or right side
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}
pagination();

checks.forEach((check) => {
  check.onclick = (e) => {
    //console.log(e.target);
    handleCheckTruncate();
    pagination();
  };
});

// DYNAMIC PAGINATION

function renderPage(index, active = "") {
  return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}
function handleCurPage(data) {
  if (+curPage.value > (data.no_chapters / 10).toFixed(0)) {
    curPage.value = 1;
    valuePage.curPage = 1;
  } else {
    //console.log(parseInt(curPage.value, (data.no_chapters / 10).toFixed(0)));
    valuePage.curPage = parseInt(
      curPage.value,
      (data.no_chapters / 10).toFixed(0)
    );
  }
}
function handleCheckTruncate() {
  const truncate = document.querySelector("input[type=radio]:checked");

  if (truncate.id === "enable") {
    valuePage.truncate = true;
  } else {
    if (pages.value > 1000) {
      let isTruncate = confirm(
        `Are you sure you want to render all the links? number of pages: ${pages.value}`
      );
      // true => disable truncate
      if (isTruncate) {
        valuePage.truncate = false;
      } else {
        valuePage.truncate = true;
        truncate.removeAttribute("checked");
        document.getElementById("enable").checked = true;
      }
    } else {
      valuePage.truncate = false;
    }
  }
}

function Evaluate() {
  for (const iterator of Evaluate_btn) {
    iterator.style.color = "#fff";
  }
}

document.querySelector(".function_item_folow").onclick = function () {
  const tym = document.getElementById("number_of_likes").innerText;

  const user_status = document.querySelector(".header_user");
  if (user_status.style.display == "none") {
    alert("Bạn phải đăng nhập");
  } else {
    if (
      document
        .querySelector(".function_item_folow i")
        .classList.contains("fa-solid")
    ) {
      document.querySelector(".function_item_folow").innerHTML = `
                <i class="fa-regular fa-heart"></i>
                <span>Like</span>`;
      document.querySelector("#number_of_likes").innerHTML = parseInt(tym) - 1;

      like_novel(0);
    } else {
      document.querySelector(".function_item_folow").innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>UnLike</span>`;
      //console.log("ok ko");
      document.querySelector("#number_of_likes").innerHTML = parseInt(tym) + 1;
      like_novel(1);
    }
  }
};

const lasted_chap_btn = document.querySelector(".lasted_chap");
lasted_chap_btn.onclick = function (e) {
  e.preventDefault();
};

const first_chap = document.querySelector(".first_chap");
first_chap.onclick = function (e) {
  e.preventDefault();
  const chan =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  window.location.href = `/reading/${chan}/1`;
};

document.querySelector(".function_item_star").onclick = function () {
  if (sao == 1) {
    sao = 0;

    document.querySelector(".function_item_star").innerHTML = `
        <i class="fa-regular fa-star"></i>
    <span>Đánh giá</span>
    `;
  } else {
    sao = 1;
    document.querySelector(".function_item_star").innerHTML = `
        <i class="fa-solid fa-star"></i>
    <span>Đánh giá</span>
    `;
  }
};

const novel_id = localStorage.getItem("novel_id");

var list_chap = "";
async function getReview() {
  // if()

  await fetch(`/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ],
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        // console.log(response)
        return response.json();
      } else if (response.status === 404) {
      }
    })
    .then(async (data) => {
      responseData = data; // Lưu trữ nội dung phản hồi vào biến
      if (data) {
        const lasted_chap = document.querySelector(".lasted_chap");
        lasted_chap.onclick = function (e) {
          e.preventDefault();
          const chan =
            window.location.href.split("/")[
            window.location.href.split("/").length - 1
            ];
          //console.log(data);
          window.location.href = `/reading/${chan}/${data.no_chapters}`;
        };

        const random_chap = document.querySelector(".random_chap");
        const jackpot = document.querySelector(".jackpot");

        random_chap.onclick = function (e) {
          let audio = new Audio("/src/audio/nhac-xo-so-2.mp3");
          audio.volume = 0.5;
          audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            audio.play();
          });
          audio.play();

          e.preventDefault();
          jackpot.style.display = "flex";
          function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          let ranchap = String(getRndInteger(1, data.no_chapters - 1));
          if (ranchap.length >= 3) {
            first_num = ranchap.charAt(0);
            mid_num = ranchap.charAt(1);
            last_num = ranchap.charAt(2);
          } else if (ranchap.length >= 2) {
            first_num = 0;
            mid_num = ranchap.charAt(0);
            last_num = ranchap.charAt(1);
          } else {
            first_num = 0;
            mid_num = 0;
            last_num = ranchap.charAt(0);
          }

          const slots = document.querySelectorAll(".slots span");
          for (let i = 0; i < slots.length; i++) {
            setTimeout(function () {
              switch (i) {
                case 0:
                  slots[i].classList.add("spin");
                  slots[i].innerHTML = first_num;
                  break;
                case 1:
                  setTimeout(function () {
                    slots[i].classList.add("spin");
                    slots[i].innerHTML = mid_num;
                  }, 100 * i);
                  break;
                case 2:
                  setTimeout(function () {
                    slots[i].classList.add("spin");
                    slots[i].innerHTML = last_num;
                  }, 100 * i);
                  break;
              }
            }, 100 * i);

            const jackpot_btn = document.querySelector(".jackpot button");

            setTimeout(function () {
              jackpot_btn.style.display = "flex";
            }, 5000);
            jackpot_btn.onclick = function () {
              const chan =
                window.location.href.split("/")[
                window.location.href.split("/").length - 1
                ];
              //console.log(chan);
              window.location.href = `/reading/${chan}/${ranchap}`;
            };
          }
        };

        // Xét xem người dùng đã like hay chưa:
        // if (data.status) { // đã like
        //     function_item_folow_heard.classList.replace('fa-regular', 'fa-solid');
        // }
        // else { // chưa like
        //     function_item_folow_heard.classList.replace('fa-solid', 'fa-regular');
        // }

        haha(data.chapters);
        // console.log(data)

        // console.log(btn_category)
        if (data.no_chapters > 10) {
          valuePage.totalPages = (data.no_chapters / 10).toFixed(0);
        } else {
          valuePage.totalPages = 1;
        }
        pagination();
        // current_category_list.innerHTML = btn_category

        // console.log(showlist)
        const chan =
          window.location.href.split("/")[
          window.location.href.split("/").length - 1
          ];

        showListLoad(1, data.chapters);
        document.querySelector(".loaded").style.display = "none";

        // for download curr chap
        document.querySelectorAll('.down_chap').forEach(e => {
          e.onclick = () => {
            notify("n", "Đã bắt đầu quá trình tải.");
            const url = `/api/download_chap`; // URL của máy chủ mục tiêu
            const currId = e.id;

            const postData = JSON.stringify({
              id: currId,
            });

            const requestOptions = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: postData,
            };

            fetch(url, requestOptions)
              .then(async (response) => {
                // extract the filename from the response header
                const filename = response.headers.get("Content-Disposition").split("filename=")[1];

                // create a new blob object from the response body
                const blob = await response.blob();
                // create a temporary URL for the blob object
                const url = window.URL.createObjectURL(blob);
                // create a new anchor element to download the file
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                a.click();
                // release the temporary URL
                window.URL.revokeObjectURL(url);
              })
              .catch((error) => {
                notify("x", "Tải xuống thất bại!");
                console.error("Error downloading file:", error);
              });
          };
        });
      }
    }) // In nội dung phản hồi
    // Sử dụng responseData ở những nơi khác trong mã của b
    .catch((error) => {
      console.log(error);
    });
}

function showListLoad(pageNumber, data) {
  //console.log("haha", data);
  const listchap = document.querySelector(".listchap");
  let showlist = "";
  const chan =
    window.location.href.split("/")[window.location.href.split("/").length - 1];


  if (data.length > 10) {
    for (let i = pageNumber * 10 - 10; i < pageNumber * 10; i++) {
      showlist += `
            <div class="chapter-item">
              <a href='/reading/${chan}/${i + 1}' class="chapter_item_info">
                  <h2>${data[i].ten_chuong}</h2>
              </a>
              <button class="down_chap" id="${data[i].noi_dung_chuong}">
                <i class="fa-solid fa-circle-down" style="
                    text-align: center;
                    font-size: 1.5rem;
                    margin: 21px;
                "></i>
              </button>
          </div>`;
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      showlist += `
            <div class="chapter-item">
                <a href='/reading/${chan}/${i + 1}' class="chapter_item_info">
                    <h2>${data[i].ten_chuong}</h2>
                </a>
                <button class="down_chap" id="${data[i].noi_dung_chuong}">
                  <i class="fa-solid fa-circle-down" style="
                      text-align: center;
                      font-size: 1.5rem;
                      margin: 21px;
                  "></i>
                </button>
            </div>`;
    }
    // disappear change pages line
    document.querySelector(".page-container").style.display = "none";
  }
  listchap.innerHTML = showlist;
}

function handleButton(element, data) {
  if (element.classList.contains("first-page")) {
    valuePage.curPage = 1;
    showListLoad(1, data.chapters);
  } else if (element.classList.contains("last-page")) {
    valuePage.curPage = parseInt((data.length / 10).toFixed(0));
    showListLoad(parseInt((data.length / 10).toFixed(0)), data);
  } else if (element.classList.contains("prev-page")) {
    valuePage.curPage--;
    showListLoad(valuePage.curPage, data);
    handleButtonLeft();
    btnNextPg.disabled = false;
    btnLastPg.disabled = false;
  } else if (element.classList.contains("next-page")) {
    valuePage.curPage++;
    showListLoad(valuePage.curPage, data);
    handleButtonRight(data);
    btnPrevPg.disabled = false;
    btnFirstPg.disabled = false;
  }
  pagination();
}

function handleButtonLeft() {
  if (valuePage.curPage === 1) {
    btnPrevPg.disabled = true;
    btnFirstPg.disabled = true;
  } else {
    btnPrevPg.disabled = false;
    btnFirstPg.disabled = false;
  }
}
function handleButtonRight(data) {
  if (valuePage.curPage === parseInt((data.length / 10).toFixed(0))) {
    btnNextPg.disabled = true;
    btnLastPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
    btnLastPg.disabled = false;
  }
}

function haha(data) {
  // console.log(data)
  pg.onclick = (e) => {
    const ele = e.target;
    //console.log("ok");
    if (ele.dataset.page) {
      const pageNumber = parseInt(e.target.dataset.page, 10);

      valuePage.curPage = pageNumber;
      curPage.value = pageNumber;
      pagination();

      handleButtonLeft();
      handleButtonRight(data);

      showListLoad(pageNumber, data);
    }
  };

  document.querySelector(".page-container").onclick = function (e) {
    handleButton(e.target, data);
    handleButtonLeft();
    handleButtonRight(data);
  };

  pages.onchange = () => {
    const page = Math.ceil(parseInt(pages.value) / 10);
    valuePage.curPage = page;
    curPage.value = page;
    pagination();

    showListLoad(page, data);
  };

  curPage.onchange = () => {
    handleCurPage(data);
    pagination();
    pages.value = curPage.value * 10 - 9;
    handleButtonLeft();
    handleButtonRight(data);
    showListLoad(curPage.value, data);
  };
}

getReview();
