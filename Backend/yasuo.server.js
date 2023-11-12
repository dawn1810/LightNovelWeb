const express = require("express");
const server = require("./vip_pro_lib");
const func_controller = require("./controller/func.controller");

const configViewEngine = require("./config/viewEngine");
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const cors = require("cors");
const path = require("path");
const cron = require('node-cron');
const { connectToDatabase } = require('./dbmysql')

const app = express();
const multer = require("multer"); // Thư viện để xử lý file upload

// const con = connectToDatabase();

const port = 6969;
let currentURL = `http://localhost:${port}`;

const webRouter = require("./router/web");
const apiRouter = require("./router/api");
const parentDirectory = path.resolve(__dirname, "..", "..");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(session({
	secret: 'okbro', // Thay đổi "your-secret-key" bằng một chuỗi bất kỳ
	resave: false,
	saveUninitialized: false
}));
// app.use(preventSessionFixation);
app.use(express.json());

configViewEngine(app);


webRouter.webRouter(app);
apiRouter.apiRouter(app);

// Schedule the code execution at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
	// update popular novel list 
	await func_controller.getNovelList();
	// remove all data in dang_ky database
	await server.delete_many_Data("dang_ky", {});
});

app.listen(port, async () => {
  console.log(
    `SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`
  );
  await func_controller.getNovelList();
});
