const server = require('./vip_pro_lib');
const updateNovel = require('./Updatenovel');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // func
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const NodePersist = require('node-persist'); // index
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const credentials = require('./client_secret_483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com.json');
const session = require('express-session');
const fs = require("fs");
const { ObjectId } = require('	');
// ----------------------------------------------------------------
const { Client } = require('@notionhq/client');
const mammoth = require('mammoth');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
// Initialize Notion client with your integration token
const notion = new Client({ auth: 'secret_773isnmzBUbd1TFIympgLAewkvvXufZXxdDyt5vl1mw' });

// ID of the Notion file you want to read
const notionFileId = 'YOUR_NOTION_FILE_ID';
// ----------------------------------------------------------------
const allowedMimeTypes = ['text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

////////////////////////
const app = express();
const router = express.Router();
const multer = require('multer'); // Thư viện để xử lý file upload

const port = 6969;
let currentURL = `http://localhost:${port}`;
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');
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

// const webRouter = require('./router/web');
// app.use(webRouter(app));

// webRouter(app);


function encrypt(data, secretKey) {
	const algorithm = 'aes-256-cbc';
	const iv = crypto.randomBytes(16); // Generate a random IV
	const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);

	let encryptedData = cipher.update(data, 'utf8', 'hex');
	encryptedData += cipher.final('hex');

	const encryptedDataWithIV = iv.toString('hex') + encryptedData;
	// console.log('SYSTEM | ENCRYPT | OK');

	return encryptedDataWithIV;
}

function decrypt(encryptedDataWithIV, secretKey) {
	const algorithm = 'aes-256-cbc';
	const iv = Buffer.from(encryptedDataWithIV.slice(0, 32), 'hex'); // Extract IV from the encrypted data
	const encryptedData = encryptedDataWithIV.slice(32); // Extract the encrypted data without IV
	const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);

	let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
	decryptedData += decipher.final('utf8');

	// console.log('SYSTEM | DECRYPT | OK');

	return decryptedData;
}

// Hàm này sẽ nén ảnh base64 và trả về base64 của ảnh đã nén trong một Promise
// Hàm xác định định dạng ảnh từ base64
// Hàm xác định định dạng ảnh từ base64
function detectImageFormatFromBase64(base64Data) {
	const matches = base64Data.match(/^data:image\/([a-zA-Z+-.]+);base64,/);

	if (!matches || matches.length < 2) {
		throw new Error('Không thể xác định định dạng ảnh từ chuỗi base64.');
	}

	const imageFormat = matches[1].toLowerCase();
	if (imageFormat !== 'png' && imageFormat !== 'jpeg' && imageFormat !== 'jpg') {
		throw new Error('Định dạng ảnh không được hỗ trợ.');
	}

	return imageFormat;
}

// Hàm nén ảnh từ base64 và trả về base64 đã nén
function compressImageBase64(inputBase64, quality) {
	return new Promise((resolve, reject) => {
		try {
			// Xác định định dạng ảnh từ base64
			const imageFormat = detectImageFormatFromBase64(inputBase64);
			const base64WithoutHeader = inputBase64.replace(/^data:image\/\w+;base64,/, '');

			// Decode base64 và tạo buffer từ dữ liệu ảnh
			const buffer = Buffer.from(base64WithoutHeader, 'base64');

			// Sử dụng thư viện sharp để nén ảnh
			sharp(buffer)
				.toFormat(imageFormat, { quality })
				.toBuffer()
				.then((outputBuffer) => {
					// Convert buffer đã nén thành base64
					const compressedBase64 = `data:image/${imageFormat};base64,${outputBuffer.toString('base64')}`;

					resolve(compressedBase64);
				})
				.catch((error) => {
					reject(error);
				});
		} catch (error) {
			reject(error);
		}
	});
}

function convertToHtml(text) {
	const escapedText = escapeHtml(text);
	const lines = escapedText.split('\n');
	const htmlLines = lines.map(line => `<p>${line}</p>`).join('');
	return htmlLines;
}

function escapeHtml(text) {
	return text.replace(/[&<>"']/g, function (match) {
		switch (match) {
			case '&':
				return '&amp;';
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			case "'":
				return '&#39;';
			default:
				return match;
		}
	});
}

function getFirstAndLastDayOfWeek() {
	const currentDate = new Date();

	// Calculate the first day of the week (Sunday)
	const firstDayOfWeek = new Date(currentDate);
	firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

	// Calculate the last day of the week (Saturday)
	const lastDayOfWeek = new Date(currentDate);
	lastDayOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

	return {
		firstDay: firstDayOfWeek,
		lastDay: lastDayOfWeek,
	};
}

function getFirstAndLastDayOfMonth() {
	// Clone the current date object to avoid modifying the original
	const currentDate = new Date();

	// Get the first day of the month
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

	// Move to the next month and get the last day of the current month
	currentDate.setMonth(currentDate.getMonth() + 1);
	currentDate.setDate(0);
	const lastDayOfMonth = new Date(currentDate);
	return {
		firstDay: firstDayOfMonth,
		lastDay: lastDayOfMonth,
	};
}

function getFirstAndLastDayOfYear() {
	// Clone the current date object to avoid modifying the original
	const currentDate = new Date();

	// Get the first day of the year
	const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);

	// Move to the next year and get the last day of the current year
	currentDate.setFullYear(currentDate.getFullYear() + 1);
	currentDate.setDate(0);
	const lastDayOfYear = new Date(currentDate);

	return {
		firstDay: firstDayOfYear,
		lastDay: lastDayOfYear,
	};
}

const storage = NodePersist.create({ // index
	dir: '.temp',
});

async function deleteItemsById(data, idToDelete) {
	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			data[key] = data[key].filter(item => item._id !== idToDelete);
		}
	}
	return data;
}

