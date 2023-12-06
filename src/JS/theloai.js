document.addEventListener("DOMContentLoaded", function () {
  const them_btn = document.querySelector(".insert_cate button");
  const del_btn = document.querySelectorAll(".delete_category");
  const table = document.querySelector(".table table");
  them_btn.onclick = async () => {
    const them_input = document.querySelector(".insert_cate input");
    if (them_input.value) {
      const url = `/api/add_new_category`;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: them_input.value,
        }),
      };

      try {
        const response = await fetch(url, requestOptions);

        if (response.status === 200) {
          const data = await response.json();
          notify("n", "Thêm thể loại thành công!");
          indert_table(data);
        } else {
          notify("x", "Không thể thêm thể loại !");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      notify("x", "Hãy điền tên thể loại !");
    }
  };
  const del_row = async (btn) => {
    const url = `/api/delete_category`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: btn.getAttribute("id"),
      }),
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      if (response.status === 200) {
        notify("n", "Xoá thể loại thành công!");
        indert_table(data);
      } else {
        notify("x", "Không thể xoá thể loại !");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  for (const btn of del_btn) {
      btn.onclick = () => {
        del_row(btn)
    };
  }

  const indert_table = (data) => {
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
    var row = table.insertRow();

    // Thêm các ô vào hàng
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell3.classList.add("delete_category_gr");

    // Thiết lập nội dung cho các ô
    cell1.innerHTML = "ID";
    cell2.innerHTML = "Tên";
    cell3.innerHTML = "Xoá";
    for (let i = 0; i < data.newData.length; i++) {
      // Tạo một hàng mới
      var row = table.insertRow();

      // Thêm các ô vào hàng
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      var cell3 = row.insertCell();

      // Thiết lập nội dung cho các ô
      cell1.innerHTML = data.newData[i].id;
      cell2.innerHTML = data.newData[i].ten_the_loai;
      cell3.innerHTML = `<button id="${data.newData[i].id}" class="delete_category">Xoá</button>`;
      cell3.classList.add("delete_category_gr");
    }
    const del_btn = document.querySelectorAll(".delete_category");
    for (const btn of del_btn) {
      btn.onclick = function () {
        del_row(btn);
      };
    }
  };
});
