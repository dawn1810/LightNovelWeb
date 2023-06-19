
function Validator(options) {


    function getParent(element, selector) {
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
        const btn_login = document.getElementById('login');

        for (const element of rules) {
            errorMessage = element(inputElement.value);
            if (errorMessage) break
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.classList.add('invalid')

        } else {
            errorElement.innerText = '';
            inputElement.classList.remove('invalid')


            btn_login.onclick = async function (e) {
                console.log('KT sieu cap de thuong cua Binh Minh');
                e.preventDefault();
                //gửi request tới csdl server
                console.log(document.querySelector('#cccd').value)
                const url = `${currentURL}login`; // URL của máy chủ mục tiêu
                const postData = JSON.stringify({
                    // thông tin đăng nhậpppp
                    'status': 'login',
                    'password': `${document.querySelector('#password').value}`,
                    'cccd': `${document.querySelector('#cccd').value}`,
                });


                //bình minh khùng
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

                btn_login.disabled = true;
                btn_login.textContent = "LOADING...";
                try {
                    const response = await fetch(url, requestOptions)
                    console.log(response)
                    if (response.status == 200) {
                        document.querySelector('.popup').style.display = 'block';
                        document.querySelector('.chat').style.display = 'inline-block';
                        document.querySelector('.chat2').style.display = 'none';
                        document.querySelector('.chat .message #noity-mess').innerHTML = 'Chào mừng ngươi đến địa ngục'

                        setTimeout(function () {
                            document.querySelector('.popup').style.display = 'none';
                            document.querySelector('.chat').style.display = 'none';
                        }, 5000)

                        location.reload();
                    }
                    else if (response.status == 204) {
                        document.querySelector('.popup').style.display = 'block';
                        document.querySelector('.chat2').style.display = 'inline-block';
                        document.querySelector('.chat').style.display = 'none';

                        document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi đã từng đến đây rồi'

                        setTimeout(function () {
                            document.querySelector('.popup').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';
                        }, 5000)

                    }
                    else if (response.status == 403) {
                        document.querySelector('.popup').style.display = 'block';
                        document.querySelector('.chat2').style.display = 'inline-block';
                        document.querySelector('.chat').style.display = 'none';

                        document.querySelector('#noity-mess').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
                        setTimeout(function () {
                            document.querySelector('.popup').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';

                        }, 5000)

                    }
                    else if (response.status == '404') {
                        document.querySelector('.popup').style.display = 'block';
                        document.querySelector('.chat').style.display = 'none';

                        document.querySelector('.chat2').style.display = 'inline-block';
                        document.querySelector('.chat2 .message #noity-mess').innerHTML = 'Ngươi Không Tồn Tại'
                        setTimeout(function () {
                            document.querySelector('.popup').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'inline-block';

                        }, 5000)

                    }
                    else {
                        document.querySelector('.popup').style.display = 'block';
                        document.querySelector('.chat').style.display = 'none';

                        document.querySelector('.chat2').style.display = 'inline-block';
                        setTimeout(function () {
                            document.querySelector('.popup').style.display = 'none';
                            document.querySelector('.chat2').style.display = 'none';
                        }, 5000)

                    }
                    btn_login.disabled = false;
                    btn_login.textContent = "Login";
                } catch (error) {
                    console.log('Error:', error);

                }



            }

            //eye
            const eye = document.querySelector('.eye')
            const eye1 = document.querySelector('.eye-icon1')
            const eye2 = document.querySelector('.eye-icon2')
            eye.onclick = function () {
                console.log(123)
                if (eye2.classList.contains('displayed')) {
                    eye2.classList.remove('displayed')
                    eye1.classList.add('displayed')
                    document.querySelector('#password').type = 'text'
                }
                else {
                    eye1.classList.remove('displayed')
                    eye2.classList.add('displayed')
                    document.querySelector('#password').type = 'password'
                }
            }





        }
        return !errorMessage;
    }
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.querySelector('button').onclick = function (e) {
            e.preventDefault();

            let isFormValid = true;
            options.rules.forEach(function (rule) {
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
    form: '#form2',
    formGroupSelector: '.group1',
    errorSelector: '.form-message',
    rules: [

        Validator.isRequired('#username_login', 'Vui lòng nhập nội dung này'),

        Validator.isRequired('#password', 'Vui lòng nhập nội dung này'),
        Validator.isNotNumber("#cccd")
    ],
    onSubmid: function (data) {
        console.log(data);
    }
});