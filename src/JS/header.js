const modal = document.querySelector(".modal"); //cam xoa
const modal2 = document.querySelector(".modal2"); //cam xoa
const currentURL = window.location.origin;
const header_menu = document.querySelector(".header_menu");

$("document").ready(function () {


  const login_gg = modal.querySelector(".login_gg");
  login_gg.onclick = async function () {
    window.open(
      `${currentURL}/api/auth/google`,
      "login With Google",
      "width=500,height=500"
    );
  };
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
const checkbox = document.getElementById("checkbox");
// block devtools
// function blockDevTool() {
//   setTimeout(console.clear.bind(console));
//   setTimeout(() => {
//     console.log("%cTắt f12 đi bạn nho!!!", "color:red;font-family:system-ui;font-size:100px");
//   }, 200);
//   window.location.href = "/403";
// }

// class DevChecker extends Error {
//   toString() {}
//   get message() {
//     blockDevTool();
//   }
// }
// console.log(new DevChecker());
document.addEventListener("DOMContentLoaded", function () {
  const login = document.querySelector(".header_login");
  login.onclick = function () {
    console.log("Login");
    modal.style.display = "block";
    if (modal2.style.display == "block") {
      modal2.style.display = "none";
    }
  };
  document.querySelector(".no_login a").onclick = function (e) {
    e.preventDefault();

    login.click();
  };

  const sg = document.querySelector(".header_signup");
  sg.onclick = function () {
    console.log("Login");
    modal2.style.display = "block";
    if (modal.style.display == "block") {
      modal.style.display = "none";
    }
  };
  document.querySelector(".no_signup a").onclick = function (e) {
    e.preventDefault();

    sg.click();
  };
  modal.onclick = function (event) {
    if (!event.target.closest(".modal_wrap")) {
      modal.style.display = "none";
    }
  };
  modal2.onclick = function (event) {
    if (!event.target.closest(".modal_wrap")) {
      modal2.style.display = "none";
    }
  };

  $(document).ready(function () {
    $(".logout").click(async function (e) {
      e.preventDefault();
      console.log("logout");
      await fetch(`/api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account: "chaoemcogaidangiu",
        }),
      }).then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      });
    });
  });

  // should not turn on this code
  // const header_logo = document.querySelector('.header_logo');
  // let count_logo = 0
  // header_logo.addEventListener("mouseover", (event) => {
  //   let audio = new Audio('/src/audio/yamate-kudesai.mp3');
  //   switch (count_logo) {
  //     case 3:
  //       audio.volume = 0.1;
  //       audio.play();
  //       break;
  //     case 4:
  //       audio.volume = 0.2;
  //       audio.play();
  //       break;
  //     case 5:
  //       audio.volume = 0.4;
  //       audio.play();
  //       break;
  //     case 6:
  //       audio.volume = 0.7;
  //       audio.play();
  //       break;
  //     case 7:
  //       audio.volume = 1;
  //       audio.play();
  //       count_logo--;
  //       break;
  //   };
  //   count_logo++;
  // });
});

const right_item_mobile_close = document.querySelector(
  ".right_item_mobile_close"
);
const right_item_mobile = document.querySelector(".right_item_mobile");

if (right_item_mobile_close) {
  right_item_mobile_close.onclick = function () {
    right_item_mobile.style.right = "-100% !important";
  };
}

const header_search_input = document.querySelector(
  ".header_search_input input"
);
const search_btn = document.querySelector(
  ".header_search_wrap .header_search_logo"
);

search_btn.addEventListener("click", handle_search);

header_search_input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    search_btn.click();
  }
});

function handle_search() {
  if (header_search_input.value != "") {
    const newUrl = `${window.location.origin}/search?search=${encodeURI(
      header_search_input.value
    )}`;
    window.location.replace(newUrl);
  }
}
