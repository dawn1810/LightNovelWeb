const server = require('./vip_pro_lib');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const NodePersist = require('node-persist');
const path = require('path');

////////////////////////
const app = express();
const port = 6969;
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');

let file_IDs = [
	[null, '1tv0pwY5Yw_UMfbvfmN9ga-XiSeyY8Vxh'],
	[null, '1yUg6Y8fFYRGb9UrmVI1IOFUCrOZZdhiq'],
	[null, '1P0eIlKgQRH1NnNfuU00nB_rVCTmxmd7z'],
	[null, '1azgxE6VxyrMhb14JlaalBOhAW4JOWXC'],
	[null, 'VJFggu7Um4w8wB7iaIfTYXpPVLGYx7lo'],
	[null, 'egkBjTHBL7qeJUjUU81YZ0duuT_8xtKp'],
	[null, 'UMZSMx3b9wgDfyjqBdzb1BQucV7ImXUj'],
	[null, 'd1_4yjBLlzbhaFcvrbIWIrc0S5Tt0XX0'],
	[null, 'eEtzgaTR47rsqsy_w7oVenmcpS6OzHNa'],
	[null, '4Jonq3Mb166e0Ywcaby0HTryuX8RkKf5'],
	[null, 'kTlMP3gCDM3-Z69zfdxbU6oUo-Ok1H7v'],
	[null, 'Z0qsXHty4ITR-J-3i9Zi88MjznPex1hr'],
	[null, 'iR6ZCmoKpaSgniE30T4UToYZ0WBKRU1-'],
	[null, 'h6jwXQqRhz77fGqDIMQ6BXYMx5ti0ffv'],
	[null, 'Wqxe6EEjzuUWnTCwiSbKI5mufdA2FrQu'],
	[null, 'EW0_5MhcEyf9PrPVX9drZ3m2zx4I6CUw'],
	[null, 'r8OqxPCOxdQmgMM07nUBpsLNryfyjotW'],
	[null, 'CtCeJTrEog9f7MN0Fhhssd574KMMshdR'],
	[null, 'KverhFGCU1LLNNNvioZQkYUwAE_Y29nc'],
	[null, 'Pys-iXwEEz5nYIiGmqrKfwGXJSQe-kDd'],
	[null, 'bYVa0dIizA0PirKfKcDfrqykUWSembu9'],
	[null, 'cmSmAkhSNbodh153m23x8byKFeLQblc9'],
	[null, '6igBOpSx-lNjIo9flK0g2ooEnmliWmOx'],
	[null, '1MRojQJiY6aQfTGN58ga44uelZomnZCP'],
	[null, '9Ozu8WO4avd8ySzTt_PBi2B01gtNT3vf'],
	[null, 'F9Te7yFDIaP9bZtaX8VRomTpG_GixIpu'],
	[null, 'BNBdpUdbGjsLY2T9uV45x6j5orlGWoC9'],
	[null, 'a0kuZ3vMBgokv1k0Xc4xw9RLv0c0z-5U'],
	[null, 'LZ2LX6bfz4gFTnLaBiPld8dqL8-UmFIu'],
	[null, 'MaRbEunGdaKWg6hTOpikNvirpeKcaaKS'],
	[null, 'XutbL4fC-0trB9BdPQP5jT3IR4B7gkK6'],
	[null, 'wsS9VvTcZawELS7IFc48jA-NhsBmU7B5'],
	[null, 'wy3A2053TFgwAXVl3JZC4d12oxzncXFJ'],
	[null, 'j96lgJOM242qz7SMgSvyNViWzCmYP6hA'],
	[null, 'UPoIFkEzypoO4vtKlXslgfCV_0QuJXU-'],
	[null, 'MeGcBqR6HrMaKzvNrS3sZzhgyP1lvfqr'],
	[null, 'VLxocnVzhAS04-drgPq_xY70wT-YqiC6'],
	[null, 'knE_DKEzCztf_8Q59wU-tl9kyBStIKa6'],
	[null, 'Zmn7u4X8AQ1q5rogKQf-IBALMF3LlaJF'],
	[null, 'brTpfebQTCQRYuMv7MYten7GFN9ioSvy'],
	[null, 'DwMcQ0u1xSqFQ1hlyF_Ui2GUlJcWmviE'],
	[null, 'DJRgIfU_DSgLv8G9LWWIDZYu0OwcMuSG'],
	[null, 'jYwbeGSzqtiSvqTz1b4zOQZM257B0LXk'],
	[null, 'x6FwjIkddiI-sDuXwD4BL_QtXF4au5EO'],
	[null, '1nUG4W7IsSqdH3ZkDng19ON9qJz_wHrqX'],
	[null, '1lzJKN24uWdpXJMlwCWQyqykK6RzUSCtk'],
	[null, '1VG4hBC_GDa--Qg8tk1J-6ejsRvyvJjsy'],
	[null, '1PL3aCiHNN86sskhaXy9aPvoGIIaJD63F'],
	[null, '165tIj6cz7N6g8o669Lej7lr7rFnaANlW'],
	[null, '1zbiqxuxqO02rT0ke8l-Bx75REWv509RJ'],
	[null, '1tjNSXNe9ZJvBcIoZduK8sTvYgj_PRU9W'],
];

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

