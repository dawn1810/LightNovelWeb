// localStorage.setItem('theme', 'light');
// const currentURL = window.location.origin;

// const { setItem } = require("node-persist");

// const logout = document.querySelector('.logout')
// logout.onclick = function(e){
//     e.preventDefault();
//     console.log('hahaaha')
// }

// async function get_popular_novel() {

//     const url = `${currentURL}/get_ds`; // URL của máy chủ mục tiêu
//     // const postData = JSON.stringify({
//     //     // thông tin đăng nhậpppp
//     //     'status': 'popular_novel',
//     //     // 'password': `${document.querySelector('#password').value}`,
//     //     // 'cccd': `${document.querySelector('#cccd').value}`,
//     // });

//     //bình minh khùng điêu điên
//     // 
//     const requestOptions = {
//         method: 'GET',
//         headers: {
//             Accept: "applicaiton/json",
//             "Content-Type": "applicaiton/json",
//         },
//         // body: postData,
//         withCredentials: true, // should be there
//         credentials: 'include' // should be there
//     };

//     try {
//         const response = await fetch(url, requestOptions)
//         const json = await response.json();
//         console.log(json)
//         if (response.status == 200) {
//             const novel_item = document.querySelector('.novel')
//             let info_novel = ''
//             function siuu(helop) {
//                 info_novel = ''
//                 for (let i = 0; i < helop.length; i++) {
//                     info_novel += `<div class="novel_item">
//                     <div class="novel_item_main">
//                         <img src="https://st.nettruyenplus.com/data/comics/171/gay-go-cap-99-5344.jpg" alt="image">
//                         <div class="novel_title" onclick="myFunction()">
//                             <a href="/reviews/${helop[i]._id}" class="novel_name">${helop[i].name}</a>
//                             <div class="novel_author">
//                                 Tác giả : <span>${helop[i].author}</span>
//                             </div>
//                             <div class="novel_chapter">
//                                 Chap : <span>${helop[i].no_chapters}</span>
//                                 <div>Full</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//                 }

//             }
//             document.querySelector('#value-1').onchange = function () {
//                 console.log('ok 1')
//                 siuu(json.by_week)
//                 console.log('ok 1')
//                 novel_item.innerHTML = info_novel
//             }
//             document.querySelector('#value-2').onchange = function () {
//                 console.log('ok 2')
//                 siuu(json.by_month)
//                 console.log('ok 2')
//                 novel_item.innerHTML = info_novel
//             }
//             document.querySelector('#value-2').onchange = function () {
//                 console.log('ok 3')
//                 siuu(json.all_time)
//                 console.log('ok 3')
//                 novel_item.innerHTML = info_novel
//             }
//             if (document.querySelector('#value-1').checked) {
//                 console.log('ok 1')
//                 siuu(json.by_week)
//                 console.log('ok 1')
//                 novel_item.innerHTML = info_novel
//             }

//             const novel_update = document.querySelectorAll('.novel')[1]
//             siuu(json.nearby)
//             novel_update.innerHTML = info_novel
//         }

//     } catch (error) {
//         console.log('Error:', error);

//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // const novel_title = document.querySelectorAll('.novel_title')
//   // for (let i = 0; i < novel_title.length; i++) {
//   //     novel_title[i].onclick = function (e) {
//   //         e.preventDefault();
//   //         localStorage.setItem('novel_id', novel_title.innerHTML)
//   //     }
//   // }
//   console.log(document.querySelector("#form1"));



//   function Validator(options) {
//     const username = document.getElementById("username");
//     const email = document.getElementById("email");

//     function getParent(element, selector) {
//       console.log(element);
//       while (element.parentElement) {
//         if (element.parentElement.matches(selector)) {
//           return element.parentElement;
//         }
//         element = element.parentElement;
//       }
//     }

//     let selectorRules = {};
//     function Validate(inputElement, rule) {
//       const errorElement = getParent(
//         inputElement,
//         options.formGroupSelector
//       ).querySelector(options.errorSelector);
//       let errorMessage;
//       const rules = selectorRules[rule.selector];
//       const btn_reg = document.getElementById("logins");
//       // const btn_login = document.getElementById('login');

