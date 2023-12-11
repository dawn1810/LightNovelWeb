const crypto = require("crypto");
const path = require("path");
const { queryAsync } = require("../dbmysql");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const server = require("./google.controller.js");
const secretKey = "5gB#2L1!8*1!0)$7vF@9";
const authenticationKey = Buffer.from(
  secretKey.padEnd(32, "0"),
  "utf8"
).toString("hex");
const multer = require("multer"); // Thư viện để xử lý file upload
const NodePersist = require("node-persist"); // index
const storage = NodePersist.create({
  // index
  dir: ".temp",
});
const uploadDirectory = path.join(".upload_temp", "files");
const allowedMimeTypes = [
  "text/plain",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const mammoth = require("mammoth");
const fs = require("fs");

const get_authenkey = () => {
  return authenticationKey;
};

const storage_file = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      console.log(
        "SYSTEM | GET_NOVEL_LIST | ERROR | Lỗi định dạng file không đúng"
      );

      return cb(new Error("Invalid file type."), null);
    }

    // Trả về đường dẫn đến thư mục mới
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// Thiết lập middleware multer cho việc xử lý upload file
const upload = () => {
  return multer({ storage: storage_file });
};

async function sendEmail(password, email,file,subject) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nguytuan04@gmail.com",
        pass: "unjwfrdskgezbmym",
      },
    });

    const emailTXT = fs.readFileSync(
      path.join("src", "emailTemplate", `${file}.txt`),
      "utf8"
    );
    const emailHTML = fs.readFileSync(
      path.join("src", "emailTemplate", `${file}.ejs`),
      "utf8"
    );

    const mailOptions = {
      from: '"WTFNovel@noreply.com" <nguytuan04@gmail.com>',
      to: email,
      subject: subject,
      text: emailTXT.replace("${password}", password),
      html: ejs.render(emailHTML, { password: password }),
      attachments: [
        {
          filename: "image.png",
          path: "./image/logo.png",
          cid: "fs1120020a17090af28b00b00263fc1ef1aasm843048pjb10", //same cid value as in the html img src
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    // Thực hiện các hoạt động hữu ích khác sau khi gửi email thành công.
  } catch (error) {
    console.log("SYSTEM | SEND_EMAIL | ", error);
  }
}
const hashPassword = (password) => {
  const hash = crypto
    .pbkdf2Sync(password, authenticationKey, 10000, 64, "sha512")
    .toString("hex");
  return hash;
};

// Hàm để so sánh mật khẩu đã nhập với mật khẩu đã lưu trữ
const comparePassword = (inputPassword, hashedPassword) => {
  const hashToCompare = hashPassword(inputPassword, authenticationKey);
  return hashedPassword === hashToCompare;
};

function encrypt(data) {
  const algorithm = "aes-256-cbc";
  const iv = crypto.randomBytes(16); // Generate a random IV
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(authenticationKey, "hex"),
    iv
  );

  let encryptedData = cipher.update(data, "utf8", "hex");
  encryptedData += cipher.final("hex");

  const encryptedDataWithIV = iv.toString("hex") + encryptedData;

  return encryptedDataWithIV;
}

function decrypt(encryptedDataWithIV) {
  const algorithm = "aes-256-cbc";
  const iv = Buffer.from(encryptedDataWithIV.slice(0, 32), "hex"); // Extract IV from the encrypted data
  const encryptedData = encryptedDataWithIV.slice(32); // Extract the encrypted data without IV
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(authenticationKey, "hex"),
    iv
  );

  let decryptedData = decipher.update(encryptedData, "hex", "utf8");
  decryptedData += decipher.final("utf8");

  return decryptedData;
}

