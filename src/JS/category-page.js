// const day_tab_btn=document.getElementById("day-tab");
// const month_tab_btn=document.getElementById("month-tab");
// const all_tab_btn=document.getElementById("all-tab");

// const day_panel_btn=document.getElementById("day-panel");
// const month_panel_btn=document.getElementById("month-panel");
// const all_panel_btn=document.getElementById("all-panel");


// day_tab_btn.onclick=function(e) {
//     e.preventDefault();
//     if (day_tab_btn.classList[1]!="active"){

//         day_tab_btn.classList.add("active");
//         month_tab_btn.classList.remove("active");
//         all_tab_btn.classList.remove("active");

//         day_panel_btn.classList.add("active");
//         month_panel_btn.classList.remove("active");
//         all_panel_btn.classList.remove("active");
//     }
// }

// month_tab_btn.onclick=function(e) {
//     e.preventDefault();
//     if (month_tab_btn.classList[1]!="active") {

//         day_tab_btn.classList.remove("active");
//         month_tab_btn.classList.add("active");
//         all_tab_btn.classList.remove("active");

//         day_panel_btn.classList.remove("active");
//         month_panel_btn.classList.add("active");
//         all_panel_btn.classList.remove("active");

//     }
// }
// all_tab_btn.onclick=function(e) {
//     e.preventDefault();
//     if (all_tab_btn.classList[1]!="active") {

//         day_tab_btn.classList.remove("active");
//         month_tab_btn.classList.remove("active");
//         all_tab_btn.classList.add("active");

//         day_panel_btn.classList.remove("active");
//         month_panel_btn.classList.remove("active");
//         all_panel_btn.classList.add("active");
//     }

// }

$('.search-btn').on('click', function () {
    // disable button untill load finish
    console.log('a')
    $('.search-btn').prop('disabled', true);
    // loading 
    $('.search-btn').text('Loading...')

    url = currentURL + `/api/advanced_search?update_day=${$('.update_day').val()}&types=${listObj.tempValues}&num_chaps=${$('.num_chaps').val()}&status=${$('.status').val()}&sort_by=${$('.sort_by').val()}`

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    };
    fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    // render all more data
                    $('.novel').empty();
                    for (truyen of data) {
                        $('.novel').append(`
                        <a href="/reviews/${truyen._id}" class="novel_item">
                            <div>
                                <div class="novel_item_main">
                                    <div class="novel_item_main_img">
                                        <img src="${truyen.image}" alt referrerpolicy="no-referrer">
                                    </div>
                                    <div class="novel_title" onclick="myFunction()">
                                        <div class="novel_name">
                                            ${truyen.name}
                                        </div>
                                        <div class="novel_author">
                                            Tác giả : <span>
                                                ${truyen.author}
                                            </span>
                                        </div>
                                        <div class="novel_chapter">
                                            Chap : <span>
                                                ${truyen.no_chapters}
                                            </span>
                                            <div style="font-size: 13px;">
                                                ${truyen.status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `);
                    }

                    // reset to nomal
                    $('.search-btn').prop('disabled', false);
                    
                    $('.search-btn').text('Lọc Truyện')
                }).catch(error => {
                    console.error('Error parsing JSON:', error);
                });
            }
            else {
                console.log('erro')
            }
        })
        .catch(error => {
            console.error('Error downloading file:', error);
        });
});