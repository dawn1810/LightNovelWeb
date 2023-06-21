
$(document).ready(function () {
    $("#footer-element").load("/HTML/footer.html", function () {
        // your script
    });
});



$(document).ready(function () {
    $("#header-element").load("/HTML/header.html", function () {
        const header_menu = document.querySelector('.header_menu')
        const left_item = document.querySelector('.left_item')
        const category_btn = document.getElementById('category')
        const category_list = document.querySelector('.category_list')
        const summary_Content = document.querySelector('.summary-Content')
        const summary_btn = document.querySelector('.summary-btn')

        let menuBtnCount = true;


        $("document").ready(function () {
            let trigger = $("#hamburger"),
                isClosed = false;

            trigger.click(function () {
                burgerTime();
            });

            function burgerTime() {
                if (isClosed == true) {
                    trigger.removeClass("is-open");
                    trigger.addClass("is-closed");
                    isClosed = false;
                    left_item.classList.add('close');
                } else {
                    trigger.removeClass("is-closed");
                    trigger.addClass("is-open");
                    isClosed = true;
                    left_item.classList.remove('close');

                }
            }
        });



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
            if (summary_Content.style.display == 'none') {
                summary_Content.style.display = 'block';
                summary_btn.innerHTML = '<i class="fa-solid fa-bars"></i> TÓM TẮT TRUYỆN';

            } else {
                summary_Content.style.display = 'none';

                summary_btn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Ẩn tóm tắt';
            }
        }
    });
});
document.onclick = function (event) {
    const targetElement = event.target;
    if (!category_list.contains(targetElement) && targetElement !== category_btn) {
        category_list.style.display = 'none';
    }
}


// const category = document.querySelector('.category')

// left_item.onclick = function (event) {
//     event.stopPropagation();
//     console.log('ok')
// }

// document.addEventListener('DOMContentLoaded', function() {
//     category_btn.onclick = function () {
//         category_list.style.display = 'block';
//     };    
//   });


// header_menu.onclick = function (event) {
//     if (menuBtnCount) {
//         event.stopPropagation();
//         left_item.classList.remove('close');
//         menuBtnCount = false;
//     }
//     else {
//         left_item.classList.add('close');
//         menuBtnCount = true;
//     }

// }
// const login = document.querySelector('.header_login')
// login.onclick = function () {
//     console.log('Login')
//     modal.style.display = 'block'
// }