const {
    authenticationKey,
    decrypt,
    calTime
} = require('../models/func');

const updateNovel = require('./Updatenovel');
const fs = require("fs");
const multer = require('multer'); // Thư viện để xử lý file upload
const uploadDirectory = path.join('.upload_temp', 'files');
const storage_file = multer.diskStorage({
	destination: function (req, file, cb) {
		if (!allowedMimeTypes.includes(file.mimetype)) {
			console.log('SYSTEM | GET_NOVEL_LIST | ERROR | Lỗi định dạng file không đúng');

			return cb(new Error('Invalid file type.'), null);
		}

		// Trả về đường dẫn đến thư mục mới
		cb(null, uploadDirectory);
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});

// Thiết lập middleware multer cho việc xử lý upload file
const upload = multer({ storage: storage_file });
// xu ly lai vs sql
const processNovels = async (req, res, id_truyen) => {
	try {
		const account = req.cookies.account;
		console.log('SYSTEM | LIST MY NOVELS | Cookie nhận được: ', account);
		const decode = decrypt(account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
		// console.log(`SYSTEM | LIST MY NOVELS | Dữ liệu đã giải mã ${decodeList}`);

		let render_data = {
			headerFile: 'header',
			footerFile: 'footer',
			edit_name: "",
			edit_auth: "",
			edit_status: "",
			edit_tag: "",
			edit_review: "",
			edit_img: "",
			edit_chap_ids: "",
			edit_name_chaps: "",
		}
		let novels = await server.find_one_Data('tt_nguoi_dung', { _id: decodeList[1] });
		let result = [];
		let result_like = [];

		for (let id of novels.mynovel) {
			const curr_novel = await server.find_one_Data('truyen', { _id: new ObjectId(id) })
			result.push(curr_novel);
			if (id == id_truyen) {
				render_data.edit_name = curr_novel.name;
				render_data.edit_auth = curr_novel.author;
				render_data.edit_status = curr_novel.status;
				render_data.edit_tag = curr_novel.genres;
				render_data.edit_review = curr_novel.summary;
				render_data.edit_img = curr_novel.image;
				render_data.edit_chap_ids = curr_novel.chap_ids;
				render_data.edit_name_chaps = curr_novel.name_chaps;
			}
		}

		render_data.novels = result;
		let idListlikeNovels = [];
		for (let id of novels.likeNovels) {
			let curr_novel = await server.find_one_Data('truyen', { _id: new ObjectId(id) });
			if (!curr_novel) {
				await server.update_one_Data("tt_nguoi_dung", { _id: decodeList[1] },
					{
						$pull: { likeNovels: id }
					});
			}
			else {
				idListlikeNovels.push(id);

				curr_novel.update_date = calTime(curr_novel.update_date);
				result_like.push(curr_novel);
			}


		}
		render_data.like_novel = idListlikeNovels;
		render_data.like_novel_list = result_like;

		if (id_truyen) {
			if (!novels.mynovel.includes(id_truyen)) {
				res.status(403).send('Lỗi, không có quyền truy cập!');
			}
		}

		res.render('profile.ejs', render_data);
	} catch (err) {
		console.log('SYSTEM | LIST MY NOVELS | ERROR | ', err);
		res.sendStatus(500);
	}
}

const getNumsOfChap = async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | NO_CHAP | Dữ liệu nhận được: ', data);
	try {
		const result = await server.find_all_Data({
			query: { name: data.name },
			table: "truyen",
			projection: { _id: 0, no_chapters: 1 }, limit: 1
		});
		// if array emty return zero
		if (result.length === 0) {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('0');
		}
		else {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end(String(result[0].no_chapters));
		}
	} catch (err) {
		console.log('SYSTEM | NO_CHAP | ERROR | ', err);
		res.sendStatus(500);
	}
}

const updateNovelData = async (req, res) => {
	try {
		await updateNovel.updateIds();

		// Đọc tệp JSON không đồng bộ
		const data = fs.promises.readFile(destFilePath, 'utf8')
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
			genres: dummy['Genre(s)'],
			status: "Đang ra",
			summary: dummy.Summary,
			image: dummy.img,
			views: 0,
			likes: 0,
			update_date: new Date(),
			comment_id: "unknown"
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
		console.log('SYSTEM | UPDATE_NOVEL | Start upload novel to MongoDB');
		await server.add_one_Data("truyen", myobj);
		console.log('SYSTEM | UPDATE_NOVEL | Complete upload novel to MongoDB');

		res.sendStatus(200);
	} catch (err) {
		console.log('SYSTEM | UPDATE_NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
}

const upLoadNovel = async (req, res) => {
	const data = req.body;
	const account = req.cookies.account
	console.log('SYSTEM | UPLOAD_NOVEL | Dữ liệu nhận được: ', data);
	console.log('SYSTEM | UPLOAD_NOVEL | Cookie nhận được: ', account);
	const decode = decrypt(account, authenticationKey);
	const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
	// console.log(`SYSTEM | UPLOAD_NOVEL | Dữ liệu đã giải mã ${decodeList}`);
	// decodeList = authenticationKey:id:pass

	try {
		if (decodeList[0] == authenticationKey) {
			// upload novel content
			let up_content = {
				name: data.name,
				author: data.author,
				name_chaps: data.name_chaps,
				chap_ids: data.chap_ids,
				status: data.status,
				no_chapters: data.name_chaps.length,
				genres: data.genres,
				summary: data.summary,
				image: data.image,
				views: 0,
				likes: 0,
				update_date: new Date(),
			};

			const id_check = await server.add_one_Data("truyen", up_content);

			console.log(id_check);
			// create a new comment document
			await server.add_one_Data("comment", {
				_id: id_check.insertedId,
				content: {
					// user_name: content (do what to add)
				}
			});

			// update user's novel list
			await server.update_one_Data('tt_nguoi_dung', { _id: decodeList[1] }, { $push: { mynovel: id_check.insertedId.toString() } });
			res.sendStatus(200);
		}

	} catch (err) {
		console.log('SYSTEM | UPLOAD NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
};

const updateUploadNovel =  async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | UPDATE UPLOAD NOVEL |', data);
	try {
		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
			$set: {
				update_date: new Date()
			},
			$push: {
				name_chaps: { $each: data.name_chaps },
				chap_ids: { $each: data.chap_ids }
			},
			$inc: {
				no_chapters: data.name_chaps.length
			}
		})

		res.sendStatus(200);
	} catch (err) {
		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
};

const editNovel =  async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | EDIT_TRUYEN |', data);
	try {
		// get old _chap ids and name chaps
		let curr_novel = await server.find_one_Data("truyen", { _id: new ObjectId(data.id) });
		let new_chap_ids = curr_novel.chap_ids;
		// set chap names as new name_chaps
		let new_name_chaps = data.name_chaps;

		// remove all chap that
		for (let i = 0; i < data.remove_list.length; i++) {
			let remove_index = parseInt(data.remove_list[i]);
			console.log(remove_index);
			// delete remove id file from drive and remove id from chapid:
			await server.deleteFileFromDrive(new_chap_ids.splice(remove_index, 1)[0]);
			// remove nam chap from name chaps
			new_name_chaps.splice(remove_index, 1);
		}

		console.log(data.edit_index.length);
		for (let i = 0; i < data.edit_index.length; i++) {
			let change_index = parseInt(data.edit_index[i]);
			// delete old id file from drive:
			await server.deleteFileFromDrive(new_chap_ids[change_index]);
			// replace old id with new index:
			new_chap_ids[change_index] = data.chap_ids[i];
		}

		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
			$set: {
				name_chaps: new_name_chaps,
				chap_ids: new_chap_ids
			}
		});

		res.sendStatus(200);
	} catch (err) {
		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
};

const editNovelInfo = async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | EDIT_TRUYEN |', data);
	try {
		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
			$set: {
				name: data.novel_name,
				author: data.author_name,
				status: data.novel_status,
				genres: data.novel_types,
				summary: data.novel_descript,
				image: data.novel_avt,
				update_date: new Date()
			}
		});

		res.sendStatus(200);
	} catch (err) {
		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}

};

