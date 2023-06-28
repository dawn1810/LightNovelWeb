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


// const show_chapter = document.querySelector(".show-list")

const show_list = document.querySelectorAll('.show-list')
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


for (const list_show of show_list) {
    list_show.onclick = function () {
        list_show.parentElement.querySelector('#show_more').style.display = "block"
        list_show.style.display = "none"
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



// font.onchange = function (event) {
//     body_main.style.fontFamily = font.value;
// }

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
    l_btn.onclick = function () {
        const chap = parseInt((window.location.href).split('/').pop()) - 1;
        const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

        window.location.href = `${crUrl}/${chap}`
    }
}
const right_btn = document.querySelectorAll('.right-btn')
for (const r_btn of right_btn) {
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
            const chap = parseInt((window.location.href).split('/').pop());

            // if(chap ==)
            responseData = data; // Lưu trữ nội dung phản hồi vào biến
            if (responseData) {
                console.log(responseData)
                const name_lv = document.querySelector('.name_lv')
                const novel_name = document.querySelector('.novel-name')
                const novel_name_chapter = document.querySelector('.novel-name-chapter')
                const main_content = document.querySelector('.main-content')
                name_lv.innerHTML = `
                 <a href = "${currentURL}/reviews/${window.location.href.split('/')[window.location.href.split('/').length - 2]}">
                    ${responseData.name}
                 </a>
                `
                novel_name.innerHTML = responseData.name
                novel_name_chapter.innerHTML = responseData.name_chap
                main_content.innerHTML = responseData.chap_content
                document.querySelector('.loaded').style.display = 'none'

                const left_btn = document.querySelectorAll('.left-btn')
                if (parseInt((window.location.href).split('/').pop()) == 0) {
                    for (const l_btn of left_btn) {
                        l_btn.style.display = 'none'
                    }
                }
                const right_btn = document.querySelectorAll('.right-btn')

                if (parseInt((window.location.href).split('/').pop()) == responseData.name_chaps.length - 1) {
                    for (const r_btn of right_btn) {
                        r_btn.style.display = 'none'
                    }
                }
                const show_more = document.querySelectorAll('#show_more')
                for (const show of show_more) {
                    let show_list = ''
                    for (let i = 0; i < responseData.name_chaps.length; i++) {
                        if (parseInt((window.location.href).split('/').pop()) == i) {
                            if (responseData.name_chaps[i].endsWith(")")) {
                                show_list += `
                            <option selected  value="${i}">${responseData.name_chaps[i].replace(/(Chapter \d+).*?(\d+)\)$/, "$1($2)")}</option>
                            `
                            }
                            else {
                                show_list += `
                            <option selected value="${i}">${responseData.name_chaps[i].substring(0, responseData.name_chaps[i].indexOf(":"))}</option>
                            `
                            }
                        }
                        else {
                            if (responseData.name_chaps[i].endsWith(")")) {
                                show_list += `
                            <option value="${i}">${responseData.name_chaps[i].replace(/(Chapter \d+).*?(\d+)\)$/, "$1($2)")}</option>
                            `
                            }
                            else {
                                show_list += `
                            <option value="${i}">${responseData.name_chaps[i].substring(0, responseData.name_chaps[i].indexOf(":"))}</option>
                            `
                            }
                        }

                    }
                    show.innerHTML = show_list

                    show.onchange = function () {
                        const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
                        window.location.href = `${crUrl}/${show.value}`
                    }
                }


                document.querySelector('.rv-author-a').innerHTML = responseData.name_chap.substring(0, responseData.name_chap.indexOf(":"));;
            }
        }) // In nội dung phản hồi
        // Sử dụng responseData ở những nơi khác trong mã của b
        .catch(error => {
            console.log(error)
        });
}
getchapdata()



