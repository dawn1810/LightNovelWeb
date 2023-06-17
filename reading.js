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

const currentURL = window.location.href;

async function getchapdata() {

    const url = `${currentURL}getchap`; // URL của máy chủ mục tiêu
    const postData = JSON.stringify({
        // thông tin đăng nhậpppp
        'status': 'login',
        // 'password': `${document.querySelector('#password').value}`,
        // 'cccd': `${document.querySelector('#cccd').value}`,
    });

    //bình minh khùng điêu điên
    // 
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: "applicaiton/json",
            "Content-Type": "application/json",
        },
        body: postData,
        withCredentials: true, // should be there
        credentials: 'include' // should be there
    };


    try {
        const response = await fetch(url, requestOptions)
        console.log(response)
        // if (response.status == 200) {
        //     document.querySelector('.popup').style.display = 'block';
        //     document.querySelector('.chat').style.display = 'inline-block';
        //     document.querySelector('.chat2').style.display = 'none';
        //     document.querySelector('.chat .message #noity-mess').innerHTML = 'Chào mừng ngươi đến địa ngục'

        //     setTimeout(function () {
        //         document.querySelector('.popup').style.display = 'none';
        //         document.querySelector('.chat').style.display = 'none';
        //     }, 5000)

        //     location.reload();
        // }
        // else if (response.status == 204) {
        //     document.querySelector('.popup').style.display = 'block';
        //     document.querySelector('.chat2').style.display = 'inline-block';
        //     document.querySelector('.chat').style.display = 'none';

        //     document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi đã từng đến đây rồi'

        //     setTimeout(function () {
        //         document.querySelector('.popup').style.display = 'none';
        //         document.querySelector('.chat2').style.display = 'inline-block';
        //     }, 5000)

        // }
        // else if (response.status == 403) {
        //     document.querySelector('.popup').style.display = 'block';
        //     document.querySelector('.chat2').style.display = 'inline-block';
        //     document.querySelector('.chat').style.display = 'none';

        //     document.querySelector('#noity-mess').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
        //     setTimeout(function () {
        //         document.querySelector('.popup').style.display = 'none';
        //         document.querySelector('.chat2').style.display = 'inline-block';

        //     }, 5000)

        // }
        // else if (response.status == '404') {
        //     document.querySelector('.popup').style.display = 'block';
        //     document.querySelector('.chat').style.display = 'none';

        //     document.querySelector('.chat2').style.display = 'inline-block';
        //     document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi Không Tồn Tại'
        //     setTimeout(function () {
        //         document.querySelector('.popup').style.display = 'none';
        //         document.querySelector('.chat2').style.display = 'inline-block';

        //     }, 5000)

        // }
        // else {
        //     document.querySelector('.popup').style.display = 'block';
        //     document.querySelector('.chat').style.display = 'none';

        //     document.querySelector('.chat2').style.display = 'inline-block';
        //     setTimeout(function () {
        //         document.querySelector('.popup').style.display = 'none';
        //         document.querySelector('.chat2').style.display = 'none';
        //     }, 5000)

        // }
        // btn_login.disabled = false;
        // btn_login.textContent = "Login";
    } catch (error) {
        console.log('Error:', error);

    }


    getchapdata()
}

getchapdata()



