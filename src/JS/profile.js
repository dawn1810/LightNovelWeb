const avtBtn = document.querySelector(".dropdown-trigger");
const avtUpLoad = document.getElementById("file-upload");
const avatar = document.querySelector(".your-avt");
const dropZone = document.querySelector(".drop-zone");

const Setting_pageWrapper = document.querySelectorAll(".Setting_pageWrapper");
const Setting_item = document.querySelectorAll(".Setting_sidebar-list_item");

for (let i = 0; i < Setting_item.length; i++) {
  // console.log(Setting_item[i])
  console.log(i);
  Setting_item[i].onclick = function () {
    for (const key of Setting_item) {
      key.style.backgroundColor = "transparent";
      console.log(key);
    }
    Setting_item[i].style.backgroundColor = "var(--st-pr-btn-bg)";
    for (const key of Setting_pageWrapper) {
      key.style.display = "none";
      console.log(key);
    }
    if (i == Setting_pageWrapper.length) {
      // Setting_pageWrapper[i].style.display = 'none'
    } else {
      Setting_pageWrapper[i].style.display = "block";
    }
    console.log(i);

    console.log(Setting_pageWrapper[i]);
  };
}
const button_file = document.querySelectorAll("#button_file");

for (const button of button_file) {
  button.onclick = function (e) {
    e.preventDefault();
    console.log("ok");
    console.log(button.parentElement);
    let file = button.parentElement.querySelector("input");
    file.focus();
    file.setSelectionRange(file.value.length, file.value.length);
  };
}
// document.querySelector('.button_file').onclick = function(e){
//     e.preventDefault();
//     console.log('ok')
//     button.parentElement.querySelector('#fullname').click()
// }

// // Set avt as default:
// if (localStorage.getItem('avt')) {
// 	setAvtDefault(localStorage.getItem('avt'));
// }

// function setAvtDefault(base64Data) {
// 	avatar.src = base64Data;
// }

// change the avatar image
avtBtn.addEventListener("click", function (event) {
  avtUpLoad.click();
  return false;
});

avtUpLoad.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    avatar.src = reader.result;
  };
  reader.readAsDataURL(file);

  // disappear drop text
  if (avatar.src !== "") {
    dropZone.innerHTML = "";
  }
});

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    avatar.src = reader.result;
  };
  reader.readAsDataURL(file);

  // disappear drop text
  if (avatar.src !== "") {
    dropZone.innerHTML = "";
  }
}

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Danh sách các phần tử
const myList = [
  "Súng ống đầy đủ",
  "Ngực công, mông thủ",
  "Thay đổi theo nồng độ cồn",
  "3D siêu chân thực",
  "Không có giới tính",
  "Sướng là được",
  "Thú tính",
  "Lưỡng long nhất thể",
  "Quan trọng là thần thái",
];

document.querySelector(".button_random").onclick = function (e) {
  e.preventDefault();
  // Gọi hàm để tạo số ngẫu nhiên
  const randomElement = getRandomElement(myList);
  console.log(randomElement);
  document.querySelector(".sex_random").innerHTML = randomElement;
};



const add_new = document.querySelector('.add_new')
const page5_home = document.querySelector('.page5_home')
const page5_a = document.querySelector('.page5_a')
add_new.onclick = function () {
  page5_home.style.display = 'none'
  page5_a.style.display = 'block'
}



