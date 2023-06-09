const header_menu = document.querySelector('.header_menu')
const left_item = document.querySelector('.left_item')
const category_btn = document.getElementById('category')
const category_list = document.querySelector('.category_list')
const summary_Content= document.querySelector('.summary-Content')
const summary_btn = document.querySelector('.summary-btn')

let menuBtnCount = true;

category_btn.onclick = function () {
    category_list.style.display = 'block';
}
document.onclick = function (event) {
    const targetElement = event.target;
    if (!category_list.contains(targetElement) && targetElement !== category_btn) {
        category_list.style.display = 'none';
    }
}

header_menu.onclick = function (event) {
    if (menuBtnCount) {
        event.stopPropagation();
        left_item.classList.remove('close');
        menuBtnCount = false;
    }
    else {
        left_item.classList.add('close');
        menuBtnCount = true;
    }

}
const category = document.querySelector('.category')

left_item.onclick = function (event) {
    event.stopPropagation();
    console.log('ok')
}

function toggleSummary() { 
    if (summary_Content.innerHTML === '') {
      summary_Content.innerHTML = 'Murasaki có khả năng nhìn thấy tương lai của người mà cô ấy chạm vào. Là con gái của chủ nhà, hàng tháng cô phải đuổi theo Shijima Banri để lấy tiền thuê nhà. Lần nào cũng vậy, tác giả tội nghiệp Shijima hứa với cô rằng anh ta sẽ trả tiền thuê nhà ngay khi được xuất bản và được trả tiền. Murasaki giữ bí mật về khả năng nhìn thấy tương lai của mình và rất mong chờ nó, bởi vì cô thấy Shijima là nửa kia định mệnh mà cô sẽ kết hôn.';
      summary_btn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Ẩn tóm tắt';
    } else {
      summary_Content.innerHTML = '';
      summary_btn.innerHTML = '<i class="fa-solid fa-bars"></i> TÓM TẮT TRUYỆN';
    }
  }
// document.querySelector('body').onclick = function () {
//     left_item.classList.add('close')
// }

//
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});