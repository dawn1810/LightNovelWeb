// const { getItem } = require("node-persist")

const like = document.querySelector('.like')
const dislike = document.querySelector('.dislike')
const Evaluate_btn = document.querySelectorAll('.Evaluate_btn')
// import "/";

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
const summary_btn = document.querySelector('.summary-btn');
const summary_Content = document.querySelector('.summary-Content');
summary_btn.onclick = () => {
    if (summary_Content.style.display == "none") {
        summary_Content.style.display = "block";
        summary_btn.innerHTML =
            '<i class="fa-solid fa-angles-up"></i> Ẩn Tóm Tắt';//gi day a zai
    } else {
        summary_Content.style.display = "none";

        summary_btn.innerHTML =

            '<i class="fa-solid fa-bars"></i> HIỆN TÓM TẮT';
    }
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}


async function like_novel(status) {
    const accountCookie = getCookie('account');
    if (accountCookie) {
        // Gửi cookie "account" lên máy chủ
        // Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
        // Ví dụ sử dụng Fetch API:
        await fetch(`${currentURL}/updatelike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: accountCookie,
                status: status,
                id_truyen: window.location.href.split("/")[window.location.href.split("/").length - 1]
            })
        })
            .then(response => {
                // if (response.status === 200) {
                //     document.querySelector('.header_user').style.display = 'flex'
                //     document.querySelector('.header_noUser').style.display = 'none'

                //     // document.querySelector('.curent_user').style.display = 'block'

                //     return response.text(); // Chuyển đổi phản hồi thành văn bản

                // } else if (response.status === 404) {
                //     window.location.href = `${currentURL}/error/404.html`;

                // }
            })
            .then(data => {
                // responseData = JSON.parse(data); // Lưu trữ nội dung phản hồi vào biến
                // // console.log(responseData.usr)
                // if (responseData) {

                //     if (responseData.avt == 'unknown') {
                //         document.querySelector('.header_user_logo_i').innerHTML = `<i class="fa-regular fa-circle-user"></i>
                //     ${responseData.usr}`;//a zai sống đi a zai
                //     }
                //     else {

                //     }

                // }
            }) // In nội dung phản hồi
            // Sử dụng responseData ở những nơi khác trong mã của b
            .catch(error => {
                console.log(error)
            });
    }
    else {
        document.querySelector('.header_user').style.display = 'none'
    }
}


document.querySelector('.function_item_share').onclick = () => {
    const link = window.location.href
    navigator.clipboard.writeText(link);
    alert('Copy gòi nha em iuuuu <3');
}

