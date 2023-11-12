const server = require("../vip_pro_lib");
const { ObjectId } = require('mongodb');

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
		console.log('RESULT | ====', result);
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
}


module.exports = {
    renderReading
}