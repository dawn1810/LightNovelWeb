const server = require("../vip_pro_lib");
const { queryAsync } = require("../dbmysql");
const {
	getFirstAndLastDayOfWeek,
	getFirstAndLastDayOfMonth,
	getFirstAndLastDayOfYear,
} = require("./func.controller.js");

// Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const search = async (req, res) => {
	try {
		const search = decodeURIComponent(req.query.search);
		if (search) {

			let names = await queryAsync(
				`SELECT truyen.id AS _id,
				ten_truyen AS name,
				ten_tac_gia AS author, anh_dai_dien AS image, 
				trang_thai AS status, so_luong_chuong AS no_chapters 
				FROM truyen, tacgia WHERE 
				truyen.ban!= 1 AND truyen.id_tac_gia = tacgia.id AND ten_truyen REGEXP ? ORDER BY truyen.id LIMIT 31
				`,
				[search]
			);

			let authors = await queryAsync(
				`SELECT truyen.id AS _id,
				ten_truyen AS name,
				ten_tac_gia AS author, anh_dai_dien AS image, 
				trang_thai AS status, so_luong_chuong AS no_chapters 
				FROM truyen, tacgia WHERE 
				truyen.ban!= 1 AND truyen.id_tac_gia = tacgia.id AND ten_tac_gia REGEXP ? ORDER BY truyen.id LIMIT 31
				`,
				[search]
			);
			let genres = await queryAsync(
			`SELECT truyen.id AS _id,
			ten_truyen AS name,
			ten_tac_gia AS author, anh_dai_dien AS image, 
			trang_thai AS status, so_luong_chuong AS no_chapters 
			FROM truyen, tacgia, the_loai_truyen, the_loai WHERE 
			truyen.id = the_loai_truyen.id_truyen
			AND the_loai.id = the_loai_truyen.id_the_loai 
			AND truyen.id_tac_gia = tacgia.id 
			AND truyen.ban!= 1
			AND the_loai.ten_the_loai REGEXP ? ORDER BY truyen.id LIMIT 31
			`,
				[search]
			);
			//
			// console.log(names);
			let authors_more = false;
			let name_more = false;
			let genres_more = false;
			if (names.length == 31) {
				name_more = true;
				names.pop();
			}
			if (authors.length == 31) {
				authors_more = true;
				authors.pop();
			}
			if (genres.length == 31) {
				genres_more = true;
				genres.pop();
			}

			res.render("search.ejs", {
				headerFile: "header",
				footerFile: "footer",
				names: names,
				name_more: name_more,
				authors: authors,
				authors_more: authors_more,
				genres: genres,
				genres_more: genres_more,
				what_search: search,
				typesearch: req.query.type
			});
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log("SYSTEM | SEARCH | ERROR | ", err);
		res.sendStatus(500);
	}
};

