const {
    set_cookies
} = require('../models/func');

// Sign up --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const signUp = async (req, res) => {
	const data = req.body;
	// 404: ten dang nhap ton tai
	// data = {email: a@gmail.com, usr: bbp, pass: 1234567890}
	console.log('SYSTEM | SIGN_UP | Dữ liệu nhận được: ', data);
	try {
		// usr ton tai => thong bao
		console.log(data.usr);
		const result = await server.find_all_Data({ query: { _id: data.usr }, table: "dang_nhap", projection: { _id: 1 } });
		console.log(result);
		if (result.length != 0) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Ten đang nhập đã tồn tại');
		} else {
			// add data to dang_ky database:
			await server.add_one_Data("dang_ky", {
				usr: data.usr,
				email: data.email,
				pass: data.pass
			});
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('Sign up success!!!');
			console.log('SYSTEM | SIGN_UP | Sign up success!!!');
		}

	} catch (err) {
		console.log('SYSTEM | SIGN_UP | ERROR | ', err);
		res.sendStatus(500);
	}
};

// Log in --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const logIn = async (req, res) => {
	const data = req.body;
	// 403: sai mat khau
	// log in database {
	// usr: 18102003
	// pass: 18102003
	// email: 18102003
	// }
	// data = {usr: bbp, pass: 1234567890}
	console.log('SYSTEM | LOG_IN | Dữ liệu nhận được: ', data);
	try {
		const f_result = await server.find_all_Data({
			query: { usr: data.usr },
			table: "dang_ky",
			projection: {
				_id: 0,
				pass: 1
			}
		});

		if (f_result.length != 0) {
			// log in first time: (sign up database)
			for (let i = 0; i < f_result.length; i++) {
				if (f_result[i].pass == data.pass) {
					// move data to dang_nhap database
					await server.add_one_Data("dang_nhap", {
						_id: data.usr,
						pass: data.pass,
						lgway: 'normal'
					});

					// them truong moi trong tt_nguoi_dung
					// thong tin nguoi dung
					const newUser = {
						_id: data.usr,
						email: f_result.email,
						displayName: data.usr,
						avatarUrl: 'https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg',
						sex: "unknown",
						likeNovels: [],
						mynovel: []
					};

					// them mot nguoi dung moi
					await server.add_one_Data("tt_nguoi_dung", newUser);

					// remove usr name font dang_ky data base\
					await server.delete_many_Data("dang_ky", { usr: data.usr });

					set_cookies(res, data.usr, data.pass); // set cookies

					res.end('Log in sucess!!!');

					break;
				}

				if (i == f_result.length - 1) {
					res.writeHead(403, { 'Content-Type': 'text/plain' });
					res.end('Log in fail!!!');
				}
			}
		}//chao e
		else {
			// log in next time: (log in database)
			const n_result = await server.find_one_Data("dang_nhap", { _id: data.usr });

			if (n_result.pass == data.pass) {
				set_cookies(res, data.usr, data.pass); // set cookies

				res.end('Log in success!!!');
			} else {
				res.writeHead(403, { 'Content-Type': 'text/plain' });
				res.end('Log in fail!!!');
			}
		}
	} catch (err) {
		console.log('SYSTEM | LOG_IN | ERROR | ', err);
		res.sendStatus(500);
	}
};

// Logout /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const logOut = async (req, res) => {
	try {
		const data = req.body;
		console.log('SYSTEM | LOGOUT | Dữ liệu nhận được: ', data);
		const expirationDate = new Date('2018-12-31');
		res.cookie('account', data.account, {
			expires: expirationDate, // Cookie will permernently expire
			secure: true,
			sameSite: 'none',
			domain: 'localhost',
			// domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
			path: '/'
		});
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
		res.end('Da dang xuat!');
	} catch (err) {
		res.sendStatus(500);
		console.log('SYSTEM | LOGOUT | ERROR | ', err);
	}
}


module.exports = {
    logOut,
    logIn,
    signUp
}