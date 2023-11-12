const server = require('../vip_pro_lib');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');

let dummy;

async function jsonReader(filePath, cb) {
	fs.readFile(filePath, (err, fileData) => {
		if (err) {
			return cb && cb(err);
		}
		try {
			const object = JSON.parse(fileData);
			return cb && cb(null, object);
		} catch (err) {
			return cb && cb(err);
		}
	});
}

//-------------------------------------------------------------------------------------------------------------------------
const directoryPath = path.join('trans', 'tonghop');

async function get_full_id(directoryPath) {
	let list_id = [];
	try {
		// Đọc các file trong thư mục một cách đồng bộ
		const files = fs.readdirSync(directoryPath);
		// Lọc và lấy đường dẫn của các file có phần mở rộng là ".txt"
		const txtFilePaths = files
			.filter((file) => path.extname(file).toLowerCase() === '.txt')
			.map((file) => path.join(directoryPath, file))
			.sort((a, b) => {
				const indexA = parseInt(a.match(/(\d+)\./)[1]);
				const indexB = parseInt(b.match(/(\d+)\./)[1]);

				return indexA - indexB;
			});
			
		const processFiles = async () => {
			for (const filePath of txtFilePaths) {
				console.log(filePath);
				list_id.push(await server.uploadFileToDrive(filePath));
			}
		};
		await processFiles();

		return list_id;
	} catch (err) {
		console.error('Lỗi khi đọc thư mục:', err);
	}

}
// read file json
exports.updateIds = async function (table, myobj) {
	jsonReader("./trans/tonghop/info.json", async (err, info) => {
		if (err) {
			console.log(err);
			return;
		}

		dummy = info;
		console.log(dummy.title);


		// update file json
		dummy['ids'] = await get_full_id(directoryPath);

		fs.writeFile("./trans/tonghop/info.json", JSON.stringify(dummy), err => {
			if (err) console.log("Error writing file:", err);
		});
	});
}
