//xin chào bbp
const background_color = document.getElementById("ss_reader_background")
const background_color1 = document.getElementById("ss_reader_background1")
// const currentURL = window.location.origin;

const textColor = document.getElementById("ss_reader_textColor")
const textColor1 = document.getElementById("ss_reader_textColor1")

const font = document.getElementById("ss_reader_font")

const reader_size = document.getElementById("ss_reader_size")

const line_height = document.getElementById("ss_reader_line_height")

const main = document.querySelector("main")
const body_main = document.querySelector(".main-body")


const main_content = document.querySelector(".main-content")


const show_chapter = document.querySelector(".show-list")

const show_list = document.querySelector('.show-list')
const show_more = document.querySelector('#show_more')

const reset_text_color = document.querySelector(".ss_reader_textColor_reset");

const reset_background_color = document.querySelector(".ss_reader_background_reset");

const themes = localStorage.getItem('theme');

// if (themes == 'dark') {
//     main.style.background = '#1e1e1e'
//     body_main.style.color = "#9a8686"
// }
// else {
//     main.style.background = '#9fcfca'
//     body_main.style.color = "#000"
// }
show_list.onclick = function () {
    show_more.style.display = "block"
    show_list.style.display = "none"
}
background_color.onchange = function (event) {
    main.style.background = background_color.value;
}
background_color1.onchange = function (event) {
    main.style.background = background_color1.value;
}


textColor1.onchange = function (event) {
    // body_main.style.color = textColor.value;
    body_main.style.color = textColor1.value;
    document.querySelector(".novel-name-chapter").style.color = textColor1.value
}
textColor.onchange = function (event) {
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



// font.onchange = function (event) {
//     body_main.style.fontFamily = font.value;
// }

reader_size.onchange = function (event) {
    main_content.style.fontSize = `${reader_size.value}px`;
}

line_height.onchange = function (event) {
    main_content.style.lineHeight = line_height.value;
}

const left_btn = document.querySelector('.left-btn')
left_btn.onclick = fun

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

async function getchapdata() {
    await fetch(`${currentURL}/reading`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: window.location.href.split("/")[window.location.href.split("/").length - 2],
            chap: window.location.href.split("/")[window.location.href.split("/").length - 1]
        })
    })
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                // response.text()
                return response.json();
            } else if (response.status === 404) {
                window.location.href = `${currentURL}/error/404.html`;

            }
        })
        .then(data => {
            console.log(data)

            responseData = data; // Lưu trữ nội dung phản hồi vào biến
            if (responseData) {
                console.log(responseData)
                const name_lv = document.querySelector('.name_lv')
                const novel_name = document.querySelector('.novel-name')
                const novel_name_chapter = document.querySelector('.novel-name-chapter')
                const main_content = document.querySelector('.main-content')
                name_lv.innerHTML = responseData.name
                novel_name.innerHTML = responseData.name
                novel_name_chapter.innerHTML = responseData.name_chaps
                main_content.innerHTML = responseData.chap_content
                document.querySelector('.loaded').style.display = 'none'
            }
        }) // In nội dung phản hồi
        // Sử dụng responseData ở những nơi khác trong mã của b
        .catch(error => {
            console.log(error)
        });
}
getchapdata()



