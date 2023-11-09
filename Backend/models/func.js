const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');

const decrypt = (encryptedDataWithIV, secretKey) => {
	const algorithm = 'aes-256-cbc';
	const iv = Buffer.from(encryptedDataWithIV.slice(0, 32), 'hex'); // Extract IV from the encrypted data
	const encryptedData = encryptedDataWithIV.slice(32); // Extract the encrypted data without IV
	const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);

	let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
	decryptedData += decipher.final('utf8');

	// console.log('SYSTEM | DECRYPT | OK');

	return decryptedData;
}

// xu ly lai vs sql
const checkCookieLoglUser = async (req, res, next) => {
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

const checkCoookieIfOK = async (req, res, next) => {
	const data = req.cookies;
	if (!data.account) {
		// Cookie không tồn tại, chặn truy cập
		return res.redirect('/');
	}
	else {
		next();
	}
}

const calTime = async (update_date) => {
	// Thời điểm hiện tại
	const now = new Date();

	// Thời điểm trả về từ server
	const serverTime = new Date(update_date);

	// Tính số lượng năm chênh lệch
	const yearsDiff = now.getFullYear() - serverTime.getFullYear();

	// Tính số lượng tháng chênh lệch
	const monthsDiff = (yearsDiff * 12) + (now.getMonth() - serverTime.getMonth());

	// Tính số lượng ngày chênh lệch
	const daysDiff = Math.floor((now - serverTime) / (1000 * 60 * 60 * 24));

	// Tính số lượng giờ chênh lệch
	const hoursDiff = now.getHours() - serverTime.getHours();

	// Tính số lượng phút chênh lệch
	const minutesDiff = now.getMinutes() - serverTime.getMinutes();

	// Hiển thị kết quả chênh lệch thời gian
	// console.log(`Chênh lệch thời gian: ${yearsDiff} năm, ${monthsDiff} tháng, ${daysDiff} ngày, ${hoursDiff} giờ, ${minutesDiff} phút.`);

	if (yearsDiff > 0) {
		return yearsDiff + ' năm';
	}
	else if (monthsDiff > 0) {
		return monthsDiff + ' tháng';
	}
	else if (daysDiff > 0) {
		return daysDiff + ' ngày';
	}
	else if (hoursDiff > 0) {
		return hoursDiff + ' giờ';
	}
	else if (minutesDiff > 0) {
		return minutesDiff + ' phút';
	}
	else {
		return 'Nóng như chuyện tình đôi ta <3';
	}

	return 'éo tính dc';
}

const getFirstAndLastDayOfWeek = () => {
	const currentDate = new Date();

	// Calculate the first day of the week (Sunday)
	const firstDayOfWeek = new Date(currentDate);
	firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

	// Calculate the last day of the week (Saturday)
	const lastDayOfWeek = new Date(currentDate);
	lastDayOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

	return {
		firstDay: firstDayOfWeek,
		lastDay: lastDayOfWeek,
	};
}

const getFirstAndLastDayOfMonth = () => {
	// Clone the current date object to avoid modifying the original
	const currentDate = new Date();

	// Get the first day of the month
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

	// Move to the next month and get the last day of the current month
	currentDate.setMonth(currentDate.getMonth() + 1);
	currentDate.setDate(0);
	const lastDayOfMonth = new Date(currentDate);
	return {
		firstDay: firstDayOfMonth,
		lastDay: lastDayOfMonth,
	};
}

const getFirstAndLastDayOfYear = () => {
	// Clone the current date object to avoid modifying the original
	const currentDate = new Date();

	// Get the first day of the year
	const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);

	// Move to the next year and get the last day of the current year
	currentDate.setFullYear(currentDate.getFullYear() + 1);
	currentDate.setDate(0);
	const lastDayOfYear = new Date(currentDate);

	return {
		firstDay: firstDayOfYear,
		lastDay: lastDayOfYear,
	};
}

const set_cookies = (res, id, pass) =>  {
	const encryptedString = encrypt(`${authenticationKey}:${id}:${pass}`, authenticationKey);
	const oneYearFromNow = new Date();
	oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
	res.cookie('account', encryptedString, {
		expires: oneYearFromNow,
		secure: true,
		sameSite: 'none',
		domain: 'localhost',
		// domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',

		path: '/'
	});
	res.writeHead(200, { 'Content-Type': 'text/html' });
	console.log(`SYSTEM | SET_COOKIES | User ${id} login!`);
}

const getNovelList = async () => {
	try {
		// by week:
		let query_by_week = { update_date: { $gte: getFirstAndLastDayOfWeek().firstDay, $lt: getFirstAndLastDayOfWeek().lastDay } };
		const by_week = await server.find_all_Data({ query: query_by_week, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// by month:
		let query_by_month = { update_date: { $gte: getFirstAndLastDayOfMonth().firstDay, $lt: getFirstAndLastDayOfMonth().lastDay } };
		const by_month = await server.find_all_Data({ query: query_by_month, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// all time
		let query_by_year = { update_date: { $gte: getFirstAndLastDayOfYear().firstDay, $lt: getFirstAndLastDayOfYear().lastDay } };
		const all_time = await server.find_all_Data({ query: query_by_year, table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { views: -1, likes: -1, update_date: -1, name: 1 }, limit: 12 });
		// update nearby:
		const nearby = await server.find_all_Data({ table: "truyen", projection: { name: 1, author: 1, image: 1, no_chapters: 1, status: 1, likes: 1, views: 1 }, sort: { update_date: -1, views: -1, likes: -1, name: 1 }, limit: 12 });

		// Change all id to string:
		const by_week_new = by_week.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const by_month_new = by_month.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const all_time_new = all_time.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const nearby_new = nearby.map(doc => {
			const idString = doc._id.toString();
			return { ...doc, _id: idString };
		});

		const result = {
			"by_week": by_week_new,
			"by_month": by_month_new,
			"all_time": all_time_new,
			"nearby": nearby_new
		};
		await storage.init();

		await storage.setItem('novellist', result);
		console.log(`SYSTEM | LOG | OK BRO, EVERYTHING DONE`);

		// console.log(`SYSTEM | GET_NOVEL_LIST | Danh sách truyện `, result);
		return result;
	} catch (err) {
		console.log('SYSTEM | GET_NOVEL_LIST | ERROR | ', err);
	}
}

module.exports = {
    authenticationKey,
    decrypt,
    checkCookieLoglUser,
    checkCoookieIfOK,
    calTime,
    getFirstAndLastDayOfWeek,
    getFirstAndLastDayOfMonth,
    getFirstAndLastDayOfYear,
    set_cookies,
    getNovelList
}