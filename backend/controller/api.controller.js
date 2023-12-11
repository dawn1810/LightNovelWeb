const path = require("path");
const { v4: uuidv4 } = require("uuid");
const func_controller = require("./func.controller");
const { category } = require("./search.controller.js");
const { admin_id } = require("./admin.controller.js");

const mammoth = require("mammoth");
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
const uploadDirectory = path.join(".upload_temp", "files");

const isBase64 = (value) => {
	const base64Regex = /^data:image\/[a-z]+;base64,/i;
	return base64Regex.test(value);
};

const api_reset_password = async (req, res) => {
	const data = req.body;
	try {
		// reset
		await queryAsync("START TRANSACTION");

		if (data.pass && data.user) {
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
			const data_reset_pass = data.user;
			if (data_reset_pass) {
				const data_reset = func_controller.decrypt(data_reset_pass).split("?");
				if ((data_reset.length = 3)) {
					const username_reset = data_reset[0];
					const time_reset = data_reset[1];
					if (isWithin30Minutes(time_reset)) {
						await queryAsync(
							`UPDATE taikhoan_nguoidung SET mat_khau = ? WHERE ten_tai_khoan = ?`,
							[func_controller.hashPassword(data.pass), username_reset]
						);
						const n_result = await queryAsync(
							`SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= ?`,
							[username_reset]
						);
						const role_u = await queryAsync(
							`SELECT role FROM thongtin_nguoidung WHERE id_tai_khoan= ?`,
							[n_result[0].id]
						);

						req.session.user = {
							id: n_result[0].id,
							username: data.usr,
							role: role_u[0].role,
						};
						await queryAsync("COMMIT");

						return res.sendStatus(200); // ctrl z lamf cho
					} else {
						await queryAsync("COMMIT");

						return res.sendStatus(404);
					}
				}
			}
		} // send mail
		else if (data.usr && data.email) {
			const data_user = await queryAsync(
				"SELECT * FROM `taikhoan_nguoidung` WHERE ten_tai_khoan = ? AND email = ?",
				[data.usr, data.email]
			);
			if (data_user.length > 0) {
				let thoiGianHienTai = new Date();
				let chuoiThoiGian = thoiGianHienTai.toISOString();
				const bimat = func_controller.encrypt(
					data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
				);
				const url = `http://localhost:6969/resetyourpassword?id=${bimat}`;
				func_controller.sendEmail(url, data.email, "email", "Yêu cầu đặt lại mật khẩu");
				await queryAsync("COMMIT");

				return res.sendStatus(200);
			} else {
				await queryAsync("COMMIT");

				return res.sendStatus(404);
			}
		}
	} catch (e) {
		await queryAsync("ROLLBACK");
		return res.sendStatus(500);
	}
};

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
				let names = await queryAsync(
					`SELECT truyen.id AS _id,
					ten_truyen AS name,
					ten_tac_gia AS author, anh_dai_dien AS image, 
					trang_thai AS status, so_luong_chuong AS no_chapters 
					FROM truyen, tacgia WHERE 
					truyen.id_tac_gia = tacgia.id AND ten_truyen REGEXP ? LIMIT 31 OFFSET ?
					`,
					[search, 30 * num_click]
				);
				if (names.length == 31) {
					name_more = true;
					names.pop();
				}
				res.writeHead(200, { "Content-Type": "applicaiton/json" });
				return res.end(JSON.stringify({ truyen: names, showbtn: name_more }));
			} else if (type_id == "search_more2") {
				let genres = await queryAsync(
					`SELECT truyen.id AS _id,
					ten_truyen AS name,
					ten_tac_gia AS author, anh_dai_dien AS image, 
					trang_thai AS status, so_luong_chuong AS no_chapters 
					FROM truyen, tacgia, the_loai_truyen, the_loai WHERE 
					truyen.id = the_loai_truyen.id_truyen
					AND the_loai.id = the_loai_truyen.id_the_loai 
					AND truyen.id_tac_gia = tacgia.id 
					AND the_loai.ten_the_loai REGEXP ? LIMIT 31 OFFSET ?
					`,
					[search, 30 * num_click]
				);
				if (genres.length == 31) {
					genres_more = true;
					genres.pop();
				}
				res.writeHead(200, { "Content-Type": "applicaiton/json" });
				return res.end(JSON.stringify({ truyen: genres, showbtn: genres_more }));
			} else if (type_id == "search_more3") {
				let authors = await queryAsync(
					`SELECT truyen.id AS _id,
					ten_truyen AS name,
					ten_tac_gia AS author, anh_dai_dien AS image, 
					trang_thai AS status, so_luong_chuong AS no_chapters 
					FROM truyen, tacgia WHERE 
					truyen.id_tac_gia = tacgia.id AND ten_tac_gia REGEXP ? LIMIT 31 OFFSET ?
					`,
					[search, 30 * num_click]
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
		return res.end(JSON.stringify({ novel: data.novel, more_novel: data.check }));
	} catch (err) {
		console.log("SYSTEM | SEARCH_MORE | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_reviews = async (req, res) => {
	const data = req.body;
	try {
		const result = {
			no_chapters: 0,
			chapters: [],
		};
		const count = await queryAsync(
			`SELECT COUNT(id) as count FROM chuong WHERE id_truyen = ?`,
			[data.id]
		);
		result.no_chapters = count[0].count;
		result.chapters = await queryAsync(
			`SELECT id, ten_chuong, noi_dung_chuong FROM chuong WHERE id_truyen = ? ORDER BY thu_tu`,
			[data.id]
		);

		res.writeHead(200, { "Content-Type": "application/json" });

		return res.end(JSON.stringify(result));
	} catch (err) {
		console.log("SYSTEM | REVIEWS | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_signup = async (req, res) => {
	// { email: "chandoralong@gmail.com", usr: "1", pass: "959595595959599" }
	const data = req.body;
	try {
		await queryAsync("START TRANSACTION");

		const g_result = await queryAsync(
			`SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan = ?`,
			[data.usr]
		);
		if (g_result.length != 0) {
			await queryAsync("COMMIT");

			return res.sendStatus(404);
		} else {
			// add data to dang_ky database:
			await queryAsync(
				`INSERT INTO  taikhoan_dangky (ten_tai_khoan, mat_khau, email) VALUES (
					?,
					?, 
					?
				)`,
				[data.usr, func_controller.hashPassword(data.pass), data.email]
			);
			await queryAsync("COMMIT");

			return res.sendStatus(200);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | SIGN_UP | ERROR | ", err);
		return res.sendStatus(500);
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

	try {
		await queryAsync("START TRANSACTION");
		let f_result = await queryAsync(`SELECT * FROM taikhoan_dangky WHERE ten_tai_khoan = ?`, [
			data.usr,
		]);
		if (f_result.length != 0) {
			// log in first time: (sign up database)
			for (let i = 0; i < f_result.length; i++) {
				if (func_controller.comparePassword(data.pass, f_result[i].mat_khau)) {
					// copy data to dang_nhap database
					const id_user = uuidv4();
					await queryAsync(
						`INSERT INTO taikhoan_nguoidung (id, ten_tai_khoan, email, mat_khau) 
						VALUES (
							?,
							?,
							?,
							?
						)`,
						[
							id_user,
							data.usr,
							f_result[i].email,
							func_controller.hashPassword(data.pass),
						]
					);
					// them truong moi trong tt_nguoi_dung
					await queryAsync(
						`INSERT INTO  thongtin_nguoidung ( id ,  id_tai_khoan ,  ten_hien_thi ) 
						VALUES (
							?,
							?,
							?
						)`,
						[id_user, id_user, data.usr]
					);
					// them mot nguoi dung moi
					await queryAsync(`DELETE FROM taikhoan_dangky WHERE ten_tai_khoan = ?`, [
						data.usr,
					]);
					const user = {
						id: id_user,
						username: data.usr,
						role: 1,
					};
					req.session.user = user;
					await queryAsync("COMMIT");

					return res.sendStatus(200);
				}
				await queryAsync("COMMIT");

				return res.sendStatus(403);
			}
		} //chao e
		else {
			// log in next time: (log in database)
			// const n_result = await server.find_one_Data("dang_nhap", {
			//   _id: data.usr,
			// });
			const n_result = await queryAsync(
				`SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= ? AND mat_khau = ?`,
				[data.usr, func_controller.hashPassword(data.pass)]
			);
			if (n_result.length != 0) {
				const role_u = await queryAsync(
					`SELECT role FROM thongtin_nguoidung WHERE id_tai_khoan = ?`,
					[n_result[0].id]
				);
				if (role_u[0].role == 0) {
					await queryAsync("COMMIT");

					return res.sendStatus(404);
				}
				req.session.user = {
					id: n_result[0].id,
					username: data.usr,
					role: role_u[0].role,
				};
				await queryAsync("COMMIT");

				return res.sendStatus(200);
			} else {
				// res.writeHead(403, { "Content-Type": "text/plain" });
				// res.end("Log in fail!!!");
				await queryAsync("COMMIT");

				return res.sendStatus(403);
			}
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | LOG_IN | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_logout = async (req, res) => {
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
		const account = req.session.user;

		await queryAsync("START TRANSACTION");
		if (account) {
			if (parseInt(data.liked)) {
				// like
				// up one like for current novel
				await queryAsync(
					`
				UPDATE truyen
				SET luot_thich = luot_thich + 1
				WHERE id = ?`,
					[data.id_truyen]
				);

				// add current nodel to like list of current user
				await queryAsync(
					`
					INSERT INTO truyen_yeu_thich (id, id_nguoi_dung, id_truyen, chuong_hien_tai)
					VALUES (?, ?, ?, ?)`,
					[uuidv4(), account.id, data.id_truyen, data.curr_chap]
				);
				await queryAsync("COMMIT");

				// response client
				res.writeHead(200, { "Content-Type": "text/plain" });
				return res.end(JSON.stringify("Liked!!!"));
			} else {
				// unlike
				// down on like for current novel
				await queryAsync(
					`
					UPDATE truyen
					SET luot_thich = luot_thich - 1
					WHERE id = ?`,
					[data.id_truyen]
				);

				// remove current nodel from like list of current user
				await queryAsync(
					`
					DELETE FROM truyen_yeu_thich 
					WHERE id_nguoi_dung = ?
					AND id_truyen = ?;`,
					[account.id, data.id_truyen]
				);
				await queryAsync("COMMIT");
				// response client
				res.writeHead(200, { "Content-Type": "text/plain" });
				return res.end(JSON.stringify("Unliked!!!"));
			}
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE_LIKE | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_updateCurrchap = async (req, res) => {
	try {
		const data = req.body;
		const account = req.session.user;

		await queryAsync("START TRANSACTION");
		if (account) {
			// update curr_chap for truyen_yeu_thich table of curr user
			await queryAsync(
				`
				UPDATE truyen_yeu_thich
				SET chuong_hien_tai = ?
				WHERE id_truyen = ?
				AND id_nguoi_dung = ?
				`,
				[data.curr_chap, data.id_truyen, account.id]
			);
			await queryAsync("COMMIT");

			res.writeHead(200, { "Content-Type": "text/plain" });
			return res.end(JSON.stringify("viewed!!!"));
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE_CURR_CHAP | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_updateViews = async (req, res) => {
	try {
		const data = req.body;
		await queryAsync("START TRANSACTION");

		// up one views for current novel
		await queryAsync(
			`
			UPDATE truyen
			SET luot_xem = luot_xem + 1
			WHERE id = ?
			`,
			[data.id_truyen]
		);
		await queryAsync("COMMIT");

		// response client
		res.writeHead(200, { "Content-Type": "text/plain" });
		return res.end(JSON.stringify("viewed!!!"));
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE_VIEWS | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_uploadNovel = async (req, res) => {
	try {
		await queryAsync("START TRANSACTION");

		const data = req.body;
		const account = req.session.user;
		if (account) {
			const novel_id = uuidv4();

			let avt_var = data.image;
			if (isBase64(data.image)) {
				// avt_var = await compressImageBase64(data.image, 5);
				const imgdata = await getDriveFileLinkAndDescription(
					await uploadFileToDrivebase64(avt_var)
				);
				avt_var = imgdata.fileLink;
			}

			if (account.id === admin_id) {
				const author_name = await queryAsync(
					`
					SELECT id, id_nguoi_dung FROM tacgia WHERE ten_tac_gia = ?`,
					[data.author]
				);
				if (author_name.length && author_name[0].id_nguoi_dung === admin_id) {
					// tac giả đã tồn tại
					// add to truyen database
					await queryAsync(
						`
						INSERT INTO truyen (
						id, 
						id_tac_gia, 
						ten_truyen, 
						so_luong_chuong, 
						tom_tat_noi_dung, 
						anh_dai_dien, 
						trang_thai
						)
						VALUES (?,?,?,?,?,?,?,?)`,
						[
							novel_id,
							author_name[0].id,
							data.name,
							data.name_chaps.length,
							data.summary,
							avt_var,
							data.status
						]
					);
				} else if (!author_name.length) {
					const author_id = uuidv4();
					await queryAsync(`INSERT INTO tacgia VALUE (?,?,?)`, [
						author_id,
						account.id,
						data.author
					]);

					await queryAsync(
						`
						INSERT INTO truyen (
							id, 
							id_tac_gia, 
							ten_truyen, 
							so_luong_chuong, 
							tom_tat_noi_dung, 
							anh_dai_dien, 
							trang_thai
						)
						VALUES (?,?,?,?,?,?,?,?)`,
						[
							novel_id,
							author_id,
							data.name,
							data.name_chaps.length,
							data.summary,
							avt_var,
							data.status
						]
					);
				} else if (author_name[0].id_nguoi_dung !== admin_id) {
					await queryAsync("COMMIT");
					return res.sendStatus(400);
				}
			} else {
				// add to truyen database
				await queryAsync(
					`
					INSERT INTO truyen (
						id, 
						id_tac_gia, 
						ten_truyen, 
						so_luong_chuong, 
						tom_tat_noi_dung, 
						anh_dai_dien, 
						trang_thai
					)
					VALUES (?,?,?,?,?,?,?,?)`,
					[
						novel_id,
						account.id,
						data.name,
						data.name_chaps.length,
						data.summary,
						avt_var,
						data.status
					]
				);
			}

			// add to chuong database
			for (let i = 0; i < data.name_chaps.length; i++) {
				await queryAsync(
					`
					INSERT INTO chuong (
					id,
					id_truyen,
					ten_chuong,
					noi_dung_chuong,
					thu_tu
					)
					VALUES (?,?,?,?,?)`,
					[uuidv4(), novel_id, data.name_chaps[i], data.chap_ids[i], i + 1]
				);
			}

			const data_genre_id = await queryAsync(
				"SELECT * FROM the_loai WHERE ten_the_loai IN (?)",
				[data.genres]
			);

			const ds_genre_id = data_genre_id.map((row) => row.id);

			for (let i = 0; i < ds_genre_id.length; i++) {
				await queryAsync(
					`
					INSERT INTO the_loai_truyen (
					id,
					id_the_loai,
					id_truyen
					)
					VALUES (?,?,?)`,
					[uuidv4(), ds_genre_id[i], novel_id]
				);
			}
			await queryAsync("COMMIT");

			return res.sendStatus(200);
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPLOAD NOVEL | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_update_uploadNovel = async (req, res) => {
	const data = req.body;

	try {
		await queryAsync("START TRANSACTION");

		await queryAsync(
			`
		UPDATE truyen
		SET 
			so_luong_chuong = so_luong_chuong + ?,
			ngay_cap_nhat = CURRENT_TIMESTAMP
		WHERE id = ?`,
			[data.name_chaps.length, data.id]
		);

		const last_chap =
			(
				await queryAsync(
					`
				SELECT COUNT(id) as last_chap 
				FROM chuong 
				WHERE id_truyen = ?`,
					[data.id]
				)
			)[0].last_chap + 1;

		
			// add to chuong database
		for (let i = 0; i < data.name_chaps.length; i++) {
			await queryAsync(
				`
			INSERT INTO chuong (
			id,
			id_truyen,
			ten_chuong,
			noi_dung_chuong,
			thu_tu
			)
			VALUES (?,?,?,?,?)`,
				[uuidv4(), data.id, data.name_chaps[i], data.chap_ids[i], last_chap + i]
			);
		}

		await queryAsync("COMMIT");

		return res.sendStatus(200);
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_editNovel = async (req, res) => {
	const data = req.body;

	try {
		await queryAsync("START TRANSACTION");

		// remove all chap that ???
		for (let i = 0; i < data.remove_list.length; i++) {
			// remove chap content in drive
			await deleteFileFromDrive(data.remove_list[i]);
			// remove chapter in chuong table
			await queryAsync(
				`
				DELETE FROM chuong WHERE noi_dung_chuong = ?
				`,
				[data.remove_list[i]]
			);
		}

		for (let i = 0; i < data.edit_index.length; i++) {
			// delete old id file from drive:
			await deleteFileFromDrive(data.edit_index[i]);
			// replace old id with new index:
			await queryAsync(
				`
				UPDATE chuong
				SET
					noi_dung_chuong = ?
				WHERE id_truyen = ?
				AND noi_dung_chuong = ?
				`,
				[data.chap_ids[i], data.id, data.edit_index[i]]
			); // update chapter"s indexs ở phía bên dưới
		}

		// update indexed and name of all novel's chapter
		const result = await queryAsync(
			`
			SELECT id 
			FROM chuong 
			WHERE id_truyen = ?;`,
			[data.id]
		);

		for (let i = 1; i <= result.length; i++) {
			const nc = data.name_chaps[i - 1].split(/:(.*)/s);
			await queryAsync(
				`
				UPDATE chuong
				SET 
					thu_tu = ?,
					ten_chuong = ?
				WHERE id = ?;
				`,
				[i, `Chương ${i}: ${nc[1]}`, result[i - 1].id]
			);
		}

		// update no_chap and update_date in truyen database
		await queryAsync(
			`
			UPDATE truyen
			SET 
				so_luong_chuong = so_luong_chuong - ?,
				ngay_cap_nhat = CURRENT_TIMESTAMP
			WHERE id = ?
		`,
			[data.remove_list.length, data.id]
		);

		
		await queryAsync("COMMIT");

		return res.sendStatus(200);
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | EDIT NOVEL | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_editInfoNovel = async (req, res) => {
	try {
		const data = req.body;
		const account = req.session.user;
		await queryAsync("START TRANSACTION");

		if (account) {

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
			if (account.id === admin_id) {

				const author_name = await queryAsync(
					`
					  SELECT id, id_nguoi_dung FROM tacgia WHERE ten_tac_gia = ?`,
					[data.author_name]
				);
				if (author_name.length && author_name[0].id_nguoi_dung === admin_id) {
					await queryAsync(
						`
						UPDATE truyen
						SET 
							id_tac_gia = ?,
							ten_truyen = ?,
							trang_thai = ?,
							tom_tat_noi_dung = ?,
							anh_dai_dien = ?
						WHERE id = ?;`,
						[
							author_name[0].id,
							data.novel_name,
							data.novel_status,
							data.novel_descript,
							avt_var,
							data.id,
						]
					);
				} else if (!author_name.length) {
					const author_id = uuidv4();
					await queryAsync(`INSERT INTO tacgia VALUE (?,?,?)`, [
						author_id,
						account.id,
						data.author_name,
					]);
					await queryAsync(
						`
						UPDATE truyen
						SET 
							id_tac_gia = ?,
							ten_truyen = ?,
							trang_thai = ?,
							tom_tat_noi_dung = ?,
							anh_dai_dien = ?
						WHERE id = ?;`,
						[
							author_id,
							data.novel_name,
							data.novel_status,
							data.novel_descript,
							avt_var,
							data.id,
						]
					);

					// delete all admin author that dont have any novels
					await queryAsync(
						`
						DELETE 
						FROM tacgia 
						WHERE id_nguoi_dung = ?
						AND ( 
							SELECT COUNT(id) 
							FROM truyen
							WHERE id_tac_gia = tacgia.id
							) <= 0;
						`,
						[admin_id]
					);
				} else if (author_name[0].id_nguoi_dung !== admin_id) {
					await queryAsync("COMMIT");
					return res.sendStatus(400);
				}
			} else {
				await queryAsync("START TRANSACTION");
				await queryAsync(
					`
					UPDATE truyen
					SET 
						ten_truyen = ?,
						trang_thai = ?,
						tom_tat_noi_dung = ?,
						anh_dai_dien = ?
					WHERE id = ?;`,
					[
						data.novel_name,
						data.novel_status,
						data.novel_descript,
						avt_var,
						data.id,
					]
				);
			}

			// update genres delete all current novel"s genres first then and new one to novel"s genres table
			// delete all current novel"s genres
			await queryAsync(`DELETE FROM the_loai_truyen WHERE id_truyen = "${data.id}";`);
			const data_genre_id = await queryAsync(
				"SELECT * FROM the_loai WHERE ten_the_loai IN (?)",
				[data.novel_types]
			);

			const ds_genre_id = data_genre_id.map((row) => row.id);
			for (let i = 0; i < data.novel_types.length; i++) {
				await queryAsync(
					`
					INSERT INTO the_loai_truyen (
					id,
					id_the_loai,
					id_truyen
					)
					VALUES (?,?,?);`,
					[uuidv4(), ds_genre_id[i], data.id]
				);
			}

			await queryAsync(
				`
				UPDATE truyen
				SET ngay_cap_nhat = CURRENT_TIMESTAMP
				WHERE id = ?;
				`,
				[data.id]
			);

			await queryAsync("COMMIT");
			return res.sendStatus(200);
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");
		console.log("SYSTEM | EDIT INFO NOVEL | ERROR | ", err);
		return res.sendStatus(500);
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
	res.writeHead(200, { "Content-Type": "applicaiton/json" });
	// res.end("ok bro");

	return res.end(JSON.stringify(await func_controller.get_full_id(uploadDirectory, list_name)));
};

const api_cancle = async (req, res) => {
	const data = req.body;
	try {
		await queryAsync("START TRANSACTION");

		if (data.status == "cancel") {
			for (const id of data.chap_ids) {
				await deleteFileFromDrive(id);
			}
			await queryAsync("COMMIT");
			return res.sendStatus(200);
		} else if (data.status == "delete") {
			let result = await queryAsync(
				`SELECT noi_dung_chuong FROM chuong WHERE id_truyen = ?`,
				[data.id]
			);
			const chuongArray = result.map((i) => ({
				id_chap: i.noi_dung_chuong,
			}));

			// xóa file trên drive
			chuongArray.forEach(async (element) => {
				await deleteFileFromDrive(element.id_chap);
			});

			// xóa truyện trên server
			await queryAsync(`DELETE FROM chuong WHERE id_truyen = ?`, [data.id]);
			await queryAsync(`DELETE FROM slider WHERE id_truyen = ?`, [data.id]);
			await queryAsync(`DELETE FROM the_loai_truyen WHERE id_truyen = ?`, [data.id]);
			await queryAsync(`DELETE FROM truyen_yeu_thich WHERE id_truyen = ?`, [data.id]);
			await queryAsync(`DELETE FROM truyen WHERE id = ?`, [data.id]);
			await queryAsync("COMMIT");
			return res.sendStatus(200);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | CANCEL | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_updateInfo = async (req, res) => {
	try {
		const account = req.session.user;
		const data = req.body;
		await queryAsync("START TRANSACTION");

		if (account) {
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
			await queryAsync(
				`
			UPDATE thongtin_nguoidung
			SET 
				ten_hien_thi = ?,
				anh_dai_dien = ?,
				gioi_tinh = ?
			WHERE id_tai_khoan = ?;
			`,
				[data.hoten, avt_var, data.sex, account.id]
			);

			// update user"s email
			await queryAsync(
				`
			UPDATE taikhoan_nguoidung
			SET 
				email = ?
			WHERE id = ?
			AND login_way <> "google";
			`,
				[data.email, account.id]
			);

			// update author name
			const author_check = await queryAsync(
				`
			SELECT id FROM tacgia WHERE ten_tac_gia = ? AND id_nguoi_dung <> ?
		`,
				[data.author_name, account.id]
			);
			if (author_check.length) {
				await queryAsync("COMMIT");
				return res.sendStatus(400);
			} else {
				await queryAsync(
					`
				  INSERT INTO tacgia (id, id_nguoi_dung, ten_tac_gia)
				  VALUES (?, ?, ?) 
				  ON DUPLICATE KEY UPDATE ten_tac_gia = VALUES(ten_tac_gia);
				  `,
					[account.id, account.id, data.author_name]
				);
			}
			await queryAsync("COMMIT");
			return res.sendStatus(200);
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_changePass = async (req, res) => {
	try {
		const account = req.session.user;
		const data = req.body;
		await queryAsync("START TRANSACTION");
		if (account) {
			const result = await queryAsync(
				`
			SELECT mat_khau as pass
			FROM taikhoan_nguoidung
			WHERE id = ?
			`,
				[account.id]
			);

			// const n_result = await server.find_one_Data("dang_nhap", {
			//   _id: decodeList[1],
			// });
			if (data["Old-Password"] == result[0].pass) {
				await queryAsync(
					`
				UPDATE taikhoan_nguoidung
				SET 
					mat_khau = ?
				WHERE id = ?;
				`,
					[data["new-Password"], account.id]
				);
				await queryAsync("COMMIT");
				return res.sendStatus(200);
			} else {
				await queryAsync("COMMIT");

				return res.status(403).send("Sai pass cũ");
			}
		} else {
			await queryAsync("COMMIT");
			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const api_downloadChap = async (req, res) => {
	const data = req.body;
	await downloadFileFromDriveforUser(data.id, res);
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
			case 1: // if (x === "value1")
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY ngay_cap_nhat DESC LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;

			case 2: // if (x === "value2")
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY ngay_cap_nhat ASC LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;
			case 3: // if (x === "value2")
				result = await queryAsync(
					"SELECT * FROM truyen ORDER BY luot_xem DESC  LIMIT ? OFFSET ?",
					[n, offset]
				);
				break;
			case 4: // if (x === "value2")
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
			`SELECT 
				truyen.*, 
				tacgia.ten_tac_gia AS ten_tac_gia, 
				GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ",") AS ten_the_loai 
			FROM truyen 
			JOIN tacgia ON truyen.id_tac_gia = tacgia.id 
			JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen 
			JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id 
			WHERE truyen.id = ?
			GROUP BY truyen.id 
			ORDER BY ngay_cap_nhat 
			LIMIT 1 ;`,
			[idtruyen]
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
		await queryAsync("START TRANSACTION");

		const idtruyen = req.body.id;
		const state = req.body.state;
		const result = await queryAsync("UPDATE truyen SET ban = ? WHERE id = ?", [
			state,
			idtruyen,
		]);
		await queryAsync("COMMIT");

		if (result.affectedRows === 1) {
			if (state == 1) {
				const data_user = await queryAsync(
					"SELECT email FROM taikhoan_nguoidung WHERE taikhoan_nguoidung.id = (SELECT id_tac_gia FROM truyen WHERE truyen.id =?)",
					[idtruyen]
				);
				if (data_user.length > 0) {
					let thoiGianHienTai = new Date();
					let chuoiThoiGian = thoiGianHienTai.toLocaleString();
					const bimat = func_controller.encrypt(
						data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
					);
					const url = `https://docs.google.com/forms/d/e/1FAIpQLSemSXBEozZZAoMjqtiNK9k6uz9AKjoR85fKAFOExYDLpNtqEA/viewform`;
					func_controller.sendEmail(
						url,
						data_user[0].email,
						"block_novel",
						"Thông báo khoá truyện"
					);
					await queryAsync("COMMIT");
					res.status(200).json({ success: true, message: state });
				}
			} else {
				const data_user = await queryAsync(
					"SELECT email FROM taikhoan_nguoidung WHERE taikhoan_nguoidung.id = (SELECT id_tac_gia FROM truyen WHERE truyen.id =?)",
					[idtruyen]
				);
				if (data_user.length > 0) {
					let thoiGianHienTai = new Date();
					let chuoiThoiGian = thoiGianHienTai.toLocaleString();
					const bimat = func_controller.encrypt(
						data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
					);
					const url = `http://localhost:6969/`;
					func_controller.sendEmail(
						url,
						data_user[0].email,
						"unblock_novel",
						"Thông báo mở khoá truyện"
					);
					await queryAsync("COMMIT");
					res.status(200).json({ success: true, message: state });
				}
			}
		} else {
			res.status(404).json({ error: "Không tìm thấy truyện để cập nhật" });
		}
	} catch (error) {
		await queryAsync("ROLLBACK");

		console.error("Error in update_state_novel:", error);
		res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};
//block truyen
//block_account
const api_block_account = async (req, res) => {
	try {
		await queryAsync("START TRANSACTION");
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung SET  last_role = role, role = 0 WHERE id = ?`,
			[id_acc]
		);
		const role = await queryAsync(`SELECT last_role FROM thongtin_nguoidung WHERE id = ?`, [
			id_acc,
		]);
		await queryAsync("COMMIT");

		if (result.affectedRows === 1) {
			await queryAsync(`DELETE FROM sessions WHERE data LIKE '%"username":"${id_acc}"%';`);
			const data_user = await queryAsync("SELECT * FROM `taikhoan_nguoidung` WHERE id = ?", [
				id_acc,
			]);
			if (data_user.length > 0) {
				let thoiGianHienTai = new Date();
				let chuoiThoiGian = thoiGianHienTai.toLocaleString();
				const bimat = func_controller.encrypt(
					data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
				);
				const url = `https://docs.google.com/forms/d/e/1FAIpQLSemSXBEozZZAoMjqtiNK9k6uz9AKjoR85fKAFOExYDLpNtqEA/viewform`;
				func_controller.sendEmail(
					url,
					data_user[0].email,
					"block_acc",
					"Thông báo khoá tài khoản"
				);
				await queryAsync("COMMIT");

				return res.status(200).json({ role: role });
			} else {
				await queryAsync("COMMIT");

				return res.sendStatus(404);
			}
		} else {
			return res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		await queryAsync("ROLLBACK");

		console.error("Error in update_state_novel:", error);
		return res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_open_account = async (req, res) => {
	try {
		const id_acc = req.body.id;
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		await queryAsync("START TRANSACTION");
		const result = await queryAsync(
			`UPDATE thongtin_nguoidung 
			SET  role = last_role, last_role = 0 
			WHERE id = ?;`,
			[id_acc]
		);
		const role = await queryAsync(`SELECT last_role FROM thongtin_nguoidung WHERE id = ? ;`, [
			id_acc,
		]);
		await queryAsync("COMMIT");
		if (result.affectedRows === 1) {
			const data_user = await queryAsync("SELECT * FROM `taikhoan_nguoidung` WHERE id = ?", [
				id_acc,
			]);
			if (data_user.length > 0) {
				let thoiGianHienTai = new Date();
				let chuoiThoiGian = thoiGianHienTai.toLocaleString();
				const bimat = func_controller.encrypt(
					data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
				);
				const url = `http://localhost:6969/`;
				func_controller.sendEmail(
					url,
					data_user[0].email,
					"unblock_acc",
					"Thông báo mở khoá tài khoản"
				);
				await queryAsync("COMMIT");

				return res.status(200).json({ role: role });
			} else {
				await queryAsync("COMMIT");

				return res.sendStatus(404);
			}
		} else {
			return res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		await queryAsync("ROLLBACK");

		console.log("Error in update_state_novel:", error);
		return res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_block_author = async (req, res) => {
	try {
		const id_acc = req.body.id;
		await queryAsync("START TRANSACTION");
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(`UPDATE thongtin_nguoidung SET  role = 1 WHERE id = ? `, [
			id_acc,
		]);
		await queryAsync("COMMIT");

		const role = await queryAsync(
			`SELECT role FROM thongtin_nguoidung  WHERE id = "${id_acc}" ;`
		);
		if (result.affectedRows === 1) {
			const data_user = await queryAsync("SELECT * FROM `taikhoan_nguoidung` WHERE id = ?", [
				id_acc,
			]);
			if (data_user.length > 0) {
				let thoiGianHienTai = new Date();
				let chuoiThoiGian = thoiGianHienTai.toLocaleString();
				const bimat = func_controller.encrypt(
					data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
				);
				const url = `https://docs.google.com/forms/d/e/1FAIpQLSemSXBEozZZAoMjqtiNK9k6uz9AKjoR85fKAFOExYDLpNtqEA/viewform`;
				func_controller.sendEmail(
					url,
					data_user[0].email,
					"block_author",
					"Thông báo khoá quyền tác giả"
				);
				await queryAsync("COMMIT");
				return res.status(200).json({ role: role });
			} else {
				await queryAsync("COMMIT");

				return res.sendStatus(404);
			}
		} else {
			return res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		await queryAsync("ROLLBACK");

		console.error("Error in update_state_author:", error);
		return res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_open_author = async (req, res) => {
	try {
		const id_acc = req.body.id;
		await queryAsync("START TRANSACTION");
		// if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
		//   console.error("Giá trị id không hợp lệ");
		//   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
		// }
		const result = await queryAsync(`UPDATE thongtin_nguoidung SET  role = 2 WHERE id = ? ;`, [
			id_acc,
		]);
		await queryAsync("COMMIT");

		// const role = await queryAsync(
		//   `SELECT role FROM thongtin_nguoidung  WHERE id = "${id_acc}" ;`
		// );
		if (result.affectedRows === 1) {
			const data_user = await queryAsync("SELECT * FROM `taikhoan_nguoidung` WHERE id = ?", [
				id_acc,
			]);
			if (data_user.length > 0) {
				let thoiGianHienTai = new Date();
				let chuoiThoiGian = thoiGianHienTai.toLocaleString();
				const bimat = func_controller.encrypt(
					data_user[0].ten_tai_khoan + `?${chuoiThoiGian}`
				);
				const url = `http://localhost:6969/`;
				func_controller.sendEmail(
					url,
					data_user[0].email,
					"unblock_author",
					"Thông báo mở khoá quyền tác giả"
				);
				await queryAsync("COMMIT");
				return res.status(200).json({ role: "ok ha" });
			} else {
				await queryAsync("COMMIT");
				return res.sendStatus(404);
			}
		} else {
			return res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
		}
	} catch (error) {
		await queryAsync("ROLLBACK");

		console.log("Error in update_state_novel:", error);
		return res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_get_quick_template = async (req, res) => {
	return res.download("./local_template/mau_dang_truyen.docx");
};

const api_quick_upload = async (req, res) => {
	const account = req.session.user;
	try {
		if (!account) return res.sendStatus(500);
		if (!req.files) {
			return res.status(400).send("No file uploaded.");
		}
		await queryAsync("START TRANSACTION");

		if (allowedMimeTypes.indexOf(req.files[0].mimetype) == 1) {
			const filePath = path.join(uploadDirectory, req.files[0].originalname);

			// Use mammoth to extract text content from DOCX
			const { value } = await mammoth.extractRawText({ path: filePath });

			// The result object contains a "value" property with the text content
			const result = await func_controller.extractInformation(value);
			console.log(result)

			if (result) {
				const novel_id = uuidv4();

				// add to truyen database
				if (account.id === admin_id) {
					const author_name = await queryAsync(
						`
				  			SELECT id, id_nguoi_dung FROM tacgia WHERE ten_tac_gia = ?`,
						[result.author.trim()]
					);
					if (author_name.length && author_name[0].id_nguoi_dung === admin_id) {
						// tac giả đã tồn tại
						// add to truyen database
						await queryAsync(
							`
								INSERT INTO truyen (
									id, 
									id_tac_gia, 
									ten_truyen, 
									so_luong_chuong, 
									tom_tat_noi_dung, 
									trang_thai
								)
								VALUES (?,?,?,?,?,?,?)`,
							[
								novel_id,
								author_name[0].id,
								result.name.trim(),
								result.name_chapters.length,
								result.introduce,
								result.status.trim()
							]
						);
					} else if (!author_name.length) {
						const author_id = uuidv4();
						await queryAsync(`INSERT INTO tacgia VALUE (?,?,?)`, [
							author_id,
							account.id,
							result.author.trim(),
						]);

						await queryAsync(
							`
								INSERT INTO truyen (
									id, 
									id_tac_gia, 
									ten_truyen, 
									so_luong_chuong, 
									tom_tat_noi_dung, 
									trang_thai
								)
								VALUES (?,?,?,?,?,?,?)`,
							[
								novel_id,
								author_id,
								result.name.trim(),
								result.name_chapters.length,
								result.introduce,
								result.status.trim()
							]
						);
					} else if (author_name[0].id_nguoi_dung !== admin_id) {
						await queryAsync("COMMIT");
						return res.sendStatus(400);
					}
				} else {
					await queryAsync(
						`
							INSERT INTO truyen (
								id, 
								id_tac_gia, 
								ten_truyen, 
								so_luong_chuong, 
								tom_tat_noi_dung, 
								trang_thai,
							)
							VALUES (?,?,?,?,?,?,?)`,
						[
							novel_id,
							account.id,
							result.name.trim(),
							result.name_chapters.length,
							result.introduce,
							result.status.trim(),
						]
					);
				}

				// add to chuong database
				for (let i = 0; i < result.name_chapters.length; i++) {
					await queryAsync(
						`
							INSERT INTO chuong (
							id,
							id_truyen,
							ten_chuong,
							noi_dung_chuong,
							thu_tu
							)
							VALUES (?,?,?,?,?)`,
						[
							uuidv4(),
							novel_id,
							result.name_chapters[i],
							result.content_chapter[i],
							i + 1,
						]
					);
				}
				const data_genre_id = await queryAsync(
					"SELECT * FROM the_loai WHERE ten_the_loai IN (?)",
					[result.genre]
				);
				const ds_genre_id = data_genre_id.map((row) => row.id);
				for (let i = 0; i < result.genre.length; i++) {
					await queryAsync(
						`
							INSERT INTO the_loai_truyen (
								id,
								id_the_loai,
								id_truyen
							)
							VALUES (?,?,?)`,
						[uuidv4(), ds_genre_id[i], novel_id]
					);
				}
				await queryAsync("COMMIT");
				return res.status(200).send("Success.");
			} else {
				await queryAsync("COMMIT");
				return res.status(400).send("File have no match content.");
			}
		} else {
			await queryAsync("COMMIT");
			return res.status(400).send("Invalid file type.");
		}
	} catch (error) {
		await queryAsync("ROLLBACK");
		console.log("Error in update_state_novel:", error);
		return res.status(500).json({ error: "Có lỗi xảy ra trên server" });
	}
};

const api_editSlider = async (req, res) => {
	try {
		const data = req.body;

		let avt_var = data.novel_avt;
		if (isBase64(data.novel_avt)) {
			// avt_var = await compressImageBase64(data.img, 5);
			const imgdata = await getDriveFileLinkAndDescription(
				await uploadFileToDrivebase64(avt_var)
			);
			avt_var = imgdata.fileLink;
		}

		// imgdata.fileLink la link hinh
		await queryAsync("START TRANSACTION");

		// update user information
		await queryAsync(
			`
			UPDATE slider
			SET 
				anh = ?,
				id_truyen = ?
			WHERE id = ? ;
		`,
			[avt_var, data.id_truyen, data.id]
		);
		await queryAsync("COMMIT");

		return res.sendStatus(200);
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
		return res.sendStatus(500);
	}
};
// add, delete categories -----------------------------------------------------------------
const delete_category = async (req, res) => {
	const id = req.body.id;
	try {
		await queryAsync("START TRANSACTION");

		await queryAsync(`DELETE FROM the_loai_truyen WHERE id_the_loai=?`, [id]);
		await queryAsync(`DELETE FROM the_loai WHERE id=?`, [id]);

		const newData = await queryAsync(`SELECT * FROM the_loai`);
		await queryAsync("COMMIT");
		return res.status(200).json({ newData: newData });
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | DELETE_CATEGORY | ERROR | ", err);
		return res.sendStatus(500);
	}
};

const add_new_category = async (req, res) => {
	const category = req.body.value;
	const id = uuidv4();
	try {
		await queryAsync("START TRANSACTION");

		const category_id = await queryAsync(`SELECT id FROM the_loai WHERE id=?`, [id]);

		if (category_id.length == 0) {
			await queryAsync(`INSERT INTO the_loai(id,ten_the_loai)VALUES(?,?);`, [id, category]);
			const newData = await queryAsync(`SELECT * FROM the_loai`);
			await queryAsync("COMMIT");

			return res.status(200).json({ newData: newData });
		} else {
			await queryAsync("COMMIT");

			return res.sendStatus(403);
		}
	} catch (err) {
		await queryAsync("ROLLBACK");

		console.log("SYSTEM | DELETE_CATEGORY | ERROR | ", err);
		return res.sendStatus(500);
	}
};

module.exports = {
	api_search_more,
	api_reset_password,
	api_advanced_search,
	api_reviews,
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
	api_get_list_novel,
	api_get_info_novel,
	update_state_novel,
	api_block_account,
	api_open_account,
	api_block_author,
	api_open_author,
	api_get_quick_template,
	api_quick_upload,
	api_editSlider,
	delete_category,
	add_new_category,
};
