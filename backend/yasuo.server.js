const express = require("express");
const passport = require("passport");
const configViewEngine = require("./config/viewEngine");
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cors = require("cors");
const { connection } = require("./dbmysql");
const authenticationKey = require("./controller/api.controller");
const cron = require("node-cron");
const app = express();

const port = 6969;
const sessionStore = new MySQLStore(
  {
    expiration: 604800000, // thời gian sống của session trong milliseconds (ở đây là 1 tuần)
    createDatabaseTable: true, // tạo bảng session nếu chưa tồn tại
  },
  connection
);
const webRouter = require("./router/web");
const apiRouter = require("./router/api");
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(
  session({
    name: "wtf-novel", // Đặt tên mới cho Session ID
    secret: authenticationKey.authenticationKey,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "strict",
    },
    rolling: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

configViewEngine(app);

webRouter.webRouter(app);
apiRouter.apiRouter(app);

// Schedule the code execution at midnight (00:00)
cron.schedule("0 0 * * *", async () => {
  // update popular novel list
  // await func_controller.getNovelList();
  // remove all data in dang_ky database
});

app.listen(port, async () => {
  console.log(
    `SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`
  );
  // await func_controller.getNovelList();
});