// when page load
// curPage.setAttribute('max', pages.value);
const valuePage = {
    truncate: true,
    curPage: 1,
    numLinksTwoSide: 1,
    totalPages: 10
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



// pages.onchange = () => {
//     // // valuePage.totalPages = parseInt(pages.value, 10);
//     // handleCheckTruncate();
//     // handleCurPage();
//     // pagination();
//     // handleButtonLeft();
//     // handleButtonRight();
//     const page = parseInt(pages.value, 10);
//     showListLoad(page,data)
// };
// curPage.onchange = () => {
//     handleCurPage();
//     pagination();
//     handleButtonLeft();
//     handleButtonRight();
// };
// numLinksTwoSide.onchange = function () {
//     if (this.value > 5) {
//         this.value = 1;
//         valuePage.numLinksTwoSide = 1;
//     } else {
//         valuePage.numLinksTwoSide = parseInt(this.value, 10);
//     }
//     pagination();
// };

checks.forEach((check) => {
    check.onclick = (e) => {
        console.log(e.target);
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
    if (+curPage.value > (data.length / 10).toFixed(0)) {
        curPage.value = 1;
        valuePage.curPage = 1;
    } else {
        console.log(parseInt(curPage.value, (data.length / 10).toFixed(0)))
        valuePage.curPage = parseInt(curPage.value, (data.length / 10).toFixed(0));
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
        iterator.style.color = '#fff'
    }
}
like.onclick = function () {
    Evaluate()
    like.style.color = '#1877f2'
}
dislike.onclick = function () {
    Evaluate()
    dislike.style.color = '#1877f2'
    //abcdef
}
let tim = 0
let sao = 0
document.querySelector('.function_item_folow').onclick = function () {
    const tym = document.querySelector('.function_item_folow span').innerHTML

    const user_status = document.querySelector('.header_user_logo')
    if (user_status.style.display == 'none') {
        alert('Bạn phải đăng nhập')

    } else {
        if (tim == 1) {
            tim = 0
            console.log('ok ha')

            document.querySelector('.function_item_folow').innerHTML = `
                <i class="fa-regular fa-heart"></i>
                <span>${parseInt(tym) - 1}</span>`
            like_novel(0)

        } else {
            tim = 1
            document.querySelector('.function_item_folow').innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>${parseInt(tym) + 1}</span>`
            console.log('ok ko')

            like_novel(1)
        }
    }
}


const lasted_chap_btn = document.querySelector(".lasted_chap");
lasted_chap_btn.onclick = function (e) {
    e.preventDefault();
}

const random_chap_btn = document.querySelector(".random_chap");
random_chap_btn.onclick = function (e) {
    e.preventDefault();
    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(chan)
    window.location.href = `${currentURL}/reading/${chan}/0`
}



const first_chap = document.querySelector('.first_chap')
first_chap.onclick = function (e) {
    e.preventDefault()
    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(chan)
    window.location.href = `${currentURL}/reading/${chan}/0`
}

document.querySelector('.function_item_star').onclick = function () {

    if (sao == 1) {
        sao = 0
        console.log('ok ha')

        document.querySelector('.function_item_star').innerHTML = `
        <i class="fa-regular fa-star"></i>
    <span>Đánh giá</span>
    `
    } else {
        sao = 1
        document.querySelector('.function_item_star').innerHTML = `
        <i class="fa-solid fa-star"></i>
    <span>Đánh giá</span>
    `
        console.log('ok ko')

    }
}
console.log(window.location.href.split("/")[window.location.href.split("/").length - 1])
const novel_id = localStorage.getItem('novel_id')

function calTime(data) {
    // Thời điểm hiện tại
    const now = new Date();
    console.log((data.update_date))

    // Thời điểm trả về từ server
    const serverTime = new Date(data.update_date);

    // Tính số lượng năm chênh lệch
    const yearsDiff = now.getFullYear() - serverTime.getFullYear();

    // Tính số lượng tháng chênh lệch
    const monthsDiff = (yearsDiff * 12) + (now.getMonth() - serverTime.getMonth());

    // Tính số lượng ngày chênh lệch
    const daysDiff = Math.floor((now - serverTime) / (1000 * 60 * 60 * 24));

    // Tính số lượng giờ chênh lệch
    const hoursDiff = now.getHours() - serverTime.getHours();

    // Tính số lượng phút chênh lệch
    const minutesDiff = now.getMinutes() - serverTime.getMinutes();

    // Hiển thị kết quả chênh lệch thời gian
    console.log(`Chênh lệch thời gian: ${yearsDiff} năm, ${monthsDiff} tháng, ${daysDiff} ngày, ${hoursDiff} giờ, ${minutesDiff} phút.`);

    if (yearsDiff > 0) {
        return yearsDiff + ' năm'
    }
    else if (monthsDiff > 0) {
        return monthsDiff + ' tháng'
    }
    else if (daysDiff > 0) {
        return daysDiff + ' ngày'
    }
    else if (hoursDiff > 0) {
        return hoursDiff + ' giờ'
    }
    else if (minutesDiff > 0) {
        return minutesDiff + ' phút'
    }
    else {
        return 'Nóng như chuyện tình đôi ta <3'

    }
    return 'éo tính dc'
}


var list_chap = ''
async function getReview() {
    const accountCookie = getCookie('account');
    // if()


    await fetch(`${currentURL}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: window.location.href.split("/")[window.location.href.split("/").length - 1],
            account: accountCookie,

        })
    })
        .then(response => {
            if (response.status === 200) {
                // console.log(response)
                return response.json();

            } else if (response.status === 404) {
                window.location.href = `${currentURL}/error/404.html`;

            }
        })
        .then(data => {
            responseData = data; // Lưu trữ nội dung phản hồi vào biến
            // console.log(responseData.usr)
            if (responseData) {
                // console.log(responseData)
                const current_novel_name = document.querySelector('.current-novel-name')
                const current_novel_actor = document.querySelector('.current-novel-actor')
                const current_category_list = document.querySelector('.current-category-list')
                const novel_avt = document.querySelector('.novel-avt')
                const function_item_folow = document.querySelector('.function_item_folow span')
                const function_item_folow_heard = document.querySelector('.function_item_folow i')
                const summary = document.querySelector('.summary-Content')
                document.querySelector('#last_update_time').innerHTML = calTime(responseData)

                document.querySelector('#number_of_likes').innerHTML = responseData.likes
                document.querySelector('#number_of_view').innerHTML = responseData.views
                summary.innerHTML = responseData.summary
                const lasted_chap = document.querySelector('.lasted_chap')
                lasted_chap.onclick = function (e) {
                    e.preventDefault()
                    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]
                    console.log(chan, responseData.name_chaps.length - 1)
                    window.location.href = `${currentURL}/reading/${chan}/${responseData.name_chaps.length - 1}`
                }

                // Xét xem người dùng đã like hay chưa:
                if (responseData.status) { // đã like
                    function_item_folow_heard.classList.replace('fa-regular', 'fa-solid');
                    // function_item_folow_heard.classList.remove('fa-regular');
                    // function_item_folow_heard.classList.add('fa-solid');
                }
                else { // chưa like
                    function_item_folow_heard.classList.replace('fa-solid', 'fa-regular');
                    
                    // function_item_folow_heard.classList.add('fa-regular');
                    // function_item_folow_heard.classList.remove('fa-solid');
                }


                function scrollToComments() {
                    // Lấy phần tử bình luận của bài đăng
                    var commentContainer = document.getElementById("comment_container");

                    // Nếu phần tử bình luận tồn tại, cuộn trang xuống phần tử đó
                    if (commentContainer) {
                        commentContainer.scrollIntoView();
                    }
                }

                // Đăng ký sự kiện click cho nút bình luận
                var commentButton = document.querySelector('.function_item_comment');
                commentButton.addEventListener("click", function (event) {
                    // Ngăn chặn hành động mặc định của nút bình luận (chuyển đến URL mới)
                    event.preventDefault();

                    // Cuộn trang xuống phần bình luận của bài đăng và hiển thị phần bình luận
                    scrollToComments();
                });

                haha(responseData.name_chaps)
                // console.log(data)
                current_novel_name.innerHTML = responseData.name
                current_novel_actor.innerHTML = responseData.author
                novel_avt.src = responseData.image
                function_item_folow.innerHTML = responseData.likes



                let btn_category = ''
                for (let i = 0; i < responseData.genres.length; i++) {
                    btn_category += `
                <li id="action" class="current-category-list_item">
                <a href="/HTML/category-page.html">
                    <div class="btn btn1">
                        <h4>${responseData.genres[i]}</h4>
                    </div>
                </a>
            </li>
                `
                }
                // console.log(btn_category)
                valuePage.totalPages = (responseData.name_chaps.length / 10).toFixed(0)
                current_category_list.innerHTML = btn_category
                const listchap = document.querySelector('.listchap')
                let showlist = ''
                // console.log(showlist)
                const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]

                showListLoad(1, responseData.name_chaps);
                document.querySelector('.loaded').style.display = 'none'
            }
        }) // In nội dung phản hồi
        // Sử dụng responseData ở những nơi khác trong mã của b
        .catch(error => {
            console.log(error)
        });

}


