const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');

const app = express();
const port = 6969;
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');

// -đăng ký 2 lần lần một sai mail, lần 2 đúng mail(xóa theo chứng minh)
// -đăng ký 2 lần lần một sai mail, lần 2 đúng mail,sai luôn chứng minh(xóa theo thời gian)

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'dangky',
	multipleStatements: true // Enable multiple statements
});
console.log(`SYSTEM | MYSQL_STATUS | ${con.state}`);

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

async function checkAccountInSignUpList(res, data) {
	try {
		const result = await new Promise((resolve, reject) => {
			con.query(`SELECT cccd FROM taikhoandangky WHERE cccd = '${data.cccd}'`, function (err, result) {
				if (err) reject(err);
				resolve(result);
			});
		});

		if (typeof result !== 'undefined' && Array.isArray(result) && result.length === 0) {
			console.log(`SYSTEM | CHECKACCOUNTINSIGNUPLIST | Tài khoản chưa đăng ký (dữ liệu không có trong MySQL)`);
			res.sendStatus(404);
		} else if (typeof result === 'undefined') {
			console.log(`SYSTEM | CHECKACCOUNTINSIGNUPLIST | Tài khoản chưa đăng ký (cơ sở dữ liệu trống)`);
			res.sendStatus(404);
		} else {
			const result2 = await new Promise((resolve, reject) => {
				con.query(`SELECT cccd, email, hoten, pass FROM taikhoandangky WHERE cccd = '${data.cccd}'`, function (err, result) {
					if (err) reject(err);
					resolve(result);
				});
			});

			const item = result2.find(item => item.pass === data.password);
			if (item) {
				const { cccd, email, hoten, pass } = item;

				await new Promise((resolve, reject) => {
					con.query(`DELETE FROM taikhoandangky WHERE cccd = '${data.cccd}'`, function (err, result) {
						if (err) reject(err);
						resolve();
					});
					console.log(`SYSTEM | CHECKACCOUNTINSIGNUPLIST | DELETEDATA`);
				});

				await new Promise((resolve, reject) => {
					con.query(`
			  INSERT INTO nguoidung(cccd,email,hoten) VALUES("${cccd}","${email}", "${hoten}");
			  INSERT INTO taikhoan(cccd,email,pass) VALUES("${cccd}","${email}", "${pass}");
			`, function (err, result) {
						if (err) reject(err);
						resolve();
					});
				});
				console.log(`SYSTEM | CHECKACCOUNTINSIGNUPLIST | COPYDATA | cccd: ${cccd}, email: ${email}, username: ${hoten}, pass: ${pass}`);
				const encryptedString = encrypt(`${authenticationKey}:${data.cccd}:${data.password}`, authenticationKey);
				const oneYearFromNow = new Date();
				oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
				res.cookie('account', encryptedString, {
					expires: oneYearFromNow,
					secure: true,
					sameSite: 'none',
					// domain: 'localhost',
					domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',

					path: '/'
				});
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end('Login thanh cong!');
				console.log(`SYSTEM | LOG | User ${data.cccd} login!`);
			} else {
				res.sendStatus(403);
				console.log(`SYSTEM | CHECKACCOUNTINSIGNUPLIST | Password ${data.password} của user ${data.cccd} không trùng trong MySQL`);
			}
		}
	} catch (err) {
		console.log('SYSTEM | CHECKACCOUNTINSIGNUPLIST | ERROR | ', err);
	}
}

