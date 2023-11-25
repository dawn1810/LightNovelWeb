const server = require("../vip_pro_lib");
const { queryAsync } = require("../dbmysql");

// Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const search = async (req, res) => {
	try {
		const search = decodeURIComponent(req.query.search);
		if (search) {
			// get all novels name
			//   let names = await server.find_all_Data({
			//     table: "truyen",
			//     query: { name: { $regex: new RegExp(search, "i") } },
			//     projection: {
			//       name: 1,
			//       author: 1,
			//       image: 1,
			//       status: 1,
			//       no_chapters: 1,
			//     },
			//     limit: 31,
			//   });

			let names = await queryAsync(`SELECT truyen.id AS _id,
	  ten_truyen AS name,
	   ten_tac_gia AS author, anh_dai_dien AS image, 
	   trang_thai AS status, so_luong_chuong AS no_chapters 
	   FROM truyen, tacgia WHERE 
	   truyen.id_tac_gia = tacgia.id AND ten_truyen REGEXP '${search}' LIMIT 31
	  `);

			// get all novels authors
			//   let authors = await server.find_all_Data({
			//     table: "truyen",
			//     query: { author: { $regex: new RegExp(search, "i") } },
			//     projection: {
			//       name: 1,
			//       author: 1,
			//       image: 1,
			//       status: 1,
			//       no_chapters: 1,
			//     },
			//     limit: 31,
			//   });
			let authors = await queryAsync(`SELECT truyen.id AS _id,
	  ten_truyen AS name,
	   ten_tac_gia AS author, anh_dai_dien AS image, 
	   trang_thai AS status, so_luong_chuong AS no_chapters 
	   FROM truyen, tacgia WHERE 
	   truyen.id_tac_gia = tacgia.id AND ten_tac_gia REGEXP '${search}' LIMIT 31
	  `);
			// get all novels genres
			//   let genres = await server.find_all_Data({
			//     table: "truyen",
			//     query: { genres: { $in: [new RegExp(search, "i")] } },
			//     projection: {
			//       name: 1,
			//       author: 1,
			//       image: 1,
			//       status: 1,
			//       no_chapters: 1,
			//     },
			//     limit: 31,
			//   });
			let genres = await queryAsync(`SELECT truyen.id AS _id,
	  ten_truyen AS name,
	  ten_tac_gia AS author, anh_dai_dien AS image, 
	  trang_thai AS status, so_luong_chuong AS no_chapters 
	  FROM truyen, tacgia, the_loai_truyen, the_loai WHERE 
	  truyen.id = the_loai_truyen.id_truyen
	  AND the_loai.id = the_loai_truyen.id_the_loai 
	  AND truyen.id_tac_gia = tacgia.id 
	  AND the_loai.ten_the_loai REGEXP '${search}' LIMIT 31
	  `);
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
				typesearch: req.query.type,
			});
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log("SYSTEM | SEARCH | ERROR | ", err);
		res.sendStatus(500);
	}
};

const category = async (req, res) => {
	try {
		let result = await queryAsync(
			"SELECT truyen.id AS _id, truyen.ten_truyen AS name, tacgia.ten_tac_gia AS author, truyen.anh_dai_dien AS image, truyen.trang_thai AS status, truyen.so_luong_chuong AS no_chapters FROM tacgia, truyen  WHERE truyen.id_tac_gia = tacgia.id  ORDER BY truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC LIMIT 31"
		);

		let more_novel = false;
		if (result.length == 31) {
			more_novel = true;
			result.pop();
		}

		res.render("category-page.ejs", {
			headerFile: "header",
			footerFile: "footer",
			result: result,
			more_novel: more_novel,
		});
	} catch (err) {
		console.log("SYSTEM | SEARCH | ERROR | ", err);
		res.sendStatus(500);
	}
};

module.exports = {
	search,
	category,
};
