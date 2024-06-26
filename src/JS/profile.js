var ele = document.querySelectorAll("#container");
if (ele) {
  ele.forEach((a) => {
    a.style.visibility = "visible";
  });
}
// variable
let author_name_check = document.querySelector("#author_name")
  ? document.querySelector("#author_name").value
  : "Nguồn sưu tầm";
// avt page1
const avtBtn = document.querySelectorAll(".dropdown-trigger");
const avtUpLoad = document.querySelectorAll("#file-upload");
const avatar = document.querySelector(".page1 .your-avt");
const dropZone = document.querySelectorAll(".drop-zone");
// avt page1

const maxSizeInBytes = 10485760;
const maxSizeImg = 1048576;
// avt page5
const avatar5 = document.querySelector(".page5_a_up .your-avt");
const dropZone5 = document.querySelector(".page5_a_up .drop-zone");
const avtBtn5 = document.querySelector(".page5_a_up .dropdown-trigger");
const avtUpLoad5 = document.querySelector(".page5_a_up #file-upload");
// avt page5

const Setting_pageWrapper = document.querySelectorAll(".Setting_pageWrapper");
const Setting_item = document.querySelectorAll(".Setting_sidebar-list_item");

const delete_chapter = document.querySelector(".delete_chapter");
const add_new = document.querySelector(".normal_add .add_new");
const add_quick = document.querySelector(".quick_add .add_new");
const page5_home = document.querySelector(".page5_home");
const page5_a = document.querySelector(".page5_a");
const page5_b = document.querySelector(".page5_b");
const page5_chap = document.querySelector(".page5_chap");
const page5_info = document.querySelector(".page5_info");
const page5_post = document.querySelector(".page5_post");
const page5_last = document.querySelector(".page5_last");
const novel_name = document.querySelector(".n_name");
const author_name = document.querySelector(".author_name");
const novel_status = document.querySelector(".novel_status select");
const novel_descript = document.querySelector(".novel_descript");
const novel_types = document.querySelector(".novel_types select");
const page5_composed = document.querySelectorAll(".page5_composed");
const page5_a_up = document.querySelectorAll(".page5_a_up");
const range = document.querySelector(".range");
const range__label = document.querySelector(".range__label");
const back_btn = document.querySelectorAll(".back_btn");

//pagination //////////////////////////////////////////////////////////////////
// const list_chapter_body = document.querySelector('.list_chapter_body')
// const find_page = document.querySelector(".find_page");
// const next_page = document.querySelector(".next_page");
// const previous_page = document.querySelector(".previous_page");
// const maxcout = parseInt(document.getElementById("max").innerText);

// dieu khoan dich vu
const checked = document.getElementById("Agree");
// dieu khoan dich vu

window.addEventListener("popstate", function (event) {
  location.reload();
});

function Setting_pageWrapper_drop() {
  for (const key of Setting_pageWrapper) {
    key.style.display = "none";
  }
}

function Setting_item_drop() {
  for (const key of Setting_item) {
    key.style.backgroundColor = "transparent";
  }
}

function page5_composed_drop() {
  // ẩn page5_composed
  for (const key of page5_composed) {
    key.style.display = "none";
  }
}

function page5_a_up_drop() {
  for (const key of page5_a_up) {
    key.style.display = "none";
  }
}

var currentPath = window.location.href.substring(
  window.location.href.lastIndexOf("/")
);
if (currentPath == "/novel_following") {
  Setting_pageWrapper_drop();
  Setting_item_drop();
  document.querySelector(".page2").style.display = "block";
  document.querySelector(".yourfollow").style.backgroundColor =
    "var(--st-pr-btn-bg)";
} else if (currentPath == "/change_pass") {
  Setting_pageWrapper_drop();
  Setting_item_drop();
  document.querySelector(".yourchangepass").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  document.querySelector(".page4").style.display = "block";
} else if (currentPath == "/my_novel") {
  if (role < 2) {
    Setting_pageWrapper_drop();
    Setting_item_drop();
    document.querySelector(".yourinfo").style.backgroundColor =
      "var(--st-pr-btn-bg)";
    document.querySelector(".up_novel").style.backgroundColor = "transparent";
    document.querySelector(".page5").style.display = "none";
    document.querySelector(".page1").style.display = "block";
	notify("!", 'Tài khoản của bạn không có quyền sáng tác, hãy thêm tên tác giả hoặc đã bị khoá.')
  } else {
    Setting_pageWrapper_drop();
    Setting_item_drop();
    document.querySelector(".up_novel").style.backgroundColor =
      "var(--st-pr-btn-bg)";

    document.querySelector(".page5").style.display = "block";
    sessionStorage.clear();
  }
} else if (currentPath == "/add_novel") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();

  document.querySelector(".page5").style.display = "block";
  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  page5_composed[1].style.display = "block";
  page5_a_up[0].style.display = "flex";
  setTimeout(function () {
    range.style.setProperty("--p", "25");
    // range.style.setProperty('--widthbf', '0');

    range__label.classList.remove("anima");

    range__label.classList.add("anima");
  }, 100);
} else if (currentPath == "/add_content") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();

  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  document.querySelector(".page5").style.display = "block";
  page5_composed[1].style.display = "block";
  // page5_a_up[0].style.display = 'flex'
  page5_chap.style.display = "block";
  range.style.setProperty("--p", "50");
  range.style.setProperty("--widthbf", "25%");

  range__label.classList.remove("anima");

  setTimeout(function () {
    range__label.classList.add("anima");
  }, 50);
} else if (currentPath == "/post_novel") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();

  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  document.querySelector(".page5").style.display = "block";
  page5_composed[1].style.display = "block";
  // page5_a_up[0].style.display = 'flex'
  page5_post.style.display = "block";
  range.style.setProperty("--p", "75");
  range.style.setProperty("--widthbf", "50%");
  range__label.classList.remove("anima");

  setTimeout(function () {
    range__label.classList.add("anima");
  }, 50);
} else if (currentPath == "/congratulation") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();

  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  document.querySelector(".page5").style.display = "block";
  page5_composed[1].style.display = "block";
  // page5_a_up[0].style.display = 'flex'
  page5_last.style.display = "block";

  let audio = new Audio("/src/audio/naruto-trap.mp3");
  audio.volume = 0.5;
  audio.play();

  range.style.setProperty("--p", "100");
  range.style.setProperty("--widthbf", "75%");

  range__label.classList.remove("anima");

  setTimeout(function () {
    range__label.classList.add("anima");
  }, 50);
} else if (currentPath == "/edit") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();
  document.querySelector(".page5").style.display = "block";

  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";
  page5_composed[3].style.display = "block";
  page5_a_up[4].style.display = "flex";
} else if (currentPath == "/morechap") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();
  document.querySelector(".page5").style.display = "block";

  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";
  page5_composed[4].style.display = "block";
  page5_a_up[5].style.display = "block";
} else if (currentPath == "/listchap") {
  page5_composed_drop();
  Setting_pageWrapper_drop();
  page5_a_up_drop();
  Setting_item_drop();
  document.querySelector(".up_novel").style.backgroundColor =
    "var(--st-pr-btn-bg)";

  document.querySelector(".page5").style.display = "block";
  page5_composed[2].style.display = "block";
  page5_a_up[0].style.display = "flex";
  const regex =
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;

  const match = regex.exec(window.location.href);

  const extractedID = match ? match[0] : null;

  var novelItems = document.querySelectorAll(".my_novel_item");

  novelItems.forEach(function (item) {
    const chap = item.querySelector(".n_num").value;
    item.querySelector("#author_see").href = `/reading/${extractedID}/${chap}`;
  });
}