async function getNovelList() {
	try {
		// by week:
		let query_by_week = { update_date: { $gte: getFirstAndLastDayOfWeek().firstDay, $lt: getFirstAndLastDayOfWeek().lastDay } };
		const by_week = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// by month:
		let query_by_month = { update_date: { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay } };
		const by_month = await server.find_all_Data({ query: query_by_month, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// all time
		let query_by_year = { update_date: { $gte: getFirstAndLastDayOfYear().firstDay, $lt: getFirstAndLastDayOfYear().lastDay } };
		const all_time = await server.find_all_Data({ query: query_by_year, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// update nearby:
		const nearby = await server.find_all_Data({ table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { update_date: -1, views: -1, likes: -1, name: 1 }, limit: 12 });

		// Change all id to string:
		const by_week_new = by_week.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const by_month_new = by_month.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const all_time_new = all_time.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const nearby_new = nearby.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const result = {
			"by_week": by_week_new,
			"by_month": by_month_new,
			"all_time": all_time_new,
			"nearby": nearby_new
		};
		await storage.init();

		await storage.setItem('novellist', result);
		console.log(`SYSTEM | LOG | OK BRO, EVERYTHING DONE`);

		// console.log(`SYSTEM | GET_NOVEL_LIST | Danh sách truyện `, result);
		return result;
	} catch (err) {
		console.log('SYSTEM | GET_NOVEL_LIST | ERROR | ', err);
	}
}

function preventSessionFixation(req, res, next) {
	if (!req.sessionID) { // if the session ID doesn't exist, generate a new one
		req.session.regenerate((err) => {
			if (err) {
				console.error('Error generating new session ID', err);
			} else {
				console.log('New session ID generated');
			}
		});
	}
	next();
}

function set_cookies(res, id, pass) {
	const encryptedString = encrypt(`${authenticationKey}:${id}:${pass}`, authenticationKey);
	const oneYearFromNow = new Date();
	oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
	res.cookie('account', encryptedString, {
		expires: oneYearFromNow,
		secure: true,
		sameSite: 'none',
		domain: 'localhost',
		// domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',

		path: '/'
	});
	res.writeHead(200, { 'Content-Type': 'text/html' });
	console.log(`SYSTEM | SET_COOKIES | User ${id} login!`);
}
// ------------------------------------------------------------------------------------------------
// const directoryPath = path.join('trans', 'tonghop');


async function readDocxFile(docxFilePath) {
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

async function get_full_id(directoryPath, listName) {
	let list_id = [];
	try {
		// Đọc các file trong thư mục một cách đồng bộ
		let txtFilePaths = []
		for (const name of listName) {
			txtFilePaths.push(path.join(directoryPath, name))
		}
		console.log(txtFilePaths)
		const processFiles = async () => {
			for (const filePath of txtFilePaths) {
				console.log(filePath);
				list_id.push(await server.uploadFileToDrive(filePath));
			}
		};
		await processFiles();

		return list_id;
	} catch (err) {
		console.error('SYSTEM | GET_ID | ERR | ', err);
	}

}

// ------------------------------------------------------------------------------------------------

/*async function checkCookieLoglUser(req, res, next) { // index
	try {
		const data = req.cookies;
		if (!data.account) {
			res.locals.avt = 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg';
			res.locals.username = '';
			res.locals.login_way = 'null';
			next();
		}
		else {
			// console.log('SYSTEM | AUTHENTICATION | Dữ liệu nhận được: ', data);
			const decode = decrypt(data.account, authenticationKey);
			const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
			// console.log(`SYSTEM | AUTHENTICATION | Dữ liệu đã giải mã ${decodeList}`);
			// decodeList = authenticationKey:id:pass
			if (decodeList[0] == authenticationKey) {
				const result = await server.find_one_Data("tt_nguoi_dung", { _id: decodeList[1] });
				const n_result = await server.find_one_Data("dang_nhap", { _id: decodeList[1] });
				if (result != null && result.length != 0) {
					// neu dang nhap = google thi 2 bien avt va display name co gia tri, nhung login = tk,mk thi k co 2 bien nay
					res.locals.avt = result.avatarUrl;
					res.locals.username = result.displayName;
					res.locals.user = result._id;
					res.locals.sex = result.sex;
					res.locals.email = result.email;
					res.locals.login_way = n_result.lgway;
					next();
				}
				else if (result == null) {
					res.locals.avt = 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg';
					res.locals.username = '';
					next();
				}
				else {
					res.locals.avt = 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg';
					res.locals.username = '';
					next();
				}
			}
		}

	} catch (error) {
		// Xử lý lỗi nếu có
		res.status(500).send('Internal Server Error');
	}
}*/

// async function checkCoookieIfOK(req, res, next) {
// 	const data = req.cookies;
// 	if (!data.account) {
// 		// Cookie không tồn tại, chặn truy cập
// 		return res.redirect('/');
// 	}
// 	else {
// 		next();
// 	}

// }

const blockUnwantedPaths = (req, res, next) => {
	const unwantedPaths = ['/backend/', '/.temp/', '/.credentials/'];

	for (const path of unwantedPaths) {
		if (req.url.includes(path)) {
			return res.status(403).send('<h1 style="font-size: 46px;">cut di bn oi, <a href="/404">to mo</a> </a> lam d j? </h1> \n<img src ="https://cdn.discordapp.com/attachments/1128270011346210826/1128288383316271204/sticker.webp"><iframe src="https://giphy.com/embed/qs4ll1FSxKnNHeSmom" width="480" height="475" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/DogeBONK-bonk-dobo-dogebonk-qs4ll1FSxKnNHeSmom">via GIPHY</a></p>');
		}
	}
	next();
};

// async function processNovels(req, res, id_truyen) {
// 	try {
// 		const account = req.cookies.account;
// 		console.log('SYSTEM | LIST MY NOVELS | Cookie nhận được: ', account);
// 		const decode = decrypt(account, authenticationKey);
// 		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
// 		// console.log(`SYSTEM | LIST MY NOVELS | Dữ liệu đã giải mã ${decodeList}`);

// 		let render_data = {
// 			headerFile: 'header',
// 			footerFile: 'footer',
// 			edit_name: "",
// 			edit_auth: "",
// 			edit_status: "",
// 			edit_tag: "",
// 			edit_review: "",
// 			edit_img: "",
// 			edit_chap_ids: "",
// 			edit_name_chaps: "",
// 		}
// 		let novels = await server.find_one_Data('tt_nguoi_dung', { _id: decodeList[1] });
// 		let result = [];
// 		let result_like = [];

// 		for (let id of novels.mynovel) {
// 			const curr_novel = await server.find_one_Data('truyen', { _id: new ObjectId(id) })
// 			result.push(curr_novel);
// 			if (id == id_truyen) {
// 				render_data.edit_name = curr_novel.name;
// 				render_data.edit_auth = curr_novel.author;
// 				render_data.edit_status = curr_novel.status;
// 				render_data.edit_tag = curr_novel.genres;
// 				render_data.edit_review = curr_novel.summary;
// 				render_data.edit_img = curr_novel.image;
// 				render_data.edit_chap_ids = curr_novel.chap_ids;
// 				render_data.edit_name_chaps = curr_novel.name_chaps;
// 			}
// 		}

// 		render_data.novels = result;
// 		let idListlikeNovels = [];
// 		for (let id of novels.likeNovels) {
// 			let curr_novel = await server.find_one_Data('truyen', { _id: new ObjectId(id) });
// 			if (!curr_novel) {
// 				await server.update_one_Data("tt_nguoi_dung", { _id: decodeList[1] },
// 					{
// 						$pull: { likeNovels: id }
// 					});
// 			}
// 			else {
// 				idListlikeNovels.push(id);

// 				curr_novel.update_date = calTime(curr_novel.update_date);
// 				result_like.push(curr_novel);
// 			}


// 		}
// 		render_data.like_novel = idListlikeNovels;
// 		render_data.like_novel_list = result_like;

// 		if (id_truyen) {
// 			if (!novels.mynovel.includes(id_truyen)) {
// 				res.status(403).send('Lỗi, không có quyền truy cập!');
// 			}
// 		}

// 		res.render('profile.ejs', render_data);
// 	} catch (err) {
// 		console.log('SYSTEM | LIST MY NOVELS | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// }

function isBase64(str) {
	try {
		// Kiểm tra xem chuỗi có thể được giải mã từ Base64 không
		const decoded = Buffer.from(str, 'base64').toString('utf-8');

		// Kiểm tra xem chuỗi ban đầu và chuỗi giải mã có giống nhau hay không
		// Nếu giống nhau thì chuỗi đó có thể là Base64
		return Buffer.from(decoded, 'utf-8').toString('base64') === str;
	} catch (error) {
		// Nếu có lỗi xảy ra trong quá trình giải mã, tức là chuỗi không phải Base64
		return false;
	}
}

function calTime(update_date) {
	// Thời điểm hiện tại
	const now = new Date();

	// Thời điểm trả về từ server
	const serverTime = new Date(update_date);

	// Tính số lượng năm chênh lệch
	const yearsDiff = now.getFullYear() - serverTime.getFullYear();

	// Tính số lượng tháng chênh lệch
	const monthsDiff = (yearsDiff * 12) + (now.getMonth() - serverTime.getMonth());

	// Tính số lượng ngày chênh lệch
	const daysDiff = Math.floor((now - serverTime) / (1000 * 60 * 60 * 24));

	// Tính số lượng giờ chênh lệch
	const hoursDiff = now.getHours() - serverTime.getHours();

	// Tính số lượng phút chênh lệch
	const minutesDiff = now.getMinutes() - serverTime.getMinutes();

	// Hiển thị kết quả chênh lệch thời gian
	// console.log(`Chênh lệch thời gian: ${yearsDiff} năm, ${monthsDiff} tháng, ${daysDiff} ngày, ${hoursDiff} giờ, ${minutesDiff} phút.`);

	if (yearsDiff > 0) {
		return yearsDiff + ' năm';
	}
	else if (monthsDiff > 0) {
		return monthsDiff + ' tháng';
	}
	else if (daysDiff > 0) {
		return daysDiff + ' ngày';
	}
	else if (hoursDiff > 0) {
		return hoursDiff + ' giờ';
	}
	else if (minutesDiff > 0) {
		return minutesDiff + ' phút';
	}
	else {
		return 'Nóng như chuyện tình đôi ta <3';

	}
	return 'éo tính dc';
}

// Áp dụng middleware để chặn truy cparentDirectoryập
app.use(blockUnwantedPaths);

// Lắng nghe các yêu cầu POST tới localhost:6969
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(session({
	secret: 'okbro', // Thay đổi "your-secret-key" bằng một chuỗi bất kỳ
	resave: false,
	saveUninitialized: false
}));
app.use('/', router);
app.use(preventSessionFixation);
app.use(express.json());
const parentDirectory = path.dirname(__dirname);
app.use(express.static(parentDirectory));
app.set('view engine', 'ejs');
// Đặt thư mục chứa các tệp template
app.set('views', path.join(parentDirectory, 'view'));
console.log(path.join(parentDirectory, 'view'))

// // index route
// app.get('/', checkCookieLoglUser, async (req, res) => {
// 	let result = await storage.getItem('novellist');
// 	currentURL = req.url;

// 	res.render('index', {
// 		headerFile: 'header',
// 		footerFile: 'footer',
// 		jsontruyen: result
// 	});
// });

// profile route
// app.get('/profile', checkCoookieIfOK, checkCookieLoglUser, async (req, res) => {
	
// 	await processNovels(req, res, null);
// });

// app.get('/profile/:anything', checkCoookieIfOK, checkCookieLoglUser, async (req, res) => {
// 	await processNovels(req, res, null);
// });

// app.get('/profile/update/:id/edit', checkCoookieIfOK, checkCookieLoglUser, async (req, res) => {
// 	await processNovels(req, res, req.params.id);
// });

// app.get('/profile/update/:id/listchap', checkCoookieIfOK, checkCookieLoglUser, async (req, res) => {
// 	await processNovels(req, res, req.params.id);
// });

// app.get('/profile/update/:id/morechap', checkCoookieIfOK, checkCookieLoglUser, async (req, res) => {
// 	await processNovels(req, res, req.params.id);
// });

// Review route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/reviews/:id', checkCookieLoglUser, async (req, res) => {
// 	try {
// 		const account = req.cookies.account
// 		console.log('SYSTEM | REVIEWS |', account);
// 		// Get novel information:
// 		let result = await server.find_all_Data({
// 			table: "truyen",
// 			query: { _id: new ObjectId(req.params.id) },
// 			projection: {
// 				name: 1,
// 				author: 1,
// 				no_chapters: 1,
// 				genres: 1,
// 				summary: 1,
// 				image: 1,
// 				name_chaps: 1,
// 				views: 1,
// 				likes: 1,
// 				update_date: 1,
// 				status: 1
// 			},
// 			limit: 1
// 		});

// 		//paste here
// 		// default if they don't have an account
// 		result[0].liked = 0; ///here
// 		const maybeulike = await server.find_all_Data({
// 			table: "truyen",
// 			query: { genres: { $in: result[0].genres } },
// 			projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1, update_date: 1 },
// 			sort: { update_date: -1, views: -1, likes: -1, name: 1 },
// 			limit: 6
// 		});


// 		for (let i = 0; i < maybeulike.length; i++) {
// 			maybeulike[i].update_date = calTime(maybeulike[i].update_date);
// 		}
// 		if (account) {
// 			const decode = decrypt(account, authenticationKey);
// 			const decodeList = decode.split(':');
// 			if (decodeList[0] == authenticationKey) {
// 				// check does novel was liked by current user or not
// 				const like_list = await server.find_all_Data({
// 					table: "tt_nguoi_dung",
// 					query: { _id: decodeList[1] },
// 					projection: {
// 						_id: 0,
// 						likeNovels: 1
// 					},
// 					limit: 1
// 				});

// 				if (like_list[0].likeNovels.includes(req.params.id)) { // liked
// 					result[0].liked = 1;
// 				}
// 			}
// 		}

// 		res.render('reviews.ejs', {
// 			headerFile: 'header',
// 			footerFile: 'footer',
// 			name: result[0].name,
// 			author: result[0].author,
// 			name_chaps: result[0].name_chaps,
// 			no_chapters: result[0].no_chapters,
// 			genres: result[0].genres,
// 			summary: result[0].summary,
// 			image: result[0].image,
// 			views: result[0].views,
// 			likes: result[0].likes,
// 			update_date: calTime(result[0].update_date),
// 			status: result[0].status,
// 			liked: result[0].liked,
// 			maybeulike: maybeulike
// 		});

// 	} catch (err) {
// 		console.log('SYSTEM | REVIEWS | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// Reading route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*app.get('/reading/:id/:chap', checkCookieLoglUser, async (req, res) => {
	try {
		let result = await server.find_all_Data({
			table: "truyen",
			query: { _id: new ObjectId(req.params.id) },
			projection: {
				_id: 0,
				name: 1,
				name_chaps: 1,
				chap_ids: 1,
				no_chapters: 1,
			},
			limit: 1
		});
		// Gửi data về client
		// console.log(typeof(String(result[0].chap_ids[parseInt(data.chap)])))
		// console.log(result);
		if ((parseInt(result[0].no_chapters) <= parseInt(req.params.chap)) || (parseInt(req.params.chap) < 0)) {
			res.status(404).send('Không tìm thấy chương!');
			return;
		}
		const chap_content = await server.downloadFileFromDrive(String(result[0].chap_ids[parseInt(req.params.chap)]));

		res.render('readingpage.ejs', {
			headerFile: 'header',
			footerFile: 'footer',
			name: result[0].name,
			no_chapters: result[0].no_chapters,
			name_chaps: result[0].name_chaps,
			name_chap: result[0].name_chaps[parseInt(req.params.chap)],
			chap_content: convertToHtml(chap_content),
			number_chap: req.params.chap,
			id: req.params.id
		});

	} catch (err) {
		console.log('SYSTEM | READING | ERROR | ', err);
		res.sendStatus(500);
	}
});*/

// // admin index page ________________________________________________________________________________________________________________________
// app.get('/admin', checkCookieLoglUser, async (req, res) => {
// 	res.render('admin-index', {
// 		headerFile: 'header',
// 		footerFile: 'footer',
// 	});
// });

// // account manager page ________________________________________________________________________________________________________________________
// app.get('/accountmanager', checkCookieLoglUser, async (req, res) => {
// 	res.render('account-manager', {
// 		headerFile: 'header',
// 		footerFile: 'footer',
// 	});
// });
// // auhtor manager page ________________________________________________________________________________________________________________________
// app.get('/auhtormanager', checkCookieLoglUser, async (req, res) => {
// 	res.render('auhtor-manager', {
// 		headerFile: 'header',
// 		footerFile: 'footer',
// 	});
// });



// Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/search', checkCookieLoglUser, async (req, res) => {
// 	try {
// 		const search = decodeURIComponent(req.query.search);
// 		if (search) {
// 			// get all novels name
// 			let names = await server.find_all_Data({
// 				table: "truyen",
// 				query: { name: { $regex: new RegExp(search, 'i') } },
// 				projection: {
// 					name: 1,
// 					author: 1,
// 					image: 1,
// 					status: 1,
// 					no_chapters: 1,
// 				},
// 				limit: 31
// 			});
// 			// get all novels authors
// 			let authors = await server.find_all_Data({
// 				table: "truyen",
// 				query: { author: { $regex: new RegExp(search, 'i') } },
// 				projection: {
// 					name: 1,
// 					author: 1,
// 					image: 1,
// 					status: 1,
// 					no_chapters: 1,
// 				},
// 				limit: 31
// 			});
// 			// get all novels genres
// 			let genres = await server.find_all_Data({
// 				table: "truyen",
// 				query: { genres: { $in: [new RegExp(search, 'i')] } },
// 				projection: {
// 					name: 1,
// 					author: 1,
// 					image: 1,
// 					status: 1,
// 					no_chapters: 1,
// 				},
// 				limit: 31
// 			});
// 			// 
// 			let authors_more = false;
// 			let name_more = false;
// 			let genres_more = false;
// 			if (names.length == 31) {
// 				name_more = true;
// 				names.pop();
// 			};
// 			if (authors.length == 31) {
// 				authors_more = true;
// 				authors.pop();
// 			};
// 			if (genres.length == 31) {
// 				genres_more = true;
// 				genres.pop();
// 			}
// 			res.render('search.ejs', {
// 				headerFile: 'header',
// 				footerFile: 'footer',
// 				names: names,
// 				name_more: name_more,
// 				authors: authors,
// 				authors_more: authors_more,
// 				genres: genres,
// 				genres_more: genres_more,
// 				what_search: search
// 			});
// 		}
// 		else {
// 			res.sendStatus(404);
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | SEARCH | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// Advanced search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/category', checkCookieLoglUser, async (req, res) => {
// 	try {
// 		let result = await server.find_all_Data({
// 			table: "truyen",
// 			query: {},
// 			projection: {
// 				name: 1,
// 				author: 1,
// 				image: 1,
// 				status: 1,
// 				no_chapters: 1,
// 			},
// 			sort: { views: -1, likes: -1, name: 1 },
// 			limit: 31
// 		});

// 		let more_novel = false;
// 		if (result.length == 31) {
// 			more_novel = true;
// 			result.pop();
// 		};

// 		res.render('category-page.ejs', {
// 			headerFile: 'header',
// 			footerFile: 'footer',
// 			result: result,
// 			more_novel: more_novel
// 		});
// 	} catch (err) {
// 		console.log('SYSTEM | SEARCH | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// 404 route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/404', (req, res) => {
// 	res.sendFile(parentDirectory + '/error/404.html');
// });
// API SPACE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more search
// app.get('/api/search/more', checkCookieLoglUser, async (req, res) => {
// 	try {
// 		const type_id = decodeURIComponent(req.query.type_id);
// 		const num_click = decodeURIComponent(req.query.times);
// 		const search = decodeURIComponent(req.query.search)
// 		if (type_id && num_click) {
// 			// get all novels name
// 			let authors_more = false;
// 			let name_more = false;
// 			let genres_more = false;
// 			let names, authors, genres = undefined;
// 			if (type_id == 'search_more1') {
// 				names = await server.find_all_Data({
// 					table: "truyen",
// 					query: { name: { $regex: new RegExp(search, 'i') } },
// 					projection: {
// 						name: 1,
// 						author: 1,
// 						image: 1,
// 						status: 1,
// 						no_chapters: 1,
// 					},
// 					skip: 30 * num_click,
// 					limit: 31
// 				});
// 				if (names.length == 31) {
// 					name_more = true;
// 					names.pop();
// 				};

// 			}
// 			if (type_id == 'search_more2') {
// 				// get all novels genres
// 				genres = await server.find_all_Data({
// 					table: "truyen",
// 					query: { genres: { $in: [new RegExp(search, 'i')] } },
// 					projection: {
// 						name: 1,
// 						author: 1,
// 						image: 1,
// 						status: 1,
// 						no_chapters: 1,
// 					},
// 					skip: 30 * num_click,
// 					limit: 31
// 				});
// 				if (genres.length == 31) {
// 					genres_more = true;
// 					genres.pop();
// 				};


// 			}
// 			if (type_id == 'search_more3') {
// 				// get all novels authors
// 				authors = await server.find_all_Data({
// 					table: "truyen",
// 					query: { author: { $regex: new RegExp(search, 'i') } },
// 					projection: {
// 						name: 1,
// 						author: 1,
// 						image: 1,
// 						status: 1,
// 						no_chapters: 1,
// 					},
// 					skip: 30 * num_click,
// 					limit: 31
// 				});
// 				if (authors.length == 31) {
// 					authors_more = true;
// 					authors.pop();
// 				};

// 			}

// 			if (names) {
// 				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
// 				res.end(JSON.stringify({ 'truyen': names, 'showbtn': name_more }));
// 			}
// 			else if (genres) {
// 				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
// 				res.end(JSON.stringify({ 'truyen': genres, 'showbtn': genres_more }));
// 			}
// 			else if (authors) {
// 				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
// 				res.end(JSON.stringify({ 'truyen': authors, 'showbtn': authors_more }));
// 			}
// 		}
// 		else {
// 			res.sendStatus(404);
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | SEARCH_MORE | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// Advanced search
// app.get('/api/advanced_search', checkCookieLoglUser, async (req, res) => {
// 	try {
// 		const update_day = decodeURIComponent(req.query.update_day);
// 		const types = decodeURIComponent(req.query.types);
// 		const num_chaps = decodeURIComponent(req.query.num_chaps);
// 		const status = decodeURIComponent(req.query.status);
// 		const sort_by = decodeURIComponent(req.query.sort_by);
// 		const skip = decodeURIComponent(req.query.skip);

// 		let query = {};
// 		let sort = {};

// 		// update date query
// 		switch (update_day) {
// 			case '2':
// 				query.update_date = { $eq: new Date() };
// 				break;
// 			case '3':
// 				query.update_date = { $gte: getFirstAndLastDayOfWeek().firstDay, $lt: getFirstAndLastDayOfWeek().lastDay };
// 				break;
// 			case '4':
// 				query.update_date = { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay };
// 				break;
// 			case '5':
// 				query.update_date = { $gte: getFirstAndLastDayOfYear().firstDay, $lt: getFirstAndLastDayOfYear().lastDay };
// 				break;
// 		}

// 		// types query
// 		if (types != 'undefined') {
// 			query.genres = { $in: types.split(',') };
// 		}

// 		// num chap query
// 		switch (num_chaps) {
// 			case '2':
// 				query.no_chapters = { $gte: 10 };
// 				break;
// 			case '3':
// 				query.no_chapters = { $gte: 100 };
// 				break;
// 			case '4':
// 				query.no_chapters = { $gte: 1000 };
// 				break;
// 		}

// 		// status query:
// 		switch (status) {
// 			case '2':
// 				query.status = "Đang ra";
// 				break;
// 			case '3':
// 				query.status = "Hoàn thành";
// 				break;
// 			case '4':
// 				query.status = "Tạm dừng";
// 				break;
// 		}

// 		// status query:
// 		switch (sort_by) {
// 			case '1':
// 				sort = { views: -1, likes: -1, update_date: -1, name: 1 };
// 				break;
// 			case '2':
// 				sort = { likes: -1, views: -1, update_date: -1, name: 1 };
// 				break;
// 			case '3':
// 				sort = { update_date: -1, views: -1, likes: -1, name: 1 };
// 				break;
// 		}

// 		console.log(query);
// 		const result = await server.find_all_Data({
// 			table: 'truyen',
// 			query: query,
// 			projection: {
// 				name: 1,
// 				author: 1,
// 				image: 1,
// 				status: 1,
// 				no_chapters: 1,
// 			},
// 			sort: sort,
// 			limit: 30,
// 			skip: parseInt(skip) * 30
// 		});

// 		result.more_novel = false;
// 		if (result.length == 31) {
// 			result.more_novel = true;
// 			result.pop();
// 		};

// 		res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
// 		res.end(JSON.stringify(result));
// 	} catch (err) {
// 		console.log('SYSTEM | SEARCH_MORE | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });
// TRUYỆN DỊCH ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get no chapters --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/no_chaps', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | NO_CHAP | Dữ liệu nhận được: ', data);
// 	try {
// 		const result = await server.find_all_Data({
// 			query: { name: data.name },
// 			table: "truyen",
// 			projection: { _id: 0, no_chapters: 1 }, limit: 1
// 		});
// 		// if array emty return zero
// 		if (result.length === 0) {
// 			res.writeHead(200, { 'Content-Type': 'text/plain' });
// 			res.end('0');
// 		}
// 		else {
// 			res.writeHead(200, { 'Content-Type': 'text/plain' });
// 			res.end(String(result[0].no_chapters));
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | NO_CHAP | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });
// // Update mongDB novel data --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('api/update_novel', async (req, res) => {
// 	try {
// 		await updateNovel.updateIds();

// 		// Đọc tệp JSON không đồng bộ
// 		const data = fs.promises.readFile(destFilePath, 'utf8')
// 			.then((fileContent) => {
// 				resolve(fileContent);
// 			})
// 			.catch((err) => {
// 				reject(err);
// 			});

// 		// Phân tích cú pháp tệp JSON và lưu vào biến dummy
// 		let dummy = JSON.parse(data);

// 		// Sử dụng biến dummy ở đây
// 		console.log(dummy.ids);

// 		let myobj = {
// 			name: dummy.title,
// 			author: "1810s team",
// 			name_chaps: dummy.name_chap,
// 			chap_ids: dummy.ids,
// 			no_chapters: dummy.ids.length,
// 			genres: dummy['Genre(s)'],
// 			status: "Đang ra",
// 			summary: dummy.Summary,
// 			image: dummy.img,
// 			views: 0,
// 			likes: 0,
// 			update_date: new Date(),
// 			comment_id: "unknown"
// 		};

// 		// clear folder tong hop
// 		const directory = "./trans/tonghop";

// 		fs.readdir(directory, (err, files) => {
// 			if (err) throw err;

// 			for (const file of files) {
// 				fs.unlink(path.join(directory, file), (err) => {
// 					if (err) throw err;
// 				});
// 			}
// 		});

// 		// upload to mongoDB
// 		console.log('SYSTEM | UPDATE_NOVEL | Start upload novel to MongoDB');
// 		await server.add_one_Data("truyen", myobj);
// 		console.log('SYSTEM | UPDATE_NOVEL | Complete upload novel to MongoDB');

// 		res.sendStatus(200);
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE_NOVEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reviews --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// app.post('/api/reviews', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | REVIEWS |', data);
// 	try {
// 		let result = await server.find_all_Data({
// 			table: "truyen",
// 			query: { _id: new ObjectId(data.id) },
// 			projection: {
// 				no_chapters: 1,
// 				name_chaps: 1,
// 			},
// 			limit: 1
// 		});

// 		// console.log('SYSTEM | REVIEWS | Trả về thông tin reviews truyện ', result[0].name);
// 		res.writeHead(200, { 'Content-Type': 'application/json' });


// 		res.end(JSON.stringify(result[0]));
// 	} catch (err) {
// 		console.log('SYSTEM | REVIEWS | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// Sign up --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/signup', async (req, res) => {
// 	const data = req.body;
// 	// 404: ten dang nhap ton tai
// 	// data = {email: a@gmail.com, usr: bbp, pass: 1234567890}
// 	console.log('SYSTEM | SIGN_UP | Dữ liệu nhận được: ', data);
// 	try {
// 		// usr ton tai => thong bao
// 		console.log(data.usr);
// 		const result = await server.find_all_Data({ query: { _id: data.usr }, table: "dang_nhap", projection: { _id: 1 } });
// 		console.log(result);
// 		if (result.length != 0) {
// 			res.writeHead(404, { 'Content-Type': 'text/plain' });
// 			res.end('Ten đang nhập đã tồn tại');
// 		} else {
// 			// add data to dang_ky database:
// 			await server.add_one_Data("dang_ky", {
// 				usr: data.usr,
// 				email: data.email,
// 				pass: data.pass
// 			});
// 			res.writeHead(200, { 'Content-Type': 'text/plain' });
// 			res.end('Sign up success!!!');
// 			console.log('SYSTEM | SIGN_UP | Sign up success!!!');
// 		}

// 	} catch (err) {
// 		console.log('SYSTEM | SIGN_UP | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// // Log in --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/login', async (req, res) => {
// 	const data = req.body;
// 	// 403: sai mat khau
// 	// log in database {
// 	// usr: 18102003
// 	// pass: 18102003
// 	// email: 18102003
// 	// }
// 	// data = {usr: bbp, pass: 1234567890}
// 	console.log('SYSTEM | LOG_IN | Dữ liệu nhận được: ', data);
// 	try {
// 		const f_result = await server.find_all_Data({
// 			query: { usr: data.usr },
// 			table: "dang_ky",
// 			projection: {
// 				_id: 0,
// 				pass: 1
// 			}
// 		});

// 		if (f_result.length != 0) {
// 			// log in first time: (sign up database)
// 			for (let i = 0; i < f_result.length; i++) {
// 				if (f_result[i].pass == data.pass) {
// 					// move data to dang_nhap database
// 					await server.add_one_Data("dang_nhap", {
// 						_id: data.usr,
// 						pass: data.pass,
// 						lgway: 'normal'
// 					});

// 					// them truong moi trong tt_nguoi_dung
// 					// thong tin nguoi dung
// 					const newUser = {
// 						_id: data.usr,
// 						email: f_result.email,
// 						displayName: data.usr,
// 						avatarUrl: 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg',
// 						sex: "unknown",
// 						likeNovels: [],
// 						mynovel: []
// 					};

// 					// them mot nguoi dung moi
// 					await server.add_one_Data("tt_nguoi_dung", newUser);

// 					// remove usr name font dang_ky data base\
// 					await server.delete_many_Data("dang_ky", { usr: data.usr });

// 					set_cookies(res, data.usr, data.pass); // set cookies

// 					res.end('Log in sucess!!!');

// 					break;
// 				}

// 				if (i == f_result.length - 1) {
// 					res.writeHead(403, { 'Content-Type': 'text/plain' });
// 					res.end('Log in fail!!!');
// 				}
// 			}
// 		}//chao e
// 		else {
// 			// log in next time: (log in database)
// 			const n_result = await server.find_one_Data("dang_nhap", { _id: data.usr });

// 			if (n_result.pass == data.pass) {
// 				set_cookies(res, data.usr, data.pass); // set cookies

// 				res.end('Log in success!!!');
// 			} else {
// 				res.writeHead(403, { 'Content-Type': 'text/plain' });
// 				res.end('Log in fail!!!');
// 			}
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | LOG_IN | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// // Logout /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.post('/api/logout', async (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log('SYSTEM | LOGOUT | Dữ liệu nhận được: ', data);
// 		const expirationDate = new Date('2018-12-31');
// 		res.cookie('account', data.account, {
// 			expires: expirationDate, // Cookie will permernently expire
// 			secure: true,
// 			sameSite: 'none',
// 			domain: 'localhost',
// 			// domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
// 			path: '/'
// 		});
// 		res.writeHead(200, { 'Content-Type': 'text/plain' });
// 		console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
// 		res.end('Da dang xuat!');
// 	} catch (err) {
// 		res.sendStatus(500);
// 		console.log('SYSTEM | LOGOUT | ERROR | ', err);
// 	}
// });

/////////////////ALL LOG IN WAYS/////////////////
// passport.serializeUser(function (userId, done) {
// 	done(null, userId);
// });

// passport.deserializeUser(async function (userId, done) {
// 	try {
// 		const user = await server.find_one_Data("tt_nguoi_dung", { _id: ObjectId(userId) });
// 		done(null, user);
// 	} catch (err) {
// 		done(err);
// 	}
// });

// //////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////
// passport.use(new GoogleStrategy({
// 	clientID: credentials.google.client_id,
// 	clientSecret: credentials.google.client_secret,
// 	callbackURL: currentURL + "/auth/google/callback",
// 	passReqToCallback: true
// },
// 	async function (request, accessToken, refreshToken, profile, done) {
// 		try {
// 			// console.log(accessToken);
// 			// console.log(refreshToken);
// 			// console.log(request);
// 			// Kiểm tra xem thông tin người dùng đã tồn tại chưa
// 			console.log(profile)
// 			const existingUser = await server.find_one_Data("tt_nguoi_dung", { _id: profile.id });
// 			if (existingUser) {
// 				// update new data for tt_nguoi_dung database
// 				await server.update_one_Data("tt_nguoi_dung", { _id: profile.id },
// 					{
// 						$set: {
// 							email: profile.emails[0].value,
// 							displayName: profile.displayName,
// 							avatarUrl: profile.photos[0].value,
// 						}
// 					});

// 				return done(null, existingUser);

// 			}
// 			else {
// 				// Tạo mới một người dùng
// 				const newUser = {
// 					_id: profile.id,
// 					email: profile.emails[0].value,
// 					displayName: profile.displayName,
// 					avatarUrl: profile.photos[0].value,
// 					sex: "unknown",
// 					likeNovels: [],
// 					mynovel: []
// 				};

// 				// dang_nhap data base:
// 				await server.add_one_Data("dang_nhap", { _id: profile.id, lgway: 'google', });
// 				// người dùng database:
// 				await server.add_one_Data("tt_nguoi_dung", newUser);

// 				/// set cookie cho vào tài khoảng
// 				return done(null, newUser);
// 			}
// 		} catch (err) {
// 			return done(err);
// 		}
// 	}
// ));

// app.get(
// 	'/api/auth/google',
// 	passport.authenticate('google', {
// 		scope: ['profile', 'email']
// 	})
// );

// // lấy dữ liêu liệu về từ google
// app.get('/auth/google/callback',
// 	passport.authenticate('google', { failureRedirect: '/api/login' }),
// 	function (req, res) {
// 		console.log('ẹc'); // thg nào làm cái này - dawn1810
// 		// req.user = {
// 		// 	_id: '113263126602180653712',
// 		// 	email: 'binhminh19112003@gmail.com',
// 		// 	displayName: 'Dawn Nguyen',
// 		// 	avatarUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdoUcqqaX6Kqqxfujnio9LmL2J_SIYjDaxcb8kf=s96-c',
// 		// 	sex: 'unknown',
// 		// 	likeNovels: [],
// 		// 	monitorNovels: [],
// 		// 	commentIds: []
// 		//  }
// 		//set cookies
// 		set_cookies(res, req.user._id, "");

// 		// Đóng tab hiện tại và reload main window
// 		res.write('<script>');
// 		res.write('window.close();');
// 		res.write('window.opener.location.reload();');
// 		res.write('</script>');
// 		// dùng chung
// 		res.end('Login thanh cong!');
// 		// res.sendStatus(404);
// 	}
// );

// app.post('/api/updatelike', async (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log('SYSTEM | UPDATE_LIKE | Dữ liệu nhận được: ', data);
// 		const decode = decrypt(req.cookies.account, authenticationKey);
// 		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
// 		// console.log(`SYSTEM | UPDATE_LIKE | Dữ liệu đã giải mã ${decodeList}`);
// 		// decodeList = authenticationKey:id:pass
// 		if (decodeList[0] == authenticationKey) {
// 			//account: accountCookie,
// 			//status: status (0/1)
// 			//id_truyen

// 			if (parseInt(data.liked)) { // like
// 				// up one like for current novel
// 				await server.update_one_Data('truyen',
// 					{ _id: new ObjectId(data.id_truyen) },
// 					{ $inc: { likes: 1 } }
// 				);
// 				// add current nodel to like list of current user
// 				await server.update_one_Data('tt_nguoi_dung',
// 					{ _id: decodeList[1] },
// 					{ $push: { likeNovels: data.id_truyen } }
// 				);
// 				// response client
// 				res.writeHead(200, { 'Content-Type': 'text/plain' });
// 				console.log(`SYSTEM | UPDATE_LIKE | Like cho truyen hien tai`);
// 				res.end(JSON.stringify('Liked!!!'));
// 			}
// 			else { // unlike
// 				// down on like for current novel
// 				await server.update_one_Data('truyen',
// 					{ _id: new ObjectId(data.id_truyen) },
// 					{ $inc: { likes: -1 } }
// 				);
// 				// remove current nodel from like list of current user
// 				await server.update_one_Data('tt_nguoi_dung',
// 					{ _id: decodeList[1] },
// 					{ $pull: { likeNovels: data.id_truyen } }
// 				);
// 				// response client
// 				res.writeHead(200, { 'Content-Type': 'text/plain' });
// 				console.log(`SYSTEM | UPDATE_LIKE | Unlike cho truyen hien tai`);
// 				res.end(JSON.stringify('Unliked!!!'));
// 			}
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE_LIKE | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// })

// app.post('/api/updateviews', async (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log('SYSTEM | UPDATE_VIEWS | Dữ liệu nhận được: ', data);
// 		// up one like for current novel
// 		await server.update_one_Data('truyen',
// 			{ _id: new ObjectId(data.id_truyen) },
// 			{ $inc: { views: 1 } }
// 		);
// 		// response client
// 		res.writeHead(200, { 'Content-Type': 'text/plain' });
// 		console.log(`SYSTEM | UPDATE_VIEWS | Da tang view cho truyen hien tai`);
// 		res.end(JSON.stringify('viewed!!!'));


// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE_VIEWS | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// })

// Upload novel ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/upload_novel', async (req, res) => {
// 	const data = req.body;
// 	const account = req.cookies.account
// 	console.log('SYSTEM | UPLOAD_NOVEL | Dữ liệu nhận được: ', data);
// 	console.log('SYSTEM | UPLOAD_NOVEL | Cookie nhận được: ', account);
// 	const decode = decrypt(account, authenticationKey);
// 	const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
// 	// console.log(`SYSTEM | UPLOAD_NOVEL | Dữ liệu đã giải mã ${decodeList}`);
// 	// decodeList = authenticationKey:id:pass

// 	try {
// 		if (decodeList[0] == authenticationKey) {
// 			// upload novel content
// 			let up_content = {
// 				name: data.name,
// 				author: data.author,
// 				name_chaps: data.name_chaps,
// 				chap_ids: data.chap_ids,
// 				status: data.status,
// 				no_chapters: data.name_chaps.length,
// 				genres: data.genres,
// 				summary: data.summary,
// 				image: data.image,
// 				views: 0,
// 				likes: 0,
// 				update_date: new Date(),
// 			};

// 			const id_check = await server.add_one_Data("truyen", up_content);

// 			console.log(id_check);
// 			// create a new comment document
// 			await server.add_one_Data("comment", {
// 				_id: id_check.insertedId,
// 				content: {
// 					// user_name: content (do what to add)
// 				}
// 			});

// 			// update user's novel list
// 			await server.update_one_Data('tt_nguoi_dung', { _id: decodeList[1] }, { $push: { mynovel: id_check.insertedId.toString() } });
// 			res.sendStatus(200);
// 		}

// 	} catch (err) {
// 		console.log('SYSTEM | UPLOAD NOVEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// app.post('/api/update_upload_novel', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | UPDATE UPLOAD NOVEL |', data);
// 	try {
// 		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
// 			$set: {
// 				update_date: new Date()
// 			},
// 			$push: {
// 				name_chaps: { $each: data.name_chaps },
// 				chap_ids: { $each: data.chap_ids }
// 			},
// 			$inc: {
// 				no_chapters: data.name_chaps.length
// 			}
// 		})

// 		res.sendStatus(200);
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// app.post('/api/edit_novel', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | EDIT_TRUYEN |', data);
// 	try {
// 		// get old _chap ids and name chaps
// 		let curr_novel = await server.find_one_Data("truyen", { _id: new ObjectId(data.id) });
// 		let new_chap_ids = curr_novel.chap_ids;
// 		// set chap names as new name_chaps
// 		let new_name_chaps = data.name_chaps;

// 		// remove all chap that
// 		for (let i = 0; i < data.remove_list.length; i++) {
// 			let remove_index = parseInt(data.remove_list[i]);
// 			console.log(remove_index);
// 			// delete remove id file from drive and remove id from chapid:
// 			await server.deleteFileFromDrive(new_chap_ids.splice(remove_index, 1)[0]);
// 			// remove nam chap from name chaps
// 			new_name_chaps.splice(remove_index, 1);
// 		}

// 		console.log(data.edit_index.length);
// 		for (let i = 0; i < data.edit_index.length; i++) {
// 			let change_index = parseInt(data.edit_index[i]);
// 			// delete old id file from drive:
// 			await server.deleteFileFromDrive(new_chap_ids[change_index]);
// 			// replace old id with new index:
// 			new_chap_ids[change_index] = data.chap_ids[i];
// 		}

// 		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
// 			$set: {
// 				name_chaps: new_name_chaps,
// 				chap_ids: new_chap_ids
// 			}
// 		});

// 		res.sendStatus(200);
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// app.post('/api/edit_info_novel', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | EDIT_TRUYEN |', data);
// 	try {
// 		await server.update_one_Data("truyen", { _id: new ObjectId(data.id) }, {
// 			$set: {
// 				name: data.novel_name,
// 				author: data.author_name,
// 				status: data.novel_status,
// 				genres: data.novel_types,
// 				summary: data.novel_descript,
// 				image: data.novel_avt,
// 				update_date: new Date()
// 			}
// 		});

// 		res.sendStatus(200);
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}

