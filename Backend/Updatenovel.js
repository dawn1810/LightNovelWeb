const server = require('./vip_pro_lib');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');

let dummy;

exports.jsonReader = async function (filePath, cb) {
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

////////////////
const directoryPath = path.join('trans', 'tonghop');

async function get_full_id(directoryPath) {
	let list_id = [];
	try {
		// Đọc các file trong thư mục một cách đồng bộ
		const files = fs.readdirSync(directoryPath);
		//gọi hàm đi anh zai
		// Lọc và lấy đường dẫn của các file có phần mở rộng là ".txt"
		const txtFilePaths = files
			.filter((file) => path.extname(file).toLowerCase() === '.txt')
			.map((file) => path.join(directoryPath, file));

		// Sắp xếp các đường dẫn theo tên
		txtFilePaths.sort();


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

// update data to server
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