function showListLoad(pageNumber, data) {
    const listchap = document.querySelector('.listchap')
    let showlist = ''
    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]

    for (let i = pageNumber * 10 - 10; i < pageNumber * 10; i++) {
        showlist += `
        <a href='${currentURL}/reading/${chan}/${i}' class="chapter-item">
            <div class="chapter_item_info">
                <h2 style="margin: 15px;">${data[i].substring(0, data[i].indexOf(':'))}</h2>
                <div style="
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: center;">
                    <div>${data[i].substring(data[i].indexOf(':') + 1)}</div>
                </div>
            </div>
            <i class="fa-solid fa-circle-down" style="
                text-align: center;
                font-size: 1.5rem;
                margin: 21px;
            "></i>
        </a>`
    };
    listchap.innerHTML = showlist;
}

function handleButton(element, data) {
    if (element.classList.contains("first-page")) {
        valuePage.curPage = 1;
        showListLoad(1, data);
    } else if (element.classList.contains("last-page")) {
        valuePage.curPage = parseInt((data.length / 10).toFixed(0));
        showListLoad(parseInt((data.length / 10).toFixed(0)), data);
    } else if (element.classList.contains("prev-page")) {
        valuePage.curPage--;
        console.log("thg cho thinh-", valuePage.curPage);
        showListLoad(valuePage.curPage, data);
        handleButtonLeft();
        btnNextPg.disabled = false;
        btnLastPg.disabled = false;
    } else if (element.classList.contains("next-page")) {
        valuePage.curPage++;
        console.log("thg cho thinh+", valuePage.curPage);
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
        console.log('ok')
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

        showListLoad(page, data)
    };

    curPage.onchange = () => {
        handleCurPage(data);
        pagination();
        handleButtonLeft();
        handleButtonRight(data);
        showListLoad(curPage.value, data)
    };
}