// Lắng nghe các yêu cầu POST tới localhost:6969
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Sign up ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/signup', async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | SIGN_UP | Dữ liệu nhận được: ', data);
	if (data.status == 'signup') { // Sign up
		try {

			const result = await new Promise((resolve, reject) => {
				con.query(`SELECT pass FROM taikhoan WHERE cccd = '${data.cccd}'`, function (err, result) {
					if (err) reject(err);
					resolve(result);
				});
			});

			if (typeof result !== 'undefined' && Array.isArray(result) && result.length === 0) {
				console.log(`SYSTEM | SIGN_UP | Tài khoản chưa được đăng ký (dữ liệu không có trong MySQL)`);
				let currentTime = new Date().toISOString().slice(0, 16).replace('T', ' ');

				await new Promise((resolve, reject) => {
					con.query(`
			  USE  dangky;
			  INSERT INTO taikhoandangky(cccd,email,hoten,pass,thoigian) VALUES("${data.cccd}","${data.email}","${data.username}", "${randompass()}", "${currentTime}")
			`, function (err, result) {
						if (err) reject(err);
						resolve(result);
					});
				});

				console.log(`SYSTEM | SIGN_UP | ADDACCOUNT ("${data.cccd}","${data.email}","${data.username}", "${randompass()}", "${currentTime}"`);
				res.sendStatus(200);
			} else if (typeof result === 'undefined') {
				console.log(`SYSTEM | SIGN_UP | Tài khoản chưa được đăng ký (cơ sở dữ liệu trống)`);
				let currentTime = new Date().toISOString().slice(0, 16).replace('T', ' ');

				await new Promise((resolve, reject) => {
					con.query(`
			  USE  dangky;
			  INSERT INTO taikhoandangky(cccd,email,hoten,pass,thoigian) VALUES("${data.cccd}","${data.email}","${data.username}", "${randompass()}", "${currentTime}")
			`, function (err, result) {
						if (err) reject(err);
						resolve(result);
					});
				});

				console.log(`SYSTEM | SIGN_UP | ADD_ACCOUNT ("${data.cccd}","${data.email}","${data.username}", "${randompass()}", "${currentTime}"`);
				res.sendStatus(200);
			} else {
				console.log(`SYSTEM | SIGN_UP | Tài khoản đã được đăng ký (dữ liệu có trong MySQL)`);
				res.sendStatus(204);
			}

			console.log('SYSTEM | SIGN_UP | Căn cước công dân nhập vào', data.cccd);


			// Send email password confirmation
			const passResult = await new Promise((resolve, reject) => {
				con.query(`SELECT pass FROM taikhoandangky WHERE email = '${data.email}' ORDER BY thoigian DESC`, function (err, result) {
					if (err) reject(err);
					resolve(result);
				});
			});

			console.log('SYSTEM | SIGN_UP | Mật khẩu lấy theo email từ MySQL ', passResult);

			if (typeof passResult !== 'undefined' && Array.isArray(passResult) && passResult.length === 0) {
				console.log(`SYSTEM | SIGN_UP | SEND_EMAIL | Chưa dăng kí thành công (dữ liệu có trong MySQL)`);
				// lỗi
			} else if (typeof passResult === 'undefined') {
				console.log(`SYSTEM | SIGN_UP | SEND_EMAIL | Chưa dăng kí thành công (MySQL trống)`);
				// lỗi
			} else {
				// try
				sendEmail(passResult[0].pass, data.email, data.username);
			}
		} catch (err) {
			console.log('SYSTEM | SIGN_UP | ERROR | ', err);
		}
	}
});

// Log in ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/login', async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | LOGIN | Dữ liệu nhận được: ', data);
	if (data.status == 'login') { // Dang nhap
		try {

			const result = await new Promise((resolve, reject) => {
				con.query(`SELECT pass FROM taikhoan WHERE cccd = '${data.cccd}'`, function (err, result) {
					if (err) reject(err);
					resolve(result);
				});
			});

			console.log('SYSTEM | LOGIN | Dữ liệu ', result, ' từ user ', data.cccd);

			if (typeof result !== 'undefined' && Array.isArray(result) && result.length === 0) {
				console.log(`SYSTEM | LOGIN | User ${data.cccd} không tìm thấy trong MySQL (không tìm thấy trong MySQL)`);
				await checkAccountInSignUpList(res, data);
			} else if (typeof result === 'undefined') {
				console.log(`SYSTEM | LOGIN | User ${data.cccd} không tìm thấy trong MySQL (cơ sở dữ liệu trống)`);
				await checkAccountInSignUpList(res, data);
			} else {
				if (result[0].pass == data.password) {
					const encryptedString = encrypt(`${authenticationKey}:${data.cccd}:${data.password}`, authenticationKey);
					const oneYearFromNow = new Date();
					oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
					res.cookie('account', encryptedString, {
						expires: oneYearFromNow, // Cookie sẽ tồn tại vô thời hạn
						secure: true,
						sameSite: 'none',
						// domain: 'localhost',
						domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',

						path: '/'
					});
					res.writeHead(200, { 'Content-Type': 'text/plain' });
					res.end('Login thanh cong!');
					console.log('SYSTEM | LOGIN | Dữ liệu ', result, ' trên MySQL của user ', data.cccd);
				} else {
					res.sendStatus(403);
					console.log(`SYSTEM | LOGIN | User ${data.cccd} đăng nhập thất bại (sai password)`);
				}

			}

		} catch (err) {
			console.log('SYSTEM | LOGIN | ERROR | ', err);
		}
	}
});
////////////////////////



