const server = require('./vip_pro_lib');
const updateNovel = require('./Updatenovel');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const NodePersist = require('node-persist');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const credentials = require('./client_secret_483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com.json');
const session = require('express-session');
const fs = require("fs");
const { ObjectId } = require('mongodb');

////////////////////////
const app = express();
const router = express.Router();

const port = 6969;
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');


function sendEmail(password, email, usr_name) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'nguytuan04@gmail.com',
			pass: 'unjwfrdskgezbmym'
		}
	});

	const mailOptions = {
		from: 'nguytuan04@gmail.com',
		to: `${email}`,
		subject: 'CHÀO MỪNG BẠN ĐẾN VỚI ĐỊA NGỤC',
		text: 'Email content',
		html:
			`<!DOCTYPE html>
      <html>
      <head>
         <meta charset="utf-8">
         <title>NodeMailer Email Template</title>
      </head>
      <body>
         <div class="container" style= "width: 100%; height: 100%; padding: 20px; display: flex; justify-content: center; align-content: center; background-color: #f4f4f4;">
            <div class="email" style= "width: 500px; height: 750px; margin: 0 auto; background-image: url(https://i.imgur.com/rKOdysI.png); background-repeat: no-repeat; background-attachment: content; background-size: 100% 100%; background-position: center; padding: 20px; position: relative;">
               <div class="email-header" style="background-color: transparent; color: black; padding-top: 90px; text-align: center;">
                  <h1 style="font-size:40px;">${usr_name.toUpperCase()}</h1>
                  <div style="padding-top:68%;text-align: center;font-size:30px;" >
                     <span>${password}</span>
                  </div>
               </div>
            </div>
         </div>
      </body>
   </html>`
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log('SYSTEM | SEND_EMAIL | ', error);
		} else {
			console.log(`SYSTEM | SEND_EMAIL | ${info.response}`);
			// do something useful
		}
	});
}


function encrypt(data, secretKey) {
	const algorithm = 'aes-256-cbc';
	const iv = crypto.randomBytes(16); // Generate a random IV
	const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);

	let encryptedData = cipher.update(data, 'utf8', 'hex');
	encryptedData += cipher.final('hex');

	const encryptedDataWithIV = iv.toString('hex') + encryptedData;
	console.log('SYSTEM | ENCRYPT | OK');

	return encryptedDataWithIV;
}

function decrypt(encryptedDataWithIV, secretKey) {
	const algorithm = 'aes-256-cbc';
	const iv = Buffer.from(encryptedDataWithIV.slice(0, 32), 'hex'); // Extract IV from the encrypted data
	const encryptedData = encryptedDataWithIV.slice(32); // Extract the encrypted data without IV
	const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);

	let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
	decryptedData += decipher.final('utf8');

	console.log('SYSTEM | DECRYPT | OK');

	return decryptedData;
}

function randompass() {
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const number = "0123456789";
	const symbol = "!@#$%^&*_-+="
	const allChars = upperCase + lowerCase + number + symbol

	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (password.length < 8) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}
	console.log('SYSTEM | GEN_PASSWORD | OK')
	return password;
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
		firstDay: firstDayOfWeek.toISOString(),
		lastDay: lastDayOfWeek.toISOString(),
	};
}

function getFirstAndLastDayOfMonth() {
	const currentDate = new Date();

	// Calculate the first day of the month
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	const firstDayOfMonthISO = firstDayOfMonth.toISOString().split('T')[0];

	// Calculate the last day of the month
	const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
	const lastDayOfMonthISO = lastDayOfMonth.toISOString().split('T')[0];

	return {
		firstDay: firstDayOfMonthISO,
		lastDay: lastDayOfMonthISO,
	};
}

const storage = NodePersist.create({
	dir: '.temp',
});


async function getNovelList() {
	try {
		// by week:
		let query_by_week = { update_date: { $gte: getFirstAndLastDayOfWeek().firstDay, $lt: getFirstAndLastDayOfWeek().lastDay } };
		const by_week = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 50 });
		// by month:
		let query_by_month = { update_date: { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay } };
		const by_month = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 50 });
		// all time
		const all_time = await server.find_all_Data({ table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 50 });
		// update nearby:
		const nearby = await server.find_all_Data({ table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { update_date: 1 }, limit: 50 });

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

// Lắng nghe các yêu cầu POST tới localhost:6969
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(session({
	secret: 'okbro', // Thay đổi "your-secret-key" bằng một chuỗi bất kỳ
	resave: false,
	saveUninitialized: false
}));
app.use(preventSessionFixation);
app.use(express.json());
const parentDirectory = path.dirname(__dirname);
app.use(express.static(parentDirectory));



