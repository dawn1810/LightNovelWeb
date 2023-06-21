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
        const json = await response.json();
        console.log(json)

        if (response.status == 200) {
            const novel_item = document.querySelector('.novel')
            let info_novel = ''
            function siuu(helop) {
                info_novel = ''
                for (let i = 0; i < helop.length; i++) {
                    info_novel += `<div class="novel_item">
                    <div class="novel_item_main">
                        <img src="https://st.nettruyenplus.com/data/comics/171/gay-go-cap-99-5344.jpg" alt="image">
                        <div class="novel_title">
                            <a href="/HTML/reviews.html" class="novel_name">${helop[i].name}</a>
                            <div class="novel_author">
                                Tác giả : <span>${helop[i].author}</span>
                            </div>
                            <div class="novel_chapter">
                                Chap : <span>${helop[i].no_chapters}</span>
                                <div>Full</div>
                            </div>
    
                        </div>
                    </div>
                </div>`
                }


            }

            document.querySelector('#value-1').onchange = function () {
                console.log('ok 1')
                siuu(json.by_week)
                console.log('ok 1')
                novel_item.innerHTML = info_novel
            }
            document.querySelector('#value-2').onchange = function () {
                console.log('ok 2')
                siuu(json.by_month)
                console.log('ok 2')
                novel_item.innerHTML = info_novel
            }
            document.querySelector('#value-2').onchange = function () {
                console.log('ok 3')
                siuu(json.all_time)
                console.log('ok 3')
                novel_item.innerHTML = info_novel
            }
            if (document.querySelector('#value-1').checked) {
                console.log('ok 1')
                siuu(json.by_week)
                console.log('ok 1')
                novel_item.innerHTML = info_novel
            }



            const novel_update = document.querySelectorAll('.novel')[1]
            siuu(json.nearby)
            novel_update.innerHTML = info_novel
        }


    } catch (error) {
        console.log('Error:', error);

    }


}

