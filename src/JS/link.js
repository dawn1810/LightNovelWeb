$(document).ready(function () {
  const header_menu = document.querySelector(".header_menu");
  const left_item = document.querySelector(".left_item");
  const category_btn = document.getElementById("category");
  const category_list = document.querySelector(".category_list");
  const summary_Content = document.querySelector(".summary-Content");
  const summary_btn = document.querySelector(".summary-btn");

  let menuBtnCount = true;
  const rootStyle = document.documentElement.style;
  const checkbox = document.getElementById("checkbox");
  const themes = localStorage.getItem("theme");

  checkbox.addEventListener("change", () => {
    console.log("Checkbox");

    if (checkbox.checked) {
      localStorage.setItem("theme", "dark");

      // home
      rootStyle.setProperty("--header-background", "#292c49");
      rootStyle.setProperty("--black-text", "#fff");
      rootStyle.setProperty("--white-color", "#000");
      rootStyle.setProperty("--background-color", "#1e1e1e");
      rootStyle.setProperty("--category_bg", "#374d88");
      rootStyle.setProperty("--search-bg", "#959595");
      rootStyle.setProperty("--menu-text", "#fff");
      rootStyle.setProperty("--item-color", "rgb(38 56 123)");
      rootStyle.setProperty("--button-color", "#23427a");
      rootStyle.setProperty("--login-btn", "#ff971b");
      rootStyle.setProperty("--author-color", "#2a3995");
      rootStyle.setProperty("--header-text", "#ecd9c2");
      rootStyle.setProperty("--link-text", "#c24141");
      rootStyle.setProperty("--novel_author", "#788afc");
      rootStyle.setProperty("--review_bg", "#1e2643");
      rootStyle.setProperty("--chapter_bg", "rgb(3 35 78)");
      rootStyle.setProperty("--chap-item", "rgb(53 58 78)");
      rootStyle.setProperty("--cm_bg", "#25304c");
      rootStyle.setProperty("--cm_text", "#b6b6b7");
      rootStyle.setProperty("--same-propose-item_hv", "#82786ac2");
      rootStyle.setProperty("--chapter-item", "#08397d");
      rootStyle.setProperty("--text_novel", "rgb(154, 134, 134)");
      rootStyle.setProperty("--bg_novel", "#1e1e1e");
      rootStyle.setProperty("--filter_search", "#12407e");
      rootStyle.setProperty("--element-color", "#323558");
      rootStyle.setProperty("--st-pr-btn-bg", "#24263e");
      rootStyle.setProperty("--border-btn-st", "#000");
      rootStyle.setProperty("--button-colors", "#404593");
      rootStyle.setProperty("--white-text", "#000");
    }
    else {
      if (themes) {
        rootStyle.setProperty("--header-background", "#D4B499");
        rootStyle.setProperty("--black-text", "#000");
        rootStyle.setProperty("--white-color", "#dbd9d9");
        rootStyle.setProperty("--background-color", "#ffffec");
        rootStyle.setProperty("--category_bg", "#889EAF");
        rootStyle.setProperty("--search-bg", "#F3D5C0");
        rootStyle.setProperty("--menu-text", "#063458");
        rootStyle.setProperty("--item-color", "rgb(151 107 51)");
        rootStyle.setProperty("--button-color", "#884c05");
        rootStyle.setProperty("--login-btn", "#884c05");
        rootStyle.setProperty("--author-color", "#ffb035");
        rootStyle.setProperty("--header-text", "#884c05");
        rootStyle.setProperty("--link-text", "#463797");
        rootStyle.setProperty("--novel_author", "#ffb035");
        rootStyle.setProperty("--review_bg", "antiquewhite");
        rootStyle.setProperty("--chapter_bg", "rgb(158 138 111)");
        rootStyle.setProperty("--chap-item", "rgb(213 148 66)");
        rootStyle.setProperty("--cm_bg", "#ceae80");
        rootStyle.setProperty("--cm_text", "#26262c");
        rootStyle.setProperty("--same-propose-item_hv", "#ff9805c2");
        rootStyle.setProperty("--chapter-item", "#513a13");
        rootStyle.setProperty("--text_novel", "#000");
        rootStyle.setProperty("--bg_novel", "#ffffec");
        rootStyle.setProperty("--element-color", "#ebd6bd");
        rootStyle.setProperty("--filter_search", "#884c05");
        rootStyle.setProperty("--st-pr-btn-bg", "#b0906b");
        rootStyle.setProperty("--border-btn-st", "#a0896e");
        rootStyle.setProperty("--button-colors", "#b0906b");
        rootStyle.setProperty("--white-text", "#fff");

        localStorage.setItem("theme", "light");
      }
    }
  });

  if (themes) {
    console.log(themes);
    if (themes == "dark") {
      checkbox.click();
    }
  }

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
        left_item.classList.add("close");
      } else {
        trigger.removeClass("is-closed");
        trigger.addClass("is-open");
        isClosed = true;
        left_item.classList.remove("close");
      }
    }
  });

  category_btn.onclick = function () {
    category_list.style.display = "block";
  };
  document.onclick = function (event) {
    const targetElement = event.target;
    if (
      !category_list.contains(targetElement) &&
      targetElement !== category_btn
    ) {
      category_list.style.display = "none";
    }
  };

  header_menu.onclick = function (event) {
    if (menuBtnCount) {
      event.stopPropagation();
      left_item.classList.remove("close");
      menuBtnCount = false;
    } else {
      left_item.classList.add("close");
      menuBtnCount = true;
    }
  };
  const category = document.querySelector(".category");

  left_item.onclick = function (event) {
    event.stopPropagation();
    console.log("ok");
  };

  const right_item_mobile_close = document.querySelector('.right_item_mobile_close')
  const right_item_mobile = document.querySelector('.right_item_mobile')
  const header_user_logo = document.querySelector('.header_user_logo_i')
  
  right_item_mobile_close.onclick = function(){
    console.log("okssssss");
    right_item_mobile.style.right="-100%";
  }
  header_user_logo.onclick= function (e) {

    console.log("ok la");
    right_item_mobile.style.right="0%";
  }
});




