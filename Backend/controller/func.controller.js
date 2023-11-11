const crypto = require('crypto');
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');

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

async function checkCookieLoglUser(req, res, next) {
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
}

module.exports = {
    checkCookieLoglUser
}