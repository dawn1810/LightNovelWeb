// const { json } = require("express");


function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}
// // cho nay cua tao cua t nua//
async function checkAuthentication() {
    const accountCookie = getCookie('account');
    if (accountCookie) {
        // Gửi cookie "account" lên máy chủ
        // Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
        // Ví dụ sử dụng Fetch API:
        await fetch(`${currentURL}/xacthuc`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ account: accountCookie })
        })
            .then(response => {
                if (response.status === 200) {
                    document.querySelector('.header_user').style.display = 'flex'
                    document.querySelector('.header_noUser').style.display = 'none'

                    // document.querySelector('.curent_user').style.display = 'block'

                    return response.text(); // Chuyển đổi phản hồi thành văn bản

                } else if (response.status === 404) {
                    window.location.href = `${currentURL}/404`;

                }
            })
            .then(data => {
                responseData = JSON.parse(data); // Lưu trữ nội dung phản hồi vào biến
                // console.log(responseData.usr)
                if (responseData) {

                    if (responseData.avt == 'unknown') {
                        document.querySelector('.header_user_logo_i').innerHTML = `<i class="fa-regular fa-circle-user"></i>
                    ${responseData.usr}`;//a zai sống đi a zai
                    }
                    else {

                    }

                }
            }) // In nội dung phản hồi
            // Sử dụng responseData ở những nơi khác trong mã của b
            .catch(error => {
                console.log(error)
            });
    }
    else {
        document.querySelector('.header_user').style.display = 'none'
    }
}


// checkAuthentication();