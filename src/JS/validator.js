function Validator(options) {
    // const username = document.getElementById("username");
    // const email = document.getElementById("email");
    function getParent(element, selector) {
        console.log(element);
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    let selectorRules = {};
    function Validate(inputElement, rule) {
        const errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        let errorMessage;
        const rules = selectorRules[rule.selector];
        const next_btn = document.querySelector(".next_btn");
        const Save_btn = document.querySelector('.Save_btn')
        // const btn_login = document.getElementById('login');
        for (const element of rules) {
            errorMessage = element(inputElement.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            console.log("huhu:))))");
            next_btn.disabled = true;
            inputElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            inputElement.classList.remove("invalid");
            // reg_btn.disabled = false;
            const reg_btn = document.querySelector(".signup");
            const change_pass_btn = document.querySelector('.change-pass-btn')
            change_pass_btn.onclick =  function (e) {
                console.log("cut di bn oi");
                e.preventDefault();
                //gửi request tới csdl server
                const url = `${currentURL}/signup`; // URL của máy chủ mục tiê

                // const postData = JSON.stringify({
                // email: `${document.querySelector("#form2 #email").value}`,
                // usr: `${document.querySelector("#form2 #Username").value}`,
                // pass: `${document.querySelector("#form2 #Password").value}`,
                // });


                // const requestOptions = {
                // method: "POST",
                // headers: {
                // "Content-Type": "application/json",
                // },
                // body: postData,
                // };
                // reg_btn.disabled = true;
                // reg_btn.innerHTML = `<div class="load">
                // <div class="progress"></div>
                // <div class="progress"></div>
                // <div class="progress"></div>
                // </div>`;
                // try {
                // const response = await fetch(url, requestOptions);
                // console.log(response.status);
                // if (response.status == "200") {
                // document.querySelector(".no_login a").click();
                // }


                // next_btn.disabled = false;
                // next_btn.textContent = "Register";
                // } catch (error) {onSubmid
                // console.log("Error:", error);
                // }



                //eye
            };
            // log in
            // data = {usr: bbp, pass: 1234567890}
            const log_btn = document.querySelector(".login");
            Save_btn.onclick = async function (e) {
                console.log("cut di bn oi");
                e.preventDefault();
                //gửi request tới csdl server
                // const url = `${currentURL}/login`; // URL của máy chủ mục tiêu
                // const postData = JSON.stringify({

                // usr: `${document.querySelector("#form1 #Username").value}`,
                // pass: `${document.querySelector("#form1 #Password").value}`,
                // });

                // const requestOptions = {
                // method: "POST",
                // headers: {
                // "Content-Type": "application/json",
                // },
                // body: postData,
                // };
                // reg_btn.disabled = true;
                // reg_btn.innerHTML = `<div class="load">
                // <div class="progress"></div>
                // <div class="progress"></div>
                // <div class="progress"></div>
                // </div>`;
                // try {
                // const response = await fetch(url, requestOptions);
                // console.log(response.status);
                // if (response.status == 200) {
                // console.log("e sơ");
                // window.location.reload();
                // }
                // } catch (error) {
                // console.log("Error:", error);
                // }



                //eye
            };
            // const eyea = document.querySelector("#form1 .eye");
            // const eye1a = document.querySelector("#form1 .eye-icon1");
            // const eye2a = document.querySelector("#form1 .eye-icon2");
            // const eye3a = document.querySelector("#form1 .eye-icon3");
            // let go = 0;
            // eyea.onclick = function () {
            // console.log(123);
            // if (go >= 5) {
            // eye3a.classList.remove("displayed");
            // eye2a.classList.add("displayed");
            // eye1a.classList.add("displayed");
            // document.querySelector("#form1 #Password").type = "password";
            // } else {
            // if (eye2a.classList.contains("displayed")) {
            // eye2a.classList.remove("displayed");
            // eye1a.classList.add("displayed");
            // document.querySelector("#form1 #Password").type = "text";
            // go += 1;
            // } else {
            // eye1a.classList.remove("displayed");
            // eye2a.classList.add("displayed");
            // document.querySelector("#form1 #Password").type = "password";
            // go += 1;
            // }
            // }
            // };
            // const eyeb = document.querySelector("#form2 .eye");
            // const eye1b = document.querySelector("#form2 .eye-icon1");
            // const eye2b = document.querySelector("#form2 .eye-icon2");
            // const eye3b = document.querySelector("#form2 .eye-icon3");
            // let jo = 0;
            // eyeb.onclick = function () {
            // console.log(123);
            // if (jo >= 3) {
            // eye3b.classList.remove("displayed");
            // eye2b.classList.add("displayed");
            // eye1b.classList.add("displayed");
            // document.querySelector("#form2 #Password").type = "password";
            // } else {
            // if (eye2b.classList.contains("displayed")) {
            // eye2b.classList.remove("displayed");
            // eye1b.classList.add("displayed");
            // document.querySelector("#form2 #Password").type = "text";
            // jo += 1;
            // } else {
            // eye1b.classList.remove("displayed");
            // eye2b.classList.add("displayed");
            // document.querySelector("#form2 #new-Password").type = "password";
            // jo += 1;
            // }
            // }
            // };
        }
        return !errorMessage;
    }
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.querySelector("button").onclick = function (e) {
            e.preventDefault();
            let isFormValid = true;
            options.rules.forEach(function (rule) {
                console.log(formElement.querySelector(rule.selector));
                const inputElement = formElement.querySelector(rule.selector);
                const isValid = Validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            const enableInputs = formElement.querySelectorAll("[name]");
            if (isFormValid) {
                // if(typeof options.onSubmid === 'function'){
                //     const formValues = Array.from(enableInputs).reduce(function(values, input){
                //         values[input.name] = input.value
                //         return values;
                //     },{})
                //     options.onSubmid(formValues)
                // }
            }
        };
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
                    Validate(inputElement, rule);
                    getParent(inputElement, options.formGroupSelector).classList.remove(
                        "oninput"
                    );
                };
                inputElement.onclick = function () {
                    const errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    inputElement.classList.remove("invalid");
                    getParent(inputElement, options.formGroupSelector).classList.add(
                        "oninput"
                    );
                    // document.querySelector('.form-error').classList.add('displayed')
                };
            }
        });
    }
}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message;
        },
    };
};
// Validator.isEmail = function (selector) {
// return {
// selector: selector,
// test: function (value) {
// const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// return regex.test(value) ? undefined : "Email không đúng";
// },
// };
// };

Validator.minLength = function (selector, min, message) {
    return {
      selector: selector,
      test: function (value) {
        return value.length >= min
          ? undefined
          : message || `Vui lòng nhập tối thiểu ${min} kí tự ${value}`;
      },
    };
  };
  Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}
// Validator.isNotNumber = function (selector) {
// return {
// selector: selector,
// test: function (value) {
// const regex = /^[0-9]+$/;
// return regex.test(value)
// ? undefined
// : "Giá trị phải là số nhé thằng ngu !!";
// },
// };
// };
// 

Validator({
    form: "#change_pass",
    formGroupSelector: ".group2",
    errorSelector: ".form-message",
    rules: [
        Validator.isRequired(".old-password", "Vui lòng nhập nội dung này"),
        Validator.isRequired(".new-password", "Vui lòng nhập nội dung này"),
        Validator.isRequired(".again-password", "Vui lòng nhập nội dung này"),
        Validator.isConfirmed('.again-password', function () {
            return document.querySelector('.new-password').value;
        }, 'Mật khẩu nhập lại không chính xác')
    ],
    onSubmid: function (data) {
        console.log(data);
    },
});