// });
// Route xử lý yêu cầu upload file ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/uploadFile', upload.array('files[]'), async function (req, res) {
// 	if (!req.files) {
// 		return res.status(400).send('No file uploaded.');
// 	}
// 	let list_name = [];

// 	// Kiểm tra kiểu dữ liệu của các tệp
// 	for (let i = 0; i < req.files.length; i++) {

// 		if (!allowedMimeTypes.includes(req.files[i].mimetype)) {
// 			return res.status(400).send('Invalid file type.');
// 		}
// 		else if (allowedMimeTypes.indexOf(req.files[i].mimetype) == 1) {
// 			await readDocxFile(path.join(uploadDirectory, req.files[i].originalname));
// 		}
// 		const fileName = req.files[i].originalname.replace('.docx', '.txt');
// 		list_name.push(fileName);

// 	}

// 	// Xử lý các tệp đã tải lên ở đây
// 	console.log('SYSTEM | UPLOAD_FILE | Files uploaded:', req.files);
// 	res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
// 	// res.end('ok bro');

// 	res.end(JSON.stringify(await get_full_id(uploadDirectory, list_name)));
// });

// // hủy
// // Delete novel page --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/cancel', async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | CANCEL |', data);
// 	try {
// 		if (data.status == 'cancel') {
// 			for (const id of data.chap_ids) {
// 				await server.deleteFileFromDrive(id);
// 			}