const category = async (req, res, limit = 31) => {
	const update_day = decodeURIComponent(req.query.update_day);
	const types = decodeURIComponent(req.query.types);
	const num_chaps = decodeURIComponent(req.query.num_chaps);
	const status = decodeURIComponent(req.query.status);
	const sort_by = decodeURIComponent(req.query.sort_by);
	let skip = req.query.skip;
	if (skip && typeof skip === "string") {
		skip = decodeURIComponent(skip);
	}
	const temp_limit = req.query.limit;
	if (temp_limit) {
		limit = decodeURIComponent(temp_limit);
	}
	let query = {};
	let sort = {};
	// update date query
	switch (update_day) {
		case "2":
			query.update_date = "truyen.ngay_cap_nhat = CURDATE()";
			break;
		case "3":
			query.update_date = `truyen.ngay_cap_nhat BETWEEN ${
				getFirstAndLastDayOfWeek().firstDay
			} AND ${getFirstAndLastDayOfWeek().lastDay}`;
			break;
		case "4":
			query.update_date = `truyen.ngay_cap_nhat BETWEEN ${
				getFirstAndLastDayOfMonth().firstDay
			} AND ${getFirstAndLastDayOfMonth().lastDay}`;
			break;
		case "5":
			query.update_date = `truyen.ngay_cap_nhat BETWEEN ${
				getFirstAndLastDayOfYear().firstDay
			} AND ${getFirstAndLastDayOfYear().lastDay}`;
			break;
	}

	// types query
	if (types != "undefined" && types) {
		const arr = types.split(",");

		// Sử dụng map để thêm dấu nháy đơn cho mỗi phần tử
		const formattedArr = arr.map((item) => `'${item}'`);
		// Sử dụng join để nối các phần tử thành một chuỗi, và thêm dấu ngoặc đơn ()
		if (arr.length > 0) {
			const result = `(${formattedArr.join(", ")})`;
			query.genres = `the_loai.ten_the_loai IN ${result} AND the_loai.id = the_loai_truyen.id_the_loai AND the_loai_truyen.id_truyen = truyen.id`;
		}
	}

	// num chap query
	switch (num_chaps) {
		case "2":
			query.no_chapters = "truyen.so_luong_chuong >= 10";
			break;
		case "3":
			query.no_chapters = "truyen.so_luong_chuong >= 100";
			break;
		case "4":
			query.no_chapters = "truyen.so_luong_chuong >= 1000";
			break;
	}

	// status query:
	switch (status) {
		case "2":
			query.status = "truyen.trang_thai = 'Đang ra'";
			break;
		case "3":
			query.status = "truyen.trang_thai = 'Hoàn thành'";
			break;
		case "4":
			query.status = "truyen.trang_thai = 'Tạm dừng'";
			break;
	}

	// status query:
	switch (sort_by) {
		case "1":
			sort =
				"truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC";
			break;
		case "2":
			sort =
				"truyen.luot_thich DESC, truyen.luot_xem DESC, truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC";
			break;
		case "3":
			sort =
				"truyen.ngay_cap_nhat DESC, truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ten_truyen ASC";
			break;
	}
	// Lọc ra những điều kiện có giá trị không phải chuỗi rỗng
	const validConditions = Object.values(query).filter((condition) => condition !== "");

	// Kiểm tra xem có điều kiện nào tồn tại không
	if (validConditions.length > 0) {
		// Ghép các điều kiện thành một chuỗi truy vấn SQL
		const sqlQuery = validConditions.join(" AND ");

		// In kết quả
		result = await queryAsync(
			`SELECT
	 truyen.id AS _id,
	 truyen.ten_truyen AS name,
	 tacgia.ten_tac_gia AS author,
	 truyen.anh_dai_dien AS image,
	 truyen.trang_thai AS status,
	 truyen.so_luong_chuong AS no_chapters
   FROM
	 tacgia, truyen
	 ${query.genres ? ", the_loai, the_loai_truyen" : ""}
   WHERE
   truyen.ban !=1 AND
	 truyen.id_tac_gia = tacgia.id AND
	 ${sqlQuery}
	 ${sort.length > 0 ? " ORDER BY " + sort : " "}
   LIMIT ${limit} ${skip !== undefined ? "OFFSET " + (limit - 1) * parseInt(skip) : ""}
   `
		);
	} else {
		result = await queryAsync(
			`SELECT
	  truyen.id AS _id,
	  truyen.ten_truyen AS name,
	  tacgia.ten_tac_gia AS author,
	  truyen.anh_dai_dien AS image,
	  truyen.trang_thai AS status,
	  truyen.so_luong_chuong AS no_chapters
	FROM
	  tacgia, truyen
	  ${query.genres ? ", the_loai, the_loai_truyen" : " "}
	WHERE
    truyen.ban != 1 AND
	  truyen.id_tac_gia = tacgia.id
	  ${sort.length > 0 ? " ORDER BY " + sort : " "}
	LIMIT ${limit} ${skip !== undefined ? "OFFSET " + (limit - 1) * parseInt(skip) : ""}
	`
		);
	}
	let more_novel = false;
	if (result.length == limit) {
		result.pop();
		more_novel = true;
	}
	return {
		novel: result,
		check: more_novel,
	};
};

const category_module = async (req, res) => {
	try {
		const theloai = await queryAsync(
			`SELECT DISTINCT ten_the_loai FROM the_loai`);
		const data = await category(req, res);
		res.render("category-page.ejs", {
			headerFile: "header",
			footerFile: "footer",
			result: data.novel,
			more_novel: data.check,
			autochoose: req.query,
			theloai:theloai
		});
	} catch (err) {
		console.log("SYSTEM | SEARCH | ERROR | ", err);
		res.sendStatus(500);
	}
};
module.exports = {
	search,
	category_module,
	category
};