//       for (const element of rules) {
//         errorMessage = element(inputElement.value);
//         if (errorMessage) break;
//       }
//       if (errorMessage) {
//         errorElement.innerText = errorMessage;
//         console.log("huhu:))))");
//         btn_reg.disabled = true;
//         inputElement.classList.add("invalid");
//       } else {
//         errorElement.innerText = "";
//         inputElement.classList.remove("invalid");
//         // reg_btn.disabled = false;
//         const reg_btn = document.querySelector(".signup");
//         reg_btn.onclick = async function (e) {
//           console.log("cut di bn oi");
//           e.preventDefault();
//           //gửi request tới csdl server
//           const url = `${currentURL}/signup`; // URL của máy chủ mục tiêu
//           const postData = JSON.stringify({
//             // thông tin đăng kýýý
//             email: `${document.querySelector("#form2 #email").value}`,
//             usr: `${document.querySelector("#form2 #Username").value}`,
//             pass: `${document.querySelector("#form2 #Password").value}`,
//           });

//           //bình minh bị đẹp trai
//           const requestOptions = {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: postData,
//           };

//           reg_btn.disabled = true;
//           reg_btn.innerHTML = `<div class="load">
//                     <div class="progress"></div>
//                     <div class="progress"></div>
//                     <div class="progress"></div>
//                 </div>`;
//           try {
//             const response = await fetch(url, requestOptions);
//             console.log(response.status);
//             if (response.status == "200") {
//               // document.querySelector('.popup').style.display = 'block';
//               // document.querySelector('.chat').style.display = 'inline-block';
//               // document.querySelector('.chat2').style.display = 'none';

//               // setTimeout(function () {
//               //     document.querySelector('.popup').style.display = 'none';
//               //     document.querySelector('.chat').style.display = 'none';
//               // }, 5000)

//               // document.querySelector('.form-toggle').click()
//               document.querySelector(".no_login a").click();
//             }
//             // else if (response.status == '204') {
//             //     document.querySelector('.popup').style.display = 'block';
//             //     document.querySelector('.chat').style.display = 'none';
//             //     document.querySelector('.chat2').style.display = 'inline-block';
//             //     document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

//             //     setTimeout(function () {
//             //         document.querySelector('.popup').style.display = 'none';
//             //         document.querySelector('.chat2').style.display = 'inline-block';
//             //     }, 5000)

//             // }
//             // else if (response.status == '403') {
//             //     document.querySelector('.popup').style.display = 'block';
//             //     document.querySelector('.chat2').style.display = 'inline-block';
//             //     document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
//             //     setTimeout(function () {
//             //         document.querySelector('.popup').style.display = 'none';
//             //         document.querySelector('.chat2').style.display = 'inline-block';

//             //     }, 5000)

//             // }
//             // else if (response.status == '404') {
//             //     document.querySelector('.popup').style.display = 'block';
//             //     document.querySelector('.chat2').style.display = 'inline-block';
//             //     document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
//             //     setTimeout(function () {
//             //         document.querySelector('.popup').style.display = 'none';
//             //         document.querySelector('.chat2').style.display = 'inline-block';

//             //     }, 5000)

//             // }
//             // else {
//             //     document.querySelector('.popup').style.display = 'block';
//             //     document.querySelector('.chat2').style.display = 'inline-block';
//             //     setTimeout(function () {
//             //         document.querySelector('.popup').style.display = 'none';
//             //         document.querySelector('.chat2').style.display = 'inline-block';
//             //     }, 5000)

//             // }
//             btn_reg.disabled = false;
//             btn_reg.textContent = "Register";
//           } catch (error) {
//             console.log("Error:", error);
//           }
//           //eye
//         };
//         // log in
//         // data = {usr: bbp, pass: 1234567890}
//         const log_btn = document.querySelector(".login");
//         log_btn.onclick = async function (e) {
//           console.log("cut di bn oi");
//           e.preventDefault();
//           //gửi request tới csdl server
//           const url = `${currentURL}/login`; // URL của máy chủ mục tiêu
//           const postData = JSON.stringify({
//             // thông tin đăng ký
//             usr: `${document.querySelector("#form1 #Username").value}`,
//             pass: `${document.querySelector("#form1 #Password").value}`,
//           });