// 			res.sendStatus(200);
// 		}
// 		else if (data.status == 'delete') {
// 			let result = await server.find_one_Data('truyen', { _id: new ObjectId(data.id) });

// 			// xóa file trên drive 
// 			for (const id of result.chap_ids) {
// 				await server.deleteFileFromDrive(id);
// 			}

// 			// xóa truyện trên server
// 			await server.delete_one_Data('truyen', { _id: new ObjectId(data.id) })
// 			const decode = decrypt(req.cookies.account, authenticationKey);
// 			const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
// 			// console.log(`SYSTEM | CANCEL | Dữ liệu đã giải mã ${decodeList}`);
// 			// decodeList = authenticationKey:id:pass
// 			if (decodeList[0] == authenticationKey) {
// 				await server.update_one_Data("tt_nguoi_dung", { _id: decodeList[1] },
// 					{
// 						$pull: { mynovel: data.id }
// 					});
// 				let new_resual = await storage.getItem('novellist');
// 				storage.setItem('novellist', await deleteItemsById(new_resual, data.id));

// 			}
// 			else {
// 				res.sendStatus(404)
// 			}
// 			res.sendStatus(200);
// 			console.log(data.id);
// 		}


// 	} catch (err) {
// 		console.log('SYSTEM | CANCEL | ERROR | ', err);
// 		res.sendStatus(500);
// 	}
// });

