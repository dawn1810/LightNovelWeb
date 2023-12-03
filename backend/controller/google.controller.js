const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { queryAsync } = require("../dbmysql");

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (user, done) {
	done(null, user.id);
});
const port = 6969;
let currentURL = `http://localhost:${port}`;

passport.deserializeUser(async function (userId, done) {
	try {
		const user = await queryAsync(
			`SELECT id, ten_tai_khoan as username FROM taikhoan_nguoidung WHERE id= '${userId}'`
		);

		done(null, { ...user[0] });
	} catch (err) {
		done(err);
	}
});

//////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////

passport.use(
	new GoogleStrategy(
		{
			clientID: "483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			passReqToCallback: true,
		},
		async function (request, accessToken, refreshToken, profile, done) {
			try {
				// console.log(accessToken);
				// console.log(refreshToken);
				// console.log(request);
				// Kiểm tra xem thông tin người dùng đã tồn tại chưa
				await queryAsync("START TRANSACTION");

				await queryAsync(`
				INSERT INTO taikhoan_nguoidung (id, ten_tai_khoan, email, mat_khau, login_way)
				VALUES (?,?,?, null, 'google')
				ON DUPLICATE KEY UPDATE
					email = ?
				`, [
					profile.id,
					profile.id,
					profile.emails[0].value,
					profile.emails[0].value
				]);

				await queryAsync(`
				INSERT INTO thongtin_nguoidung (id, id_tai_khoan, ten_hien_thi, anh_dai_dien)
				VALUES (?, ?, ?, ?)
				ON DUPLICATE KEY UPDATE
					ten_hien_thi = ?,
					anh_dai_dien = ?
				`, [
					profile.id, 
					profile.id, 
					profile.displayName, 
					profile.photos[0].value, 
					profile.displayName, 
					profile.photos[0].value
				]);
				await queryAsync("COMMIT");

				// Fetch the user data from the database
				const user = {
					id: profile.id,
					email: profile.emails[0].value,
					displayName: profile.displayName,
					photo: profile.photos[0].value,
				};

				// Pass the user data to the done function
				return done(null, user);
			} catch (err) {
				await queryAsync("ROLLBACK");

				return done(err);
			}
		}
	)
);
const open_window = (req, res) => {
	// req.user = {
	// 	_id: '113263126602180653712',
	// 	email: 'binhminh19112003@gmail.com',
	// 	displayName: 'Dawn Nguyen',
	// 	avatarUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdoUcqqaX6Kqqxfujnio9LmL2J_SIYjDaxcb8kf=s96-c',
	// 	sex: 'unknown',
	// 	likeNovels: [],
	// 	monitorNovels: [],
	// 	commentIds: []
	//  }
	//set cookies
	// func.set_cookies(res, req.user._id, "");

	// Đóng tab hiện tại và reload main window
	res.write("<script>");
	res.write("window.close();");
	res.write("window.opener.location.reload();");
	res.write("</script>");
	// dùng chung
	res.end("Login thanh cong!");
	// res.sendStatus(404);
};
const fs = require("fs");
const { google } = require("googleapis");
const NodePersist = require("node-persist");
const path = require("path");
const stream = require("stream");

// Create a new Google Drive instance
const drive = google.drive("v3");

