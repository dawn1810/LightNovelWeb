// tao đã ở đây hhehee
// fix thahf côg nhé :)))) 💢💌💥


// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                console.log('haha')
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    // formElement.submit();
                    console.log('kaka')
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}





document.addEventListener('DOMContentLoaded', function () {
    // Mong muốn của chúng ta
    Validator({
        form: "#form1",
        formGroupSelector: ".group1",
        errorSelector: ".form-message",
        rules: [
            Validator.isRequired("#Username", "Vui lòng nhập nội dung này"),

            Validator.minLength("#Password", 6),
        ],
        onSubmit: async function (data) {
            console.log(data);
            console.log("cut di bn oi");
            // gửi request tới csdl server
            const url = `${currentURL}/login`; // URL của máy chủ mục tiêu
            const postData = JSON.stringify({
                // thông tin đăng ký
                usr: `${document.querySelector("#form1 #Username").value}`,
                pass: `${document.querySelector("#form1 #Password").value}`,
            });

            //bình minh bị đẹp trai
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: postData,
            };


            try {
                const response = await fetch(url, requestOptions);
                console.log(response.status);
                if (response.status == 200) {
                    console.log("e sơ");
                    window.location.reload();
                }
            } catch (error) {
                console.log("Error:", error);
            }

        },
    });


    Validator({
        form: "#form2",
        formGroupSelector: ".group1",
        errorSelector: ".form-message",
        rules: [
            Validator.isRequired("#Username", "Vui lòng nhập nội dung này"),
            Validator.isRequired("#Password", "Vui lòng nhập nội dung này"),
            Validator.isRequired("#email", "Vui lòng nhập nội dung này"),
            Validator.isEmail("#email"),
            Validator.minLength("#Password", 6),
            // Validator.isConfirmed('#new-Password-again', function () {
            //     return document.querySelector('#form-3 #new-Password').value;
            // }, 'Mật khẩu nhập lại không chính xác')


        ],
        onSubmit: async function (data) {
            // Call API
            const reg_btn = document.querySelector(".signup");
            console.log(data);
            console.log("cut di bn oi");
            //gửi request tới csdl server
            const url = `${currentURL}/signup`; // URL của máy chủ mục tiêu
            const postData = JSON.stringify({
                // thông tin đăng kýýý
                email: `${document.querySelector("#form2 #email").value}`,
                usr: `${document.querySelector("#form2 #Username").value}`,
                pass: `${document.querySelector("#form2 #Password").value}`,
            });

            //bình minh bị đẹp trai
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: postData,
            };

            reg_btn.disabled = true;
            reg_btn.innerHTML = `<div class="load">
                    <div class="progress"></div>
                    <div class="progress"></div>
                    <div class="progress"></div>
                </div>`;
            try {
                const response = await fetch(url, requestOptions);
                console.log(response.status);
                if (response.status == "200") {

                    document.querySelector(".no_login a").click();
                }

                // btn_reg.disabled = false;
                // btn_reg.textContent = "Register";
            } catch (error) {
                console.log("Error:", error);
            }
        },
    });
});

//


