const {
    getFirstAndLastDayOfWeek,
    getFirstAndLastDayOfMonth,
    getFirstAndLastDayOfYear
} = require('../models/func');

const renderSearch = async (req, res) => {
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
}

const renderAdvSearch = async (req, res) => {
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

const getMoreResult = async (req, res) => {
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

const getMoreAdvResult = async (req, res) => {
    try {
        const update_day = decodeURIComponent(req.query.update_day);
        const types = decodeURIComponent(req.query.types);
        const num_chaps = decodeURIComponent(req.query.num_chaps);
        const status = decodeURIComponent(req.query.status);
        const sort_by = decodeURIComponent(req.query.sort_by);
        const skip = decodeURIComponent(req.query.skip);

        let query = {};
        let sort = {};

        // update date query
        switch (update_day) {
            case '2':
                query.update_date = { $eq: new Date() };
                break;
            case '3':
                query.update_date = { $gte: getFirstAndLastDayOfWeek().firstDay, $lt: getFirstAndLastDayOfWeek().lastDay };
                break;
            case '4':
                query.update_date = { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay };
                break;
            case '5':
                query.update_date = { $gte: getFirstAndLastDayOfYear().firstDay, $lt: getFirstAndLastDayOfYear().lastDay };
                break;
        }

        // types query
        if (types != 'undefined') {
            query.genres = { $in: types.split(',') };
        }

        // num chap query
        switch (num_chaps) {
            case '2':
                query.no_chapters = { $gte: 10 };
                break;
            case '3':
                query.no_chapters = { $gte: 100 };
                break;
            case '4':
                query.no_chapters = { $gte: 1000 };
                break;
        }

        // status query:
        switch (status) {
            case '2':
                query.status = "Đang ra";
                break;
            case '3':
                query.status = "Hoàn thành";
                break;
            case '4':
                query.status = "Tạm dừng";
                break;
        }

        // status query:
        switch (sort_by) {
            case '1':
                sort = { views: -1, likes: -1, update_date: -1, name: 1 };
                break;
            case '2':
                sort = { likes: -1, views: -1, update_date: -1, name: 1 };
                break;
            case '3':
                sort = { update_date: -1, views: -1, likes: -1, name: 1 };
                break;
        }

        console.log(query);
        const result = await server.find_all_Data({
            table: 'truyen',
            query: query,
            projection: {
                name: 1,
                author: 1,
                image: 1,
                status: 1,
                no_chapters: 1,
            },
            sort: sort,
            limit: 30,
            skip: parseInt(skip) * 30
        });

        result.more_novel = false;
        if (result.length == 31) {
            result.more_novel = true;
            result.pop();
        };

        res.writeHead(200, { 'Content-Type': 'applicaiton/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        console.log('SYSTEM | SEARCH_MORE | ERROR | ', err);
        res.sendStatus(500);
    }
}

module.exports = {
    renderSearch,
    renderAdvSearch,
    getMoreResult,
    getMoreAdvResult
}