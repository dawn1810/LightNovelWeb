const server = require("../vip_pro_lib");
const { ObjectId } = require('mongodb');
const { connection, queryAsync } = require("../dbmysql");
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

const renderReading =  async (req, res) => {
	try {
		// let result = await server.find_all_Data({
		// 	table: "truyen",
		// 	query: { _id: new ObjectId(req.params.id) },
		// 	projection: {
		// 		_id: 0,
		// 		name: 1,
		// 		name_chaps: 1,
		// 		chap_ids: 1,
		// 		no_chapters: 1,
		// 	},
		// 	limit: 1
		// });
		let data = await queryAsync(
			`SELECT * FROM chuong WHERE thu_tu=${req.params.chap} && id_truyen=${req.params.id}`
		);

		let old_name_list = await queryAsync(
			`SELECT ten_chuong FROM chuong WHERE id_truyen=2`
		);
		// chuyen kieu du lieu cho giong mongo
		function convertNewToOld(newData) {
			var oldDataArray = [];
			for (var i = 0; i < newData.length; i++) {
                oldDataArray.push(newData[i]['ten_chuong']);
            }
			return oldDataArray;
		}
		const chapter_names = convertNewToOld(old_name_list);
		

		// if ((parseInt(result[0].no_chapters) <= parseInt(req.params.chap)) || (parseInt(req.params.chap) < 0)) {
		// 	res.status(404).send('Không tìm thấy chương!');
		// 	return;
		// }
		// const chap_content = await server.downloadFileFromDrive(String(result[0].chap_ids[parseInt(req.params.chap)]));	
		res.render('readingpage.ejs', {
			headerFile: 'header',
			footerFile: 'footer',
			name: data[0].ten_chuong,
			name_chaps: chapter_names,
			name_chap: `${data[0].thu_tu}:${data[0].ten_chuong}`,
			chap_content: data[0].noi_dung_chuong,
			number_chap: req.params.chap,
			id: req.params.id
		});

		

	} catch (err) {
		console.log('SYSTEM | READING | ERROR | ', err);
		res.sendStatus(500);
	}
}


module.exports = {
    renderReading
}