async function checkCookieLoglUser(req, res, next) {
  try {
    if (req.isAuthenticated()) {
      req.session.user = req.user;
    }
    res.locals.showpopup = "null";

    const user = req.session.user;
    if (!user) {
      res.locals.avt =
        "https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg";
      res.locals.username = "";
      res.locals.login_way = "null";
      next();
    } else {
      const n_result = await queryAsync(
        `SELECT login_way, email FROM taikhoan_nguoidung WHERE id= ?`,
        [user.id]
      );
      const result = await queryAsync(
        `SELECT * FROM thongtin_nguoidung WHERE id_tai_khoan= ?`,
        [user.id]
        // id của thàng này dc dùng ở phía dưới sửa để ý giúp mình thank bạn Long
      );
      const author = await queryAsync(
        `SELECT ten_tac_gia FROM tacgia WHERE id_nguoi_dung = ?`,
        [result[0].id]
      );


      if (result.length != 0) {
        // neu dang nhap = google thi 2 bien avt va display name co gia tri, nhung login = tk,mk thi k co 2 bien nay
        res.locals.avt = result[0].anh_dai_dien
          ? result[0].anh_dai_dien
          : "https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg";
        res.locals.username = result[0].ten_hien_thi;
        res.locals.user = result[0].id_tai_khoan;
        res.locals.sex = result[0].gioi_tinh;
        res.locals.email = n_result[0].email;
        res.locals.login_way = n_result[0].login_way;
        res.locals.author_name = author.length
          ? author[0].ten_tac_gia
          : undefined;
        res.locals.admin = result[0].role;
        next();
      } else {
        res.locals.avt =
          "https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg";
        res.locals.username = "";

        next();
      }
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}
async function checkCoookieIfOK(req, res, next) {
  const user = req.session.user;
  if (!user) {
    // Cookie không tồn tại, chặn truy cập
    return res.redirect("/");
  } else {
    next();
  }
}
async function checkAdmin(req, res, next) {
  if (req.isAuthenticated()) {
    req.session.user = req.user;
  }
  const user = req.session.user;
  if (user) {
    const result = await queryAsync(
      `SELECT * FROM thongtin_nguoidung WHERE role='100' AND id_tai_khoan ="${user.id}"`
    );

    if (!result.length) {
      res.locals.admin = "";
      res.locals.admin = null;

      return res.redirect("/");
    } else {
      res.locals.admin = result[0].role;
      next();
    }
  } else {
    return res.redirect("/");
  }
}

async function get_full_id(directoryPath, listName) {
  let list_id = [];
  try {
    // Đọc các file trong thư mục một cách đồng bộ
    let txtFilePaths = [];
    for (const name of listName) {
      txtFilePaths.push(path.join(directoryPath, name));
    }

    const processFiles = async () => {
      for (const filePath of txtFilePaths) {

        list_id.push(await server.uploadFileToDrive(filePath));
      }
    };
    await processFiles();

    return list_id;
  } catch (err) {
    console.error("SYSTEM | GET_ID | ERR | ", err);
  }
}

const decode = (account) => {
  const decode = decrypt(account, authenticationKey);
  const decodeList = decode.split(":"); // Output: "replika is best japanese waifu"
  return decodeList;
};

const getFirstAndLastDayOfWeek = () => {
  const currentDate = new Date();

  // Calculate the first day of the week (Sunday)
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const formattedFirstDay = firstDayOfWeek.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  // Calculate the last day of the week (Saturday)
  const lastDayOfWeek = new Date(currentDate);
  lastDayOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
  const formattedLastDay = lastDayOfWeek.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  return {
    firstDay: `'${formattedFirstDay}'`,
    lastDay: `'${formattedLastDay}'`,
  };
};

const getFirstAndLastDayOfMonth = () => {
  // Clone the current date object to avoid modifying the original
  const currentDate = new Date();

  // Get the first day of the month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const formattedFirstDay = firstDayOfMonth.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  // Move to the next month and get the last day of the current month
  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  const lastDayOfMonth = new Date(currentDate);
  const formattedLastDay = lastDayOfMonth.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  return {
    firstDay: `'${formattedFirstDay}'`,
    lastDay: `'${formattedLastDay}'`,
  };
};

const getFirstAndLastDayOfYear = () => {
  // Clone the current date object to avoid modifying the original
  const currentDate = new Date();

  // Get the first day of the year
  const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const formattedFirstDay = firstDayOfYear.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  // Move to the next year and get the last day of the current year
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  currentDate.setDate(0);
  const lastDayOfYear = new Date(currentDate);
  const formattedLastDay = lastDayOfYear.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'

  return {
    firstDay: `'${formattedFirstDay}'`,
    lastDay: `'${formattedLastDay}'`,
  };
};
const calTime = (update_date) => {
  // Thời điểm hiện tại
  const now = new Date();
  // Thời điểm trả về từ server
  const serverTime = new Date(update_date);
  
  
  // Tính số lượng năm chênh lệch
  const yearsDiff = now.getFullYear() - serverTime.getFullYear();

  // Tính số lượng tháng chênh lệch
  const monthsDiff = yearsDiff * 12 + (now.getMonth() - serverTime.getMonth());

  // Tính số lượng ngày chênh lệch
  const daysDiff = Math.floor((now - serverTime) / (1000 * 60 * 60 * 24));

  // Tính số lượng giờ chênh lệch
  const hoursDiff = now.getHours() - serverTime.getHours();

  // Tính số lượng phút chênh lệch
  const minutesDiff = now.getMinutes() - serverTime.getMinutes();

  // Hiển thị kết quả chênh lệch thời gian
  // console.log(`Chênh lệch thời gian: ${yearsDiff} năm, ${monthsDiff} tháng, ${daysDiff} ngày, ${hoursDiff} giờ, ${minutesDiff} phút.`);

  if (yearsDiff > 0) {
    return yearsDiff + " năm";
  } else if (monthsDiff > 0) {
    return monthsDiff + " tháng";
  } else if (daysDiff > 0) {
    return daysDiff + " ngày";
  } else if (hoursDiff > 0) {
    return hoursDiff + " giờ";
  } else if (minutesDiff > 0) {
    return minutesDiff + " phút";
  } else {
    return "Vừa mới cập nhật";
  }
};

const deleteItemsById = async (data, idToDelete) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      data[key] = data[key].filter((item) => item._id !== idToDelete);
    }
  }
  return data;
};

