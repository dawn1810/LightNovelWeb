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