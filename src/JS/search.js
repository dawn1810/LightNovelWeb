const more_btn = document.querySelectorAll('.search_more')

const search_value = document.querySelector('.search_value').innerText
console.log(search_value)
if (more_btn) {
    let c_btn1 = 0
    let c_btn2 = 0
    let c_btn3 = 0
    for (const more of more_btn) {
        more.onclick = function () {
            if (more.classList[1] == 'search_more1') {
                c_btn1 += 1
                console.log(c_btn1);
                url = currentURL + `/api/search/more?type_id=search_more1&times=${c_btn1}&search=${encodeURI(search_value)}`


            }
            else if (more.classList[1] == 'search_more2') {
                c_btn2 += 1
                console.log(c_btn2);
                url = currentURL + `/api/search/more?type_id=search_more2&times=${c_btn2}&search=${encodeURI(search_value)}`


            }
            else {
                c_btn3 += 1
                console.log(c_btn3);
                url = currentURL + `/api/search/more?type_id=search_more3&times=${c_btn3}&search=${encodeURI(search_value)}`


            }
            console.log(more.classList[1]);

            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            };
            fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        console.log(response)
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

function drop_novel() {
    for (const novel of document.querySelectorAll('.novel_wrap')) {
        novel.style.display = 'none'
    }
}
const tag = document.querySelectorAll('.search_tag_item')
function drop_tag() {
    for (let i = 0; i < tag.length; i++) {
        if (tag[i].checked) {
            drop_novel();
            document.querySelectorAll('.novel_wrap')[i].style.display = 'block'
        }
    }
}

document.querySelector("#value-1").onchange = function () {
    drop_tag()
};
document.querySelector("#value-2").onchange = function () {
    drop_tag()
};
document.querySelector("#value-3").onchange = function () {
    drop_tag()
};
if (document.querySelector("#value-1").checked) {
    console.log('ok')
    drop_novel();
    document.querySelectorAll('.novel_wrap')[0].style.display = 'block'
}