getReview()



// ẩn comment

$(document).ready(function () {
    // Ẩn tất cả các bình luận thứ 6 trở đi
    $(".comment_item_container:gt(4)").hide();

    // Thêm nút "Xem thêm"
    $(".comment_list").append('<button id="loadMore" class="load-more">Xem thêm</button>');

    // Khi nhấn nút "Xem thêm"
    $("#loadMore").on("click", function () {
        // Hiển thị thêm 5 bình luận
        $(".comment_item_container:hidden:lt(5)").slideDown();

        // Nếu không còn bình luận nào ẩn, ẩn nút "Xem thêm"
        if ($(".comment_item_container:hidden").length === 0) {
            $("#loadMore").hide();
        }
    });
});
// ẩn comment


var comments = document.querySelectorAll(".comment_item_container");
var loadMoreBtn = document.querySelector("#loadMoreBtn");
var numCommentsToShow = 5;
var numCommentsVisible = 0;

// Ẩn tất cả các bình luận thứ numCommentsToShow trở đi
for (var i = numCommentsToShow; i < comments.length; i++) {
    comments[i].classList.add("hidden");
}

// Cập nhật số lượng bình luận đang hiển thị
numCommentsVisible = numCommentsToShow;

// Hiển thị nút "Xem thêm" nếu có nhiều hơn numCommentsToShow bình luận
if (comments.length > numCommentsToShow) {
    loadMoreBtn.classList.remove("hidden");
}

// Khi nhấn nút "Xem thêm"
loadMoreBtn.addEventListener("click", function () {
    // Tăng số lượng bình luận đang hiển thị lên numCommentsToShow
    numCommentsVisible += numCommentsToShow;

    // Hiển thị tất cả các bình luận trong phạm vi đang hiển thị
    for (var i = 0; i < numCommentsVisible && i < comments.length; i++) {
        comments[i].classList.remove("hidden");
    }

    // Ẩn nút "Xem thêm" nếu tất cả các bình luận đã được hiển thị
    if (numCommentsVisible >= comments.length) {
        loadMoreBtn.classList.add("hidden");
    }
});