//           //bình minh bị đẹp trai
//           const requestOptions = {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: postData,
//           };

//           reg_btn.disabled = true;
//           reg_btn.innerHTML = `<div class="load">
//                     <div class="progress"></div>
//                     <div class="progress"></div>
//                     <div class="progress"></div>
//                 </div>`;
//           try {
//             const response = await fetch(url, requestOptions);
//             console.log(response.status);
//             if (response.status == 200) {
//               console.log("e sơ");
//               window.location.reload();
//             }
//           } catch (error) {
//             console.log("Error:", error);
//           }
//           //eye
//         };

//         const eyea = document.querySelector("#form1 .eye");
//         const eye1a = document.querySelector("#form1 .eye-icon1");
//         const eye2a = document.querySelector("#form1 .eye-icon2");
//         const eye3a = document.querySelector("#form1 .eye-icon3");
//         let go = 0;
//         eyea.onclick = function () {
//           console.log(123);

//           if (go >= 5) {
//             eye3a.classList.remove("displayed");
//             eye2a.classList.add("displayed");
//             eye1a.classList.add("displayed");
//             document.querySelector("#form1 #Password").type = "password";
//           } else {
//             if (eye2a.classList.contains("displayed")) {
//               eye2a.classList.remove("displayed");
//               eye1a.classList.add("displayed");
//               document.querySelector("#form1 #Password").type = "text";
//               go += 1;
//             } else {
//               eye1a.classList.remove("displayed");
//               eye2a.classList.add("displayed");
//               document.querySelector("#form1 #Password").type = "password";
//               go += 1;
//             }
//           }
//         };
//         const eyeb = document.querySelector("#form2 .eye");
//         const eye1b = document.querySelector("#form2 .eye-icon1");
//         const eye2b = document.querySelector("#form2 .eye-icon2");
//         const eye3b = document.querySelector("#form2 .eye-icon3");
//         let jo = 0;
//         eyeb.onclick = function () {
//           console.log(123);

//           if (jo >= 3) {
//             eye3b.classList.remove("displayed");
//             eye2b.classList.add("displayed");
//             eye1b.classList.add("displayed");
//             document.querySelector("#form2 #Password").type = "password";
//           } else {
//             if (eye2b.classList.contains("displayed")) {
//               eye2b.classList.remove("displayed");
//               eye1b.classList.add("displayed");
//               document.querySelector("#form2 #Password").type = "text";
//               jo += 1;
//             } else {
//               eye1b.classList.remove("displayed");
//               eye2b.classList.add("displayed");
//               document.querySelector("#form2 #new-Password").type = "password";
//               jo += 1;
//             }
//           }
//         };

//         // document.querySelector('#change-pass-apply').onclick = async function (e) {
//         //     console.log('cut di bn oi');
//         //     e.preventDefault();
//         //     //gửi request tới csdl server
//         //     const accountCookie = getCookie('account')
//         //     const url = `${currentURL}changepass`; // URL của máy chủ mục tiêu
//         //     const postData = JSON.stringify({
//         //         // thông tin đăng kýýý
//         //         'status': 'Change Pass',
//         //         'account': `${accountCookie}`,
//         //         'Old-Password': `${document.querySelector('#old-Password').value}`,
//         //         'new-Password': `${document.querySelector('#new-Password').value}`,
//         //         'new-Password-again': `${document.querySelector('#new-Password-again').value}`
//         //     });

//         //     //bình minh bị gà
//         //     const requestOptions = {
//         //         method: 'POST',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: postData
//         //     };

//         //     btn_reg.disabled = true;
//         //     btn_reg.textContent = "LOADING...";
//         //     try {
//         //         const response = await fetch(url, requestOptions)
//         //         console.log(response.status)
//         //         if (response.status == '200') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat').style.display = 'inline-block';
//         //             document.querySelector('.chat .message span').innerHTML = 'Ngươi đã mất đi 50% tuổi thọ'

//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat').style.display = 'none';
//         //                 location.reload();
//         //             }, 5000)

