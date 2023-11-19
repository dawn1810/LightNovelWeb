const find_page = document.querySelector(".find_page");
const next_page = document.querySelector(".next_page");
const previous_page = document.querySelector(".previous_page");
const list_container = document.querySelector(".author_nvlist_container");
const ban_novel = document.querySelector(".ban_novel");
const info_truyen = document.querySelector(".status");
document.addEventListener("DOMContentLoaded", function () {
  if (find_page.value <= 1) {
    previous_page.style.display = "none";
  }
  find_page.addEventListener("keydown", function (event) {
    if (find_page.value <= 1) {
      previous_page.style.display = "none";
    } else if (find_page.value >= 1) {
      previous_page.style.display = "block";
    }
    if (event.key === "Enter") {
      event.preventDefault();
      getListNovel((find_page.value - 1) * 4, select.value);
    }
  });
  const select = document.querySelector(".select select ");
  let item_truyen = document.querySelectorAll(".followed-item");
  next_page.onclick = function (event) {
    if (find_page.value >= 1) {
      previous_page.style.display = "block";
    }
    event.preventDefault();
    find_page.value = parseInt(find_page.value) + 1;
    getListNovel((find_page.value - 1) * 4, select.value);
  };
  previous_page.onclick = function (event) {
    event.preventDefault();
    find_page.value = parseInt(find_page.value) - 1;
    getListNovel((find_page.value - 1) * 4, select.value);
    if (find_page.value <= 1) {
      previous_page.style.display = "none";
    }
  };

  click_truyen();

  select.onchange = function () {
    console.log("haha");
    getListNovel(0, select.value);
  };
});

const click_truyen = () => {
  for (const item of document.querySelectorAll(".followed-item")) {
    item.onclick = function () {
      const id = item.getAttribute("id");
      console.log(id);
      getNovel(id);
    };
  }
};