for (let i = 0; i < Setting_item.length; i++) {
  const currentURL =
    window.location.protocol + "//" + window.location.host + "/profile";

  Setting_item[i].onclick = function () {
    Setting_item_drop();
    if (Setting_item[i].classList[1] == "yourinfo") {
      Setting_pageWrapper_drop();
      Setting_pageWrapper[0].style.display = "block";
		history.pushState(null, null, currentURL);
		Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
		
    }
    else if (Setting_item[i].classList[1] == "yourfollow") {
      var newURL = "/novel_following";

      history.pushState(null, null, newURL);
      Setting_pageWrapper_drop();
		Setting_pageWrapper[1].style.display = "block";
		Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
		
    }
    else if (Setting_item[i].classList[1] == "yourchangepass") {
      var newURL = "/change_pass";
      history.pushState(null, null, newURL);
      Setting_pageWrapper_drop();
		document.querySelector(".page4").style.display = "block";
		Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
		
    }

    else if (Setting_item[i].classList[1] == "up_novel") {
      if (role < 2) {
        var newURL = "/profile";
        history.pushState(null, null, newURL);
        Setting_pageWrapper_drop();
        page5_composed_drop();
        page5_a_up_drop();
        // page5_composed[0].style.display = "block";
        // page5_a_up[0].style.display = "flex";
        document.querySelector(".page5").style.display = "none";
        document.querySelector(".page1").style.display = "block";
        document.querySelector(".yourinfo").style.backgroundColor =
          "var(--st-pr-btn-bg)";
		  Setting_item[i].style.backgroundColor =
			  "transparent";
		notify("!", 'Tài khoản của bạn không có quyền sáng tác, hãy thêm tên tác giả hoặc đã bị khoá.')
      } else {
        var newURL = "/my_novel";
        history.pushState(null, null, newURL);
        Setting_pageWrapper_drop();
        page5_composed_drop();
        page5_a_up_drop();
        page5_composed[0].style.display = "block";
        page5_a_up[0].style.display = "flex";
        document.querySelector(".page5").style.display = "block";
		  sessionStorage.clear();
		  Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
		  
      }
    }

  };
}
const button_file = document.querySelectorAll("#button_file");

for (const button of button_file) {
  button.onclick = function (e) {
    e.preventDefault();
    let file = button.parentElement.querySelector("input");
    file.focus();
    file.setSelectionRange(file.value.length, file.value.length);
  };
}

// change the avatar image
for (const button of avtBtn) {
  button.addEventListener("click", function (event) {
    button.querySelector("#file-upload").click();
    return false;
  });
}
// avtBtn5.addEventListener("click", function (event) {
// 	avtUpLoad5.click();
// 	return false;
// });

// function get_namechapters(inputString) {
// 	// Use a regular expression to match the chapters and content
// 	const matches = inputString.match(/(Chương \d+): ([^,]+,?[^,]+,?)/g);

// 	// Extract chapter number and content from matches
// 	const chapterData = matches.map((match) => {
// 		const [fullMatch, chapterNumber, chapterContent] = match.match(/(Chương \d+): ([^,]+,?[^,]+,?)/);
// 		return `${chapterNumber} ${chapterContent}`;
// 	});

// 	return chapterData;
// }
function get_namechapters(inputString) {
  // Use a regular expression to match the chapters and content
  const matches = inputString.split(/(?=Chương \d+:)/g);

  // Remove trailing comma from each chapter
  const cleanedMatches = matches.map((match) =>
    match.replace(/,\s*$/, "").trim()
  );

  return cleanedMatches;
}

function validateFile(file, checkdoc = false) {
  let allowedFormats = undefined; // Allowed file formats
  let maxSize = undefined;
  let message_arlet = undefined;
  if (checkdoc == true) {
    allowedFormats = ["docx", "txt"]; // Allowed file formats
    maxSize = maxSizeInBytes;
    message_arlet = "Chỉ có thể đăng tải file dưới 10MG.";
  } else {
    allowedFormats = ["jpg", "jpeg", "png"]; // Allowed file formats
    maxSize = maxSizeImg;
    message_arlet = "Chỉ có thể đăng tải file dưới 1MG.";
  }

  // Check file format
  const fileName = file.name;
  const fileExtension = fileName
    .substring(fileName.lastIndexOf(".") + 1)
    .toLowerCase();
  if (!allowedFormats.includes(fileExtension)) {
    // Invalid file format
    notify("!", "Sai định dạng file!");
    return false;
  }
  if (file.size > maxSize) {
    // window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
    notify("!", message_arlet);
    return false;
  }

  // File is valid
  return true;
}

for (const button of avtUpLoad) {
  button.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (validateFile(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        button.parentElement.parentElement.querySelector(".your-avt").src =
          base64;
      };
      reader.readAsDataURL(file);

      // disappear drop text
      if (
        button.parentElement.parentElement.querySelector(".your-avt").src !== ""
      ) {
        button.parentElement.parentElement.querySelector(
          ".drop-zone"
        ).innerHTML = "";
      }
    }
  });
}

function allowDrop(event) {
  event.preventDefault();
}