const getNovelList = async () => {
  try {
    // by week:
    let query_by_week = {
      update_date: {
        $gte: getFirstAndLastDayOfWeek().firstDay,
        $lt: getFirstAndLastDayOfWeek().lastDay,
      },
    };
    const by_week = await server.find_all_Data({
      query: query_by_week,
      table: "truyen",
      projection: {
        name: 1,
        author: 1,
        image: 1,
        no_chapters: 1,
        status: 1,
        likes: 1,
        views: 1,
      },
      sort: { views: -1, likes: -1, update_date: -1, name: 1 },
      limit: 12,
    });
    // by month:
    let query_by_month = {
      update_date: {
        $gte: getFirstAndLastDayOfMonth().firstDay,
        $lt: getFirstAndLastDayOfMonth().lastDay,
      },
    };
    const by_month = await server.find_all_Data({
      query: query_by_month,
      table: "truyen",
      projection: {
        name: 1,
        author: 1,
        image: 1,
        no_chapters: 1,
        status: 1,
        likes: 1,
        views: 1,
      },
      sort: { views: -1, likes: -1, update_date: -1, name: 1 },
      limit: 12,
    });
    // all time
    let query_by_year = {
      update_date: {
        $gte: getFirstAndLastDayOfYear().firstDay,
        $lt: getFirstAndLastDayOfYear().lastDay,
      },
    };
    const all_time = await server.find_all_Data({
      query: query_by_year,
      table: "truyen",
      projection: {
        name: 1,
        author: 1,
        image: 1,
        no_chapters: 1,
        status: 1,
        likes: 1,
        views: 1,
      },
      sort: { views: -1, likes: -1, update_date: -1, name: 1 },
      limit: 12,
    });
    // update nearby:
    const nearby = await server.find_all_Data({
      table: "truyen",
      projection: {
        name: 1,
        author: 1,
        image: 1,
        no_chapters: 1,
        status: 1,
        likes: 1,
        views: 1,
      },
      sort: { update_date: -1, views: -1, likes: -1, name: 1 },
      limit: 12,
    });

    // Change all id to string:
    const by_week_new = by_week.map((doc) => {
      const idString = doc._id.toString();
      return { ...doc, _id: idString };
    });

    const by_month_new = by_month.map((doc) => {
      const idString = doc._id.toString();
      return { ...doc, _id: idString };
    });

    const all_time_new = all_time.map((doc) => {
      const idString = doc._id.toString();
      return { ...doc, _id: idString };
    });

    const nearby_new = nearby.map((doc) => {
      const idString = doc._id.toString();
      return { ...doc, _id: idString };
    });

    const result = {
      by_week: by_week_new,
      by_month: by_month_new,
      all_time: all_time_new,
      nearby: nearby_new,
    };
    await storage.init();

    await storage.setItem("novellist", result);

    return result;
  } catch (err) {
    console.log("SYSTEM | GET_NOVEL_LIST | ERROR | ", err);
  }
};

