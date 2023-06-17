const server = require('./vip_pro_lib');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
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
]

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
	console.log('ok bro')
});

async function run() {
	try {
		let myobj = {
			name: "At The Beginning Of The Novel, The Heroine Begged The Retired Villain",
			chapters: toDict(file_IDs),
			genres: "Romance, Urban, Villain",
			summary: "thg long luoi nen phan nay chua co ne",
			views: 0,
			likes: 0,
			keywords: ['Romance', 'Urban', 'Villain', 'Chinese', 'Webnovel']
		};

		await server.add_one_Data("truyen", myobj)

	} catch (error) {
		console.error('Error:', error);
	}
}
// let myobj = { user_name: "BM"};
run().catch(console.error);