const like = document.querySelector('.like')
const dislike = document.querySelector('.dislike')
const Evaluate_btn = document.querySelectorAll('.Evaluate_btn')


function Evaluate(){
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