//         //         }
//         //         else if (response.status == '204') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat').style.display = 'none';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat2').style.display = 'inline-block';
//         //             }, 5000)

//         //         }
//         //         else if (response.status == '403') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 // Đổi mật khẩu
//         //                 document.querySelector('.chat2').style.display = 'inline-block';

//         //             }, 5000)

//         //         }
//         //         else if (response.status == '404') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 // Đổi mật khẩu
//         //                 document.querySelector('.chat2').style.display = 'inline-block';

//         //             }, 5000)

//         //         }
//         //         else {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat2').style.display = 'inline-block';
//         //             }, 5000)

//         //         }
//         //         btn_reg.disabled = false;
//         //         btn_reg.textContent = "Register";
//         //     } catch (error) {
//         //         console.log('Error:', error);

//         //     }

//         // }
//         // document.querySelector('#info_btn').onclick = async function (e) {
//         //     console.log('cut di bn oi');
//         //     e.preventDefault();
//         //     //gửi request tới csdl server
//         //     const accountCookie = getCookie('account')
//         //     const url = `${currentURL}updateinfo`; // URL của máy chủ mục tiêu

//         //     const postData = JSON.stringify({
//         //         // thông tin đăng kýýý
//         //         'status': 'user info',
//         //         'account': `${accountCookie}`,
//         //         'cccd': `${document.querySelector('#cccd').value}`,
//         //         'fullname': `${document.querySelector('#fullname').value}`,
//         //         'birtday': `${document.querySelector('#birtday').value}`,
//         //         'quequan': `${document.querySelector('#quequan').value}`,
//         //         'sex': `${document.querySelector('#sex').value}`

//         //     });

//         //     //bình minh bị gà
//         //     const requestOptions = {
//         //         method: 'POST',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: postData
//         //     };

//         //     btn_reg.disabled = true;
//         //     btn_reg.textContent = "LOADING...";
//         //     try {
//         //         const response = await fetch(url, requestOptions)
//         //         console.log(response.status)
//         //         if (response.status == '200') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat').style.display = 'inline-block';
//         //             document.querySelector('.chat .message span').innerHTML = 'Ngươi đã mất đi 50% tuổi thọ'

//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat').style.display = 'none';
//         //                 location.reload()
//         //             }, 2000)

//         //         }
//         //         else if (response.status == '204') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat').style.display = 'none';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Ngươi đã từng đến đây rồi'

//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat2').style.display = 'inline-block';
//         //             }, 5000)

//         //         }
//         //         else if (response.status == '403') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Thông điệp của ngươi không được hồi đáp'
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 // Đổi mật khẩu
//         //                 document.querySelector('.chat2').style.display = 'inline-block';

//         //             }, 5000)

//         //         }
//         //         else if (response.status == '404') {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             document.querySelector('.chat2 .message span').innerHTML = 'Ngươi Không Tồn Tại'
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 // Đổi mật khẩu
//         //                 document.querySelector('.chat2').style.display = 'inline-block';

//         //             }, 5000)

//         //         }
//         //         else {
//         //             document.querySelector('.popup').style.display = 'block';
//         //             document.querySelector('.chat2').style.display = 'inline-block';
//         //             setTimeout(function () {
//         //                 document.querySelector('.popup').style.display = 'none';
//         //                 document.querySelector('.chat2').style.display = 'inline-block';
//         //             }, 5000)

//         //         }
//         //         btn_reg.disabled = false;
//         //         btn_reg.textContent = "Register";
//         //     } catch (error) {
//         //         console.log('Error:', error);

//         //     }

//         // }
//         // Đổi mật khẩu
//       }
//       return !errorMessage;
//     }
//     const formElement = document.querySelector(options.form);
//     if (formElement) {
//       formElement.querySelector("button").onclick = function (e) {
//         e.preventDefault();

//         let isFormValid = true;
//         options.rules.forEach(function (rule) {
//           console.log(formElement.querySelector(rule.selector));
//           const inputElement = formElement.querySelector(rule.selector);
//           const isValid = Validate(inputElement, rule);
//           if (!isValid) {
//             isFormValid = false;
//           }
//         });
//         const enableInputs = formElement.querySelectorAll("[name]");

