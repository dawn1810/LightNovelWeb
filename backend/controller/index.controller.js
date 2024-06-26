const path = require("path");
const { queryAsync } = require("../dbmysql");
const { category } = require("./search.controller.js");
const { decrypt,calTime } = require("./func.controller.js");

const rederIndex = async (req, res) => {
	try {
		function isWithin30Minutes(timeString) {
			// Tạo đối tượng Date cho thời gian hiện tại
			var currentTime = new Date();
			// Tạo đối tượng Date từ chuỗi thời gian được cung cấp
			var providedTime = new Date(timeString);
			// Tính chênh lệch thời gian (đơn vị là mili giây)
			var timeDifference = currentTime - providedTime;
			// Chuyển đổi chênh lệch thời gian sang phút
			var timeDifferenceInMinutes = timeDifference / (1000 * 60);
			// So sánh với ngưỡng 5 phút
			return timeDifferenceInMinutes <= 30;
		}
		// let result = await storage.getItem("novellist");
		currentURL = req.url; 
		let showpopup = "null";
		const data_reset_pass = req.query.id;
		if (data_reset_pass) {
			const data_reset = decrypt(data_reset_pass).split("?");
			if ((data_reset.length = 3)) {
				const username_reset = data_reset[0];
				const time_reset = data_reset[1];
				if (isWithin30Minutes(time_reset)) {
					showpopup = "true";
				} else {
					showpopup = "false";
				}
			}
		}
		let truyen_top_view = await queryAsync(
			`SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.luot_xem DESC, truyen.ten_truyen ASC LIMIT 5`
		);

		let truyen_top_like = await queryAsync(
			`SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.luot_thich DESC, truyen.ten_truyen ASC LIMIT 5`
		);
		let truyen_top_date = await queryAsync(
			`SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC LIMIT 5`
		);
		let truyen_hoanthanh = await queryAsync(
			`SELECT DISTINCT 
				truyen.id,
				truyen.ten_truyen,
				tacgia.ten_tac_gia AS author,
				truyen.anh_dai_dien ,
				truyen.trang_thai ,
				truyen.so_luong_chuong 
				FROM
				tacgia, truyen,the_loai, the_loai_truyen  WHERE truyen.id_tac_gia = tacgia.id AND trang_thai = 'Hoàn thành'  AND truyen.ban !=1 ORDER BY ngay_cap_nhat DESC LIMIT 12`
		);
		let truyen_dangra = await queryAsync(
			`SELECT truyen.*,tacgia.ten_tac_gia as author FROM truyen,tacgia WHERE truyen.id_tac_gia = tacgia.id AND  trang_thai = 'Đang ra' AND truyen.ban !=1 ORDER BY ngay_cap_nhat DESC LIMIT 12`
		);
		for (let i = 0; i < truyen_top_view.length; i++) {
			truyen_top_view[i].ngay_cap_nhat = calTime(
				truyen_top_view[i].ngay_cap_nhat
			);
		  }
		  for (let i = 0; i < truyen_top_like.length; i++) {
			truyen_top_like[i].ngay_cap_nhat = calTime(
				truyen_top_like[i].ngay_cap_nhat
			);
		  }
		  for (let i = 0; i < truyen_top_date.length; i++) {
			truyen_top_date[i].ngay_cap_nhat = calTime(
				truyen_top_date[i].ngay_cap_nhat
			);
		  }
		  for (let i = 0; i < truyen_hoanthanh.length; i++) {
			truyen_hoanthanh[i].ngay_cap_nhat = calTime(
				truyen_hoanthanh[i].ngay_cap_nhat
			);
		  }
		const data_novel_avd = await category({ query: 1 }, null, 13);
		const theloai = await queryAsync(`SELECT DISTINCT ten_the_loai FROM the_loai`);
		let result_slider = [];
		const truyen_slider = await queryAsync(
			`SELECT slider.anh,truyen.id,truyen.tom_tat_noi_dung,truyen.ten_truyen FROM truyen,slider WHERE truyen.id = slider.id_truyen`
		);
		result_slider = [...truyen_slider];
		for (let i = 0; i < truyen_slider.length; i++) {
			const id = truyen_slider[i].id;
			let theloaiID = await queryAsync(
				`SELECT DISTINCT id_the_loai FROM the_loai_truyen WHERE the_loai_truyen.id_truyen = ?`,
				[id]
			);

			const genresID = theloaiID.map((row) => row.id_the_loai);
			const genresList = await queryAsync(
				`SELECT DISTINCT ten_the_loai FROM the_loai WHERE id IN (?)`,
				[genresID]
			);
			const genres = genresList.map((row) => row.ten_the_loai);
			result_slider[i].genres = genres;
		}
		return res.render("index", {
			showpopup: showpopup,
			headerFile: "header",
			footerFile: "footer",
			// jsontruyen: result,
			truyen_top_view: truyen_top_view,
			truyen_top_like: truyen_top_like,
			truyen_top_date: truyen_top_date,
			truyen_hoanthanh: truyen_hoanthanh,
			truyen_dangra: truyen_dangra,
			novel_avd: data_novel_avd.novel,
			novel_check: data_novel_avd.check,
			slider: result_slider,
			theloai: theloai,
		});
	} catch (e) {
		console.log(e);
		return res.redirect("/");
	}
};

const parentDirectory = path.resolve(__dirname, "..", "..");
const unpage = (req, res) => {
	res.sendFile(parentDirectory + "/error/404.html");
};

const blockpage = (req, res) => {
	res.sendFile(parentDirectory + "/error/403.html");
};

module.exports = {
	rederIndex,
	unpage,
	blockpage,
};
