const currentURL = window.location.origin;

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

                    document.querySelector('.curent_user').style.display = 'block'

                    return response.text(); // Chuyển đổi phản hồi thành văn bản

                } else {
                    document.querySelector('.header_2 ').style.display = 'none'
                }
            })
            .then(data => {
                responseData = data; // Lưu trữ nội dung phản hồi vào biến
                if (responseData) {
                    document.querySelector('.header_2 #User-btn').innerHTML = responseData;
                }
            }) // In nội dung phản hồi
            // Sử dụng responseData ở những nơi khác trong mã của b
            .catch(error => {
                console.log(error)
            });
    }
    else {
        document.querySelector('.header_2 ').style.display = 'none'
    }
}


checkAuthentication();