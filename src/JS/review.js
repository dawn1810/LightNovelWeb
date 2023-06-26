// const { getItem } = require("node-persist")

const like = document.querySelector('.like')
const dislike = document.querySelector('.dislike')
const Evaluate_btn = document.querySelectorAll('.Evaluate_btn')


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

    if (tim == 1) {
        tim = 0
        console.log('ok ha')

        document.querySelector('.function_item_folow').innerHTML = `
    <i class="fa-regular fa-heart"></i>
    <span>1000</span>
    `
    } else {
        tim = 1
        document.querySelector('.function_item_folow').innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <span>1000</span>
    `
        console.log('ok ko')

    }
}


const lasted_chap_btn=document.querySelector(".lasted_chap");
lasted_chap_btn.onclick=function(e){
    e.preventDefault();
}

const random_chap_btn=document.querySelector(".random_chap");
random_chap_btn.onclick=function(e){
    e.preventDefault();
    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(chan)
    window.location.href =`${currentURL}/reading/${chan}/0`
}



const first_chap = document.querySelector('.first_chap')
first_chap.onclick = function(e){
    e.preventDefault()
    const chan = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(chan)
    window.location.href =`${currentURL}/reading/${chan}/0`
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


            current_novel_name.innerHTML = responseData[0].name
            current_novel_actor.innerHTML = responseData[0].author
            novel_avt.src = responseData[0].image
            function_item_folow.innerHTML = responseData[0].likes


            let btn_category = ''
            for(let i = 0; i < responseData[0].genres.length; i++) {
                btn_category += `
                <li id="action" class="current-category-list_item">
                <a href="/HTML/category-page.html">
                    <div class="btn btn1">
                        <h4>${responseData[0].genres[i]}</h4>
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