// Initialize the NodePersist storage
const storage = NodePersist.create({
	dir: ".credentials",
});
// Function to initialize storage asynchronously
const initStorage = async () => {
	await storage.init();
};
let auth;
const initGoogle = async () => {
	let credentials = await storage.getItem("certgoogle");

	// Authorize the client
	auth = new google.auth.OAuth2(
		credentials.web.client_id,
		credentials.web.client_secret,
		credentials.web.redirect_uris && credentials.web.redirect_uris.length > 0
			? credentials.web.redirect_uris[0]
			: "http://localhost"
	);
};
initGoogle();
// để đây t làm
async function getNewAccessTokenUsingRefreshToken(refreshToken) {
	try {
		auth.setCredentials({ refresh_token: refreshToken });
		const refreshedTokens = await auth.getAccessToken();
		return refreshedTokens.res.data;
	} catch (error) {
		console.log("SYSTEM | DRIVE | Lỗi làm mới mã truy cập:", error);
	}
}
// Generate an access token and refresh token if not available
const getAccessToken = async () => {
	let tokens = await storage.getItem("tokens");
	let token;

	if (tokens) {
		const now = new Date().getTime();
		if (tokens.expiry_date && tokens.expiry_date > now) {
			token = tokens.access_token;
		} else if (tokens.refresh_token) {
			try {
				const new_tokens = await getNewAccessTokenUsingRefreshToken(tokens.refresh_token);
				token = new_tokens.access_token;
				await storage.setItem("tokens", new_tokens);
			} catch (error) {
				console.log("SYSTEM | DRIVE | Error refreshing access token:", error);
			}
		}
	}

	if (!token) {
		const authUrl = auth.generateAuthUrl({
			access_type: "offline",
			scope: ["https://www.googleapis.com/auth/drive"],
		});

		console.log("SYSTEM | DRIVE | Authorize this app by visiting this URL:", authUrl);

		const code = await getCodeFromUser();
		tokens = await getAccessTokenFromCode(code);
		await storage.setItem("tokens", tokens);
	}

	auth.setCredentials(tokens);
};
// Function to get authorization code from user
const getCodeFromUser = () => {
	return new Promise((resolve) => {
		// In this example, we assume the user manually enters the code in the terminal
		const readline = require("readline");
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question("SYSTEM | DRIVE | Enter the authorization code: ", (code) => {
			rl.close();
			resolve(decodeURIComponent(code));
		});
	});
};
// Function to exchange authorization code for access token
const getAccessTokenFromCode = (code) => {
	return new Promise((resolve, reject) => {
		auth.getToken(code, (err, token) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(token);
		});
	});
};
// Upload the file to Google Drive
const uploadFileToDrive = async (
	filePath,
	description,
	id_folder = "1CyiiQwVN1_99jYcbQvy4M3JeI1m4zyKR"
) => {
	await initStorage();
	await getAccessToken();
	const fileName = path.basename(filePath);
	const fileMetadata = {
		name: fileName,
		parents: [id_folder],
		description: description, // Bổ sung mô tả vào đây
	};

	const media = {
		mimeType: "application/octet-stream",
		body: fs.createReadStream(filePath),
	};

	try {
		const res = await drive.files.create({
			auth,
			resource: fileMetadata,
			media: media,
			fields: "id",
		});

		fs.unlink(filePath, (err) => {
			if (err) {
				console.log("SYSTEM | DRIVE | ERR |", err);
				return;
			}
		});
		const permission = {
			role: "reader", // Quyền truy cập đọc
			type: "anyone", // Cho phép mọi người truy cập
		};

		await drive.permissions.create({
			fileId: res.data.id,
			resource: permission,
			fields: "id",
			auth: auth,
		});

		return res.data.id;
	} catch (err) {
		console.log("SYSTEM | DRIVE | ERR | uploading file:", err);
	}
};

const uploadFileToDrivebase64 = async (
	base64Data,
	description,
	id_folder = "1CyiiQwVN1_99jYcbQvy4M3JeI1m4zyKR"
) => {
	await initStorage();
	await getAccessToken();

	const base64Head = base64Data.substring(0, 30);
	const mimeType = determineMimeType(base64Head);
	const fileName = `file_${Date.now()}.${getExtensionFromMimeType(mimeType)}`;
	const base64WithoutHeader = base64Data.replace(/^data:image\/\w+;base64,/, "");

	const fileMetadata = {
		name: fileName,
		parents: [id_folder],
		description: description,
	};
	// Use Buffer.from directly and await it
	const fileContent = Buffer.from(base64WithoutHeader, "base64");

	try {
		// Create a readable stream from the buffer using stream.Readable
		const bufferStream = new stream.Readable();
		bufferStream.push(fileContent);
		bufferStream.push(null);

		// Create the file on Google Drive with the readable stream
		const res = await drive.files.create({
			auth,
			resource: fileMetadata,
			media: {
				mimeType: "image/jpeg", // Set the MIME type according to your chosen format
				body: bufferStream,
			},
			fields: "id",
		});

		const permission = {
			role: "reader",
			type: "anyone",
		};

		// Add read permission for anyone
		await drive.permissions.create({
			fileId: res.data.id,
			resource: permission,
			fields: "id",
			auth: auth,
		});

		return res.data.id;
	} catch (err) {
		console.log("SYSTEM | DRIVE | ERR | uploading file:", err);
	}
};

