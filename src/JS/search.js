const more_btn = document.querySelectorAll('.search_more button');
const search_value = document.querySelector('.search_value').innerText;
const tag = document.querySelectorAll('.search_tag_item');

if (more_btn) {
    let c_btn1 = 0
    let c_btn2 = 0
    let c_btn3 = 0
    for (const more of more_btn) {
        more.onclick = function () {
            // make btn disables untill response
            $(more).prop('disabled', true);
            // loading 
            $(more).html(`
            <span>Loading...</span>
            `);
            console.log('aa')
            if (more.className == 'search_more1') {
                c_btn1 += 1
                url =  `/api/search/more?type_id=search_more1&times=${c_btn1}&search=${encodeURI(search_value)}`
            }
            else if (more.className == 'search_more2') {
                c_btn2 += 1
                url =  `/api/search/more?type_id=search_more2&times=${c_btn2}&search=${encodeURI(search_value)}`
            }
            else {
                c_btn3 += 1
                url =  `/api/search/more?type_id=search_more3&times=${c_btn3}&search=${encodeURI(search_value)}`
            }

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
                            for (truyen of data.truyen) {
                                $(more).parent().parent().find('.novel').append(`
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

                            if (data.showbtn) {
                                // make button able again
                                $(more).prop('disabled', false);
                                $(more).html(`
                                <span>Xem thêm</span>
                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37" cy="37" r="35.5" stroke="var(--black-text)" stroke-width="3"></circle>
                                    <path
                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    fill="var(--black-text)"></path>
                                </svg>
                                `);
                            } else {
                                more.remove()
                            }



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

        }
    }
}

// tag novel_name, author, genres
function drop_novel() {
    for (const novel of document.querySelectorAll('.novel_wrap')) {
        novel.style.display = 'none'
    }
}

function drop_tag(g) {
    drop_novel();
    document.querySelectorAll('.novel_wrap')[g].style.display = 'block'
}


for (let i = 0; i < document.querySelectorAll('.radio-input_search label').length; i++) {
    document.querySelectorAll('.radio-input_search label')[i].onclick = function () {
        drop_tag(i)
        for (const tag of document.querySelectorAll('.radio-input_search label')) {
            tag.style.background = 'var(--white-color)'
        }
        this.style.background = 'var(--author-color)'
    };
}
drop_tag(0)
        for (const tag of document.querySelectorAll('.radio-input_search label')) {
            tag.style.background = 'var(--white-color)'
        }
        document.querySelectorAll('.radio-input_search label')[0].style.background = 'var(--author-color)'


