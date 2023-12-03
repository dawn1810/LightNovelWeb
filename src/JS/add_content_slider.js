const avtBtn = document.querySelectorAll(".dropdown-trigger");
const avtUpLoad = document.querySelector("#file-upload");
const avatar = document.querySelector(".page1 .your-avt");
const dropZone = document.querySelectorAll(".drop-zone");
const maxSizeInBytes = 10485760;
const maxSizeImg = 1048576;
const modal = document.querySelector('.modal_slider')
const edit_btn = document.querySelectorAll('.slider_btn')
for (const btn of edit_btn) {
	btn.onclick = () =>{

		modal.style.display = 'block';
		modal.setAttribute("id", btn.parentElement.getAttribute('id')) 
		console.log(modal.id)
		getNovel(btn.parentElement.querySelector('.slider_item_title span').innerText)
		document.querySelector('.your-avt').src=btn.parentElement.querySelector('.slider_item_img img').src
	}
}
modal.onclick = ()=>{
	console.log('hahah')
	modal.style.display = 'none';
}
document.querySelector('.modal_main').onclick = (event)=>{
	event.stopPropagation();
}
for (const button of avtBtn) {
	button.addEventListener("click", function (event) {
		button.querySelector("#file-upload").click();
		return false;
	});
}

	avtUpLoad.addEventListener("change", function (event) {
		const file = event.target.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				avtUpLoad.parentElement.parentElement.querySelector(".your-avt").src = base64;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (avtUpLoad.parentElement.parentElement.querySelector(".your-avt").src !== "") {
				avtUpLoad.parentElement.parentElement.querySelector(".drop-zone").innerHTML = "";
			}
		}
	});

function allowDrop(event) {
	event.preventDefault();
}
function validateFile(file, checkdoc = false) {
	let allowedFormats = undefined; // Allowed file formats
	let maxSize = undefined;
	let message_arlet = undefined;
	if (checkdoc == true) {
		allowedFormats = ["docx", "txt"]; // Allowed file formats
		maxSize = maxSizeInBytes;
		message_arlet = "Server có hạn, chọn file ảnh <10MB thoi người đẹp!.";
	} else {
		allowedFormats = ["jpg", "jpeg", "png"]; // Allowed file formats
		maxSize = maxSizeImg;
		message_arlet = "Server có hạn, chọn file ảnh <1MB thoi người đẹp!.";
	}
	
	// Check file format
	const fileName = file.name;
	const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
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

dropZone.ondrop = function (event) {
    console.log('hahaha')
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (validateFile(file)) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result;
				dropZone.parentElement.querySelector(".your-avt").src = base64;
			};
			reader.readAsDataURL(file);

			// disappear drop text
			if (avatar5.src !== "") {
				dropZone.parentElement.querySelector(".your-avt").innerHTML = "haha";
			}
		}
	};

	const find_page = document.querySelector(".find_page");
	const next_page = document.querySelector(".next_page");
	const previous_page = document.querySelector(".previous_page");
const list_container = document.querySelector(".author_nvlist_container");
const select = document.querySelector(".select select ");

const maxcout = parseInt(document.getElementById('max').innerText)
const info_truyen = document.querySelector(".avt_space");

document.addEventListener("DOMContentLoaded", function () {
	

	if (find_page.value <= 1) {
	  previous_page.style.display = "none";
	}
	find_page.addEventListener("keydown", function (event) {
	  if (find_page.value < 1) {
		previous_page.style.display = "none";
	  } else if (find_page.value >= 1) {
		previous_page.style.display = "block";
	  }
	  if (event.key === "Enter") {
		event.preventDefault();
		if (parseInt(find_page.value) > maxcout) {
		  find_page.style.border = "3px red solid"
		  getListNovel((maxcout - 1) * 4, select.value);
		  find_page.value = maxcout
		}
		else if (parseInt(find_page.value) <= 0) {
		  find_page.style.border = "3px red solid"
		  getListNovel((1 - 1) * 4, select.value);
		  find_page.value = 1
		}
		else {
		  find_page.style.border = "none"
		  previous_page.style.display = "block";
		  next_page.style.display = "block";
		  getListNovel((find_page.value - 1) * 4, select.value);
		}
	  }
	});
  
	let item_truyen = document.querySelectorAll(".followed-item");
	next_page.onclick = function (event) {
	  if (find_page.value >= 1) {
		previous_page.style.display = "block";
	  }
	  event.preventDefault();
	  find_page.value = parseInt(find_page.value) + 1;
	  getListNovel((find_page.value - 1) * 4, select.value);
	  find_page.style.border = "none"
	};
	previous_page.onclick = function (event) {
	  event.preventDefault();
	  find_page.value = parseInt(find_page.value) - 1;
	  getListNovel((find_page.value - 1) * 4, select.value);
	  if (find_page.value <= 1) {
		previous_page.style.display = "none";
	  }
	  find_page.style.border = "none"
	};
  
	click_truyen();
  
	select.onchange = function () {
	  getListNovel(0, select.value);
	};
});
const click_truyen = () => {
	for (const item of document.querySelectorAll(".followed-item")) {
	  item.onclick = function () {
		const id = item.getAttribute("id");
		getNovel(id);
	  };
	}
  };
