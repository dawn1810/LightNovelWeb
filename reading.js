//xin chào bbp
const background_color = document.getElementById("ss_reader_background")

const textColor = document.getElementById("ss_reader_textColor")

const font = document.getElementById("ss_reader_font")

const reader_size = document.getElementById("ss_reader_size")

const line_height = document.getElementById("ss_reader_line_height")

const body_main = document.querySelector(".main-body")

const main_content = document.querySelector(".main-content")


const show_chapter = document.querySelector(".show-list")

const show_list = document.querySelector('.show-list')
const show_more = document.querySelector('#show_more')

show_list.onclick = function () {
    show_more.style.display = "block"
    show_list.style.display = "none"
}
background_color.onchange = function (event) {
    body_main.style.background = background_color.value;
}

textColor.onchange = function (event) {
    body_main.style.color = textColor.value;
}

font.onchange = function (event) {
    body_main.style.fontFamily = font.value;
}

reader_size.onchange = function (event) {
    main_content.style.fontSize = reader_size.value;
}

line_height.onchange = function (event) {
    main_content.style.lineHeight = line_height.value;
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


