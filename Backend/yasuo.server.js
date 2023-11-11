const express = require("express");
const server = require("./vip_pro_lib");


const configViewEngine = require("./config/viewEngine");
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
// const session = require('express-session');
const cors = require("cors");
const path = require("path");
const { connectToDatabase } = require('./dbmysql')

const app = express();
const multer = require("multer"); // Thư viện để xử lý file upload

const con = connectToDatabase();

const port = 6969;
let currentURL = `http://localhost:${port}`;

const indexRouter = require("./router/web");
const parentDirectory = path.resolve(__dirname, "..", "..");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
// app.use(session({
// 	secret: 'okbro', // Thay đổi "your-secret-key" bằng một chuỗi bất kỳ
// 	resave: false,
// 	saveUninitialized: false
// }));
// app.use(preventSessionFixation);
app.use(express.json());

configViewEngine(app);


indexRouter.indexRouter(app);

app.listen(port, async () => {
  console.log(
    `SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`
  );
  // await getNovelList();
});