//         if (isFormValid) {
//           // if(typeof options.onSubmid === 'function'){
//           //     const formValues = Array.from(enableInputs).reduce(function(values, input){
//           //         values[input.name] = input.value
//           //         return values;
//           //     },{})
//           //     options.onSubmid(formValues)
//           // }
//         }
//       };
//       options.rules.forEach(function (rule) {
//         // const inputElement = formElement.querySelector(rule.selector);
//            if (Array.isArray(selectorRules[rule.selector])) {
//                 selectorRules[rule.selector].push(rule.test);
//             } else {
//                 selectorRules[rule.selector] = [rule.test];
//             }

//             var inputElements = formElement.querySelectorAll(rule.selector);

//             Array.from(inputElements).forEach(function (inputElement) {
//                // Xử lý trường hợp blur khỏi input
//                 inputElement.onblur = function () {
//                     validate(inputElement, rule);
//                 }

//                 // Xử lý mỗi khi người dùng nhập vào input
//                 inputElement.oninput = function () {
//                     var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
//                     errorElement.innerText = '';
//                     getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//                 } 
//             });
//       });
//     }
//   }
//   Validator.isRequired = function (selector, message) {
//     return {
//       selector: selector,
//       test: function (value) {
//         return value.trim() ? undefined : message;
//       },
//     };
//   };
//   Validator.isEmail = function (selector) {
//     return {
//       selector: selector,
//       test: function (value) {
//         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         return regex.test(value) ? undefined : "Email không đúng";
//       },
//     };
//   };
//   Validator.minLength = function (selector, min, message) {
//     return {
//       selector: selector,
//       test: function (value) {
//         return value.length >= min
//           ? undefined
//           : message || `Vui lòng nhập tối thiểu ${min} kí tự ${value}`;
//       },
//     };
//   };
//   Validator.isNotNumber = function (selector) {
//     return {
//       selector: selector,
//       test: function (value) {
//         const regex = /^[0-9]+$/;
//         return regex.test(value)
//           ? undefined
//           : "Giá trị phải là số nhé thằng ngu !!";
//       },
//     };
//   };
//   Validator({
//     form: "#form1",
//     formGroupSelector: ".group1",
//     errorSelector: ".form-message",
//     rules: [
//       Validator.isRequired("#Username", "Vui lòng nhập nội dung này"),

//       Validator.minLength("#Password", 6),
//     ],
//     onSubmid: function (data) {
//       console.log(data);
//     },
//   });
//   Validator({
//     form: "#form2",
//     formGroupSelector: ".group1",
//     errorSelector: ".form-message",
//     rules: [
//       Validator.isRequired("#Username", "Vui lòng nhập nội dung này"),

//       Validator.minLength("#Password", 6),
//       Validator.isEmail("#email"),
//       // Validator.isRequired('#new-Password-again')
//       // Validator.isConfirmed('#new-Password-again', function () {
//       //     return document.querySelector('#form-3 #new-Password').value;
//       // }, 'Mật khẩu nhập lại không chính xác')
//     ],
//     onSubmit: function (data) {
//       // Call API
//       console.log(data);
//     },
//   });
// });


// get_popular_novel();

// category_btn.onclick = function () {
//     category_list.style.display = 'block';
// }

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

const login_gg = document.querySelector(".login_gg");
login_gg.onclick = async function () {
  window.open(
    `${currentURL}/auth/google`,
    "login With Google",
    "width=500,height=500"
  );
};
const login_fa = document.querySelector(".login_fa");
login_fa.onclick = async function () {
  window.open(
    `${currentURL}/auth/facebook`,
    "login With Facebook",
    "width=500,height=500"
  );
};
const login_tw = document.querySelector(".login_tw");
login_tw.onclick = async function () {
  window.open(
    `${currentURL}/HTML/money.html`,
    "login With Facebook",
    "width=500,height=500"
  );
};
// console.log(checkbox)

// const rootStyle = document.documentElement.style;
// // const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//     console.log("Checkbox")
//     if (checkbox.checked) {
//         rootStyle.setProperty('--header-background', "#000");
//         rootStyle.setProperty('--black-text', "#fff");
//     }
// })