const readDocxFile = async (docxFilePath) => {
	try {
		const extname = path.extname(docxFilePath).toLowerCase();
		const outputFilePath = docxFilePath.replace(extname, '.txt');

		const { value } = await mammoth.extractRawText({ path: docxFilePath });
		const text = value.trim();

		fs.writeFile(outputFilePath, text, 'utf8', (err) => {
			if (err) {
				console.error('An error occurred while writing the file:', err);
			} else {
				console.log(`File contents saved to ${outputFilePath}`);
				fs.unlink(docxFilePath, (err) => {
					if (err) {
						console.error('An error occurred while deleting the file:', err);
					} else {
						console.log(`Deleted ${docxFilePath}`);
					}
				});
			}
		});
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

const get_full_id = async (directoryPath, listName) => {
	let list_id = [];
	try {
		// Đọc các file trong thư mục một cách đồng bộ
		let txtFilePaths = []
		for (const name of listName) {
			txtFilePaths.push(path.join(directoryPath, name))
		}
		// console.log(txtFilePaths)
		const processFiles = async () => {
			for (const filePath of txtFilePaths) {
				// console.log(filePath);
				list_id.push(await server.uploadFileToDrive(filePath));
			}
		};
		await processFiles();

		return list_id;
	} catch (err) {
		console.error('SYSTEM | GET_ID | ERR | ', err);
	}

}

// Route xử lý yêu cầu upload file ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const upLoadFile = async function (req, res) {
	if (!req.files) {
		return res.status(400).send('No file uploaded.');
	}
	let list_name = [];

	// Kiểm tra kiểu dữ liệu của các tệp
	for (let i = 0; i < req.files.length; i++) {

		if (!allowedMimeTypes.includes(req.files[i].mimetype)) {
			return res.status(400).send('Invalid file type.');
		}
		else if (allowedMimeTypes.indexOf(req.files[i].mimetype) == 1) {
			await readDocxFile(path.join(uploadDirectory, req.files[i].originalname));
		}
		const fileName = req.files[i].originalname.replace('.docx', '.txt');
		list_name.push(fileName);

	}

	// Xử lý các tệp đã tải lên ở đây
	console.log('SYSTEM | UPLOAD_FILE | Files uploaded:', req.files);
	res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
	// res.end('ok bro');

	res.end(JSON.stringify(await get_full_id(uploadDirectory, list_name)));
};

const deleteItemsById = async (data, idToDelete) => {
	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			data[key] = data[key].filter(item => item._id !== idToDelete);
		}
	}
	return data;
}