for (const button of dropZone)
  button.ondrop = function (event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (validateFile(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        button.parentElement.querySelector(".your-avt").src = base64;
      };
      reader.readAsDataURL(file);

      // disappear drop text
      if (avatar5.src !== "") {
        button.parentElement.querySelector(".your-avt").innerHTML = "haha";
      }
    }
  };

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function generateUUID() {
  // Hàm tạo chuỗi UUID
  // Tham khảo: https://stackoverflow.com/a/2117523/13347726
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

async function uploadFiles(files, type) {
  try {
    var formData = new FormData();

    for (var i = 0; i < files.length; i++) {
      let extension = files[i].name.substring(files[i].name.lastIndexOf("."));
      let newName = `${i} ` + generateUUID() + extension;
      let renamedFile = new File([files[i]], newName, { type: files[i].type });
      formData.append("files[]", renamedFile);
    }

    const response = await fetch("/api/uploadFile", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      sessionStorage.setItem("chapters_content", responseData);
      switch (type) {
        case 0:
          await uploadNovel();
          break;
        case 1:
          await updateNovel();
          break;
        case 2:
          await editNovel();
          break;
      }
    } else if (response.status == 400) {
      // Error occurred during upload
      notify("!", "Sai định dạng file!");
      console.error("Error uploading files.");
    }
  } catch (error) {
    // Error occurred during the request
    console.error("Error uploading files.");
  }
}

async function uploadNovel() {
  // POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
  //gửi request tới csdl server
  const url = `/api/upload_novel`; // URL của máy chủ mục tiêu

  const postData = JSON.stringify({
    name: sessionStorage.getItem("novel_name"),
    author: sessionStorage.getItem("author_name"),
    name_chaps: get_namechapters(sessionStorage.getItem("name_chapters")),
    chap_ids: sessionStorage.getItem("chapters_content").split(","),
    genres: sessionStorage.getItem("novel_types").split(","),
    status: sessionStorage.getItem("novel_status"),
    summary: sessionStorage.getItem("novel_descript"),
    image: sessionStorage.getItem("novel_avt"),
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  };

  try {
    const response = await fetch(url, requestOptions);
    // taì khoan hơp lệ
    if (response.status == "200") {
      page5_a_up_drop();
      var newURL = "/profile/congratulation";
      history.pushState(null, null, newURL);
      page5_last.style.display = "block";

      let audio = new Audio("/src/audio/naruto-trap.mp3");
      audio.volume = 0.5;
      audio.play();

      range.style.setProperty("--p", "100");
      range.style.setProperty("--widthbf", "75%");

      range__label.classList.remove("anima");

      setTimeout(function () {
        range__label.classList.add("anima");
      }, 50);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

async function updateNovel() {
  const regex =
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;

  // Use the exec method to extract the matching part from the URL
  const match = regex.exec(window.location.href);
  // Extracted ID will be in match[0]
  const extractedID = match ? match[0] : null;

  // POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
  //gửi request tới csdl server
  const url = `/api/update_upload_novel`; // URL của máy chủ mục tiêu

  const postData = JSON.stringify({
    id: extractedID,
    name_chaps: get_namechapters(sessionStorage.getItem("name_chapters")),
    chap_ids: sessionStorage.getItem("chapters_content").split(","),
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  };

  try {
    const response = await fetch(url, requestOptions);
    // taì khoan hơp lệ
    if (response.status == "200") {
      // back to novel list scene
      page5_a_up_drop();
      let newURL = "/my_novel";
      window.location.href = newURL;
      // reset sessionStorage
      sessionStorage.clear();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

async function editNovel() {
  // get novel id from
  const regex =
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;

  // Use the exec method to extract the matching part from the URL
  const match = regex.exec(window.location.href);
  // Extracted ID will be in match[0]
  const extractedID = match ? match[0] : null;

  // get edit_indexes and chapters_content:
  const name_chaps = sessionStorage.getItem("name_chapters");
  const chapters_content = sessionStorage.getItem("chapters_content");
  const edit_indexes = sessionStorage.getItem("edit_indexes");
  const remove_list = sessionStorage.getItem("remove_list");

  // POST ALL DATA TO SERVER--------------------------------------------------------------------------------------------------
  //gửi request tới csdl server
  const url = `/api/edit_novel`; // URL của máy chủ mục tiêu

  const postData = JSON.stringify({
    id: extractedID,
    name_chaps: name_chaps
      ? get_namechapters(sessionStorage.getItem("name_chapters"))
      : [],
    chap_ids: chapters_content ? chapters_content.split(",") : [],
    edit_index: edit_indexes ? edit_indexes.split(",") : [],
    remove_list: remove_list ? remove_list.split(",") : [],
    // step: find_page.value,
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  };

  try {
    const response = await fetch(url, requestOptions);
    // taì khoan hơp lệ
    if (response.status == "200") {
      // back to novel list scene
      page5_a_up_drop();
      let newURL = "/my_novel";
      window.location.href = newURL;
      // reset sessionStorage
      sessionStorage.clear();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

// update info
const Save_btn = document.querySelector(".Save_btn");
Save_btn.onclick = async function (e) {
  e.preventDefault();
  const url = `/api/updateInfo`; // URL của máy chủ mục tiêu
  let sex = "null";
  if (document.querySelector("#nam").checked) {
    sex = "1";
  } else if (document.querySelector("#nu").checked) {
    sex = "0";
  } else {
    sex = "2";
  }
  const postData = JSON.stringify({
    // thông tin đăng ký
    img: `${avatar.src}`,
    usr: `1`,
    hoten: `${document.querySelector("#fullname").value}`,
    email: `${document.querySelector("#emailprofile").value}`,
    sex: `${sex}`,
    author_name: document.querySelector("#author_name")
      ? `${document.querySelector("#author_name").value}`
      : "Nguồn sưu tâm",
  });

  //gửi lên
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  };

  try {
    notify("n", "Đang tải lên...");
    const response = await fetch(url, requestOptions);
    if (response.status == "200") {
      document.querySelector(".header_user_logo_i p").textContent =
        document.querySelector("#fullname").value;
      document.querySelector(".header_user_logo_i .curent-avt img").src =
        avatar.src;
      author_name_check = document.querySelector("#author_name")
        ? document.querySelector("#author_name").value
        : "Nguồn sưu tầm";

      notify("n", "Cập nhật thông tin người dùng thành công!");
    } else if (response.status == "400") {
      notify("n", "Tên tác giả đã tồn tại");
    }
  } catch (error) {
    console.log("Error:", error);
    notify("x", "Cập nhật thông tin người dùng thất bại!");
  }
};

// change pass
if (add_new) {
  // upload novels
  add_new.onclick = function () {
    if (author_name_check) {
      page5_composed_drop();
      var newURL = "/profile" + "/add_novel";
      history.pushState(null, null, newURL);
      page5_composed[1].style.display = "block";
      page5_a_up[0].style.display = "flex";

      // change author name input
      author_name.value = author_name_check;

      setTimeout(function () {
        range.style.setProperty("--p", "25");
        // range.style.setProperty('--widthbf', '0');

        range__label.classList.remove("anima");

        range__label.classList.add("anima");
      }, 100);
    } else {
      // dont have author name yet
      notify("!", "Bạn chưa có tên sáng tác! Hãy đặt tên sáng tác trước.");
      Setting_item[0].click();
    }
  };
}
if (add_quick) {
  add_quick.onclick = function () {
    if (author_name_check) {
      $(".upload_quick_file").css({ display: "flex", opacity: "1" });
      $(this).text("+ ĐĂNG TRUYỆN");
      $(this).addClass("quick_upload");

      document.querySelector(".quick_upload").onclick = async function () {
        let curr_file = $(this).parent().find(".file-input")[0].files[0];

        if (curr_file) {
          notify("n", "Đang tải lên...");

          let formData = new FormData();

          let extension = curr_file.name.substring(
            curr_file.name.lastIndexOf(".")
          );
          let newName = generateUUID() + extension;
          let renamedFile = new File([curr_file], newName, {
            type: curr_file.type,
          });
          formData.append("files[]", renamedFile);

          const response = await fetch("/api/upload_quick_novel", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            // const responseData = await response.json();
            notify("n", "Đăng tải truyện thành công.");

            let audio = new Audio("/src/audio/naruto-trap.mp3");
            audio.volume = 0.5;
            audio.play();

            location.reload();
          } else if (response.status == 400) {
            // Error occurred during upload
            notify("!", "Sai định dạng file!");
            console.error("Error uploading files.");
          } else if (response.status == 500) {
            // Error occurred during upload
            notify("!", "Có lỗi xảy ra!");
          }
        } else {
          notify("!", "Chưa có file!");
        }
      };
    } else {
      // dont have author name yet
      notify("!", "Bạn chưa có tên sáng tác! Hãy đặt tên sáng tác trước.");
      Setting_item[0].click();
    }
  };

  document.querySelector(".upload_quick_file .download_btn").onclick =
    async function () {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          "/api/get_quick_upload_template",
          requestOptions
        );
        if (response.ok) {
          const blobUrl = URL.createObjectURL(await response.blob());
          // Tạo một thẻ <a> ẩn để tải xuống và nhấn vào nó
          const downloadLink = document.createElement("a");
          downloadLink.href = blobUrl;
          downloadLink.download = "Mau_dang_truyen_nhanh.docx"; // Đặt tên cho tệp tải xuống
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          // Giải phóng URL tạm thời sau khi tải xuống hoàn thành
          URL.revokeObjectURL(blobUrl);
        } else {
          notify("x", "Tải xuống thất bại!");
        }
      } catch (error) {
        console.log(error);
      }
    };

  document.querySelector(".upload_quick_file .edit_btn").onclick =
    async function () {
      $(this).parent().find(".file-input").click();
    };

  document.querySelector(".upload_quick_file .file-input").onchange =
    function () {
      const file = $(this)[0].files[0];
      if (file) {
        if (validateFile(file, true)) {
          $(this).parent().find(".file-content").text(file.name);
        }
      } else $(this).parent().find(".file-content").text("");
    };

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
}
document.querySelector(".page5_info .next_btn").onclick = async function () {
  if (
    novel_name.value != "" &&
    author_name.value != "" &&
    novel_descript.value &&
    listObj.tempValues
  ) {
    page5_a_up_drop();
    let newURL = "/profile/add_content";
    history.pushState(null, null, newURL);
    page5_chap.style.display = "block";
    range.style.setProperty("--p", "50");
    range.style.setProperty("--widthbf", "25%");

    range__label.classList.remove("anima");

    setTimeout(function () {
      range__label.classList.add("anima");
    }, 50);

    sessionStorage.setItem("novel_name", novel_name.value);
    sessionStorage.setItem("author_name", author_name.value);
    sessionStorage.setItem("novel_descript", novel_descript.value);
    sessionStorage.setItem("novel_types", listObj.tempValues);
    sessionStorage.setItem(
      "novel_status",
      novel_status.options[novel_status.selectedIndex].text
    );
    sessionStorage.setItem(
      "novel_avt",
      document.querySelector(".page5_info_img .your-avt").src
    );
  } else {
    // window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
    notify("!", "Hãy vui lòng điền đủ thông tin!");
  }
};

async function cancel() {
  // remove all chapters
  if (
    confirm(
      "Bạn có chắc chắn muốn huỷ không?"
    ) == true
  ) {
    // create shinra tensei not turn on this code
    // var elem = document.createElement("div");
    // elem.className = "shinra";
    // elem.style.cssText = `
    // 		position:absolute;
    // 		top: 0;
    // 		left: 0;
    // 		width:100vw;
    // 		height:130%;
    // 		margin-top: -100px;
    // 		z-index:99999999999999999;
    // 		background:#000;
    // 		background-image: url('https://media.tenor.com/WNyMsbIJmBMAAAAC/naruto-shinra.gif');
    // 		`;
    // // background-image: url('https://cdn.discordapp.com/attachments/1119221555566751754/1132280018534408233/thien.webp');
    // document.body.appendChild(elem);

    // let audio = new Audio("/src/audio/shinra.mp3");
    // audio.volume = 0.5;
    // audio.play();
    //////////////////////////////////////////////////////////////////////////////////////////
    if (sessionStorage.getItem("chapters_content")) {
      // remove all chapters
      const url = `/api/cancel`; // URL của máy chủ mục tiêu

      const postData = JSON.stringify({
        chap_ids: sessionStorage.getItem("chapters_content").split(","),
        status: "cancel",
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postData,
      };

      try {
        const response = await fetch(url, requestOptions);
        // taì khoan hơp lệ
        if (response.status == "200") {
          // setTimeout(function () {
            // back to novel list scene
            page5_a_up_drop();
            let newURL = "/my_novel";
            window.location.href = newURL;
            // reset sessionStorage
            sessionStorage.clear();
          // }, 7000);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      // setTimeout(function () {
        // back to novel list scene
        page5_a_up_drop();
        let newURL = "/my_novel";
        window.location.href = newURL;
        // reset sessionStorage
        sessionStorage.clear();
      // }, 7000);
    }
  } else {
    notify("!", "Đã huỷ!");
  }
}

function setupPrivateData(element) {
  var private = 1;
  element.setPrivate = function (d) {
    private = d;
  };
  element.getPrivate = function () {
    return private;
  };
}

document.querySelector(".page5_info .close_btn").onclick = async function () {
  await cancel();
};

document.querySelector(".page5_chap .more_chap_btn").onclick = function () {
  const newElement = document.createElement("div");
  newElement.className = "info-wrapper-container";
  newElement.innerHTML = `
		<div class="laocacho" style = "display: flex; justify-content: flex-end;" >
				<button class="delete_chap">
					<i class="fa-solid fa-xmark"></i>
				</button>
		</div>

		<div class="information_name_wrap">
			<h3>Thứ tự chương</h3>
			<div class="information_name">
				<input class="profile_input chap_num" type="number" 
					value="${
            document.querySelectorAll(".page5_a .chap_num").length + 1
          }" readonly />
			</div>
		</div>

		<div class="information_name_wrap">
			<h3>Tên chương</h3>
			<div class="information_name">
				<input class="profile_input chap_name" type="text" 
					placeholder="Nhập tên chương" />
			</div>
		</div>



		<div class="information_name_wrap">
			<div class="head">
				<h3>Nội Dung</h3>
				<pre class="file-content" style="margin: 1rem 20px;"></pre>
				<input type="file" class="file-input" style="display:none;" accept=".txt, .docx"/>
				<button class="upfile">
					<i class="fa-solid fa-upload"></i>
				</button>
			</div>
		</div>
		
		<p style="text-align: center;">[------------------------------------ 🦊🍜🍥 ------------------------------------]</p>
		`;
  document
    .querySelector(".page5_chap .page5_info_main")
    .appendChild(newElement);
};

$(document).ready(function () {
  // Add event listener to all buttons
  $(document).on("click", ".page5_d .delete_chap", function () {
    // Delete the grandparent node
    $(this).parent().parent().remove();
    const chap_num_list = document.querySelectorAll(".page5_d .chap_num");
    for (let i = 0; i < chap_num_list.length; i++) {
      chap_num_list[i].value = parseInt(chap_num_list[0].value) + i;
    }
  });

  $(document).on("click", ".page5_a .delete_chap", function () {
    // Delete the grandparent node
    $(this).parent().parent().remove();
    const chap_num_list = document.querySelectorAll(".page5_a .chap_num");
    for (let i = 0; i < chap_num_list.length; i++) {
      chap_num_list[i].value = parseInt(chap_num_list[0].value) + i;
    }
  });

  $(document).on("click", ".back_btn", function () {
    history.back();
  });

  // upload content file
  $(document).on("click", ".page5_chap .upfile", function () {
    $(this).parent().find(".file-input").click();
  });

  $(document).on("change", ".page5_chap .file-input", function () {
    const file = $(this)[0].files[0];
    if (file) {
      if (validateFile(file, true))
        $(this).parent().find(".file-content").text(file.name);
    } else $(this).parent().find(".file-content").text("");
  });

  // delete one file
  $(document).on("click", ".delete_chapter ", async function () {
    // Delete the grandparent node
    let id_truyen = $(this).parent().parent().attr("id");
    if (confirm("Bạn có chắc chắn muốn xoá truyện?") == true) {
      const url = `/api/cancel`; // URL của máy chủ mục tiêu

      const postData = JSON.stringify({
        id: id_truyen,
        status: "delete",
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postData,
      };

      try {
        notify("!", "Đang xoá...!");
        const response = await fetch(url, requestOptions);
        // taì khoan hơp lệ
        if (response.status == "200") {
          notify("!", "Đã xoá...!");
          $(this).parent().parent().parent().remove();
        } else {
          notify("x", "Xoá truyện thất bại!");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  });

  // load update edit (chỉnh sửa) page
  $(document).on("click", ".update_current_novel ", function () {
    // Delete the grandparent node
    let grandparentID = $(this).parent().parent().attr("id");
    page5_composed_drop();
    var newURL = "/profile/update/" + grandparentID + "/edit";
    window.location.href = newURL;
  });

  // load update edit (chỉnh sửa) page
  $(document).on("click", ".delete-follow", async function () {
    // Delete the grandparent node
    let grandparentID = $(this).parent().parent().parent().parent().attr("id");
    page5_composed_drop();

    // const accountCookie = getCookie('account');
    // if (accountCookie) {
    // Gửi cookie "account" lên máy chủ
    // Sử dụng XMLHttpRequest hoặc Fetch API để thực hiện request
    // Ví dụ sử dụng Fetch API:
    await fetch(`/api/updatelike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        liked: 0,
        id_truyen: grandparentID,
      }),
    })
      .then((response) => {
        if (response.ok) {
          $(this).parent().parent().parent().parent().remove();
        }
      })
      .catch((error) => {
        notify("x", "Có lỗi xảy ra!");
        console.log(error);
      });
    // }
  });

  // load update show list (danh sách chương) page
  $(document).on("click", ".showlist_novel ", function () {
    // Delete the grandparent node
    let grandparentID = $(this).parent().parent().attr("id");
    page5_composed_drop();
    var newURL = "/profile/update/" + grandparentID + "/listchap";
    window.location.href = newURL;
  });

  // load update add more chapter (thêm chương) page
  $(document).on("click", ".add_novel_more_chap ", function () {
    let grandparentID = $(this).parent().parent().attr("id");
    // change to add more chap page
    page5_composed_drop();
    var newURL = "/profile/update/" + grandparentID + "/morechap";
    window.location.href = newURL;
  });

  $(document).on("click", ".page5_b .edit_btn", function () {
    $(this).parent().find(".file-input").click();
  });

  $(document).on("change", ".page5_b .file-input", function () {
    const file = $(this)[0].files[0];
    if (file) {
      if (validateFile(file, true))
        $(this).parent().find(".file-content").text(file.name);
    } else $(this).parent().find(".file-content").text("");
  });

  $(document).on("click", ".page5_b .download_btn", async function () {
    notify("n", "Đang tải xuống...");
    let grandGrandParentID = $(this).parent().parent().parent().attr("id");
    const url = `/api/download_chap`; // URL của máy chủ mục tiêu

    const postData = JSON.stringify({
      id: grandGrandParentID,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    };

    fetch(url, requestOptions)
      .then(async (response) => {
        // extract the filename from the response header
        const filename = $(this).prop("id");

        // create a new blob object from the response body
        const blob = await response.blob();
        // create a temporary URL for the blob object
        const url = window.URL.createObjectURL(blob);
        // create a new anchor element to download the file
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        // release the temporary URL
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        notify("x", "Tải xuống thất bại!");
        console.log("Error downloading file:", error);
      });
  });

  $(document).on("click", ".page5_b .remove_chap", async function () {
    if (confirm("Bạn có chắc sẽ xóa chapter này?") == true) {
      let remove_list = [];
      // if already have remove list
      if (sessionStorage.getItem("remove_list")) {
        remove_list = sessionStorage.getItem("remove_list").split(",");
      }
      // set new remove to sessionStorage:
      remove_list.push($(this).parent().parent().parent().prop("id"));
      sessionStorage.setItem("remove_list", remove_list);

      // unable input:
      $(this).parent().parent().parent().find(".n_num").prop("disabled", true);
      $(this).parent().parent().parent().find(".n_name").prop("disabled", true);
      // unable download and uplaod button
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".edit_btn")
        .prop("disabled", true);
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".download_btn")
        .prop("disabled", true);
      // change remove button to undo button
      $(this).html(`<i class="fa-solid fa-arrow-rotate-left"></i>`);
      $(this).toggleClass("remove_chap undo_btn");
      // set file to null and file name to empty
      $(this).parent().parent().parent().find(".file-input").val("");
      $(this).parent().parent().parent().find(".file-content").text("");
    } else {
      notify("!", "Đã huỷ!");
    }
  });

  $(document).on("click", ".page5_b .undo_btn", async function () {
    let remove_list = [];
    let curr_index = $(this).parent().parent().parent().index().toString();
    // if already have remove list
    if (sessionStorage.getItem("remove_list")) {
      remove_list = sessionStorage.getItem("remove_list").split(",");
    }
    remove_list.splice(remove_list.indexOf(curr_index), 1);
    sessionStorage.setItem("remove_list", remove_list);

    // unable input:
    $(this).parent().parent().parent().find(".n_num").prop("disabled", false);
    $(this).parent().parent().parent().find(".n_name").prop("disabled", false);
    // unable download and uplaod button
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".edit_btn")
      .prop("disabled", false);
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".download_btn")
      .prop("disabled", false);
    // change remove button to undo button
    $(this).html(`<i class="fa-solid fa-xmark"></i>`);
    $(this).toggleClass("undo_btn remove_chap");
    // set file to null and file name to empty
    $(this).parent().parent().parent().find(".file-input").val("");
    $(this).parent().parent().parent().find(".file-content").text("");
  });
});

// next page btn of .page5_chap
document.querySelector(".page5_chap .next_btn").onclick = async function () {
  let files = [];
  let full = false;
  let name_chaprters = [];
  // Loop through all elements
  $(".page5_a .page5_chap .info-wrapper-container").each(function () {
    // Get the input element inside the current element
    let chapNum = $(this).find(".chap_num").val();
    let chapName = $(this).find(".chap_name").val();
    let curr_file = $(this).find(".file-input")[0].files[0];
    if (chapNum != "" && chapName != "" && curr_file) {
      name_chaprters.push(`Chương ${chapNum}: ${chapName} `);
      files.push(curr_file);
      full = true;
    } else {
      full = false;
    }
  });

  sessionStorage.setItem("name_chapters", name_chaprters);

  if (full) {
    if (
      confirm(
        "Khi tiến hành đăng truyện, bạn đã chấp nhận các chính sách và quy định của WTFNovel về Nội dung và Chính sách chia sẻ quyền lợi. Bạn có chắc sẽ đăng truyện này?"
      ) == true
    ) {
      document.querySelector(
        ".page5_chap .next_btn"
      ).innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `;
      // window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
      notify("!", "Đang tải lên...");
      await uploadFiles(files, 0);
    } else {
      notify("!", "Đã huỷ!");
    }
  } else {
    // window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
    notify("x", "Hãy vui lòng điền đủ thông tin!");
  }
};

// cancel 2nd page
document.querySelector(".page5_chap .close_btn").onclick = async function () {
  await cancel();
};

document.querySelector(".page5_last .page5_last_btn").onclick = function () {
  // back to novel list scene
  page5_a_up_drop();
  let newURL = "/my_novel";
  window.location.href = newURL;

  // reset sessionStorage
  sessionStorage.clear();
};

// trang danh sách chương:
// nút hủy
document.querySelector(".page5_b .close_btn").onclick = function () {
  cancel();
};

// nút chấp nhận
document.querySelector(".page5_b .next_btn").onclick = async function () {
  let files = [];
  let edit_indexes = [];
  let name_chaprters = [];
  // Loop through all elements
  $(".page5_b .my_novel_item").each(function () {
    if (!$(this).find(".n_name").prop("disabled")) {
      let chapNum = $(this).find(".n_num").val();
      let chapName = $(this).find(".n_name").val();
      name_chaprters.push(`Chương ${chapNum}: ${chapName}`);
    }
    // Get the input element inside the current element
    let curr_file = $(this).find(".file-input")[0].files[0];

    if (curr_file) {
      files.push(curr_file);
      edit_indexes.push($(this).prop("id"));
    }
  });

  sessionStorage.setItem("name_chapters", name_chaprters);
  sessionStorage.setItem("edit_indexes", edit_indexes);

  if (
    confirm(
      "Khi tiến hành đăng truyện, bạn đã chấp nhận các chính sách và quy định của WTFNovel về Nội dung và Chính sách chia sẻ quyền lợi. Bạn có chắc sẽ đăng truyện này?"
    ) == true
  ) {
    document.querySelector(
      ".page5_b .next_btn"
    ).innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `;
    // window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
    notify("!", "Đang tải lên...");
    await uploadFiles(files, 2);
  } else {
    notify("!", "Đã huỷ!");
  }
};

// trang thêm chương
// nút hủy
document.querySelector(".page5_d .close_btn").onclick = function () {
  cancel();
};
// nút thêm trương
document.querySelector(".page5_d .more_chap_btn").onclick = function () {
  const newElement = document.createElement("div");
  newElement.className = "info-wrapper-container";
  newElement.innerHTML = `
		<div class="laocacho" style = "display: flex; justify-content: flex-end;" >
				<button class="delete_chap">
					<i class="fa-solid fa-xmark"></i>
				</button>
		</div>

		<div class="information_name_wrap">
			<h3>Thứ tự chương</h3>
			<div class="information_name">
        <input class="profile_input chap_num" type="number" 
					value="${
            parseInt(document.querySelectorAll(".page5_d .chap_num")[0].value) +
            document.querySelectorAll(".page5_d .chap_num").length
          }" readonly />
			</div>
		</div>

		<div class="information_name_wrap">
			<h3>Tên chương</h3>
			<div class="information_name">
				<input class="profile_input chap_name" type="text" 
					placeholder="Nhập tên chương" />
			</div>
		</div>



		<div class="information_name_wrap">
			<div class="head">
				<h3>Nội Dung</h3>
				<pre class="file-content" style="margin: 1rem 20px;"></pre>
				<input type="file" class="file-input" style="display:none;" accept=".txt, .docx"/>
				<button class="upfile">
					<i class="fa-solid fa-upload"></i>
				</button>
			</div>
		</div>
		
		<p style="text-align: center;">[------------------------------------ 🦊🍜🍥 ------------------------------------]</p>
		`;
  document.querySelector(".page5_d .page5_info_main").appendChild(newElement);
};

// nut cập nhạt truyện
document.querySelector(".page5_d .post_btn").onclick = async function () {
  let files = [];
  let full = false;
  let name_chaprters = [];
  // Loop through all elements
  $(".page5_d .page5_chap .info-wrapper-container").each(function () {
    // Get the input element inside the current element
    let chapNum = $(this).find(".chap_num").val();
    let chapName = $(this).find(".chap_name").val();
    let curr_file = $(this).find(".file-input")[0].files[0];
    if (chapNum != "" && chapName != "" && curr_file) {
      name_chaprters.push(`Chương ${chapNum}: ${chapName} `);
      files.push(curr_file);
      full = true;
    } else {
      full = false;
    }
  });

  sessionStorage.setItem("name_chapters", name_chaprters);

  if (full) {
    if (confirm("Bạn có chắc sẽ cập nhật truyện này?") == true) {
      document.querySelector(
        ".page5_chap .post_btn"
      ).innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `;
      // window.alert("Hãy đợi trong giây lất để ta thi triển nhẫn thuật (☭ ͜ʖ ☭)")
      notify("!", "Đang tải lên...");
      await uploadFiles(files, 1);
    } else {
      notify("!", "Đã huỷ!");
    }
  } else {
    // window.alert("Là một nhẫn giả chân chính hãy điển đủ thông tin ¯\(◉◡◔)/¯")
    notify("x", "Hãy vui lòng điền đủ thông tin!");
  }
};

// change
document.querySelector(".page5_c .next_btn").onclick = function () {
  const regex =
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;

  // Use the exec method to extract the matching part from the URL
  const match = regex.exec(window.location.href);
  // Extracted ID will be in match[0]
  const extractedID = match ? match[0] : null;
  document.querySelector(
    ".page5_c #accept_change"
  ).innerHTML = `<img src = "https://cdn.discordapp.com/attachments/1128184786347905054/1129065224998227968/icons8-sharingan-100.png"> `;
  const postData = JSON.stringify({
    id: extractedID,
    novel_name: document.querySelector(".page5_c  .profile_input ").value,
    author_name: document.querySelector(".page5_c  .author_name").value,
    novel_descript: document.querySelector(".page5_c  .novel_descript").value,
    novel_types: listObj2.tempValues,
    novel_status: document.querySelector(".page5_c  .novel_status select")
      .options[
      document.querySelector(".page5_c  .novel_status select").selectedIndex
    ].text,
    novel_avt: document.querySelector(".page5_c  .page5_info_img .your-avt")
      .src,
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  };
  url = "/api/edit_info_novel";
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        notify("n", "Thay đổi thông tin thành công!");
        document.querySelector(
          ".page5_c #accept_change"
        ).innerHTML = `<i class="fa-solid fa-check" aria-hidden="true"></i>`;
      } else if ((response.status = "400")) {
        notify("x", "Tên sáng tác đã tồn tại!");
      } else {
        notify("x", "Có lỗi xảy ra!");
      }
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
};
// my space
document.querySelector(".page5_c .close_btn").onclick = function () {
  cancel();
};

function filterNovels(searchInput, page) {
  searchInput = searchInput.replace(/\s/g, "");
  const regex = new RegExp(
    searchInput.replace(/[-\/\\^$*+?.()|[\]{} ]/g, "\\$&"),
    "i"
  ); // Case-insensitive search

  if (page) {
    $(".page5_home_info_name").each(function () {
      const novelName = $(this).text();

      // Remove accents and diacritics for comparison
      const normalizedNovelName = novelName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // Show or hide based on whether the normalized novel name matches the search input
      $(this)
        .parent()
        .parent()
        .parent()
        .toggle(regex.test(normalizedNovelName.replace(/\s/g, "")));
    });
  } else {
    $(".followed-container .name-novel-top").each(function () {
      const novelName = $(this).find("a").text();

      // Remove accents and diacritics for comparison
      const normalizedNovelName = novelName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // Show or hide based on whether the normalized novel name matches the search input
      $(this)
        .parent()
        .parent()
        .parent()
        .toggle(regex.test(normalizedNovelName.replace(/\s/g, "")));
    });
  }
}

// Event listener for the input field
$(".page5_home .header_search_input").on("input", function () {
  const searchInput = $(this).find("input").val();
  filterNovels(searchInput, 1);
});

$(".followed-container .header_search_input").on("input", function () {
  const searchInput = $(this).find("input").val();
  filterNovels(searchInput, 0);
});

let check = 0;
const page5_post_check = document.querySelector(".page5_post_check");
page5_post_check.onclick = function () {
  if (check == 0) {
    page5_post_check.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
    check = 1;
  } else {
    page5_post_check.innerHTML = `<i class="fa-regular fa-square"></i>`;
    check = 0;
  }
};

Validator({
  form: "#change-pass",
  formGroupSelector: ".group11",
  errorSelector: ".form-message1",
  rules: [
    Validator.isRequired(".old-password", "Vui lòng nhập nội dung này"),
    Validator.isRequired(".new-password-again", "Vui lòng nhập nội dung này"),
    Validator.isRequired(".new-password", "Vui lòng nhập nội dung này"),
    Validator.minLength(".new-password", 6),
    Validator.minLength(".new-password-again", 6),
    Validator.isConfirmed(
      ".new-password-again",
      function () {
        return document.querySelector(".new-password").value;
      },
      "Mật khẩu nhập lại không chính xác"
    ),
  ],
  onSubmit: async function () {
    //gửi request tới csdl server
    const url = `/api/changepass`; // URL của máy chủ mục tiêu
    const postData = JSON.stringify({
      // thông tin đăng kýýý
      status: "Change Pass",
      "Old-Password": `${document.querySelector(".old-password").value}`,
      "new-Password": `${document.querySelector(".new-password").value}`,
      "new-Password-again": `${
        document.querySelector(".new-password-again").value
      }`,
    });

    //BM  _______
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    };

    try {
      const response = await fetch(url, requestOptions);
      // taì khoan hơp lệ
      if (response.status == "200") {
        notify("n", "Chúc mừng bạn đã đổi thành công mật khẩu!");
      } else if (response.status == "403") {
        notify("x", "Mật khẩu của bạn không đúng!");
      } else if (response.status == "404") {
        notify("x", "Anh bạn à !!!");
      } else {
        notify("x", "Máy chủ đang có chút trục trặc !!!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  },
});

Validator({
  form: "#update_info",
  formGroupSelector: ".information_name",
  errorSelector: ".form-message-info",
  rules: [
    Validator.isEmail("#emailprofile", "Vui Lòng Nhập Đúng Định Dạng Email"),
    Validator.isRequired("#fullname", "Vui lòng nhập nội dung này"),
    Validator.isRequired("#author_name", "Vui lòng nhập nội dung này"),
  ],
});
// upload novel page 1:
if (sessionStorage.getItem("novel_name")) {
  novel_name.value = sessionStorage.getItem("novel_name");
}
if (sessionStorage.getItem("author_name")) {
  author_name.value = sessionStorage.getItem("author_name");
}
if (sessionStorage.getItem("novel_name")) {
  novel_descript.value = sessionStorage.getItem("novel_descript");
}
if (sessionStorage.getItem("novel_status")) {
  var options = novel_status.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].text == sessionStorage.getItem("novel_status")) {
      options[i].selected = true;
      break;
    }
  }
}

if (sessionStorage.getItem("novel_types")) {
  var listObj = new ej.dropdowns.MultiSelect(
    {
      // set placeholder to MultiSelect input element
      placeholder: "Chọn thể loại truyện",
      value: sessionStorage.getItem("novel_types").split(","),
    },
    "#ulElement"
  );
} else {
  var listObj = new ej.dropdowns.MultiSelect(
    {
      // set placeholder to MultiSelect input element
      placeholder: "Chọn thể loại truyện",
    },
    "#ulElement"
  );
}

// document.addEventListener("DOMContentLoaded", function () {
// 	if (find_page.value <= 1) {
// 		previous_page.style.display = "none";
// 	}
// 	find_page.addEventListener("keydown", function (event) {
// 		if (find_page.value <= 1) {

// 			previous_page.style.display = "none";
// 		} else if (find_page.value > 1) {

// 			previous_page.style.display = "block";
// 		}
// 		if (event.key === "Enter") {
// 			event.preventDefault();
// 			if (parseInt(find_page.value) > maxcout) {
// 				find_page.style.border = "3px red solid";
// 				next_page.style.display = "none";
// 				getListNovel((maxcout - 1)*6);
// 				find_page.value = maxcout;
// 			} else if (parseInt(find_page.value) <= 0) {
// 				find_page.style.border = "3px red solid";
// 				getListNovel((1 - 1)*6);
// 				find_page.value = 1;
// 			} else {
// 				find_page.style.border = "none";

// 				previous_page.style.display = "block";
// 				next_page.style.display = "block";
// 				getListNovel((find_page.value - 1)*6);
// 			}
// 		}
// 	});

// 	next_page.onclick = function (event) {
// 		if (find_page.value >= 1) {

// 			previous_page.style.display = "block";
// 		}
// 		event.preventDefault();
// 		find_page.value = parseInt(find_page.value) + 1;
// 		getListNovel((find_page.value - 1)*6);
// 		find_page.style.border = "none";
// 	};
// 	previous_page.onclick = function (event) {
// 		event.preventDefault();
// 		find_page.value = parseInt(find_page.value) - 1;
// 		getListNovel((find_page.value - 1)*6);
// 		if (find_page.value <= 1) {

// 			previous_page.style.display = "none";
// 		}
// 		find_page.style.border = "none";
// 	};

// });

// async function getListNovel(offset) {
// 	const url = `/api/api_chapter`;
// 	const regex =
// 		/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/;

// 	const match = regex.exec(window.location.href);

// 	const extractedID = match ? match[0] : null;
// 	const requestOptions = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			id: extractedID,
// 			offset: offset,
// 		}),
// 	};

// 	try {
// 		const response = await fetch(url, requestOptions);

// 		if (response.status === 200) {
// 			let listHTML =""
// 			const data = await response.json();
// 			console.log(data["data"]);
// 			if (data["data"].length < 6) {
// 				next_page.style.display = "none";
// 			}
// 			else if (find_page.value == maxcout) {
// 				next_page.style.display = "none";
// 			}else if (find_page.value > maxcout) {
// 				next_page.style.display = "none";
// 			}
// 			 else {
// 				next_page.style.display = "block";
// 			}
// 			for (let i = 0; i < data["data"].length; i++) {
// 				listHTML +=`
// 				<div class="my_novel_item" id="${data["data"][i].noi_dung_chuong}">
// 				<div class="name_chapter" style="display: flex;">
// 				  <div class="chapter" style="
// 												  display: flex;
// 												  align-items: center;
// 												  justify-content: center;">
// 												  ${data["data"][i].ten_chuong.split(":")[0].slice(0, 6)}
// 				  </div>
// 				  <span>&emsp;</span>
// 				  <input type="text" class="profile_input n_num" style="width: 10%;" value="${data["data"][i].ten_chuong.split(":")[0].slice(6).trim()}" readonly />
// 				  <div style="
// 												  display: flex;
// 												  align-items: center;
// 												  justify-content: center;">
// 					&emsp;:&emsp;
// 				  </div>
// 				  <input type="text" class="profile_input n_name" value="${data["data"][i].ten_chuong.split(":")[1].trim()}">
// 				  <a id='author_see' href = "/reading/${extractedID}/${data["data"][i].ten_chuong.split(":")[0].slice(6).trim()}"><i class="fa-solid fa-eye"></i></a>
// 				</div>
// 				<div class="btn_gritem">
// 				  <div class="novel_conntroller_btn">
// 					<div class="head_b">
// 					  <pre class="file-content" style="margin: 1rem 20px;"></pre>
// 					  <input type="file" class="file-input" style="display:none;" accept=".txt, .docx" />
// 					  <button class="upfile edit_btn">
// 						<i class="fa-solid fa-upload"></i>
// 					  </button>
// 					</div>
// 					<button class="upfile download_btn">
// 					  <i class="fa-solid fa-download"></i>
// 					</button>

// 					<button class="upfile remove_chap">
// 					  <i class="fa-solid fa-xmark"></i>
// 					</button>
// 				  </div>
// 				</div>
// 			  </div>
// 				`
// 			}
// 			console.log(listHTML)
// 			list_chapter_body.innerHTML = listHTML
// 		} else {
// 			alert("Có lỗi xảy ra: " + response.statusText);
// 		}
// 	} catch (error) {
// 		console.log("Error:", error);
// 	}
// }
