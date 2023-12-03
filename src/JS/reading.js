// Save current chap

//xin chào bbp
const background_color = document.getElementById("ss_reader_background");
const background_color1 = document.getElementById("ss_reader_background1");
const currentURL = window.location.href;

const textColor = document.getElementById("ss_reader_textColor");
const textColor1 = document.getElementById("ss_reader_textColor1");

const font = document.getElementById("ss_reader_font");

const reader_size = document.querySelectorAll("#ss_reader_size");

const line_height = document.querySelectorAll("#ss_reader_line_height");

const main = document.querySelector("main");
const body_main = document.querySelector(".main-body");

const main_content = document.querySelector(".main-content");

document.querySelector(".loaded").style.display = "none";

// const show_chapter = document.querySelector(".show-list")

const show_list = document.querySelectorAll(".show-list");
const show_more_item = document.querySelectorAll(".show_more_item");

const show_more = document.querySelectorAll("#show_more");

const reset_text_color = document.querySelector(".ss_reader_textColor_reset");

const reset_background_color = document.querySelector(
  ".ss_reader_background_reset"
);

const themes = localStorage.getItem("theme");

const parts = currentURL.split("/"); // Tách URL thành các phần
const id = parts[4];
const chap = parts[5];
async function views_novel(id_truyen) {
  await fetch(`/api/updateviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_truyen: id_truyen,
    }),
  }).catch((error) => {
    console.log(error);
  });
}
async function updatecurrchap(id_truyen, curr_chap) {
  await fetch(`/api/updatecurrchap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_truyen: id_truyen,
      curr_chap: curr_chap,
    }),
  }).catch((error) => {
    console.log(error);
  });
}
let shouldRemoveScrollEvent = false;

let pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
const scrollHandler = () => {
  const scrollY = window.scrollY; // độ dài vị trí hiện tại đã vuốt xuống
  let scrollmax = 0;
  // console.log("Chiều dài trang:", pageHeight);
  // console.log(scrollY);
  scrollmax = pageHeight - 180;
  const scrollmin = (scrollmax * 60) / 100;
  // const scrollPosition = (scrollY / (pageHeight - window.innerHeight)) * 100;
  // if (scrollPosition > 60){
  if (scrollY > scrollmin) {
    shouldRemoveScrollEvent = true; // Đặt biến cờ để gỡ bỏ sự kiện cuộn
    views_novel(id);
    updatecurrchap(id, chap);
    localStorage.setItem(`${id}`, `${chap}`);
  } 

  window.scrollYOld = scrollY;
};

const scrollEvent = () => {
  scrollHandler();

  if (shouldRemoveScrollEvent) {
    window.removeEventListener("scroll", scrollEvent); // Gỡ bỏ sự kiện cuộn
  }
};

if (pageHeight < 1500) {
  setTimeout(function () {
  shouldRemoveScrollEvent = true; // Đặt biến cờ để gỡ bỏ sự kiện cuộn
  views_novel(id);
  updatecurrchap(id, chap);
    localStorage.setItem(`${id}`, `${chap}`);
  },  5000)
} else {
  setTimeout(function () {
    window.addEventListener("scroll", scrollEvent);
  }, 10000)
}

////////////////////////////////////////////////////////////////////////////

for (const list_show of show_list) {
  list_show.onclick = function () {
    list_show.parentElement.querySelector("#show_more").style.display = "block";
    list_show.style.display = "none";
    setTimeout(function () {
      list_show.parentElement.querySelector("#show_more").style.display =
        "none";
      list_show.style.display = "block";
    }, 5000);
  };
}
background_color.onchange = function () {
  main.style.background = background_color.value;
};
background_color1.onchange = function () {
  main.style.background = background_color1.value;
};

textColor1.onchange = function () {
  // body_main.style.color = textColor.value;
  body_main.style.color = textColor1.value;
  document.querySelector(".novel-name-chapter").style.color = textColor1.value;
};
textColor.onchange = function () {
  // body_main.style.color = textColor.value;
  body_main.style.color = textColor.value;
  document.querySelector(".novel-name-chapter").style.color = textColor.value;
};