////////////////////////
// Authentication (xac thuc dc chua) ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/xacthuc', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | AUTHENTICATION | Dữ liệu nhận được: ', data);
		const decode = decrypt(data.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
		console.log(`SYSTEM | AUTHENTICATION | Dữ liệu đã giải mã ${decodeList}`);
		if (decodeList[0] == authenticationKey) {
			const result = await new Promise((resolve, reject) => {
				con.query(`SELECT hoten FROM nguoidung WHERE cccd = '${decodeList[1]}'`, function (err, result) {
					if (err) reject(err);
					resolve(result);
				});
			});
			if (typeof result !== 'undefined' && Array.isArray(result) && result.length === 0) {
				res.sendStatus(404);
				console.log(`SYSTEM | AUTHENTICATION | User ${decodeList[1]} không tìm thấy trong MySQL (không tìm thấy trong MySQL)`);
			} else if (typeof result === 'undefined') {
				res.sendStatus(404);
				console.log(`SYSTEM | AUTHENTICATION | User ${decodeList[1]} không tìm thấy trong MySQL (cơ sở dữ liệu trống)`);
			} else {
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				console.log(`SYSTEM | AUTHENTICATION | Trả về tên user ${result[0].hoten}`);
				res.end(result[0].hoten);
			}

		}
	} catch (err) {
		console.log('SYSTEM | AUTHENTICATION | ERROR | ', err);
		res.sendStatus(500);
	}
});

// Change the password ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/changepass', async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | CHANGE_PASS | Dữ liệu nhận được: ', data);
	if (data.status == 'Change Pass') {
		const decode = decrypt(data.account, authenticationKey);
		try {
			const decodeList = decode.split(':');
			console.log(`SYSTEM | CHANGE_PASS | Dữ liệu giải mã: ${decodeList}`);
			if (decodeList[0] == authenticationKey) {
				if (data['Old-Password'] == decodeList[2]) {
					await new Promise((resolve, reject) => {
						con.query(`UPDATE taikhoan SET pass = '${data['new-Password']}' WHERE cccd = '${decodeList[1]}'`, function (err, result) {
							if (err) {
								reject(err);
							} else {
								const encryptedString = encrypt(`${authenticationKey}:${decodeList[1]}:${data['new-Password']}`, authenticationKey);
								const oneYearFromNow = new Date();
								oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
								res.cookie('account', encryptedString, {
									expires: oneYearFromNow, // Cookie will permernently expire
									secure: true,
									sameSite: 'none',
									// domain: 'localhost',
									domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
									path: '/'
								});
								res.writeHead(200, { 'Content-Type': 'text/plain' });
								console.log(`SYSTEM | CHANGE_PASS | Đổi password thành công`);
								res.end('Doi password thanh cong!');
								resolve(result);
							}
						});

					});
				} else {
					console.log(`SYSTEM | CHANGE_PASS | Sai dữ liệu xác thực`);
					res.sendStatus(403);
				}
			} else {
				console.log(`SYSTEM | CHANGE_PASS | Nhập sai mật khẩu`);
				res.sendStatus(403);
			}
		} catch (err) {
			res.sendStatus(500);
			console.log('SYSTEM | CHANGE_PASS | ERROR | ', err);
		}
	} else {
		console.log(`SYSTEM | CHANGE_PASS | Sai dữ liệu xác thực`);
		// res.sendStatus(500);
	}
});