app.get('/', (req, res) => {
	res.sendFile(parentDirectory + '/HTML/index.html');
});

app.get('/profile', (req, res) => {
	res.sendFile(parentDirectory + '/HTML/profile.html');
});

app.get('/category', (req, res) => {
	res.sendFile(parentDirectory + '/HTML/category-page.html');
});

// app.get('/reviews', (req, res) => {
// 	res.sendFile(parentDirectory + '/HTML/reviews.html');
// });

// app.get('/reading', (req, res) => {
// 	res.sendFile(parentDirectory + '/HTML/readingpage.html');
// });

// Authentication (xac thuc dc chua) ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/xacthuc', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | AUTHENTICATION | Dữ liệu nhận được: ', data);
		const decode = decrypt(data.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
		console.log(`SYSTEM | AUTHENTICATION | Dữ liệu đã giải mã ${decodeList}`);
		// decodeList = authenticationKey:id:pass
		if (decodeList[0] == authenticationKey) {
			const result = await server.find_one_Data("tt_nguoi_dung", { _id: decodeList[1] })

			if (result != null && result.length != 0) {
				let send_back = {
					usr: result.displayName,
					avt: result.avatarUrl
				};

				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
				console.log(`SYSTEM | AUTHENTICATION | Trả về tên user ${result.displayName}`);
				res.end(JSON.stringify(send_back));
			}
			else if (result == null) {
				res.sendStatus(404);
				console.log(`SYSTEM | AUTHENTICATION | User ${decodeList[1]} không tìm thấy trong database (không tìm thấy trong mongoDB)`);
			}
			else {
				res.sendStatus(404);
				console.log(`SYSTEM | AUTHENTICATION | User ${decodeList[1]} không tìm thấy trong database (không tìm thấy trong mongoDB)`);
			}
		}
	} catch (err) {
		console.log('SYSTEM | AUTHENTICATION | ERROR | ', err);
		res.sendStatus(500);
	}
});

app.get('/get_ds', async (req, res) => {
	try {
		let result = await storage.getItem('novellist');
		// console.log('SYSTEM | GET_POPULAR_NOVEL | Danh sach id truyen ', reuslt._id);
		res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
		res.end(JSON.stringify(result));
		// console.log('SYSTEM | GET_POPULAR_NOVEL | Dữ liệu ', result, ' trên mongDB');
	} catch (err) {
		console.log('SYSTEM | GET_POPULAR_NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
});

// Get no chapters ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/no_chaps', async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | NO_CHAP | Dữ liệu nhận được: ', data);
	try {
		let query = { name: data.name };
		const result = await server.find_all_Data({ query: query, table: "truyen", projection: { _id: 0, no_chapters: 1 }, limit: 1 });
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
});

// Update mongDB novel data ////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/update_novel', async (req, res) => {
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
});

// Sign up /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/signup', async (req, res) => {
	const data = req.body;
	// 404: ten dang nhap ton tai
	// data = {email: a@gmail.com, usr: bbp, pass: 1234567890}
	console.log('SYSTEM | SIGN_UP | Dữ liệu nhận được: ', data);
	try {
		// usr ton tai => thong bao
		const result = await server.find_all_Data({ query: { usr: data.usr }, table: "dang_nhap", projection: { _id: 0, usr: 1 } });

		if (result.length != 0) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Ten đang nhập đã tồn tại');
		} else {
			// add data to dang_ky database:
			await server.add_one_Data("dang_ky", {
				usr: data.usr,
				email: data.email,
				pass: data.pass
			});
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('Sign up success!!!');
			console.log('SYSTEM | SIGN_UP | Sign up success!!!');
		}

	} catch (err) {
		console.log('SYSTEM | SIGN_UP | ERROR | ', err);
		res.sendStatus(500);
	}
});

