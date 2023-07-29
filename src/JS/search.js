const more_btn = document.querySelector('.search_more')

more_btn.onclick = () => {

}

function drop_novel() {
    for (const novel of document.querySelectorAll('.novel')) {
        novel.style.display = 'none'
    }
}
const tag = document.querySelectorAll('.search_tag_item')
function drop_tag(){
    for (let i = 0; i < tag.length; i++) {
        if (tag[i].checked) {
            drop_novel();
            document.querySelectorAll('.novel')[i].style.display = 'flex'
        }
    }
}

document.querySelector("#value-1").onchange = function () {
    drop_tag()
};
document.querySelector("#value-2").onchange = function () {
    drop_tag()
};
document.querySelector("#value-3").onchange = function () {
    drop_tag()
};
if (document.querySelector("#value-1").checked) {
    drop_novel();
    document.querySelectorAll('.novel')[0].style.display = 'flex'
}