async function getListNovel(offset, fill) {
  const url = `${currentURL}/api/api_get_novel`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      n: 4,
      offset: offset,
      fill: fill,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (response.status === 200) {
      const data = await response.json();

      let novelListHTML = "";
      if (data["data"].length < 4) {
        next_page.style.display = "none";
      } else {
        next_page.style.display = "block";
      }
      for (let i = 0; i < data["data"].length; i++) {
        novelListHTML += `
        <!-- item -->
                <div class="followed-item" id="${data["data"][i].id}">

                  <div class="name-container">

                    <div class="name-container_img">
                      <img src="${data["data"][i].anh_dai_dien}" alt="" class="avt" />
                    </div>

                    <div class="name-novel">
                      <div class="name-novel-top">
                        <h2><a href="https://gamek.mediacdn.vn">${data["data"][i].ten_truyen}</a>
                        </h2>
                        <input type="checkbox" name="" id="">

                      </div>
                      <p>
                        sech
                      </p>
                      <div class="last-time-container">
                        <div class="chapter"><a href="">Chap
                        ${data["data"][i].so_luong_chuong}</a></div>
                        <div class="time">${data["data"][i].trang_thai}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- item -->`;

        console.log(data["data"][i]);
      }

      // Gán toàn bộ chuỗi vào list_container
      list_container.innerHTML = novelListHTML;
      item_truyen = document.querySelectorAll(".followed-item");
      click_truyen();
    } else {
      alert("Có lỗi xảy ra: " + response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

async function getNovel(id) {
  const url = `${currentURL}/api/api_get_info_novel`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.data[0]);

      let novelListHTML = ""; // Tạo một chuỗi để tích hợp nội dung thẻ

      for (let i = 0; i < data["data"].length; i++) {
        if (data.data[0].trang_thai === "block") {
          novelListHTML += `
        <!-- item -->
        <div class="avt_space">
        <div class="author_avt_container">
        <img src="https://m.media-amazon.com/images/M/MV5BZTIxMzBhNzYtY2NiZS00MGVlLWFmYjEtYWJlMjUyZjhmOThmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="author_">
        <div class="truyen_info">
          <p>Người đăng tải: <span>${data.data[0].ten_tac_gia}</span></p>
          <p>Thể loại: <span>${data.data[0].ten_the_loai}</span></p>
          <p>Tổng số chương: <span>${data.data[0].so_luong_chuong}</span></p>

          <button class="status_btn"><a href="/reviews/${data.data[0].id}">Đọc truyện</a></button>
        </div>
      </div>
      <span class="anime_name">
        ${data.data[0].ten_truyen}
      </span>
      </div>



            <div class="status-content">
              <div class="info">
          
                <div class="chart">
                  <canvas id="newChart"></canvas>
                </div>
              </div>
              <div class="author_btn_container">
                <button class="status_btn edit_novel">Chỉnh sửa</button>
                <button class="status_btn ban_novel" value='${data.data[0].id}'>Mở Khoá</button>
              </div>
            </div>
                <!-- item -->`;
        
        } else {
          novelListHTML += `
        <!-- item -->
        <div class="avt_space">
        <div class="author_avt_container">
        <img src="https://m.media-amazon.com/images/M/MV5BZTIxMzBhNzYtY2NiZS00MGVlLWFmYjEtYWJlMjUyZjhmOThmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="author_">
        <div class="truyen_info">
          <p>Người đăng tải: <span>${data.data[0].ten_tac_gia}</span></p>
          <p>Thể loại: <span>${data.data[0].ten_the_loai}</span></p>
          <p>Tổng số chương: <span>${data.data[0].so_luong_chuong}</span></p>

          <button class="status_btn"><a href="/reviews/${data.data[0].id}">Đọc truyện</a></button>
        </div>
      </div>
      <span class="anime_name">
        ${data.data[0].ten_truyen}
      </span>
      </div>



            <div class="status-content">
              <div class="info">
          
                <div class="chart">
                  <canvas id="newChart"></canvas>
                </div>
              </div>
              <div class="author_btn_container">
                <button class="status_btn edit_novel">Chỉnh sửa</button>
                <button class="status_btn ban_novel" value='${data.data[0].id}'>Khoá truyện</button>
              </div>
            </div>
                <!-- item -->`;
        }
      }

      // Gán toàn bộ chuỗi vào list_container
      info_truyen.innerHTML = novelListHTML;
      chart();
    } else {
      alert("Có lỗi xảy ra: " + response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

const chart = () => {
  // Lấy phần tử canvas
  var canvas = document.getElementById("newChart");

  // Kiểm tra xem đã tồn tại biểu đồ với ID 'myChart' chưa, và xóa nó nếu có
  var existingChart = Chart.getChart("myChart");
  if (existingChart) {
    console.log("haha");
    existingChart.destroy();
  }

  // Tạo biểu đồ mới trên canvas
  // Tạo lại context cho canvas
  // canvas.getContext('2d');
  const data2 = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
    datasets: [
      {
        label: "Lượt xem",
        data: [500, 1000, 750, 1200, 900, 1500],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Lượt thích",
        data: [800, 1200, 650, 100, 750, 1400],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // 3. Cấu hình biểu đồ
  const config = {
    type: "line",
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // 4. Vẽ biểu đồ
  var myChart = new Chart(canvas, config);
};

// ban novel

ban_novel.onclick = function (event) {
  event.preventDefault();
  if(ban_novel.innerText === "Khoá truyện") {
    changeState(ban_novel.value, "block");
    ban_novel.innerText="mở khoá"
  }else{
    changeState(ban_novel.value, "Đang Ra");
    ban_novel.innerText="Khoá truyện"
  }
};

async function changeState(id, state) {
  const url = `${currentURL}/api/update_state_novel`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      state: state,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (response.status === 200) {
      return;
    } else {
      alert("Có lỗi xảy ra: " + response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}