// // Thay đổi info -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/updateInfo', async (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log('SYSTEM | UPDATE INFO |', data);
// 		let avt_var = data.img
// 		if (isBase64(data.img)) {
// 			avt_var = await compressImageBase64(data.img, 5)
// 		}
// 		await server.update_one_Data("tt_nguoi_dung", { _id: data.usr },
// 			{
// 				$set: {
// 					email: data.email,
// 					displayName: data.hoten,
// 					avatarUrl: avt_var,
// 					sex: data.sex,
// 				}
// 			});
// 		res.sendStatus(200);
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE INFO | ERROR | ', err);
// 		res.sendStatus(500);
// 	}

// });

// // Đổi pass ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post('/api/changepass', async (req, res) => {
// 	try {
// 		const data = req.body;
// 		const decode = decrypt(req.cookies.account, authenticationKey);
// 		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
// 		// console.log(`SYSTEM | CHANGE_PASSWORD | Dữ liệu đã giải mã ${decodeList}`);
// 		// decodeList = authenticationKey:id:pass
// 		if (decodeList[0] == authenticationKey) {
// 			console.log('SYSTEM | CHANGE_PASSWORD |', data);
// 			const n_result = await server.find_one_Data("dang_nhap", { _id: decodeList[1] });
// 			if (data['Old-Password'] == n_result.pass) {
// 				await server.update_one_Data("dang_nhap", { _id: decodeList[1] },
// 					{
// 						$set: {
// 							pass: data['new-Password']
// 						}
// 					});
// 				res.sendStatus(200);
// 			} else {
// 				res.status(403).send('Sai pass cũ')
// 			}
// 		} else {
// 			res.status(404).send('Sai xác thực')
// 		}
// 	} catch (err) {
// 		console.log('SYSTEM | UPDATE INFO | ERROR | ', err);
// 		res.sendStatus(500);
// 	}

// });

// // Thay đổi tứng chapters -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// app.post("/api/download_chap", async (req, res) => {
// 	const data = req.body;
// 	console.log('SYSTEM | DOWNLOAD CHAPTER |', data);
// 	server.downloadFileFromDriveforUser(data.id, res)
// });

// app.get('*', checkCookieLoglUser, async function (req, res) {
// 	res.sendStatus(404);
// 	// let result = await storage.getItem('novellist');
// 	// currentURL = req.url;

// 	// res.render('index', {
// 	// 	headerFile: 'header',
// 	// 	footerFile: 'footer',
// 	// 	jsontruyen: result
// 	// });
// })

// Schedule the code execution at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
	// update popular novel list 
	await getNovelList();
	// remove all data in dang_ky database
	await server.delete_many_Data("dang_ky", {});
});

// Run the code immediately
// update popular novel list 


app.listen(port, async () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
	await getNovelList();
});