// Log in /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/login', async (req, res) => {
	const data = req.body;
	// 403: sai mat khau
	// log in database {
	// usr: 18102003
	// pass: 18102003
	// email: 18102003
	// }
	// data = {usr: bbp, pass: 1234567890}
	console.log('SYSTEM | LOG_IN | Dữ liệu nhận được: ', data);
	try {
		const f_result = await server.find_all_Data({
			query: { usr: data.usr },
			table: "dang_ky",
			projection: {
				_id: 0,
				pass: 1
			}
		});

		let check = false;

		if (f_result.length != 0) {
			// log in first time: (sign up database)
			for (let i = 0; i < f_result.length; i++) {
				if (f_result[i].pass == data.pass) {
					// move data to dang_nhap database
					await server.add_one_Data("dang_nhap", {
						_id: data.usr,
						pass: data.pass,
						lgway: 'normal'
					});

					// them truong moi trong tt_nguoi_dung
					// thong tin nguoi dung
					const newUser = {
						_id: data.usr,
						email: f_result.email,
						displayName: 'unknown',
						avatarUrl: 'unknown',
						sex: "unknown",
						likeNovels: [],
						monitorNovels: [],
						commentIds: []
					};

					// them mot nguoi dung moi
					await server.add_one_Data("tt_nguoi_dung", newUser);

					// remove usr name font dang_ky data base\
					await server.delete_many_Data("dang_ky", { usr: data.usr });

					set_cookies(res, data.usr, data.pass); // set cookies

					// res.write('<script>');
					// res.write('window.location.reload();'); // Reload the current window
					// res.write('</script>');

					res.end('Log in sucess!!!');

					break;
				}

				if (i == f_result.length - 1) {
					res.writeHead(403, { 'Content-Type': 'text/plain' });
					res.end('Log in fail!!!');
				}
			}
		}
		else {
			// log in next time: (log in database)
			const n_result = await server.find_one_Data("dang_nhap", { _id: data.usr });

			if (n_result.pass == data.pass) {
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end('Log in success!!!');
			} else {
				res.writeHead(403, { 'Content-Type': 'text/plain' });
				res.end('Log in fail!!!');
			}
		}
	} catch (err) {
		console.log('SYSTEM | LOG_IN | ERROR | ', err);
		res.sendStatus(500);
	}
});

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (userId, done) {
	done(null, userId);
});

passport.deserializeUser(async function (userId, done) {
	try {
		const user = await server.find_one_Data("tt_nguoi_dung", { _id: ObjectId(userId) });
		done(null, user);
	} catch (err) {
		done(err);
	}
});

//////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new GoogleStrategy({
	clientID: credentials.google.client_id,
	clientSecret: credentials.google.client_secret,
	callbackURL: "http://localhost:6969/auth/google/callback",
	passReqToCallback: true
},
	async function (request, accessToken, refreshToken, profile, done) {
		try {
			// console.log(accessToken);
			// console.log(refreshToken);
			// console.log(request);
			// Kiểm tra xem thông tin người dùng đã tồn tại chưa
			const existingUser = await server.find_one_Data("tt_nguoi_dung", { _id: profile.id });
			if (existingUser) {
				// update new data for tt_nguoi_dung database
				await server.update_one_Data("tt_nguoi_dung", { _id: profile.id },
					{
						email: profile.emails[0].value,
						displayName: profile.displayName,
						avatarUrl: profile.photos[0].value,
						sex: "unknown",
						likeNovels: [],
						monitorNovels: [],
						commentIds: []
					});

				return done(null, existingUser);

			}
			else {
				// Tạo mới một người dùng
				const newUser = {
					_id: profile.id,
					email: profile.emails[0].value,
					displayName: profile.displayName,
					avatarUrl: profile.photos[0].value,
					sex: "unknown",
					likeNovels: [],
					monitorNovels: [],
					commentIds: []
				};

				// dang_nhap data base:
				await server.add_one_Data("dang_nhap", { _id: profile.id, lgway: 'google', });
				// người dùng database:
				await server.add_one_Data("tt_nguoi_dung", newUser);

				/// set cookie cho vào tài khoảng
				return done(null, newUser);
			}
		} catch (err) {
			return done(err);
		}
	}
));

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

// lấy dữ liêu liệu về từ google
app.get('/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function (req, res) {
		// req.user = {
		// 	_id: '113263126602180653712',
		// 	email: 'binhminh19112003@gmail.com',
		// 	displayName: 'Dawn Nguyen',
		// 	avatarUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdoUcqqaX6Kqqxfujnio9LmL2J_SIYjDaxcb8kf=s96-c',
		// 	sex: 'unknown',
		// 	likeNovels: [],
		// 	monitorNovels: [],
		// 	commentIds: []
		//  }
		//set cookies
		set_cookies(res, req.user._id, "");

		// Đóng tab hiện tại và reload main window
		res.write('<script>');
		res.write('window.close();');
		res.write('window.opener.location.reload();');
		res.write('</script>');
		// dùng chung
		res.end('Login thanh cong!');
	}
);