const set_cookies = (res, id, pass) => {
  const encryptedString = encrypt(
    `${authenticationKey}:${id}:${pass}`,
    authenticationKey
  );
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  res.cookie("account", encryptedString, {
    expires: oneYearFromNow,
    secure: true,
    sameSite: "none",
    domain: "localhost",
    // domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',

    path: "/",
  });
  console.log(`SYSTEM | SET_COOKIES | User ${id} login!`);
  return res.writeHead(200, { "Content-Type": "text/html" });
};

async function readDocxFile(docxFilePath) {
  try {
    const extname = path.extname(docxFilePath).toLowerCase();
    const outputFilePath = docxFilePath.replace(extname, ".txt");

    const { value } = await mammoth.extractRawText({ path: docxFilePath });
    const text = value.trim();

    fs.writeFile(outputFilePath, text, "utf8", (err) => {
      if (err) {
        console.log("An error occurred while writing the file:", err);
      } else {
        fs.unlink(docxFilePath, (err) => {
          if (err) {
            console.log("An error occurred while deleting the file:", err);
          }
        });
      }
    });
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

async function extractInformation(text) {
  try {
    if (!text) return 0;

    // Regex patterns with the 's' flag
    let storyNamePattern = /Tên truyện: (.+)/;
    let authorPattern = /Tác giả: (.+)/;
    let statusPattern = /Trạng thái \[([^\]]+)\]/;
    let genrePattern = /Thể loại \[([^\]]+)\]/;
    let introductionPattern = /Giới thiêu truyện: (.+)/s;
    
    // Extracting information
    let nameMatch = text.match(storyNamePattern);
    let authorMatch = text.match(authorPattern);
    let statusMatch = text.match(statusPattern);
    let genreMatch = text.match(genrePattern);
    let introMatch = text.match(introductionPattern);

    // Extracting chapter names and contents
    let chapterPattern = /Tên chương: (.+)[\s\S]*?Nội dung chương: ([\s\S]+?)(?=(Tên chương|$))/g;
    let chapterNames = [];
    let chapterContents = [];
    let match;
    let i = 1;
    while ((match = chapterPattern.exec(text)) !== null) {
      chapterNames.push(`Chương ${i}: ${match[1].trim()}`);
      chapterContents.push(await server.uploadContentToDrive(match[2].trim()));
      i += 1;
    }

    let dict = {
      name: nameMatch ? nameMatch[1] : null,
      author: authorMatch ? authorMatch[1] : null,
      status: statusMatch ? statusMatch[1].split(",")[0] : null,
      genre: genreMatch
        ? await Promise.all(
            genreMatch[1].split(",").map((genre) => genre.trim())
          )
        : null,
      introduce: introMatch ? introMatch[1] : null,
      name_chapters: chapterNames,
      content_chapter: chapterContents,
    };
    
    return dict;
  } catch (error) {
    console.error("An error occurred:", error);
    // Throw or reject the promise to propagate the error
    throw error;
  }
}


module.exports = {
  encrypt,
  decrypt,
  get_authenkey,
  checkCookieLoglUser,
  sendEmail,
  checkCoookieIfOK,
  decode,
  encrypt,
  decrypt,
  calTime,
  upload,
  deleteItemsById,
  getNovelList,
  set_cookies,
  checkAdmin,
  get_full_id,
  getFirstAndLastDayOfWeek,
  getFirstAndLastDayOfYear,
  getFirstAndLastDayOfMonth,
  readDocxFile,
  extractInformation,
  hashPassword,
  comparePassword,
};