async function getListNovel(offset, fill) {
	const url = `/api/api_get_novel`;
  
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
		  const ban =data["data"][i].ban;
		  const ban_state = (ban === 1) ? 'Đã khoá' : ((ban === 0) ? 'Không Khoá' : '');
		  novelListHTML += `
		  <!-- item -->
				  <div class="followed-item" id="${data["data"][i].id}">
  
					<div class="name-container">
  
					  <div class="name-container_img">
						<img src="${data["data"][i].anh_dai_dien}" alt="" class="avt" />
					  </div>
  
					  <div class="name-novel">
						<div class="name-novel-top">
						  <h2><a >${data["data"][i].ten_truyen}</a>
						  </h2>
							<h3>Trạng Thái: ${ban_state}</h3>
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
	const url = `/api/api_get_info_novel`;
  
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
  
		let novelListHTML = ""; 
  
		for (let i = 0; i < data["data"].length; i++) {
		  if (data.data[0].ban == 1) {
			novelListHTML += `
		  <!-- item -->
		  
		  <div class="author_avt_container" id="${data.data[0].id}">
		  <img src="${data.data[0].anh_dai_dien}">
		  <div class="truyen_info">
			<p>Người đăng tải: <span>${data.data[0].ten_tac_gia}</span></p>
			<p>Thể loại: <span>${data.data[0].ten_the_loai}</span></p>
			<p>Tổng số chương: <span>${data.data[0].so_luong_chuong}</span></p>
  
		  </div>
		</div>
		<span class="anime_name">
		  ${data.data[0].ten_truyen}
		</span>
		</div>
  
  
  
			 
			 
			  <!-- item -->`;
		  } else {
			novelListHTML += `
		  <!-- item -->
		  
		  <div class="author_avt_container" id="${data.data[0].id}">
		  <img src="${data.data[0].anh_dai_dien}" alt="" class="author_">
		  <div class="truyen_info">
			<p>Người đăng tải: <span>${data.data[0].ten_tac_gia}</span></p>
			<p>Thể loại: <span>${data.data[0].ten_the_loai}</span></p>
			<p>Tổng số chương: <span>${data.data[0].so_luong_chuong}</span></p>
  
		  </div>
		</div>
		<span class="anime_name">
		  ${data.data[0].ten_truyen}
		</span>
		</div>
  
  
  
			  
			 
				  <!-- item -->`;
		  }
		}
  
		// Gán toàn bộ chuỗi vào list_container
		info_truyen.innerHTML = novelListHTML;
	  } else {
		alert("Có lỗi xảy ra: " + response.statusText);
	  }
	} catch (error) {
	  console.log("Error:", error);
	}
  }
  window.addEventListener("beforeunload", function (event) {
	const before_num=(Number(find_page.value) > maxcout) ? maxcout : ((Number(find_page.value) <= 1) ? 1 : Number(find_page.value));
  
	localStorage.setItem("curentpage", before_num);
  });
  document.querySelector(".edit_slider_btn").onclick = function (e) {
	  e.preventDefault();
	  this.innerHTML = "Đang cập nhật...";

	const postData = JSON.stringify({
		id: modal.getAttribute('id'),
		id_truyen : document.querySelector('.author_avt_container').getAttribute('id'),
		novel_avt: document.querySelector(".author_status .your-avt").src,
	});
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: postData,
	};
	url = "/api/edit_slider";
	fetch(url, requestOptions)
		.then((response) => {
			if (response.ok) {
				notify("n", "Thay đổi thông tin thành công!");
				this.innerHTML="Cập nhật"
			} else {
				notify("x", "Có lỗi xảy ra!");
			}
		})
		.catch((error) => {
			console.error("Error downloading file:", error);
		});
};



  
	