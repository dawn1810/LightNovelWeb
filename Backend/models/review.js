const {
    authenticationKey,
    decrypt,
    calTime
} = require('../models/func');

const renderReview = async (req, res) => {
	try {
		const account = req.cookies.account
		console.log('SYSTEM | REVIEWS |', account);
		// Get novel information:
		let result = await server.find_all_Data({
			table: "truyen",
			query: { _id: new ObjectId(req.params.id) },
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
				update_date: 1,
				status: 1
			},
			limit: 1
		});

		//paste here
		// default if they don't have an account
		result[0].liked = 0; ///here
		const maybeulike = await server.find_all_Data({
			table: "truyen",
			query: { genres: { $in: result[0].genres } },
			projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1, update_date: 1 },
			sort: { update_date: -1, views: -1, likes: -1, name: 1 },
			limit: 6
		});


		for (let i = 0; i < maybeulike.length; i++) {
			maybeulike[i].update_date = calTime(maybeulike[i].update_date);
		}
		if (account) {
			const decode = decrypt(account, authenticationKey);
			const decodeList = decode.split(':');
			if (decodeList[0] == authenticationKey) {
				// check does novel was liked by current user or not
				const like_list = await server.find_all_Data({
					table: "tt_nguoi_dung",
					query: { _id: decodeList[1] },
					projection: {
						_id: 0,
						likeNovels: 1
					},
					limit: 1
				});

				if (like_list[0].likeNovels.includes(req.params.id)) { // liked
					result[0].liked = 1;
				}
			}
		}

		res.render('reviews.ejs', {
			headerFile: 'header',
			footerFile: 'footer',
			name: result[0].name,
			author: result[0].author,
			name_chaps: result[0].name_chaps,
			no_chapters: result[0].no_chapters,
			genres: result[0].genres,
			summary: result[0].summary,
			image: result[0].image,
			views: result[0].views,
			likes: result[0].likes,
			update_date: calTime(result[0].update_date),
			status: result[0].status,
			liked: result[0].liked,
			maybeulike: maybeulike
		});

	} catch (err) {
		console.log('SYSTEM | REVIEWS | ERROR | ', err);
		res.sendStatus(500);
	}
}

const getReviewData = async (req, res) => {
	const data = req.body;
	console.log('SYSTEM | REVIEWS |', data);
	try {
		let result = await server.find_all_Data({
			table: "truyen",
			query: { _id: new ObjectId(data.id) },
			projection: {
				no_chapters: 1,
				name_chaps: 1,
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
}

const updateLikes = async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | UPDATE_LIKE | Dữ liệu nhận được: ', data);
		const decode = decrypt(req.cookies.account, authenticationKey);
		const decodeList = decode.split(':'); // Output: "replika is best japanese waifu"
		// console.log(`SYSTEM | UPDATE_LIKE | Dữ liệu đã giải mã ${decodeList}`);
		// decodeList = authenticationKey:id:pass
		if (decodeList[0] == authenticationKey) {
			//account: accountCookie,
			//status: status (0/1)
			//id_truyen

			if (parseInt(data.liked)) { // like
				// up one like for current novel
				await server.update_one_Data('truyen',
					{ _id: new ObjectId(data.id_truyen) },
					{ $inc: { likes: 1 } }
				);
				// add current nodel to like list of current user
				await server.update_one_Data('tt_nguoi_dung',
					{ _id: decodeList[1] },
					{ $push: { likeNovels: data.id_truyen } }
				);
				// response client
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				console.log(`SYSTEM | UPDATE_LIKE | Like cho truyen hien tai`);
				res.end(JSON.stringify('Liked!!!'));
			}
			else { // unlike
				// down on like for current novel
				await server.update_one_Data('truyen',
					{ _id: new ObjectId(data.id_truyen) },
					{ $inc: { likes: -1 } }
				);
				// remove current nodel from like list of current user
				await server.update_one_Data('tt_nguoi_dung',
					{ _id: decodeList[1] },
					{ $pull: { likeNovels: data.id_truyen } }
				);
				// response client
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				console.log(`SYSTEM | UPDATE_LIKE | Unlike cho truyen hien tai`);
				res.end(JSON.stringify('Unliked!!!'));
			}
		}
	} catch (err) {
		console.log('SYSTEM | UPDATE_LIKE | ERROR | ', err);
		res.sendStatus(500);
	}
}

const updateViews = async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | UPDATE_VIEWS | Dữ liệu nhận được: ', data);
		// up one like for current novel
		await server.update_one_Data('truyen',
			{ _id: new ObjectId(data.id_truyen) },
			{ $inc: { views: 1 } }
		);
		// response client
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		console.log(`SYSTEM | UPDATE_VIEWS | Da tang view cho truyen hien tai`);
		res.end(JSON.stringify('viewed!!!'));


	} catch (err) {
		console.log('SYSTEM | UPDATE_VIEWS | ERROR | ', err);
		res.sendStatus(500);
	}
}

module.exports = {
    renderReview,
    getReviewData,
    updateLikes,
    updateViews
}