app.post('/userinfo', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | USER_INFO | Dữ liệu nhận được: ', data);
		const decode = decrypt(data.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "randomfood is the best japanese waifu"
		console.log(`SYSTEM | USER_INFO | Dữ liệu đã giải mã ${decodeList}`)
		if (decodeList[0] == authenticationKey) {
			const result = await new Promise((resolve, reject) => {
				con.query(`SELECT cccd, hoten, quequan, ngaysinh, gioitinh FROM nguoidung WHERE cccd = '${decodeList[1]}'`, function (err, result) {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			});

			if (typeof result !== 'undefined' && Array.isArray(result) && result.length === 0) {
				console.log(`SYSTEM | USER_INFO | User ${data.cccd} không tìm thấy trong MySQL (không tìm thấy trong MySQL)`);
			} else if (typeof result === 'undefined') {
				console.log(`SYSTEM | USER_INFO | User ${data.cccd} không tìm thấy trong MySQL (cơ sở dữ liệu trống)`);
			} else {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				console.log('SYSTEM | USER_INFO | Dữ liệu ', result[0], ' của ', decodeList[1]);
				res.end(JSON.stringify(result[0]));
			}
		} else {
			console.log(`SYSTEM | USER_INFO | Nhập dữ liệu xác thực`);

			res.sendStatus(403);
		}
	} catch (err) {
		// res.sendStatus(500);
		console.log('SYSTEM | USER_INFO | ERROR | ', err);
	}
});

app.post('/updateinfo', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | UPDATE_INFO | Dữ liệu nhận được: ', data);
		const decode = decrypt(data.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "randomfood is the best japanese waifu"
		console.log(`SYSTEM | UPDATE_INFO | Dữ liệu đã giải mã ${decodeList}`)
		if (decodeList[0] == authenticationKey) {
			const result = await new Promise((resolve, reject) => {
				con.query(`UPDATE nguoidung SET hoten = '${data.fullname}', ngaysinh = '${data.birtday}', quequan = '${data.quequan}', gioitinh = ${data.sex} WHERE cccd = '${decodeList[1]}'`, function (err, result) {
					if (err) {
						reject(err);
						console.log(`SYSTEM | UPDATE_INFO | Lỗi nhập dữ liệu xác thực`);
						res.sendStatus(403);

					} else {
						res.sendStatus(200);
						console.log(`SYSTEM | UPDATE_INFO | Nhập dữ liệu xác thực`);
						resolve(result);
					}
				});
			});
		} else {
			console.log(`SYSTEM | UPDATE_INFO | Sai dữ liệu xác thực`);

			res.sendStatus(403);
		}
	} catch (err) {
		// res.sendStatus(500);
		console.log('SYSTEM | UPDATE_INFO | ERROR | ', err);
	}
});

app.post('/deleteall', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | DELETE_ALL | Dữ liệu nhận được: ', data);
		const decode = decrypt(data.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "randomfood is the best japanese waifu"
		console.log(`SYSTEM | DELETE_ALL | Dữ liệu đã giải mã ${decodeList}`)
		if (decodeList[0] == authenticationKey) {
			const result = await new Promise((resolve, reject) => {
				con.query(`
				DELETE  FROM taikhoan;
				DELETE  FROM taikhoandangky;
				DELETE  FROM nguoidung;
				`, function (err, result) {
					if (err) {
						reject(err);
						console.log(`SYSTEM | DELETE_ALL |  Lỗi xóa dữ liệu`);

						res.sendStatus(403);

					} else {
						res.sendStatus(200);
						console.log(`SYSTEM | DELETE_ALL | Xóa tất cả dữ liệu`);
						resolve(result);
					}
				});
			});
		} else {
			console.log(`SYSTEM | DELETE_ALL | Sai dữ liệu xác thực`);

			res.sendStatus(403);
		}
	} catch (err) {
		// res.sendStatus(500);
		console.log('SYSTEM | DELETE_ALL | ERROR | ', err);
	}
});



////////////////
app.post('/logout', async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | LOGOUT | Dữ liệu nhận được: ', data);
		const expirationDate = new Date('2018-12-31');	
		res.cookie('account', data.account, {
			expires: 	expirationDate, // Cookie will permernently expire
			secure: true,
			sameSite: 'none',
			// domain: 'localhost',
			domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
			path: '/'
		});
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
		res.end('Da dang xuat!');
	} catch (err) {
		// res.sendStatus(500);
		console.log('SYSTEM | LOGOUT | ERROR | ', err);
	}
});



///////////////

// Khởi động máy chủ
app.listen(port, () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
});