const uploadContentToDrive = async (
	content,
	fileName,
	description,
	id_folder = "1CyiiQwVN1_99jYcbQvy4M3JeI1m4zyKR"
) => {
	await initStorage();
	await getAccessToken();

	const bufferStream = new stream.Readable();
	bufferStream.push(content);
	bufferStream.push(null);

	const fileMetadata = {
		name: fileName,
		parents: [id_folder],
		description: description,
	};

	const media = {
		mimeType: "application/octet-stream",
		body: bufferStream,
	};

	try {
		const res = await drive.files.create({
			auth,
			resource: fileMetadata,
			media: media,
			fields: "id",
		});

		const permission = {
			role: "reader",
			type: "anyone",
		};

		await drive.permissions.create({
			fileId: res.data.id,
			resource: permission,
			fields: "id",
			auth: auth,
		});

		return res.data.id;
	} catch (err) {
		console.log("SYSTEM | DRIVE | ERR | uploading content:", err);
	}
};

const determineMimeType = (base64Head) => {
	if (base64Head.includes("data:image/jpeg")) {
		return "image/jpeg";
	} else if (base64Head.includes("data:image/png")) {
		return "image/png";
	} else {
		return "application/octet-stream";
	}
};

const getExtensionFromMimeType = (mimeType) => {
	const mimeTypes = {
		"image/jpeg": "jpg",
		"image/png": "png",
	};

	return mimeTypes[mimeType] || "bin";
};

const getFileName = async (fileId) => {
	const drive = google.drive({ version: "v3", auth });

	try {
		const response = await drive.files.get({
			fileId,
			fields: "name",
		});

		const fileName = response.data.name;
		// console.log('File name:', fileName);
		return fileName;
	} catch (error) {
		console.error("Error retrieving file name:", error);
	}
};
// Download the file from Google Drive
const getDriveFileLinkAndDescription = async (fileId) => {
	await initStorage();
	await getAccessToken();
	const fileMetadata = await drive.files.get({
		fileId,
		fields: "id,description",
		auth,
	});
	const directLink = `https://drive.google.com/uc?export=view&id=${fileMetadata.data.id}`;

	return {
		fileDescription: fileMetadata.data.description,
		fileLink: directLink,
	};
};
const downloadFileFromDriveforUser = async (fileId, res) => {
	await initStorage();
	await getAccessToken();
	const fileStream = await drive.files.get(
		{ fileId, alt: "media" },
		{ responseType: "stream", auth }
	);

	// Get the file name from Google Drive API or use a fixed filename
	let fileName = await getFileName(fileId);
	// Set the Content-Disposition header with the desired filename
	res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

	// Pipe the file stream to the response object
	fileStream.data
		.on("data", (chunk) => {
			res.write(chunk);
		})
		.on("end", () => {
			// console.log('SYSTEM | DRIVE | File sent successfully!');
			res.end();
		})
		.on("error", (err) => {
			console.error("SYSTEM | DRIVE | Error sending file:", err);
			res.status(500).end(); // Or handle the error in an appropriate way
		});

	// console.log('SYSTEM | DRIVE | File reading successfully!');
};
const deleteFileFromDrive = async (fileId) => {
	await initStorage();
	await getAccessToken();
	try {
		await drive.files.delete({
			fileId: fileId,
			auth: auth,
		});
		// console.log('SYSTEM | DRIVE | File deleted successfully!');
	} catch (err) {
		console.error("SYSTEM | DRIVE | Error deleting file:", err);
	}
};

module.exports = {
	passport,
	open_window,
	deleteFileFromDrive,
	downloadFileFromDriveforUser,
	getDriveFileLinkAndDescription,
	uploadFileToDrivebase64,
	uploadFileToDrive,
	uploadContentToDrive,
};
