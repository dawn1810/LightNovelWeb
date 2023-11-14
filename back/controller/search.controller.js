// Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const search = async (req, res) => {
	try {
		const search = decodeURIComponent(req.query.search);
		if (search) {
			// get all novels name
			let names = await server.find_all_Data({
				table: "truyen",
				query: { name: { $regex: new RegExp(search, 'i') } },
				projection: {
					name: 1,
					author: 1,
					image: 1,
					status: 1,
					no_chapters: 1,
				},
				limit: 31
			});
			// get all novels authors
			let authors = await server.find_all_Data({
				table: "truyen",
				query: { author: { $regex: new RegExp(search, 'i') } },
				projection: {
					name: 1,
					author: 1,
					image: 1,
					status: 1,
					no_chapters: 1,
				},
				limit: 31
			});
			// get all novels genres
			let genres = await server.find_all_Data({
				table: "truyen",
				query: { genres: { $in: [new RegExp(search, 'i')] } },
				projection: {
					name: 1,
					author: 1,
					image: 1,
					status: 1,
					no_chapters: 1,
				},
				limit: 31
			});
			// 
			let authors_more = false;
			let name_more = false;
			let genres_more = false;
			if (names.length == 31) {
				name_more = true;
				names.pop();
			};
			if (authors.length == 31) {
				authors_more = true;
				authors.pop();
			};
			if (genres.length == 31) {
				genres_more = true;
				genres.pop();
			}

			res.render('search.ejs', {
				headerFile: 'header',
				footerFile: 'footer',
				names: names,
				name_more: name_more,
				authors: authors,
				authors_more: authors_more,
				genres: genres,
				genres_more: genres_more,
				what_search: search
			});
		}
		else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log('SYSTEM | SEARCH | ERROR | ', err);
		res.sendStatus(500);
	}
};

const category = async (req, res) => {
	try {
		let result = await server.find_all_Data({
			table: "truyen",
			query: {},
			projection: {
				name: 1,
				author: 1,
				image: 1,
				status: 1,
				no_chapters: 1,
			},
			sort: { views: -1, likes: -1, name: 1 },
			limit: 31
		});

		let more_novel = false;
		if (result.length == 31) {
			more_novel = true;
			result.pop();
		};

		res.render('category-page.ejs', {
			headerFile: 'header',
			footerFile: 'footer',
			result: result,
			more_novel: more_novel
		});
	} catch (err) {
		console.log('SYSTEM | SEARCH | ERROR | ', err);
		res.sendStatus(500);
	}
}

const search_more = async (req, res) => {
	try {
		const type_id = decodeURIComponent(req.query.type_id);
		const num_click = decodeURIComponent(req.query.times);
		const search = decodeURIComponent(req.query.search)
		if (type_id && num_click) {
			// get all novels name
			let authors_more = false;
			let name_more = false;
			let genres_more = false;
			let names, authors, genres = undefined;
			if (type_id == 'search_more1') {
				names = await server.find_all_Data({
					table: "truyen",
					query: { name: { $regex: new RegExp(search, 'i') } },
					projection: {
						name: 1,
						author: 1,
						image: 1,
						status: 1,
						no_chapters: 1,
					},
					skip: 30 * num_click,
					limit: 31
				});
				if (names.length == 31) {
					name_more = true;
					names.pop();
				};

			}
			if (type_id == 'search_more2') {
				// get all novels genres
				genres = await server.find_all_Data({
					table: "truyen",
					query: { genres: { $in: [new RegExp(search, 'i')] } },
					projection: {
						name: 1,
						author: 1,
						image: 1,
						status: 1,
						no_chapters: 1,
					},
					skip: 30 * num_click,
					limit: 31
				});
				if (genres.length == 31) {
					genres_more = true;
					genres.pop();
				};


			}
			if (type_id == 'search_more3') {
				// get all novels authors
				authors = await server.find_all_Data({
					table: "truyen",
					query: { author: { $regex: new RegExp(search, 'i') } },
					projection: {
						name: 1,
						author: 1,
						image: 1,
						status: 1,
						no_chapters: 1,
					},
					skip: 30 * num_click,
					limit: 31
				});
				if (authors.length == 31) {
					authors_more = true;
					authors.pop();
				};

			}

			if (names) {
				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
				res.end(JSON.stringify({ 'truyen': names, 'showbtn': name_more }));
			}
			else if (genres) {
				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
				res.end(JSON.stringify({ 'truyen': genres, 'showbtn': genres_more }));
			}
			else if (authors) {
				res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
				res.end(JSON.stringify({ 'truyen': authors, 'showbtn': authors_more }));
			}
		}
		else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log('SYSTEM | SEARCH_MORE | ERROR | ', err);
		res.sendStatus(500);
	}
}


module.exports = {
    search,
    category,
    search_more
}