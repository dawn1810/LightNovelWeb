async function get_popular_novel() {

    const url = `${currentURL}/get_ds`; // URL của máy chủ mục tiêu
    // const postData = JSON.stringify({
    //     // thông tin đăng nhậpppp
    //     'status': 'popular_novel',
    //     // 'password': `${document.querySelector('#password').value}`,
    //     // 'cccd': `${document.querySelector('#cccd').value}`,
    // });

    //bình minh khùng điêu điên
    // 
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: "applicaiton/json",
            "Content-Type": "applicaiton/json",
        },
        // body: postData,
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


}

get_popular_novel();
// category_btn.onclick = function () {
//     category_list.style.display = 'block';
// }