document.addEventListener('DOMContentLoaded', function () {
    console.log(document.querySelector('#form1'))
    function Validator(options) {
        const username = document.getElementById('username')
        const email = document.getElementById('email')

        function getParent(element, selector) {

            console.log(element)
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement;
                }
                element = element.parentElement

            }
        }



        let selectorRules = {};
        function Validate(inputElement, rule) {
            const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
            let errorMessage;


            const rules = selectorRules[rule.selector];
            const btn_reg = document.getElementById('logins');
            // const btn_login = document.getElementById('login');

            for (const element of rules) {
                errorMessage = element(inputElement.value);
                if (errorMessage) break
            }
            if (errorMessage) {
                errorElement.innerText = errorMessage;
                btn_reg.disabled = true;
                inputElement.classList.add('invalid')

            } else {
                errorElement.innerText = '';
                inputElement.classList.remove('invalid')
                btn_reg.disabled = false;
                btn_reg.onclick = async function (e) {
                    console.log('cut di bn oi');
                    console.log(document.querySelector('#cccd').value)
                    e.preventDefault();
                    //gửi request tới csdl server
                    const url = `${currentURL}signup`; // URL của máy chủ mục tiêu
                    const postData = JSON.stringify({
                        // thông tin đăng kýýý
                        'status': 'signup',
                        'email': `${document.querySelector('#email').value}`,
                        'username': `${document.querySelector('#username').value}`,
                        'cccd': `${document.querySelector('#cccd_login').value}`
                    });


                    //bình minh bị gà
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: postData
                    };

                    btn_reg.disabled = true;
                    btn_reg.textContent = "LOADING...";
                    try {
                        const response = await fetch(url, requestOptions)
                        console.log(response.status)
                        if (response.status == '200') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'inline-block';
                            document.querySelector('.chat2').style.display = 'none';

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat').style.display = 'none';
                            }, 5000)

                            document.querySelector('.form-toggle').click()

                        }
                        else if (response.status == '204') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        else if (response.status == '403') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else if (response.status == '404') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        btn_reg.disabled = false;
                        btn_reg.textContent = "Register";
                    } catch (error) {
                        console.log('Error:', error);

                    }
                    //eye



                }
                const eyea = document.querySelector('.okeye1 .eye')
                const eye1a = document.querySelector('.okeye1 .eye-icon1')
                const eye2a = document.querySelector('.okeye1 .eye-icon2')
                eyea.onclick = function () {
                    console.log(123)
                    if (eye2a.classList.contains('displayed')) {
                        eye2a.classList.remove('displayed')
                        eye1a.classList.add('displayed')
                        document.querySelector('#form-3 #old-Password').type = 'text';
                    }
                    else {
                        eye1a.classList.remove('displayed')
                        eye2a.classList.add('displayed')
                        document.querySelector('#form-3 #old-Password').type = 'password'
                    }
                }
                const eyeb = document.querySelector('.okeye2 .eye')
                const eye1b = document.querySelector('.okeye2 .eye-icon1')
                const eye2b = document.querySelector('.okeye2 .eye-icon2')
                eyeb.onclick = function () {
                    console.log(123)
                    if (eye2b.classList.contains('displayed')) {
                        eye2b.classList.remove('displayed')
                        eye1b.classList.add('displayed')
                        document.querySelector('#form-3 #new-Password').type = 'text';
                    }
                    else {
                        eye1b.classList.remove('displayed')
                        eye2b.classList.add('displayed')
                        document.querySelector('#form-3 #new-Password').type = 'password'
                    }
                }
                const eyec = document.querySelector('.okeye3 .eye')
                const eye1c = document.querySelector('.okeye3 .eye-icon1')
                const eye2c = document.querySelector('.okeye3 .eye-icon2')
                eyec.onclick = function () {
                    console.log(123)
                    if (eye2c.classList.contains('displayed')) {
                        eye2c.classList.remove('displayed')
                        eye1c.classList.add('displayed')
                        document.querySelector('#form-3 #new-Password-again').type = 'text';
                    }
                    else {
                        eye1c.classList.remove('displayed')
                        eye2c.classList.add('displayed')
                        document.querySelector('#form-3 #new-Password-again').type = 'password'
                    }
                }


                document.querySelector('#change-pass-apply').onclick = async function (e) {
                    console.log('cut di bn oi');
                    e.preventDefault();
                    //gửi request tới csdl server
                    const accountCookie = getCookie('account')
                    const url = `${currentURL}changepass`; // URL của máy chủ mục tiêu
                    const postData = JSON.stringify({
                        // thông tin đăng kýýý
                        'status': 'Change Pass',
                        'account': `${accountCookie}`,
                        'Old-Password': `${document.querySelector('#old-Password').value}`,
                        'new-Password': `${document.querySelector('#new-Password').value}`,
                        'new-Password-again': `${document.querySelector('#new-Password-again').value}`
                    });


                    //bình minh bị gà
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: postData
                    };

                    btn_reg.disabled = true;
                    btn_reg.textContent = "LOADING...";
                    try {
                        const response = await fetch(url, requestOptions)
                        console.log(response.status)
                        if (response.status == '200') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'inline-block';
                            document.querySelector('.chat .message span').innerHTML = 'Ngươi đã mất đi 50% tuổi thọ'

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat').style.display = 'none';
                                location.reload();
                            }, 5000)


                        }
                        else if (response.status == '204') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        else if (response.status == '403') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                // Đổi mật khẩu
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else if (response.status == '404') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                // Đổi mật khẩu
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        btn_reg.disabled = false;
                        btn_reg.textContent = "Register";
                    } catch (error) {
                        console.log('Error:', error);

                    }



                }
                document.querySelector('#info_btn').onclick = async function (e) {
                    console.log('cut di bn oi');
                    e.preventDefault();
                    //gửi request tới csdl server
                    const accountCookie = getCookie('account')
                    const url = `${currentURL}updateinfo`; // URL của máy chủ mục tiêu

                    const postData = JSON.stringify({
                        // thông tin đăng kýýý
                        'status': 'user info',
                        'account': `${accountCookie}`,
                        'cccd': `${document.querySelector('#cccd').value}`,
                        'fullname': `${document.querySelector('#fullname').value}`,
                        'birtday': `${document.querySelector('#birtday').value}`,
                        'quequan': `${document.querySelector('#quequan').value}`,
                        'sex': `${document.querySelector('#sex').value}`

                    });


                    //bình minh bị gà
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: postData
                    };

                    btn_reg.disabled = true;
                    btn_reg.textContent = "LOADING...";
                    try {
                        const response = await fetch(url, requestOptions)
                        console.log(response.status)
                        if (response.status == '200') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'inline-block';
                            document.querySelector('.chat .message span').innerHTML = 'Ngươi đã mất đi 50% tuổi thọ'

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat').style.display = 'none';
                                location.reload()
                            }, 2000)


                        }
                        else if (response.status == '204') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        else if (response.status == '403') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                // Đổi mật khẩu
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else if (response.status == '404') {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                // Đổi mật khẩu
                                document.querySelector('.chat2').style.display = 'inline-block';

                            }, 5000)

                        }
                        else {
                            document.querySelector('.popup').style.display = 'block';
                            document.querySelector('.chat2').style.display = 'inline-block';
                            setTimeout(function () {
                                document.querySelector('.popup').style.display = 'none';
                                document.querySelector('.chat2').style.display = 'inline-block';
                            }, 5000)

                        }
                        btn_reg.disabled = false;
                        btn_reg.textContent = "Register";
                    } catch (error) {
                        console.log('Error:', error);

                    }



                }
                // Đổi mật khẩu
            }
            return !errorMessage;
        }
        const formElement = document.querySelector(options.form);
        if (formElement) {
            formElement.querySelector('button').onclick = function (e) {
                e.preventDefault();

                let isFormValid = true;
                options.rules.forEach(function (rule) {
                    console.log(formElement.querySelector(rule.selector));
                    const inputElement = formElement.querySelector(rule.selector);
                    const isValid = Validate(inputElement, rule)
                    if (!isValid) {
                        isFormValid = false;
                    }
                });
                const enableInputs = formElement.querySelectorAll('[name]')

                if (isFormValid) {
                    // if(typeof options.onSubmid === 'function'){
                    //     const formValues = Array.from(enableInputs).reduce(function(values, input){
                    //         values[input.name] = input.value
                    //         return values;
                    //     },{})

                    //     options.onSubmid(formValues)   
                    // }

                }


            }
            options.rules.forEach(function (rule) {

                const inputElement = formElement.querySelector(rule.selector);
                if (Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
                } else {
                    selectorRules[rule.selector] = [rule.test];
                }
                if (inputElement) {
                    // Xử lí khi blur ra ngoài
                    inputElement.onblur = function () {
                        Validate(inputElement, rule)
                        getParent(inputElement, options.formGroupSelector).classList.remove('oninput')

                    }

                    inputElement.onclick = function () {
                        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        inputElement.classList.remove('invalid')
                        getParent(inputElement, options.formGroupSelector).classList.add('oninput')
                        // document.querySelector('.form-error').classList.add('displayed')

                    }
                }
            });
        }
    }
    Validator.isRequired = function (selector, message) {
        return {
            selector: selector,
            test: function (value) {
                return value.trim() ? undefined : message
            }
        }
    }
    Validator.isEmail = function (selector) {
        return {
            selector: selector,
            test: function (value) {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Email không đúng'
            }
        }
    }
    Validator.minLength = function (selector, min, message) {
        return {
            selector: selector,
            test: function (value) {
                return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        };
    }
    Validator.isNotNumber = function (selector) {
        return {
            selector: selector,
            test: function (value) {
                const regex = /^[0-9]+$/;
                return regex.test(value) ? undefined : 'Giá trị phải là số nhé thằng ngu !!'
            }
        }
    }
    Validator({
        form: '#form1',
        formGroupSelector: '.group1',
        errorSelector: '.form-message',
        rules: [

            Validator.isRequired('#Username', 'Vui lòng nhập nội dung này'),

            Validator.minLength('#Password', 6),


        ],
        onSubmid: function (data) {
            console.log(data);
        }
    });
    Validator({
        form: '#form2',
        formGroupSelector: '.group1',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#Username', 'Vui lòng nhập nội dung này'),

            Validator.minLength('#Password', 6),
            Validator.isEmail('#email'),
            // Validator.isRequired('#new-Password-again')
            // Validator.isConfirmed('#new-Password-again', function () {
            //     return document.querySelector('#form-3 #new-Password').value;
            // }, 'Mật khẩu nhập lại không chính xác')
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
        }
    });
});


get_popular_novel();
// category_btn.onclick = function () {
//     category_list.style.display = 'block';
// }

const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