//////////LOG IN WITH FACEBOOK////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new FacebookStrategy({
	clientID: credentials.facebook.client_id,
	clientSecret: credentials.facebook.client_secret,
	callbackURL: "http://localhost:6969/auth/facebook/callback",
	passReqToCallback: true
},
	async function (request, accessToken, refreshToken, profile, done) {
		// console.log(profile);
		return done(null, profile.id);
		// try {
		// 	// Kiểm tra xem thông tin người dùng đã tồn tại chưa
		// 	const existingUser = await server.find_one_Data("tt_nguoi_dung", { _id: profile.id });
		// 	if (existingUser) {
		// 		// update new data for tt_nguoi_dung database
		// 		await server.update_one_Data("tt_nguoi_dung", { _id: profile.id }, {
		// 			email: profile.emails[0].value,
		// 			displayName: profile.displayName,
		// 			avatarUrl: profile.photos[0].value,
		// 			sex: "unknown",
		// 			likeNovels: [],
		// 			monitorNovels: [],
		// 			commentIds: []
		// 		});

		// 		return done(null, existingUser._id);
		// 		/// set cookie cho vào tài khoảng
		// 	}
		// else {
		// 	// Tạo mới một người dùng
		// 	const newUser = {
		// 		_id: profile.id,
		// 		lgway: 'google',
		// 		email: profile.emails[0].value,
		// 		displayName: profile.displayName,
		// 		avatarUrl: profile.photos[0].value,
		// 		sex: "unknown",
		// 		likeNovels: [],
		// 		monitorNovels: [],
		// 		commentIds: []
		// 	};

		// 		await server.add_one_Data("tt_nguoi_dung", newUser._id);
		// 		/// set cookie cho vào tài khoảng
		// 		return done(null, newUser);
		// 	}
		// } catch (err) {
		// 	return done(err);
		// }
	}
));

app.get(
	'/auth/facebook',
	passport.authenticate('facebook', {
		scope: ['public_profile', 'email'] // không biết đúng không làm đại
	})
);

app.get('/auth/facebook',
	passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
	passport.authenticate('facebook', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.send('<script>window.close();</script>');
	}
);

// Reviews page ---------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/reviews/:id', async (req, res) => {
	try {
		res.sendFile(parentDirectory + '/HTML/reviews.html');
	} catch (err) {
		console.log('SYSTEM | REVIEWS | ERROR | ', err);
		res.sendStatus(500);
	}
});

app.post('/reviews', async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | REVIEWS |', data);
	try {
		let result = await server.find_all_Data({
			table: "truyen",
			query: { _id: new ObjectId(data.id) },
			projection: {
				name: 1,
				author: 1,
				no_chapters: 1,
				genres: 1,
				summary: 1,
				image: 1,
				name_chaps: 1,
				views: 1,
				likes: 1,
				name_chaps: 1
			},
			limit: 1
		});
		// console.log('SYSTEM | REVIEWS | Trả về thông tin reviews truyện ', result[0].name);
		res.writeHead(200, { 'Content-Type': 'application/json' });

		res.end(JSON.stringify(result[0]));
	} catch (err) {
		console.log('SYSTEM | REVIEWS | ERROR | ', err);
		res.sendStatus(500);
	}
});

app.use('/', router);

// Reading page --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/reading/:id/:chap', async (req, res) => {
	try {
		res.sendFile(parentDirectory + '/HTML/readingpage.html');
	} catch (err) {
		console.log('SYSTEM | READING | ERROR | ', err);
		res.sendStatus(500);
	}
});

app.post('/reading', async (req, res) => {
	const data = req.body;

	console.log('SYSTEM | READING |', data);
	try {
		let result = await server.find_all_Data({
			table: "truyen",
			query: { _id: new ObjectId(data.id) },
			projection: {
				_id: 0,
				name: 1,
				name_chaps: 1,
				chap_ids: 1,
			},
			limit: 1
		});
		// Gửi data về client
		// console.log(typeof(String(result[0].chap_ids[parseInt(data.chap)])))
		// console.log(result);
		const chap_content = await server.downloadFileFromDrive(String(result[0].chap_ids[parseInt(data.chap)]));

		let send_back = {
			name: result[0].name,
			name_chaps: result[0].name_chaps[parseInt(data.chap)],
			chap_content: convertToHtml(chap_content)
		}

		res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
		console.log('SYSTEM | READING | Trả về nội dung truyện muốn đọc', send_back.name);
		res.end(JSON.stringify(send_back));

	} catch (err) {
		console.log('SYSTEM | READING | ERROR | ', err);
		res.sendStatus(500);
	}
});

// Get chap -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/give_me_chap', async (req, res) => {
	console.log('ok bro');
	res.sendStatus(200);
});


// j e
// Schedule the code execution at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
	// update popular novel list 
	await getNovelList();
	// remove all data in dang_ky database
	await server.delete_many_Data("dang_ky", {});
});

// Run the code immediately
// update popular novel list 


app.listen(port, () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
	getNovelList();

});