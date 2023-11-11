const server = require('./vip_pro_lib');
const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
const cors = require('cors');
const path = require('path');


const app = express();
const router = express.Router();
const multer = require('multer'); // Thư viện để xử lý file upload

const port = 6969;
let currentURL = `http://localhost:${port}`;

const {
	indexRouter,
} = require('./router/web');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
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
const parentDirectory = path.dirname(__dirname);
app.use(express.static(parentDirectory));
app.set('view engine', 'ejs');
// Đặt thư mục chứa các tệp template
app.set('views', path.join(parentDirectory, 'view'));
// console.log(path.join(parentDirectory, 'view'))

app.use("/", indexRouter(router));

app.listen(port, async () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
	// await getNovelList();
});