reset_background_color.addEventListener("click", function () {
  main.style.background = "linear-gradient(to left, #5b0664, #210e68)";
});

reset_text_color.addEventListener("click", function () {
  body_main.style.color = "black";
});

const changeFontSize = (size) => {
  // console.log(size);
  main_content.style.fontSize = `${size}px`;
  for (const font of reader_size) {
    font.value = size;
  }
};

const changeHeight = (height_val) => {
  main_content.style.lineHeight = height_val;
  for (const height of line_height) {
    // roi do hai anh trai name chap cho ten chap hien tai, con name chaps la tat ca
    height.value = height_val;
  }
};

// cai hai thg bay moi coii laf review nha
// cais tao sua la reading coi chung lam duong lac loi
const left_btn = document.querySelectorAll(".left-btn");
for (const l_btn of left_btn) {
  if (parseInt(window.location.href.split("/").pop()) <= 1) {
    l_btn.style.display = "none";
    document.querySelector(".lame-left").disabled = true;
  }
  l_btn.onclick = function () {
    const chap = parseInt(window.location.href.split("/").pop()) - 1;
    const crUrl = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );

    window.location.href = `${crUrl}/${chap}`;
  };
}
const right_btn = document.querySelectorAll(".right-btn");
for (const r_btn of right_btn) {
  last_chaps = show_more_item.length;
  // console.log(last_chaps);
  if (parseInt(window.location.href.split("/").pop()) >= last_chaps) {
    r_btn.style.display = "none";
    document.querySelector(".lame-right").disabled = true;
  }
  r_btn.onclick = function () {
    const chap = parseInt(window.location.href.split("/").pop()) + 1;
    const crUrl = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );

    window.location.href = `${crUrl}/${chap}`;
  };
}

const lame_right = document.querySelector(".lame-right");
lame_right.onclick = function () {
  const chap = parseInt(window.location.href.split("/").pop()) + 1;
  const crUrl = window.location.href.substring(
    0,
    window.location.href.lastIndexOf("/")
  );

  window.location.href = `${crUrl}/${chap}`;
};

const lame_left = document.querySelector(".lame-left");
lame_left.onclick = function () {
  const chap = parseInt(window.location.href.split("/").pop()) - 1;
  const crUrl = window.location.href.substring(
    0,
    window.location.href.lastIndexOf("/")
  );

  window.location.href = `${crUrl}/${chap}`;
};

const lame_up = document.querySelector(".lame-up");

lame_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tùy chọn, cho phép cuộn mượt hơn
  });
});

const lame_down = document.querySelector(".lame-down");

lame_down.addEventListener("click", () => {
  window.scrollBy({
    top: 650,
    behavior: "smooth",
  });
});

const lame_auto = document.querySelector(".lame-auto");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");

const menus = document.querySelectorAll(".menu a");
for (const meme of menus) {
  meme.onclick = (e) => {
    e.preventDefault();
  };
}
lame_auto.onclick = () => {
  if (lame_auto.classList[2] == "playing") {
    lame_auto.classList.remove("playing");

    lame_auto.classList.add("pausing");
    play.style.display = "none";
    pause.style.display = "block";
    autoScroll();
  } else {
    clearTimeout(scrolldelay);
    lame_auto.classList.remove("pausing");
    play.style.display = "block";
    pause.style.display = "none";
    lame_auto.classList.add("playing");
  }
};
function autoScroll() {
  function pageScroll() {
    // Kiểm tra xem đã cuộn tới cuối trang chưa
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      // Đã cuộn tới cuối trang, dừng cuộn trang
      clearTimeout(scrolldelay);
    } else {
      window.scrollBy(0, 1);
      scrolldelay = setTimeout(pageScroll, 30);
    }
  }
  pageScroll();
}

// go chap
for (show_chap of show_more) {
  show_chap.onchange = function () {
    const chap = show_chap.value;
    const crUrl = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );

    window.location.href = `${crUrl}/${chap}`;
  };
}