function toDict(list) {
	let result = {};
	for (let i = 0; i < list.length; i++) {
		result[`chap ${i + 1}`] = [list[i][0], list[i][1]];
	}
	return result;
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
		const by_week = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { _id: 0, name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 12 });
		// by month:
		let query_by_month = { update_date: { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay } };
		const by_month = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { _id: 0, name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 12 });
		// all time
		const all_time = await server.find_all_Data({ table: "truyen", projection: { _id: 0, name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { views: 1 }, limit: 12 });
		// update nearby:
		const nearby = await server.find_all_Data({ table: "truyen", projection: { _id: 0, name: 1, author: 1, image: 1, no_chapters: 1 }, sort: { update_date: 1 }, limit: 12 });
		// result
		const result = {
			"by_week": by_week,
			"by_month": by_month,
			"all_time": all_time,
			"nearby": nearby
		};
		await storage.init();

		await storage.setItem('novellist',result);
		// console.log(`SYSTEM | GET_NOVEL_LIST | Danh sách truyện `, result);
		// return result;
	} catch (err) {
		console.log('SYSTEM | GET_NOVEL_LIST | ERROR | ', err);
	}
}


// Function to update the variables
const updateVariables = async () => {
	
	

};

// Lắng nghe các yêu cầu POST tới localhost:6969
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
const parentDirectory = path.dirname(__dirname);
app.use(express.static(parentDirectory));



app.get('/', (req, res) => {
	res.sendFile(parentDirectory+'/HTML/index.html');
});

// Get chap ////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/give_me_chap', async (req, res) => {
	console.log('ok bro');
	res.sendStatus(200);
});

app.get('/get_ds', async (req, res) => {
	try {
		let result = await storage.getItem('novellist');

		res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
		res.end(JSON.stringify(result));
		// console.log('SYSTEM | GET_POPULAR_NOVEL | Dữ liệu ', result, ' trên mongDB');
	} catch (err) {
		console.log('SYSTEM | GET_POPULAR_NOVEL | ERROR | ', err);
		res.sendStatus(500);
	}
});

// async function run() {
// 	try {
// 		const currentDate = new Date();

// 		let myobj = {
// 			name: "At The Beginning Of The Novel, The Heroine Begged The Retired Villain",
// 			author: "Evil devil",
// 			chapters: toDict(file_IDs),
// 			no_chapters: file_IDs.length,
// 			genres: "Romance, Urban, Villain",
// 			summary: "Ye Tian xuyên không thành nhân vật phản diện trong tiểu thuyết. Dù có gia thế vững chắc nhưng nam chính lại thẳng tay tát anh không thương tiếc, cuối cùng gia đình tan nát vì anh đính hôn với nữ chính. Ye Tian đồng ý với yêu cầu của nữ chính và hủy bỏ hôn ước. Tuy nhiên, ngay sau đó, nữ chính nhận được một cuộc gọi video từ nhà. Trên màn hình, ông nội tức giận ngất xỉu, cha mắng chửi cô, mẹ quỳ gối khóc lóc… Người thân của cô đều tức giận như muốn ăn tươi nuốt sống cô… Đứng trước tình cảnh như vậy, nữ chính được mệnh danh là nữ chính nữ thần lạnh lùng, đã sợ hãi và khóc ngay tại chỗ! Cùng lúc đó, một dấu nhắc hệ thống vang lên bên tai Ye Tian. “Hệ thống nhân vật phản diện cấp Thần được kích hoạt…”",
// 			image: "1nf1MDALcS1yEdfJ7fd7PzZulxJAqaP1a",
// 			views: 0,
// 			likes: 0,
// 			update_date: currentDate,
// 			keywords: ['Romance', 'Urban', 'Villain', 'Chinese', 'Webnovel']
// 		};

// 		await server.add_one_Data("truyen", myobj)

// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }
// run().catch(console.error);

// Schedule the code execution at midnight (00:00)
cron.schedule('0 0 * * *', () => {
	getNovelList();
});

// Run the code immediately
getNovelList();


app.listen(port, () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
});