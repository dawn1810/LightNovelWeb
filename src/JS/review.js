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
// when page load
// curPage.setAttribute('max', pages.value);
const valuePage = {
    truncate: true,
    curPage: 1,
    numLinksTwoSide: 1,
    totalPages: 10
};
pagination();

pg.onclick = (e) => {
    const ele = e.target;

    if (ele.dataset.page) {
        const pageNumber = parseInt(e.target.dataset.page, 10);

        valuePage.curPage = pageNumber;
        curPage.value = pageNumber;
        pagination(valuePage);

        handleButtonLeft();
        handleButtonRight();
    }
};

pages.onchange = () => {
    valuePage.totalPages = parseInt(pages.value, 10);
    handleCheckTruncate();
    handleCurPage();
    pagination();
    handleButtonLeft();
    handleButtonRight();
};
curPage.onchange = () => {
    handleCurPage();
    pagination();
    handleButtonLeft();
    handleButtonRight();
};
numLinksTwoSide.onchange = function () {
    if (this.value > 5) {
        this.value = 1;
        valuePage.numLinksTwoSide = 1;
    } else {
        valuePage.numLinksTwoSide = parseInt(this.value, 10);
    }
    pagination();
};

checks.forEach((check) => {
    check.onclick = (e) => {
        console.log(e.target);
        handleCheckTruncate();
        pagination();
    };
});

// DYNAMIC PAGINATION
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

function renderPage(index, active = "") {
    return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}
function handleCurPage() {
    if (+curPage.value > pages.value) {
        curPage.value = 1;
        valuePage.curPage = 1;
    } else {
        valuePage.curPage = parseInt(curPage.value, 10);
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

document.querySelector(".page-container").onclick = function (e) {
    handleButton(e.target);
};

function handleButton(element) {
    if (element.classList.contains("first-page")) {
        valuePage.curPage = 1;
    } else if (element.classList.contains("last-page")) {
        valuePage.curPage = parseInt(pages.value, 10);
    } else if (element.classList.contains("prev-page")) {
        valuePage.curPage--;
        handleButtonLeft();
        btnNextPg.disabled = false;
        btnLastPg.disabled = false;
    } else if (element.classList.contains("next-page")) {
        valuePage.curPage++;
        handleButtonRight();
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
function handleButtonRight() {
    if (valuePage.curPage === valuePage.totalPages) {
        console.log(valuePage.curPage);
        btnNextPg.disabled = true;
        btnLastPg.disabled = true;
    } else {
        btnNextPg.disabled = false;
        btnLastPg.disabled = false;
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

    if (tim == 1) {
        tim = 0
        console.log('ok ha')

        document.querySelector('.function_item_folow').innerHTML = `
    <i class="fa-regular fa-heart"></i>
    <span>${parseInt(tym) - 1}</span>
    `
    } else {
        tim = 1
        document.querySelector('.function_item_folow').innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <span>${parseInt(tym) + 1}</span>
    `
        console.log('ok ko')

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
fetch(`${currentURL}/reviews`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: window.location.href.split("/")[window.location.href.split("/").length - 1] })
})
    .then(response => {
        if (response.status === 200) {
            console.log(response)
            return response.json();

        } else if (response.status === 404) {
            window.location.href = `${currentURL}/error/404.html`;

        }
    })
    .then(data => {
        responseData = data; // Lưu trữ nội dung phản hồi vào biến
        // console.log(responseData.usr)
        if (responseData) {
            console.log(responseData)
            const current_novel_name = document.querySelector('.current-novel-name')
            const current_novel_actor = document.querySelector('.current-novel-actor')
            const current_category_list = document.querySelector('.current-category-list')
            const novel_avt = document.querySelector('.novel-avt')
            const function_item_folow = document.querySelector('.function_item_folow span')


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
            console.log(btn_category)
            current_category_list.innerHTML = btn_category
        }
    }) // In nội dung phản hồi
    // Sử dụng responseData ở những nơi khác trong mã của b
    .catch(error => {
        console.log(error)
    });