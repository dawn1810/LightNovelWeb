const updateNovel = require("../test/Updatenovel");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = require("mongodb");
const func_controller = require("./func.controller");
const NodePersist = require("node-persist");
const server = require("../vip_pro_lib");
const { category } = require("./search.controller.js");
const secretKey = "5gB#2L1!8*1!0)$7vF@9";
const {
	deleteFileFromDrive,
	downloadFileFromDriveforUser,
	uploadFileToDrivebase64,
	getDriveFileLinkAndDescription,
} = require("./google.controller");
const allowedMimeTypes = [
	"text/plain",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const { queryAsync } = require("../dbmysql");
const authenticationKey = Buffer.from(secretKey.padEnd(32, "0"), "utf8").toString("hex");
const uploadDirectory = path.join(".upload_temp", "files");
const storage = NodePersist.create({
	// index
	dir: ".temp",
});
const isBase64 = (value) => {
	const base64Regex = /^data:image\/[a-z]+;base64,/i;
	return base64Regex.test(value);
};
// Test

// function isBase64(str) {
//   try {
//       return btoa(atob(str)) == str;
//   } catch (err) {
//       return false;
//   }
// }

const api_search_more = async (req, res) => {
	try {
		const type_id = decodeURIComponent(req.query.type_id);
		const num_click = decodeURIComponent(req.query.times);
		const search = decodeURIComponent(req.query.search);
		if (type_id && num_click) {
			// get all novels name
			let authors_more = false;
			let name_more = false;
			let genres_more = false;
			if (type_id == "search_more1") {
				// names = await server.find_all_Data({
				//   table: "truyen",
				//   query: { name: { $regex: new RegExp(search, "i") } },
				//   projection: {
				//     name: 1,
				//     author: 1,
				//     image: 1,
				//     status: 1,
				//     no_chapters: 1,
				//   },
				//   skip: 30 * num_click,
				//   limit: 31,
				// });
				let names = await queryAsync(
					`SELECT truyen.id AS _id,
	  ten_truyen AS name,
	   ten_tac_gia AS author, anh_dai_dien AS image, 
	   trang_thai AS status, so_luong_chuong AS no_chapters 
	   FROM truyen, tacgia WHERE 
	   truyen.id_tac_gia = tacgia.id AND ten_truyen REGEXP ? LIMIT 31 OFFSET ${30 * num_click}

	  `,
					[search]
				);
				if (names.length == 31) {
					name_more = true;
					names.pop();
				}
				res.writeHead(200, { "Content-Type": "applicaiton/json" });
				return res.end(JSON.stringify({ truyen: names, showbtn: name_more }));
			} else if (type_id == "search_more2") {
				// get all novels genres
				// genres = await server.find_all_Data({
				//   table: "truyen",
				//   query: { genres: { $in: [new RegExp(search, "i")] } },
				//   projection: {
				//     name: 1,
				//     author: 1,
				//     image: 1,
				//     status: 1,
				//     no_chapters: 1,
				//   },
				//   skip: 30 * num_click,
				//   limit: 31,
				// });
				let genres = await queryAsync(
					`SELECT truyen.id AS _id,
        ten_truyen AS name,
        ten_tac_gia AS author, anh_dai_dien AS image, 
        trang_thai AS status, so_luong_chuong AS no_chapters 
        FROM truyen, tacgia, the_loai_truyen, the_loai WHERE 
        truyen.id = the_loai_truyen.id_truyen
        AND the_loai.id = the_loai_truyen.id_the_loai 
        AND truyen.id_tac_gia = tacgia.id 
        AND the_loai.ten_the_loai REGEXP ? LIMIT 31 OFFSET ${30 * num_click}
        `,
					[search]
				);
				if (genres.length == 31) {
					genres_more = true;
					genres.pop();
				}
				res.writeHead(200, { "Content-Type": "applicaiton/json" });
				return res.end(JSON.stringify({ truyen: genres, showbtn: genres_more }));
			} else if (type_id == "search_more3") {
				// get all novels authors
				// authors = await server.find_all_Data({
				//   table: "truyen",
				//   query: { author: { $regex: new RegExp(search, "i") } },
				//   projection: {
				//     name: 1,
				//     author: 1,
				//     image: 1,
				//     status: 1,
				//     no_chapters: 1,
				//   },
				//   skip: 30 * num_click,
				//   limit: 31,
				// });
				let authors = await queryAsync(
					`SELECT truyen.id AS _id,
	  ten_truyen AS name,
	   ten_tac_gia AS author, anh_dai_dien AS image, 
	   trang_thai AS status, so_luong_chuong AS no_chapters 
	   FROM truyen, tacgia WHERE 
	   truyen.id_tac_gia = tacgia.id AND ten_tac_gia REGEXP ? LIMIT 31 OFFSET ${30 * num_click}
	  `,
					[search]
				);
				if (authors.length == 31) {
					authors_more = true;
					authors.pop();
				}
				res.writeHead(200, { "Content-Type": "applicaiton/json" });
				return res.end(JSON.stringify({ truyen: authors, showbtn: authors_more }));
			}
		} else {
			return res.sendStatus(404);
		}
	} catch (err) {
		console.log("SYSTEM | SEARCH_MORE | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_advanced_search = async (req, res) => {
	try {
		const data = await category(req, res);
		res.writeHead(200, { "Content-Type": "applicaiton/json" });
		res.end(JSON.stringify({ novel: data.novel, more_novel: data.check }));
	} catch (err) {
		console.log("SYSTEM | SEARCH_MORE | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_no_chap = async (req, res) => {
	const data = req.body;
	console.log("SYSTEM | NO_CHAP | Dữ liệu nhận được: ", data);
	try {
		const result = await server.find_all_Data({
			query: { name: data.name },
			table: "truyen",
			projection: { _id: 0, no_chapters: 1 },
			limit: 1,
		});
		// if array emty return zero
		if (result.length === 0) {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("0");
		} else {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end(String(result[0].no_chapters));
		}
	} catch (err) {
		console.log("SYSTEM | NO_CHAP | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_update_novel = async (req, res) => {
	try {
		await updateNovel.updateIds();

		// Đọc tệp JSON không đồng bộ
		const data = fs.promises
			.readFile(destFilePath, "utf8")
			.then((fileContent) => {
				resolve(fileContent);
			})
			.catch((err) => {
				reject(err);
			});

		// Phân tích cú pháp tệp JSON và lưu vào biến dummy
		let dummy = JSON.parse(data);

		// Sử dụng biến dummy ở đây
		console.log(dummy.ids);

		let myobj = {
			name: dummy.title,
			author: "1810s team",
			name_chaps: dummy.name_chap,
			chap_ids: dummy.ids,
			no_chapters: dummy.ids.length,
			genres: dummy["Genre(s)"],
			status: "Đang ra",
			summary: dummy.Summary,
			image: dummy.img,
			views: 0,
			likes: 0,
			update_date: new Date(),
			comment_id: "unknown",
		};

		// clear folder tong hop
		const directory = "./trans/tonghop";

		fs.readdir(directory, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(directory, file), (err) => {
					if (err) throw err;
				});
			}
		});

		// upload to mongoDB
		console.log("SYSTEM | UPDATE_NOVEL | Start upload novel to MongoDB");
		await server.add_one_Data("truyen", myobj);
		console.log("SYSTEM | UPDATE_NOVEL | Complete upload novel to MongoDB");

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | UPDATE_NOVEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_reviews = async (req, res) => {
	const data = req.body;
	console.log("SYSTEM | REVIEWS |", data);
	console.log("id", data.id);
	try {
		const result = {
			no_chapters: 0,
			chapters: [],
		};
		const count = await queryAsync(
			`SELECT COUNT(id) as count FROM chuong WHERE id_truyen = '${data.id}'`
		);
		result.no_chapters = count[0].count;
		result.chapters = await queryAsync(
			`SELECT id, ten_chuong, noi_dung_chuong FROM chuong WHERE id_truyen = '${data.id}' ORDER BY thu_tu`
		);
		console.log(result);

		// console.log('SYSTEM | REVIEWS | Trả về thông tin reviews truyện ', result[0].name);
		res.writeHead(200, { "Content-Type": "application/json" });

		res.end(JSON.stringify(result));
	} catch (err) {
		console.log("SYSTEM | REVIEWS | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_signup = async (req, res) => {
	// { email: 'chandoralong@gmail.com', usr: '1', pass: '959595595959599' }
	const data = req.body;
	console.log("SYSTEM | SIGN_UP | Dữ liệu nhận được: ", data);
	try {
		// usr ton tai => thong bao
		// const result = await server.find_all_Data({
		//   query: { _id: data.usr },
		//   table: "dang_nhap",
		//   projection: { _id: 1 },
		// });
		const g_result = await queryAsync(
			`SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= '${data.usr}'`
		);
		if (g_result.length != 0) {
			return res.sendStatus(404);
		} else {
			// add data to dang_ky database:
			await queryAsync(
				`INSERT INTO  taikhoan_dangky (ten_tai_khoan, mat_khau, email) VALUES ('${data.usr}','${data.pass}','${data.email}')`
			);
			res.sendStatus(200);
			console.log("SYSTEM | SIGN_UP | Sign up success!!!");
		}
	} catch (err) {
		console.log("SYSTEM | SIGN_UP | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_login = async (req, res) => {
	const data = req.body;
	// 403: sai mat khau
	// log in database {
	// usr: 18102003
	// pass: 18102003
	// email: 18102003
	// }
	// data = {usr: bbp, pass: 1234567890}
	console.log("SYSTEM | LOG_IN | Dữ liệu nhận được: ", data);
	try {
		// const f_result = await server.find_all_Data({
		//   query: { usr: data.usr },
		//   table: "dang_ky",
		//   projection: {
		//     _id: 0,
		//     pass: 1,
		//   },
		// });
		let f_result = await queryAsync(
			`SELECT * FROM taikhoan_dangky WHERE ten_tai_khoan= '${data.usr}'`
		);
		if (f_result.length != 0) {
			// log in first time: (sign up database)
			for (let i = 0; i < f_result.length; i++) {
				if (f_result[i].mat_khau == data.pass) {
					// copy data to dang_nhap database
					const id_user = uuidv4();
					await queryAsync(
						`INSERT INTO taikhoan_nguoidung (id, ten_tai_khoan, email, mat_khau) VALUES ('${id_user}','${data.usr}','${f_result[i].email}','${data.pass}')`
					);
					// them truong moi trong tt_nguoi_dung
					await queryAsync(
						`INSERT INTO  thongtin_nguoidung ( id ,  id_tai_khoan ,  ten_hien_thi ) VALUES ('${id_user}','${id_user}','${data.usr}')`
					);
					// them mot nguoi dung moi
					await queryAsync(
						`DELETE FROM taikhoan_dangky WHERE ten_tai_khoan = '${data.usr}' AND mat_khau = '${data.pass}'`
					);
					const user = {
						id: id_user,
						username: data.usr,
						role: 0,
					};
					req.session.user = user;

					return res.sendStatus(200);
				}

				return res.sendStatus(403);
			}
		} //chao e
		else {
			// log in next time: (log in database)
			// const n_result = await server.find_one_Data("dang_nhap", {
			//   _id: data.usr,
			// });
			const n_result = await queryAsync(
				`SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= '${data.usr}' AND mat_khau = '${data.pass}'`
			);
			const role_u = await queryAsync(
				`SELECT role FROM thongtin_nguoidung WHERE id_tai_khoan= '${n_result[0].id}'`
			);
			if (n_result.length != 0) {
				req.session.user = {
					id: n_result[0].id,
					username: data.usr,
					role: role_u[0].role,
				};
				return res.sendStatus(200);
			} else {
				// res.writeHead(403, { "Content-Type": "text/plain" });
				// res.end("Log in fail!!!");
				return res.sendStatus(403);
			}
		}
	} catch (err) {
		console.log("SYSTEM | LOG_IN | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_logout = async (req, res) => {
	// const data = req.body;
	// console.log("SYSTEM | LOGOUT | Dữ liệu nhận được: ", data);
	// const expirationDate = new Date("2018-12-31");
	// res.cookie("account", data.account, {
	//   expires: expirationDate, // Cookie will permernently expire
	//   secure: true,
	//   sameSite: "none",
	//   domain: "localhost",
	//   // domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
	//   path: "/",
	// });
	// res.writeHead(200, { "Content-Type": "text/plain" });
	// console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
	// res.end("Da dang xuat!");
	req.session.destroy((err) => {
		if (err) {
			console.log("SYSTEM | LOG_OUT | Failed to logout:", err);
			return res.sendStatus(500);
		} else {
			return res.sendStatus(200);
		}
	});
};

const api_updateLike = async (req, res) => {
	try {
		const data = req.body;
		// console.log("SYSTEM | UPDATE_LIKE | Dữ liệu nhận được: ", data);
		const account = req.session.user;
		if (account) {
			if (parseInt(data.liked)) {
				// like
				// up one like for current novel
				await queryAsync(`
        UPDATE truyen
        SET luot_thich = luot_thich + 1
        WHERE id = '${data.id_truyen}'
        `);

				// await server.update_one_Data(
				//   "truyen",
				//   { _id: new ObjectId(data.id_truyen) },
				//   { $inc: { likes: 1 } }
				// );

				// add current nodel to like list of current user
				await queryAsync(`
        INSERT INTO truyen_yeu_thich (id, id_nguoi_dung, id_truyen, chuong_hien_tai)
        VALUES ('${uuidv4()}', '${account.id}', '${data.id_truyen}', ${data.curr_chap})
        `);

				// await server.update_one_Data(
				//   "tt_nguoi_dung",
				//   { _id: decodeList[1] },
				//   { $push: { likeNovels: data.id_truyen } }
				// );
				// response client
				res.writeHead(200, { "Content-Type": "text/plain" });
				console.log(`SYSTEM | UPDATE_LIKE | Like cho truyen hien tai`);
				res.end(JSON.stringify("Liked!!!"));
			} else {
				// unlike
				// down on like for current novel
				await queryAsync(`
        UPDATE truyen
        SET luot_thich = luot_thich - 1
        WHERE id = '${data.id_truyen}'
        `);

				// await server.update_one_Data(
				//   "truyen",
				//   { _id: new ObjectId(data.id_truyen) },
				//   { $inc: { likes: -1 } }
				// );
				// remove current nodel from like list of current user
				await queryAsync(`
        DELETE FROM truyen_yeu_thich 
        WHERE id_nguoi_dung = '${account.id}'
        AND id_truyen = '${data.id_truyen}';
        `);

				// await server.update_one_Data(
				//   "tt_nguoi_dung",
				//   { _id: decodeList[1] },
				//   { $pull: { likeNovels: data.id_truyen } }
				// );
				// response client
				res.writeHead(200, { "Content-Type": "text/plain" });
				console.log(`SYSTEM | UPDATE_LIKE | Unlike cho truyen hien tai`);
				res.end(JSON.stringify("Unliked!!!"));
			}
		} else return res.sendStatus(403);
	} catch (err) {
		console.log("SYSTEM | UPDATE_LIKE | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_updateCurrchap = async (req, res) => {
	try {
		const data = req.body;
		const account = req.session.user;
		// update curr_chap for truyen_yeu_thich table of curr user
		await queryAsync(`
			UPDATE truyen_yeu_thich
			SET chuong_hien_tai = ${data.curr_chap}
			WHERE id_truyen = '${data.id_truyen}'
			AND id_nguoi_dung = '${account.id}'
			`);
		res.writeHead(200, { "Content-Type": "text/plain" });
		console.log(`SYSTEM | UPDATE_CURR_CHAP | Da cap nhat `);
		res.end(JSON.stringify("viewed!!!"));
	} catch (err) {
		console.log("SYSTEM | UPDATE_CURR_CHAP | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_updateViews = async (req, res) => {
	try {
		const data = req.body;
		console.log("SYSTEM | UPDATE_VIEWS | Dữ liệu nhận được: ", data);
		// up one views for current novel
		await queryAsync(`
        UPDATE truyen
        SET luot_xem = luot_xem + 1
        WHERE id = '${data.id_truyen}'
        `);

		// await server.update_one_Data(
		//   "truyen",
		//   { _id: new ObjectId(data.id_truyen) },
		//   { $inc: { views: 1 } }
		// );
		// response client
		res.writeHead(200, { "Content-Type": "text/plain" });
		console.log(`SYSTEM | UPDATE_VIEWS | Da tang view cho truyen hien tai`);
		res.end(JSON.stringify("viewed!!!"));
	} catch (err) {
		console.log("SYSTEM | UPDATE_VIEWS | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_uploadNovel = async (req, res) => {
	const data = req.body;
	const account = req.session.user;
	console.log("SYSTEM | UPLOAD_NOVEL | Dữ liệu nhận được: ", data);
	console.log("SYSTEM | UPLOAD_NOVEL | Cookie nhận được: ", account);

	try {
		const novel_id = uuidv4();

		// Get the current date
		const currentDate = new Date();

		// Format the date in MySQL-compatible format
		const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

		let avt_var = data.image;
		if (isBase64(data.image)) {
			// avt_var = await compressImageBase64(data.image, 5);
			const imgdata = await getDriveFileLinkAndDescription(
				await uploadFileToDrivebase64(avt_var)
			);
			avt_var = imgdata.fileLink;
		}

		// add to truyen database
		await queryAsync(`
      INSERT INTO truyen (
        id, 
        id_tac_gia, 
        ten_truyen, 
        so_luong_chuong, 
        tom_tat_noi_dung, 
        anh_dai_dien, 
        trang_thai, 
        ngay_cap_nhat
      )
      VALUES (
        '${novel_id}', 
        '${account.id}', 
        '${data.name}', 
        ${data.name_chaps.length}, 
        '${data.summary}', 
        '${avt_var}', 
        '${data.status}', 
        '${formattedDate}'
      )
    `);

		// add to chuong database
		for (let i = 0; i < data.name_chaps.length; i++) {
			await queryAsync(`
        INSERT INTO chuong (
          id,
          id_truyen,
          ten_chuong,
          noi_dung_chuong,
          thu_tu
        )
        VALUES (
          '${uuidv4()}',
          '${novel_id}',
          '${data.name_chaps[i]}',
          '${data.chap_ids[i]}',
          ${i + 1}
        )
        `);
		}

		for (let i = 0; i < data.genres.length; i++) {
			await queryAsync(`
        INSERT INTO the_loai_truyen (
          id,
          id_the_loai,
          id_truyen
        )
        VALUES (
          '${uuidv4()}',
          '${data.genres[i]}',
          '${novel_id}'
        )
        `);
		}

		// add to the loai database

		// // upload novel content
		// let up_content = {
		//   name: data.name,
		//   author: data.author,
		//   name_chaps: data.name_chaps,
		//   chap_ids: data.chap_ids,
		//   status: data.status,
		//   no_chapters: data.name_chaps.length,
		//   genres: data.genres,
		//   summary: data.summary,
		//   image: data.image,
		//   views: 0,
		//   likes: 0,
		//   update_date: new Date(),
		// };

		// const id_check = await server.add_one_Data("truyen", up_content);

		// console.log(id_check);
		// create a new comment document
		// await server.add_one_Data("comment", {
		//   _id: id_check.insertedId,
		//   content: {
		//     // user_name: content (do what to add)
		//   },
		// });

		// update user's novel list
		// await server.update_one_Data(
		//   "tt_nguoi_dung",
		//   { _id: decodeList[1] },
		//   { $push: { mynovel: id_check.insertedId.toString() } }
		// );

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | UPLOAD NOVEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_update_uploadNovel = async (req, res) => {
	const data = req.body;
	console.log("SYSTEM | UPDATE UPLOAD NOVEL |", data);
	try {
		// Get the current date
		const currentDate = new Date();

		// Format the date in MySQL-compatible format
		const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

		await queryAsync(`
    UPDATE truyen
    SET 
      ngay_cap_nhat = '${formattedDate}',
      so_luong_chuong = so_luong_chuong + ${data.name_chaps.length}
    WHERE id = '${data.id}'
	  `);

		const last_chap =
			(
				await queryAsync(`
    SELECT COUNT(id) as last_chap 
    FROM chuong 
    WHERE id_truyen = '${data.id}'
    `)
			)[0].last_chap + 1;

		// add to chuong database
		for (let i = 0; i < data.name_chaps.length; i++) {
			await queryAsync(`
        INSERT INTO chuong (
          id,
          id_truyen,
          ten_chuong,
          noi_dung_chuong,
          thu_tu
        )
        VALUES (
          '${uuidv4()}',
          '${data.id}',
          '${data.name_chaps[i]}',
          '${data.chap_ids[i]}',
          ${last_chap + i}
        )
        `);
		}

		// await server.update_one_Data(
		//   "truyen",
		//   { _id: new ObjectId(data.id) },
		//   {
		//     $set: {
		//       update_date: new Date(),
		//     },
		//     $push: {
		//       name_chaps: { $each: data.name_chaps },
		//       chap_ids: { $each: data.chap_ids },
		//     },
		//     $inc: {
		//       no_chapters: data.name_chaps.length,
		//     },
		//   }
		// );

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_editNovel = async (req, res) => {
	const data = req.body;
	//   console.log("SYSTEM | EDIT NOVEL |", data);
	// Get the current date
	const currentDate = new Date();

	// Format the date in MySQL-compatible format
	const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

	try {
		// remove all chap that ???
		for (let i = 0; i < data.remove_list.length; i++) {
			// remove chap content in drive
			await deleteFileFromDrive(data.remove_list[i]);
			// remove chapter in chuong table
			await queryAsync(`
			DELETE FROM chuong WHERE noi_dung_chuong = '${data.remove_list[i]}'
			`);
		}

		for (let i = 0; i < data.edit_index.length; i++) {
			// delete old id file from drive:
			await deleteFileFromDrive(data.edit_index[i]);
			// replace old id with new index:
			await queryAsync(`
			UPDATE chuong
			SET
				noi_dung_chuong = '${data.chap_ids[i]}'
			WHERE id_truyen = '${data.id}'
			AND noi_dung_chuong = '${data.edit_index[i]}'
			`); // update chapter's indexs ở phía bên dưới
		}

		// update indexed and name of all novel's chapter
		const result = await queryAsync(`
		SELECT id 
		FROM chuong 
		WHERE id_truyen = '${data.id}';
		`);

		for (let i = 1; i <= result.length; i++) {
			await queryAsync(`
			UPDATE chuong
			SET 
				thu_tu = ${i},
				ten_chuong = '${data.name_chaps[i - 1]}'
			WHERE id = '${result[i - 1].id}';
			`);
		}

		// update no_chap and update_date in truyen database
		await queryAsync(`
			UPDATE truyen
			SET 
				so_luong_chuong = so_luong_chuong - ${data.remove_list.length},
				ngay_cap_nhat = '${formattedDate}'
			WHERE id = '${data.id}'
		`);

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | EDIT NOVEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_editInfoNovel = async (req, res) => {
	const data = req.body;
	// console.log('SYSTEM | EDIT_TRUYEN |', data);
	try {
		// Get the current date
		const currentDate = new Date();

		// Format the date in MySQL-compatible format
		const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

		// change base64 image to link
		let avt_var = data.novel_avt;
		if (isBase64(data.novel_avt)) {
			// avt_var = await compressImageBase64(data.novel_avt, 5);
			const imgdata = await getDriveFileLinkAndDescription(
				await uploadFileToDrivebase64(avt_var)
			);
			avt_var = imgdata.fileLink;
		}

		// update truyen database
		await queryAsync(`
      UPDATE truyen
      SET 
        ten_truyen = '${data.novel_name}',
        trang_thai = '${data.novel_status}',
        tom_tat_noi_dung = '${data.novel_descript}',
        ngay_cap_nhat = '${formattedDate}',
        anh_dai_dien = '${avt_var}'
      WHERE id = '${data.id}';
    `);

		// update genres delete all current novel's genres first then and new one to novel's genres table
		// delete all current novel's genres
		await queryAsync(`DELETE FROM the_loai_truyen WHERE id_truyen = '${data.id}';`);

		for (let i = 0; i < data.novel_types.length; i++) {
			await queryAsync(`
        INSERT INTO the_loai_truyen (
          id,
          id_the_loai,
          id_truyen
        )
        VALUES (
          '${uuidv4()}',
          '${data.novel_types[i]}',
          '${data.id}'
        );
        `);
		}

		// await server.update_one_Data(
		//   "truyen",
		//   { _id: new ObjectId(data.id) },
		//   {
		//     $set: {
		//       name: data.novel_name,
		//       status: data.novel_status,
		//       genres: data.novel_types,
		//       summary: data.novel_descript,
		//       image: data.novel_avt,
		//       update_date: new Date(),
		//     },
		//   }
		// );

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | EDIT INFO NOVEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_uploadFile = async function (req, res) {
	if (!req.files) {
		return res.status(400).send("No file uploaded.");
	}
	let list_name = [];

	// Kiểm tra kiểu dữ liệu của các tệp
	for (let i = 0; i < req.files.length; i++) {
		if (!allowedMimeTypes.includes(req.files[i].mimetype)) {
			return res.status(400).send("Invalid file type.");
		} else if (allowedMimeTypes.indexOf(req.files[i].mimetype) == 1) {
			await func_controller.readDocxFile(
				path.join(uploadDirectory, req.files[i].originalname)
			);
		}
		const fileName = req.files[i].originalname.replace(".docx", ".txt");
		list_name.push(fileName);
	}

	// Xử lý các tệp đã tải lên ở đây
	console.log("SYSTEM | UPLOAD_FILE | Files uploaded:", req.files);
	res.writeHead(200, { "Content-Type": "applicaiton/json" });
	// res.end('ok bro');

	res.end(JSON.stringify(await func_controller.get_full_id(uploadDirectory, list_name)));
};

const api_cancle = async (req, res) => {
	const data = req.body;
	// console.log("SYSTEM | CANCEL |", data);
	try {
		if (data.status == "cancel") {
			for (const id of data.chap_ids) {
				await deleteFileFromDrive(id);
			}

			res.sendStatus(200);
		} else if (data.status == "delete") {
			let result = await queryAsync(
				`SELECT noi_dung_chuong FROM chuong WHERE id_truyen = '${data.id}'`
			);
			const chuongArray = result.map((i) => ({
				id_chap: i.noi_dung_chuong,
			}));
			// let result = await server.find_one_Data("truyen", {
			//   _id: new ObjectId(data.id),
			// });
			// xóa file trên drive
			chuongArray.forEach(async (element) => {
				await deleteFileFromDrive(element.id_chap);
			});
			// for (const id of result.chap_ids) {
			//   await deleteFileFromDrive(id);
			// }

			// xóa truyện trên server
			await queryAsync(`DELETE FROM chuong WHERE id_truyen = '${data.id}'`);
			await queryAsync(`DELETE FROM the_loai_truyen WHERE id_truyen = '${data.id}'`);
			await queryAsync(`DELETE FROM truyen_yeu_thich WHERE id_truyen = '${data.id}'`);
			await queryAsync(`DELETE FROM truyen WHERE id = '${data.id}'`);
			// // await server.delete_one_Data("truyen", { _id: new ObjectId(data.id) });
			// const decodeList = func_controller.decode(account);
			// // console.log(`SYSTEM | CANCEL | Dữ liệu đã giải mã ${decodeList}`);
			// // decodeList = authenticationKey:id:pass
			// if (decodeList[0] == authenticationKey) {
			//   await server.update_one_Data(
			//     "tt_nguoi_dung",
			//     { _id: decodeList[1] },
			//     {
			//       $pull: { mynovel: data.id },
			//     }
			//   );
			// let new_resual = await storage.getItem("novellist");
			// storage.setItem(
			//   "novellist",
			//   await func_controller.deleteItemsById(new_resual, data.id)
			// );
			// } else {
			//   res.sendStatus(404);
			// }
			res.sendStatus(200);
		}
	} catch (err) {
		console.log("SYSTEM | CANCEL | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_updateInfo = async (req, res) => {
	try {
		const account = req.session.user;
		const data = req.body;

		let avt_var = data.img;
		if (isBase64(data.img)) {
			// avt_var = await compressImageBase64(data.img, 5);
			const imgdata = await getDriveFileLinkAndDescription(
				await uploadFileToDrivebase64(avt_var)
			);
			avt_var = imgdata.fileLink;
		}

		// imgdata.fileLink la link hinh

		// update user information
		await queryAsync(`
      UPDATE thongtin_nguoidung
      SET 
        ten_hien_thi = '${data.hoten}',
        anh_dai_dien = '${avt_var}',
        gioi_tinh = ${data.sex}
      WHERE id_tai_khoan = '${account.id}';
    `);

		// update user's email
		await queryAsync(`
      UPDATE taikhoan_nguoidung
      SET 
        email = '${data.email}'
      WHERE id = '${account.id}'
      AND login_way <> 'google';
    `);

		// update author name
		await queryAsync(`
    INSERT INTO tacgia (id, id_nguoi_dung, ten_tac_gia)
    VALUES (
      '${account.id}',
      '${account.id}',
      '${data.author_name}'
    ) 
    ON DUPLICATE KEY UPDATE ten_tac_gia = VALUES(ten_tac_gia);
    `);

		res.sendStatus(200);
	} catch (err) {
		console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_changePass = async (req, res) => {
	try {
		const account = req.session.user;
		const data = req.body;
		// console.log("SYSTEM | CHANGE_PASSWORD |", data);
		const result = await queryAsync(`
    SELECT mat_khau as pass
    FROM taikhoan_nguoidung
    WHERE id = '${account.id}'
    `);

		// const n_result = await server.find_one_Data("dang_nhap", {
		//   _id: decodeList[1],
		// });
		if (data["Old-Password"] == result.pass) {
			await queryAsync(`
      UPDATE taikhoan_nguoidung
      SET 
        mat_khau = '${data["new-Password"]}'
      WHERE id = '${account.id}';
      `);
			// await server.update_one_Data(
			//   "dang_nhap",
			//   { _id: decodeList[1] },
			//   {
			//     $set: {
			//       pass: data["new-Password"],
			//     },
			//   }
			// );
			res.sendStatus(200);
		} else {
			res.status(403).send("Sai pass cũ");
		}
	} catch (err) {
		console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
		res.sendStatus(500);
	}
};

const api_downloadChap = async (req, res) => {
	const data = req.body;
	console.log("SYSTEM | DOWNLOAD CHAPTER |", data);
	downloadFileFromDriveforUser(data.id, res);
};

const api_get_list_novel = async (req, res) => {
	try {
		// Chuyển đổi giá trị offset và n sang kiểu số
		const offset = parseInt(req.body.offset, 10);
		const n = parseInt(req.body.n, 10);
		const fill = parseInt(req.body.fill, 10);

		// Kiểm tra xem giá trị có phải là số hay không
		if (isNaN(offset) || isNaN(n)) {
			res.status(400).json({ error: "Giá trị không hợp lệ" });
			return;
		}
		let result = [];
		switch (fill) {
			case 1: // if (x === 'value1')
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY ngay_cap_nhat DESC LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;

			case 2: // if (x === 'value2')
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY ngay_cap_nhat ASC LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;
			case 3: // if (x === 'value2')
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY luot_xem DESC  LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;
			case 4: // if (x === 'value2')
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY luot_xem ASC LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;

			default:
				//code here
				break;
		}
		// get max offset
		count_novel = await queryAsync("SELECT COUNT(*) AS row_count FROM truyen;");

		if (result && result.length > 0) {
			res.status(200).json({ data: result, count: count_novel });
		} else {
			res.status(404).json({ error: "Không tìm thấy chương" });
		}
	} catch (error) {
		console.error("Error in api_get_list_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_get_info_novel = async (req, res) => {
	try {
		const idtruyen = req.body.id;
		const result = await queryAsync(
			`SELECT truyen.*, tacgia.ten_tac_gia AS ten_tac_gia, GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ', ') AS ten_the_loai FROM truyen JOIN tacgia ON truyen.id_tac_gia = tacgia.id JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id WHERE truyen.id = '${idtruyen}' GROUP BY truyen.id ORDER BY ngay_cap_nhat LIMIT 1 ;`
		);
		if (result && result.length > 0) {
			res.status(200).json({ data: result });
		} else {
			res.status(404).json({ error: "Không tìm thấy truyện" });
		}
	} catch (error) {
		console.error("Error in api_get_i4_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

//block truyen
const update_state_novel = async (req, res) => {
	try {
		const idtruyen = req.body.id;
		console.log("idtruyen:", idtruyen);
		const state = req.body.state;
		const result = await queryAsync("UPDATE truyen SET ban = ? WHERE id = ?", [
			state,
			idtruyen,
		]);
		if (result.affectedRows === 1) {
			res.status(200).json({ success: true, message: state });
		} else {
			res.status(404).json({ error: "Không tìm thấy truyện để cập nhật" });
		}
	} catch (error) {
		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};
//block truyen
//block_account
const api_block_account = async (req, res) => {
	try {
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		console.log("id_acc:", id_acc);
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung SET  last_role = role, role = 0 WHERE id = '${id_acc}'`
		);
		const role = await queryAsync(
			`SELECT last_role FROM thongtin_nguoidung WHERE id = '${id_acc}'`
		);
		if (result.affectedRows === 1) {
			res.status(200).json({ role: role });
		} else {
			res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_open_account = async (req, res) => {
	try {
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung SET  role = last_role, last_role = 0 WHERE id = '${id_acc}' AND last_role <> 0;`
		);
		const role = await queryAsync(
			`SELECT last_role FROM thongtin_nguoidung  WHERE id = '${id_acc}' ;`
		);
		if (result.affectedRows === 1) {
			res.status(200).json({ role: role });
		} else {
			res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};
const api_block_author = async (req, res) => {
	try {
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung SET  role = 1 WHERE id = '${id_acc}' `
		);
		// const role = await queryAsync(
		//   `SELECT role FROM thongtin_nguoidung  WHERE id = '${id_acc}' ;`
		// );
		if (result.affectedRows === 1) {
			res.status(200).json({ role: "ok ha" });
		} else {
			res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};
const api_open_author = async (req, res) => {
	try {
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung SET  role = 2 WHERE id = '${id_acc}' ;`
		);
		// const role = await queryAsync(
		//   `SELECT role FROM thongtin_nguoidung  WHERE id = '${id_acc}' ;`
		// );
		if (result.affectedRows === 1) {
			res.status(200).json({ role: "ok ha" });
		} else {
			res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_get_quick_template = async (req, res) => {
	return res.download("./local_template/mau_dang_truyen.docx");
};

const api_quick_upload = async (req, res) => {
	if (!req.files) {
		return res.status(400).send("No file uploaded.");
	}

	if (allowedMimeTypes.indexOf(req.files[0].mimetype) == 1) {
		console.log(files.name);
		// await func_controller.readDocxFile(path.join(uploadDirectory, req.files[0].originalname));
	} else {
		return res.status(400).send("Invalid file type.");
	}
	// const fileName = req.files[i].originalname.replace(".docx", ".txt");
	// list_name.push(fileName);

	// // Xử lý các tệp đã tải lên ở đây
	// console.log("SYSTEM | UPLOAD_FILE | Files uploaded:", req.files);
	// res.writeHead(200, { "Content-Type": "applicaiton/json" });

	// res.end(JSON.stringify(await func_controller.get_full_id(uploadDirectory, list_name)));
};

module.exports = {
	api_search_more,
	api_advanced_search,
	api_no_chap,
	api_reviews,
	api_update_novel,
	api_signup,
	api_login,
	api_logout,
	api_updateLike,
	api_updateCurrchap,
	api_updateViews,
	api_uploadNovel,
	api_update_uploadNovel,
	api_editNovel,
	api_uploadFile,
	api_editInfoNovel,
	api_updateInfo,
	api_changePass,
	api_downloadChap,
	api_cancle,
	authenticationKey,
	api_get_list_novel,
	api_get_info_novel,
	update_state_novel,
	api_block_account,
	api_open_account,
	api_block_author,
	api_open_author,
	api_get_quick_template,
	api_quick_upload,
};
