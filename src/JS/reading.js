//xin chào bbp
const background_color = document.getElementById("ss_reader_background")
const background_color1 = document.getElementById("ss_reader_background1")
// const currentURL = window.location.origin;

const textColor = document.getElementById("ss_reader_textColor")
const textColor1 = document.getElementById("ss_reader_textColor1")

const font = document.getElementById("ss_reader_font")

const reader_size = document.querySelectorAll("#ss_reader_size")

const line_height = document.querySelectorAll("#ss_reader_line_height")

const main = document.querySelector("main")
const body_main = document.querySelector(".main-body")


const main_content = document.querySelector(".main-content")

document.querySelector('.loaded').style.display = 'none'

// const show_chapter = document.querySelector(".show-list")

const show_list = document.querySelectorAll('.show-list')
const show_more_item = document.querySelectorAll('.show_more_item')

const show_more = document.querySelector('#show_more')

const reset_text_color = document.querySelector(".ss_reader_textColor_reset");

const reset_background_color = document.querySelector(".ss_reader_background_reset");

const themes = localStorage.getItem('theme');

///////////////////check viewwww///////////////////
const regex_id = /reading\/([a-zA-Z0-9]+)\/\d+/;
const match_id = window.location.href.match(regex_id);
let my_array_id_string = localStorage.getItem('array_id_truyen');
let my_array_id = [];
if (my_array_id_string) {
    let my_array_id = JSON.parse(my_array_id_string);
    if (!my_array_id.includes(match_id[1])) {
        my_array_id.push(match_id[1]);
        views_novel(match_id[1]);
        localStorage.setItem('array_id_truyen', JSON.stringify(my_array_id));
    }
} else {
    my_array_id.push(match_id[1]);
    views_novel(match_id[1]);
    localStorage.setItem('array_id_truyen', JSON.stringify(my_array_id));
};


async function views_novel(id_truyen) {
    await fetch(`${currentURL}/api/updateviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_truyen: id_truyen
        })
    })
        .catch(error => {
            console.log(error)
        });
}


////////////////////////////////////////////////////////////////////////////




for (const list_show of show_list) {
    list_show.onclick = function () {
        list_show.parentElement.querySelector('#show_more').style.display = "block"
        list_show.style.display = "none"
        setTimeout(function () {
            list_show.parentElement.querySelector('#show_more').style.display = "none"
            list_show.style.display = "block"
        }, 5000)
    }
}
background_color.onchange = function () {
    main.style.background = background_color.value;
}
background_color1.onchange = function () {
    main.style.background = background_color1.value;
}


textColor1.onchange = function () {
    // body_main.style.color = textColor.value;
    body_main.style.color = textColor1.value;
    document.querySelector(".novel-name-chapter").style.color = textColor1.value
}
textColor.onchange = function () {
    // body_main.style.color = textColor.value;
    body_main.style.color = textColor.value;
    document.querySelector(".novel-name-chapter").style.color = textColor.value
}


reset_background_color.addEventListener("click", function () {
    main.style.background = 'linear-gradient(to left, #5b0664, #210e68)'
});


reset_text_color.addEventListener("click", function () {
    body_main.style.color = 'black';
});



for (const font of reader_size) {
    font.onchange = function () {
        main_content.style.fontSize = `${font.value}px`;
    }
}


for (const height of line_height) // roi do hai anh trai name chap cho ten chap hien tai, con name chaps la tat ca
    height.onchange = function () {
        main_content.style.lineHeight = line_height.value;
    }

// cai hai thg bay moi coii laf review nha
// cais tao sua la reading coi chung lam duong lac loi
const left_btn = document.querySelectorAll('.left-btn')
for (const l_btn of left_btn) {
    if (parseInt((window.location.href).split('/').pop()) == 0) {
        l_btn.style.display = 'none';
        document.querySelector('.lame-left').disabled = true
    }
    l_btn.onclick = function () {
        const chap = parseInt((window.location.href).split('/').pop()) - 1;
        const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

        window.location.href = `${crUrl}/${chap}`
    }
}
const right_btn = document.querySelectorAll('.right-btn')
for (const r_btn of right_btn) {
    last_chaps = show_more_item.length-1
    console.log(last_chaps)
    if (parseInt((window.location.href).split('/').pop()) == last_chaps - 1) {
        r_btn.style.display = 'none';
        document.querySelector('.lame-right').disabled = true

    }
    r_btn.onclick = function () {
        const chap = parseInt((window.location.href).split('/').pop()) + 1;
        const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

        window.location.href = `${crUrl}/${chap}`
    }
}


const lame_right = document.querySelector('.lame-right');
lame_right.onclick = function () {
    const chap = parseInt((window.location.href).split('/').pop()) + 1;
    const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/${chap}`
}

const lame_left = document.querySelector('.lame-left');
lame_left.onclick = function () {
    const chap = parseInt((window.location.href).split('/').pop()) - 1;
    const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/${chap}`
}

const lame_up = document.querySelector('.lame-up');

lame_up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Tùy chọn, cho phép cuộn mượt hơn
    });
});

const lame_down = document.querySelector('.lame-down');

lame_down.addEventListener('click', () => {
    window.scrollBy({
        top: 650,
        behavior: 'smooth'
    });


});


const lame_auto = document.querySelector('.lame-auto');
const pause = document.querySelector('.pause')
const play = document.querySelector('.play')

const menus = document.querySelectorAll('.menu a')
for (const meme of menus) {
    meme.onclick = (e) => {
        e.preventDefault();
    }
}
lame_auto.onclick = () => {
    if (lame_auto.classList[2] == 'playing') {
        lame_auto.classList.remove('playing')

        lame_auto.classList.add('pausing')
        play.style.display = 'none'
        pause.style.display = 'block'
        autoScroll();
    }

    else {
        clearTimeout(scrolldelay);
        lame_auto.classList.remove('pausing')
        play.style.display = 'block'
        pause.style.display = 'none'
        lame_auto.classList.add('playing')

    }
}
function autoScroll() {
    function pageScroll() {
        // Kiểm tra xem đã cuộn tới cuối trang chưa
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            // Đã cuộn tới cuối trang, dừng cuộn trang
            clearTimeout(scrolldelay);
        } else {
            window.scrollBy(0, 1);
            scrolldelay = setTimeout(pageScroll, 30);
        }
    }
    pageScroll();
}


// go chap
show_more.onchange = function () {
    const chap = show_more.value
    const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/${chap}`
}