// Delete novel page --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const deleteNovel = async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | CANCEL |', data);
	try {
		if (data.status == 'cancel') {
			for (const id of data.chap_ids) {
				await server.deleteFileFromDrive(id);
			}

			res.sendStatus(200);
		}
		else if (data.status == 'delete') {
			let result = await server.find_one_Data('truyen', { _id: new ObjectId(data.id) });

			// xóa file trên drive 
			for (const id of result.chap_ids) {
				await server.deleteFileFromDrive(id);
			}

			// xóa truyện trên server
			await server.delete_one_Data('truyen', { _id: new ObjectId(data.id) })
			const decode = decrypt(req.cookies.account, authenticationKey);
			const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
			// console.log(`SYSTEM | CANCEL | Dữ liệu đã giải mã ${decodeList}`);
			// decodeList = authenticationKey:id:pass
			if (decodeList[0] == authenticationKey) {
				await server.update_one_Data("tt_nguoi_dung", { _id: decodeList[1] },
					{
						$pull: { mynovel: data.id }
					});
				let new_resual = await storage.getItem('novellist');
				storage.setItem('novellist', await deleteItemsById(new_resual, data.id));

			}
			else {
				res.sendStatus(404)
			}
			res.sendStatus(200);
			console.log(data.id);
		}


	} catch (err) {
		console.log('SYSTEM | CANCEL | ERROR | ', err);
		res.sendStatus(500);
	}
};

// Thay đổi info -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const updateInfo = async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | UPDATE INFO |', data);
		let avt_var = data.img
		if (isBase64(data.img)) {
			avt_var = await compressImageBase64(data.img, 5)
		}
		await server.update_one_Data("tt_nguoi_dung", { _id: data.usr },
			{
				$set: {
					email: data.email,
					displayName: data.hoten,
					avatarUrl: avt_var,
					sex: data.sex,
				}
			});
		res.sendStatus(200);
	} catch (err) {
		console.log('SYSTEM | UPDATE INFO | ERROR | ', err);
		res.sendStatus(500);
	}

};

// Đổi pass ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const changePass = async (req, res) => {
	try {
		const data = req.body;
		const decode = decrypt(req.cookies.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
		// console.log(`SYSTEM | CHANGE_PASSWORD | Dữ liệu đã giải mã ${decodeList}`);
		// decodeList = authenticationKey:id:pass
		if (decodeList[0] == authenticationKey) {
			console.log('SYSTEM | CHANGE_PASSWORD |', data);
			const n_result = await server.find_one_Data("dang_nhap", { _id: decodeList[1] });
			if (data['Old-Password'] == n_result.pass) {
				await server.update_one_Data("dang_nhap", { _id: decodeList[1] },
					{
						$set: {
							pass: data['new-Password']
						}
					});
				res.sendStatus(200);
			} else {
				res.status(403).send('Sai pass cũ')
			}
		} else {
			res.status(404).send('Sai xác thực')
		}
	} catch (err) {
		console.log('SYSTEM | UPDATE INFO | ERROR | ', err);
		res.sendStatus(500);
	}

};

// Thay đổi tứng chapters -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const downloadChap =  async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | DOWNLOAD CHAPTER |', data);
	server.downloadFileFromDriveforUser(data.id, res)
};

module.exports = {
    processNovels,
    getNumsOfChap,
    updateNovelData,
    upLoadNovel,
    updateUploadNovel,
    editNovel,
    editNovelInfo,
    upload,
    upLoadFile,
    deleteNovel, 
    updateInfo,
    changePass,
    downloadChap
}