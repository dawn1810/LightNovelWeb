const updateNovel = require("../test/Updatenovel");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = require("mongodb");
const func_controller = require("./func.controller");
const NodePersist = require("node-persist");
const server = require("../vip_pro_lib");
const secretKey = "5gB#2L1!8*1!0)$7vF@9";
const {
  deleteFileFromDrive,
  downloadFileFromDriveforUser,
  uploadFileToDrivebase64,
  getDriveFileLinkAndDescription,
} = require("./google.controller");
const allowedMimeTypes = [
  "text/plain",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const { queryAsync } = require("../dbmysql");
const authenticationKey = Buffer.from(
  secretKey.padEnd(32, "0"),
  "utf8"
).toString("hex");
const uploadDirectory = path.join(".upload_temp", "files");
const storage = NodePersist.create({
  // index
  dir: ".temp",
});

function isBase64(str) {
  try {
    // Kiểm tra xem chuỗi có thể được giải mã từ Base64 không
    const decoded = Buffer.from(str, "base64").toString("utf-8");

    // Kiểm tra xem chuỗi ban đầu và chuỗi giải mã có giống nhau hay không
    // Nếu giống nhau thì chuỗi đó có thể là Base64
    return Buffer.from(decoded, "utf-8").toString("base64") === str;
  } catch (error) {
    // Nếu có lỗi xảy ra trong quá trình giải mã, tức là chuỗi không phải Base64
    return false;
  }
}

const api_search_more = async (req, res) => {
  try {
    const type_id = decodeURIComponent(req.query.type_id);
    const num_click = decodeURIComponent(req.query.times);
    const search = decodeURIComponent(req.query.search);
    if (type_id && num_click) {
      // get all novels name
      let authors_more = false;
      let name_more = false;
      let genres_more = false;
      let names,
        authors,
        genres = undefined;
      if (type_id == "search_more1") {
        names = await server.find_all_Data({
          table: "truyen",
          query: { name: { $regex: new RegExp(search, "i") } },
          projection: {
            name: 1,
            author: 1,
            image: 1,
            status: 1,
            no_chapters: 1,
          },
          skip: 30 * num_click,
          limit: 31,
        });
        if (names.length == 31) {
          name_more = true;
          names.pop();
        }
      }
      if (type_id == "search_more2") {
        // get all novels genres
        genres = await server.find_all_Data({
          table: "truyen",
          query: { genres: { $in: [new RegExp(search, "i")] } },
          projection: {
            name: 1,
            author: 1,
            image: 1,
            status: 1,
            no_chapters: 1,
          },
          skip: 30 * num_click,
          limit: 31,
        });
        if (genres.length == 31) {
          genres_more = true;
          genres.pop();
        }
      }
      if (type_id == "search_more3") {
        // get all novels authors
        authors = await server.find_all_Data({
          table: "truyen",
          query: { author: { $regex: new RegExp(search, "i") } },
          projection: {
            name: 1,
            author: 1,
            image: 1,
            status: 1,
            no_chapters: 1,
          },
          skip: 30 * num_click,
          limit: 31,
        });
        if (authors.length == 31) {
          authors_more = true;
          authors.pop();
        }
      }

      if (names) {
        res.writeHead(200, { "Content-Type": "applicaiton/json" });
        res.end(JSON.stringify({ truyen: names, showbtn: name_more }));
      } else if (genres) {
        res.writeHead(200, { "Content-Type": "applicaiton/json" });
        res.end(JSON.stringify({ truyen: genres, showbtn: genres_more }));
      } else if (authors) {
        res.writeHead(200, { "Content-Type": "applicaiton/json" });
        res.end(JSON.stringify({ truyen: authors, showbtn: authors_more }));
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log("SYSTEM | SEARCH_MORE | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_advanced_search = async (req, res) => {
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
      case "2":
        query.update_date = { $eq: new Date() };
        break;
      case "3":
        query.update_date = {
          $gte: getFirstAndLastDayOfWeek().firstDay,
          $lt: getFirstAndLastDayOfWeek().lastDay,
        };
        break;
      case "4":
        query.update_date = {
          $gte: getFirstAndLastDayOfMonth().firstDay,
          $lt: getFirstAndLastDayOfMonth().lastDay,
        };
        break;
      case "5":
        query.update_date = {
          $gte: getFirstAndLastDayOfYear().firstDay,
          $lt: getFirstAndLastDayOfYear().lastDay,
        };
        break;
    }

    // types query
    if (types != "undefined") {
      query.genres = { $in: types.split(",") };
    }

    // num chap query
    switch (num_chaps) {
      case "2":
        query.no_chapters = { $gte: 10 };
        break;
      case "3":
        query.no_chapters = { $gte: 100 };
        break;
      case "4":
        query.no_chapters = { $gte: 1000 };
        break;
    }

    // status query:
    switch (status) {
      case "2":
        query.status = "Đang ra";
        break;
      case "3":
        query.status = "Hoàn thành";
        break;
      case "4":
        query.status = "Tạm dừng";
        break;
    }

    // status query:
    switch (sort_by) {
      case "1":
        sort = { views: -1, likes: -1, update_date: -1, name: 1 };
        break;
      case "2":
        sort = { likes: -1, views: -1, update_date: -1, name: 1 };
        break;
      case "3":
        sort = { update_date: -1, views: -1, likes: -1, name: 1 };
        break;
    }

    console.log(query);
    const result = await server.find_all_Data({
      table: "truyen",
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
      skip: parseInt(skip) * 30,
    });

    result.more_novel = false;
    if (result.length == 31) {
      result.more_novel = true;
      result.pop();
    }

    res.writeHead(200, { "Content-Type": "applicaiton/json" });
    res.end(JSON.stringify(result));
  } catch (err) {
    console.log("SYSTEM | SEARCH_MORE | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_no_chap = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | NO_CHAP | Dữ liệu nhận được: ", data);
  try {
    const result = await server.find_all_Data({
      query: { name: data.name },
      table: "truyen",
      projection: { _id: 0, no_chapters: 1 },
      limit: 1,
    });
    // if array emty return zero
    if (result.length === 0) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("0");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(String(result[0].no_chapters));
    }
  } catch (err) {
    console.log("SYSTEM | NO_CHAP | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_update_novel = async (req, res) => {
  try {
    await updateNovel.updateIds();

    // Đọc tệp JSON không đồng bộ
    const data = fs.promises
      .readFile(destFilePath, "utf8")
      .then((fileContent) => {
        resolve(fileContent);
      })
      .catch((err) => {
        reject(err);
      });

    // Phân tích cú pháp tệp JSON và lưu vào biến dummy
    let dummy = JSON.parse(data);

    // Sử dụng biến dummy ở đây
    console.log(dummy.ids);

    let myobj = {
      name: dummy.title,
      author: "1810s team",
      name_chaps: dummy.name_chap,
      chap_ids: dummy.ids,
      no_chapters: dummy.ids.length,
      genres: dummy["Genre(s)"],
      status: "Đang ra",
      summary: dummy.Summary,
      image: dummy.img,
      views: 0,
      likes: 0,
      update_date: new Date(),
      comment_id: "unknown",
    };

    // clear folder tong hop
    const directory = "./trans/tonghop";

    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    });

    // upload to mongoDB
    console.log("SYSTEM | UPDATE_NOVEL | Start upload novel to MongoDB");
    await server.add_one_Data("truyen", myobj);
    console.log("SYSTEM | UPDATE_NOVEL | Complete upload novel to MongoDB");

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE_NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_reviews = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | REVIEWS |", data);
  console.log("id", data.id);
  try {
    const result = {
      no_chapters: 0,
      chapters: [],
    };
    const count = await queryAsync(
      `SELECT COUNT(id) as count FROM chuong WHERE id_truyen = ${data.id}`
    );
    result.no_chapters = count[0].count;
    result.chapters = await queryAsync(
      `SELECT id, ten_chuong FROM chuong WHERE id_truyen = ${data.id}`
    );
    console.log(result);

    // console.log('SYSTEM | REVIEWS | Trả về thông tin reviews truyện ', result[0].name);
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(result));
  } catch (err) {
    console.log("SYSTEM | REVIEWS | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_signup = async (req, res) => {
  // { email: 'chandoralong@gmail.com', usr: '1', pass: '959595595959599' }
  const data = req.body;
  console.log("SYSTEM | SIGN_UP | Dữ liệu nhận được: ", data);
  try {
    // usr ton tai => thong bao
    // const result = await server.find_all_Data({
    //   query: { _id: data.usr },
    //   table: "dang_nhap",
    //   projection: { _id: 1 },
    // });
    const g_result = await queryAsync(
      `SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= '${data.usr}'`
    );
    if (g_result.length != 0) {
      return res.sendStatus(404);
    } else {
      // add data to dang_ky database:
      await queryAsync(
        `INSERT INTO  taikhoan_dangky (ten_tai_khoan, mat_khau, email) VALUES ('${data.usr}','${data.pass}','${data.email}')`
      );
      res.sendStatus(200);
      console.log("SYSTEM | SIGN_UP | Sign up success!!!");
    }
  } catch (err) {
    console.log("SYSTEM | SIGN_UP | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_login = async (req, res) => {
  const data = req.body;
  // 403: sai mat khau
  // log in database {
  // usr: 18102003
  // pass: 18102003
  // email: 18102003
  // }
  // data = {usr: bbp, pass: 1234567890}
  console.log("SYSTEM | LOG_IN | Dữ liệu nhận được: ", data);
  try {
    // const f_result = await server.find_all_Data({
    //   query: { usr: data.usr },
    //   table: "dang_ky",
    //   projection: {
    //     _id: 0,
    //     pass: 1,
    //   },
    // });
    let f_result = await queryAsync(
      `SELECT * FROM taikhoan_dangky WHERE ten_tai_khoan= '${data.usr}'`
    );
    if (f_result.length != 0) {
      // log in first time: (sign up database)
      for (let i = 0; i < f_result.length; i++) {
        if (f_result[i].mat_khau == data.pass) {
          // copy data to dang_nhap database
          const id_user = uuidv4();
          await queryAsync(
            `INSERT INTO taikhoan_nguoidung (id, ten_tai_khoan, email, mat_khau) VALUES ('${id_user}','${data.usr}','${f_result[i].email}','${data.pass}')`
          );
          // them truong moi trong tt_nguoi_dung
          await queryAsync(
            `INSERT INTO  thongtin_nguoidung ( id ,  id_tai_khoan ,  ten_hien_thi ) VALUES ('${id_user}','${id_user}','${data.usr}')`
          );
          // them mot nguoi dung moi
          await queryAsync(
            `DELETE FROM taikhoan_dangky WHERE ten_tai_khoan = '${data.usr}' AND mat_khau = '${data.pass}'`
          );
          const user = {
            id: id_user,
            username: data.usr,
            role: 0,
          };
          req.session.user = user;

          return res.sendStatus(200);
        }

        return res.sendStatus(403);
      }
    } //chao e
    else {
      // log in next time: (log in database)
      // const n_result = await server.find_one_Data("dang_nhap", {
      //   _id: data.usr,
      // });
      const n_result = await queryAsync(
        `SELECT * FROM taikhoan_nguoidung WHERE ten_tai_khoan= '${data.usr}' AND mat_khau = '${data.pass}'`
      );
      const role_u = await queryAsync(
        `SELECT role FROM thongtin_nguoidung WHERE id_tai_khoan= '${n_result[0].id}'`
      );
      if (n_result.length != 0) {
        req.session.user = {
          id: n_result[0].id,
          username: data.usr,
          role: role_u[0].role,
        };
        return res.sendStatus(200);
      } else {
        // res.writeHead(403, { "Content-Type": "text/plain" });
        // res.end("Log in fail!!!");
        return res.sendStatus(403);
      }
    }
  } catch (err) {
    console.log("SYSTEM | LOG_IN | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_logout = async (req, res) => {
  // const data = req.body;
  // console.log("SYSTEM | LOGOUT | Dữ liệu nhận được: ", data);
  // const expirationDate = new Date("2018-12-31");
  // res.cookie("account", data.account, {
  //   expires: expirationDate, // Cookie will permernently expire
  //   secure: true,
  //   sameSite: "none",
  //   domain: "localhost",
  //   // domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
  //   path: "/",
  // });
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
  // res.end("Da dang xuat!");
  req.session.destroy((err) => {
    if (err) {
      console.log("SYSTEM | LOG_OUT | Failed to logout:", err);
      return res.sendStatus(500);
    } else {
      return res.sendStatus(200);
    }
  });
};

const api_updateLike = async (req, res) => {
  try {
    const data = req.body;
    console.log("SYSTEM | UPDATE_LIKE | Dữ liệu nhận được: ", data);
    const account = req.session.user;

    //account: accountCookie,
    //status: status (0/1)
    //id_truyen

    if (parseInt(data.liked)) {
      // like
      // up one like for current novel
      await queryAsync(`
        UPDATE truyen
        SET luot_thich = luot_thich + 1
        WHERE id = ${data.id_truyen}
        `);

      // await server.update_one_Data(
      //   "truyen",
      //   { _id: new ObjectId(data.id_truyen) },
      //   { $inc: { likes: 1 } }
      // );

      // add current nodel to like list of current user
      await queryAsync(`
        INSERT INTO truyen_yeu_thich (id, id_nguoi_dung, id_truyen)
        VALUES ('${uuidv4()}', '${account.id}', ${data.id_truyen})
        `);

      // await server.update_one_Data(
      //   "tt_nguoi_dung",
      //   { _id: decodeList[1] },
      //   { $push: { likeNovels: data.id_truyen } }
      // );
      // response client
      res.writeHead(200, { "Content-Type": "text/plain" });
      console.log(`SYSTEM | UPDATE_LIKE | Like cho truyen hien tai`);
      res.end(JSON.stringify("Liked!!!"));
    } else {
      // unlike
      // down on like for current novel
      await queryAsync(`
        UPDATE truyen
        SET luot_thich = luot_thich - 1
        WHERE id = ${data.id_truyen}
        `);

      // await server.update_one_Data(
      //   "truyen",
      //   { _id: new ObjectId(data.id_truyen) },
      //   { $inc: { likes: -1 } }
      // );
      // remove current nodel from like list of current user
      await queryAsync(`
        DELETE FROM truyen_yeu_thich 
        WHERE id_nguoi_dung = '${account.id}'
        AND id_truyen = ${data.id_truyen};
        `);

      // await server.update_one_Data(
      //   "tt_nguoi_dung",
      //   { _id: decodeList[1] },
      //   { $pull: { likeNovels: data.id_truyen } }
      // );
      // response client
      res.writeHead(200, { "Content-Type": "text/plain" });
      console.log(`SYSTEM | UPDATE_LIKE | Unlike cho truyen hien tai`);
      res.end(JSON.stringify("Unliked!!!"));
    }
  } catch (err) {
    console.log("SYSTEM | UPDATE_LIKE | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_updateViews = async (req, res) => {
  try {
    const data = req.body;
    console.log("SYSTEM | UPDATE_VIEWS | Dữ liệu nhận được: ", data);
    // up one views for current novel
    await queryAsync(`
        UPDATE truyen
        SET luot_xem = luot_xem + 1
        WHERE id = ${data.id_truyen}
        `);

    // await server.update_one_Data(
    //   "truyen",
    //   { _id: new ObjectId(data.id_truyen) },
    //   { $inc: { views: 1 } }
    // );
    // response client
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log(`SYSTEM | UPDATE_VIEWS | Da tang view cho truyen hien tai`);
    res.end(JSON.stringify("viewed!!!"));
  } catch (err) {
    console.log("SYSTEM | UPDATE_VIEWS | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_uploadNovel = async (req, res) => {
  const data = req.body;
  const account = req.session.user;
  console.log("SYSTEM | UPLOAD_NOVEL | Dữ liệu nhận được: ", data);
  console.log("SYSTEM | UPLOAD_NOVEL | Cookie nhận được: ", account);

  try {
    const novel_id = uuidv4();

    // Get the current date
    const currentDate = new Date();

    // Format the date in MySQL-compatible format
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    let avt_var = data.image;
    if (isBase64(data.image)) {
      avt_var = await compressImageBase64(data.image, 5);
    }
    const imgdata = await getDriveFileLinkAndDescription(
      await uploadFileToDrivebase64(avt_var)
    );

    // add to truyen database
    await queryAsync(`
      INSERT INTO truyen (
        id, 
        id_tac_gia, 
        ten_truyen, 
        so_luong_chuong, 
        tom_tat_noi_dung, 
        anh_dai_dien, 
        trang_thai, 
        ngay_cap_nhat
      )
      VALUES (
        '${novel_id}', 
        '${account.id}', 
        '${data.name}', 
        ${data.name_chaps.length}, 
        '${data.summary}', 
        '${imgdata.fileLink}', 
        '${data.status}', 
        '${formattedDate}'
      )
    `);

    // add to chuong database
    for (let i = 0; i < data.name_chaps.length; i++) {
      await queryAsync(`
        INSERT INTO chuong (
          id,
          id_truyen,
          ten_chuong,
          noi_dung_chuong,
          thu_tu
        )
        VALUES (
          '${uuidv4()}',
          '${novel_id}',
          '${data.name_chaps[i]}',
          '${data.chap_ids[i]}',
          ${i + 1}
        )
        `);
    }

    for (let i = 0; i < data.genres.length; i++) {
      await queryAsync(`
        INSERT INTO the_loai_truyen (
          id,
          id_the_loai,
          id_truyen
        )
        VALUES (
          '${uuidv4()}',
          '${data.genres[i]}',
          '${novel_id}'
        )
        `);
    }

    // add to the loai database

    // // upload novel content
    // let up_content = {
    //   name: data.name,
    //   author: data.author,
    //   name_chaps: data.name_chaps,
    //   chap_ids: data.chap_ids,
    //   status: data.status,
    //   no_chapters: data.name_chaps.length,
    //   genres: data.genres,
    //   summary: data.summary,
    //   image: data.image,
    //   views: 0,
    //   likes: 0,
    //   update_date: new Date(),
    // };

    // const id_check = await server.add_one_Data("truyen", up_content);

    // console.log(id_check);
    // create a new comment document
    // await server.add_one_Data("comment", {
    //   _id: id_check.insertedId,
    //   content: {
    //     // user_name: content (do what to add)
    //   },
    // });

    // update user's novel list
    // await server.update_one_Data(
    //   "tt_nguoi_dung",
    //   { _id: decodeList[1] },
    //   { $push: { mynovel: id_check.insertedId.toString() } }
    // );

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPLOAD NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_update_uploadNovel = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | UPDATE UPLOAD NOVEL |", data);
  try {
    // Get the current date
    const currentDate = new Date();

    // Format the date in MySQL-compatible format
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    await queryAsync(`
    UPDATE truyen
    SET 
      ngay_cap_nhat = '${formattedDate}',
      so_luong_chuong = so_luong_chuong + 1
    WHERE id = ${data.id}
	  `);

    const last_chap =
      (await queryAsync(`
    SELECT COUNT(id) as last_chap 
    FROM chuong 
    WHERE id_truyen = '${data.id}'
    `)[0].last_chap) + 1;
    // add to chuong database
    for (let i = 0; i < data.name_chaps.length; i++) {
      await queryAsync(`
        INSERT INTO chuong (
          id_truyen,
          ten_chuong,
          noi_dung_chuong,
          thu_tu
        )
        VALUES (
          '${data.id}',
          '${data.name_chaps[i]}',
          '${data.chap_ids[i]}',
          ${last_chap + i}
        )
        `);
    }

    // await server.update_one_Data(
    //   "truyen",
    //   { _id: new ObjectId(data.id) },
    //   {
    //     $set: {
    //       update_date: new Date(),
    //     },
    //     $push: {
    //       name_chaps: { $each: data.name_chaps },
    //       chap_ids: { $each: data.chap_ids },
    //     },
    //     $inc: {
    //       no_chapters: data.name_chaps.length,
    //     },
    //   }
    // );

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_editNovel = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | EDIT_TRUYEN |", data);
  try {
    // get old _chap ids and name chaps
    let curr_novel = await server.find_one_Data("truyen", {
      _id: new ObjectId(data.id),
    });
    let new_chap_ids = curr_novel.chap_ids;
    // set chap names as new name_chaps
    let new_name_chaps = data.name_chaps;

    // remove all chap that ???
    for (let i = 0; i < data.remove_list.length; i++) {
      let remove_index = parseInt(data.remove_list[i]);
      console.log(remove_index);
      // delete remove id file from drive and remove id from chapid:
      await deleteFileFromDrive(new_chap_ids.splice(remove_index, 1)[0]);
      // remove name chap from name chaps
      new_name_chaps.splice(remove_index, 1);
    }

    console.log(data.edit_index.length);
    for (let i = 0; i < data.edit_index.length; i++) {
      let change_index = parseInt(data.edit_index[i]);
      // delete old id file from drive:
      await deleteFileFromDrive(new_chap_ids[change_index]);
      // replace old id with new index:
      new_chap_ids[change_index] = data.chap_ids[i];
    }

    await server.update_one_Data(
      "truyen",
      { _id: new ObjectId(data.id) },
      {
        $set: {
          name_chaps: new_name_chaps,
          chap_ids: new_chap_ids,
        },
      }
    );

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_editInfoNovel = async (req, res) => {
  const data = req.body;
  // console.log('SYSTEM | EDIT_TRUYEN |', data);
  try {
    
    await server.update_one_Data(
      "truyen",
      { _id: new ObjectId(data.id) },
      {
        $set: {
          name: data.novel_name,
          author: data.author_name,
          status: data.novel_status,
          genres: data.novel_types,
          summary: data.novel_descript,
          image: data.novel_avt,
          update_date: new Date(),
        },
      }
    );

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE UPLOAD NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_uploadFile = async function (req, res) {
  if (!req.files) {
    return res.status(400).send("No file uploaded.");
  }
  let list_name = [];

  // Kiểm tra kiểu dữ liệu của các tệp
  for (let i = 0; i < req.files.length; i++) {
    if (!allowedMimeTypes.includes(req.files[i].mimetype)) {
      return res.status(400).send("Invalid file type.");
    } else if (allowedMimeTypes.indexOf(req.files[i].mimetype) == 1) {
      await readDocxFile(path.join(uploadDirectory, req.files[i].originalname));
    }
    const fileName = req.files[i].originalname.replace(".docx", ".txt");
    list_name.push(fileName);
  }

  // Xử lý các tệp đã tải lên ở đây
  console.log("SYSTEM | UPLOAD_FILE | Files uploaded:", req.files);
  res.writeHead(200, { "Content-Type": "applicaiton/json" });
  // res.end('ok bro');

  res.end(
    JSON.stringify(
      await func_controller.get_full_id(uploadDirectory, list_name)
    )
  );
};

const api_cancle = async (req, res) => {
  const data = req.body;
  // console.log("SYSTEM | CANCEL |", data);
  try {
    if (data.status == "cancel") {
      for (const id of data.chap_ids) {
        await deleteFileFromDrive(id);
      }

      res.sendStatus(200);
    } else if (data.status == "delete") {
      let result = await server.find_one_Data("truyen", {
        _id: new ObjectId(data.id),
      });

      // xóa file trên drive
      for (const id of result.chap_ids) {
        await deleteFileFromDrive(id);
      }

      // xóa truyện trên server
      await server.delete_one_Data("truyen", { _id: new ObjectId(data.id) });
      const decodeList = func_controller.decode(account);
      // console.log(`SYSTEM | CANCEL | Dữ liệu đã giải mã ${decodeList}`);
      // decodeList = authenticationKey:id:pass
      if (decodeList[0] == authenticationKey) {
        await server.update_one_Data(
          "tt_nguoi_dung",
          { _id: decodeList[1] },
          {
            $pull: { mynovel: data.id },
          }
        );
        let new_resual = await storage.getItem("novellist");
        storage.setItem(
          "novellist",
          await func_controller.deleteItemsById(new_resual, data.id)
        );
      } else {
        res.sendStatus(404);
      }
      res.sendStatus(200);
      console.log(data.id);
    }
  } catch (err) {
    console.log("SYSTEM | CANCEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

// Delete novel page

const api_updateInfo = async (req, res) => {
  try {
    const account = req.session.user;
    const data = req.body;
    let avt_var = data.img;
    if (isBase64(data.img)) {
      avt_var = await compressImageBase64(data.img, 5);
    }
    const imgdata = await getDriveFileLinkAndDescription(
      await uploadFileToDrivebase64(avt_var)
    );
    // imgdata.fileLink la link hinh

    // update user information
    await queryAsync(`
      UPDATE thongtin_nguoidung
      SET 
        ten_hien_thi = '${data.hoten}',
        anh_dai_dien = '${imgdata.fileLink}',
        gioi_tinh = ${data.sex}
      WHERE id_tai_khoan = '${account.id}';
    `);

    // update user's email
    await queryAsync(`
      UPDATE taikhoan_nguoidung
      SET 
        email = '${data.email}'
      WHERE id = '${account.id}'
      AND login_way <> 'google';
    `);

    // update author name
    await queryAsync(`
    INSERT INTO tacgia (id, id_nguoi_dung, ten_tac_gia)
    VALUES (
      '${account.id}',
      '${account.id}',
      '${data.author_name}'
    ) 
    ON DUPLICATE KEY UPDATE ten_tac_gia = VALUES(ten_tac_gia);
    `);

    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_changePass = async (req, res) => {
  try {
    const account = req.session.user;
    const data = req.body;
    // console.log("SYSTEM | CHANGE_PASSWORD |", data);
    const result = await queryAsync(`
    SELECT mat_khau as pass
    FROM taikhoan_nguoidung
    WHERE id = '${account.id}'
    `);

    // const n_result = await server.find_one_Data("dang_nhap", {
    //   _id: decodeList[1],
    // });
    if (data["Old-Password"] == result.pass) {
      await queryAsync(`
      UPDATE taikhoan_nguoidung
      SET 
        mat_khau = '${data["new-Password"]}'
      WHERE id = '${account.id}';
      `);
      // await server.update_one_Data(
      //   "dang_nhap",
      //   { _id: decodeList[1] },
      //   {
      //     $set: {
      //       pass: data["new-Password"],
      //     },
      //   }
      // );
      res.sendStatus(200);
    } else {
      res.status(403).send("Sai pass cũ");
    }
  } catch (err) {
    console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_downloadChap = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | DOWNLOAD CHAPTER |", data);
  downloadFileFromDriveforUser(data.id, res);
};

const api_get_list_novel = async (req, res) => {
  try {
    // Chuyển đổi giá trị offset và n sang kiểu số
    const offset = parseInt(req.body.offset, 10);
    const n = parseInt(req.body.n, 10);
    const fill = parseInt(req.body.fill, 10);

    // Kiểm tra xem giá trị có phải là số hay không
    if (isNaN(offset) || isNaN(n)) {
      res.status(400).json({ error: "Giá trị không hợp lệ" });
      return;
    }
    let result = [];
    switch (fill) {
      case 1: // if (x === 'value1')
        result = await queryAsync(
          "SELECT * FROM truyen ORDER BY ngay_cap_nhat DESC LIMIT ? OFFSET ?",
          [n, offset]
        );
        break;

      case 2: // if (x === 'value2')
        result = await queryAsync(
          "SELECT * FROM truyen ORDER BY ngay_cap_nhat ASC LIMIT ? OFFSET ?",
          [n, offset]
        );
        break;
      case 3: // if (x === 'value2')
        result = await queryAsync(
          "SELECT * FROM truyen ORDER BY luot_xem DESC  LIMIT ? OFFSET ?",
          [n, offset]
        );
        break;
      case 4: // if (x === 'value2')
        result = await queryAsync(
          "SELECT * FROM truyen ORDER BY luot_xem ASC LIMIT ? OFFSET ?",
          [n, offset]
        );
        break;

      default:
        //code here
        break;
    }

    console.log(result);

    if (result && result.length > 0) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ error: "Không tìm thấy chương" });
    }
  } catch (error) {
    console.error("Error in api_get_list_novel:", error);
    res.status(500).json({ error: "Có lỗi xảy ra trên server" });
  }
};

const api_get_info_novel = async (req, res) => {
  try {
    // Chuyển đổi giá trị offset và n sang kiểu số
    const idtruyen = parseInt(req.body.id, 10);
    console.log(idtruyen);
    const result = await queryAsync(
      `SELECT truyen.*, tacgia.ten_tac_gia AS ten_tac_gia, GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ', ') AS ten_the_loai FROM truyen JOIN tacgia ON truyen.id_tac_gia = tacgia.id JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id WHERE truyen.id = ${idtruyen} GROUP BY truyen.id ORDER BY ngay_cap_nhat LIMIT 1 ;`
    );

    if (result && result.length > 0) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ error: "Không tìm thấy truyện" });
    }
  } catch (error) {
    console.error("Error in api_get_list_novel:", error);
    res.status(500).json({ error: "Có lỗi xảy ra trên server" });
  }
};

//block truyen
const update_state_novel = async (req, res) => {
  try {
    const idtruyen = req.body.id;
    const state = req.body.state;
    if (isNaN(idtruyen)) {
      console.error("Giá trị id không hợp lệ");
      return res.status(400).json({ error: "Giá trị id không hợp lệ" });
    }
    const result = await queryAsync(
      "UPDATE truyen SET trang_thai = ? WHERE id = ?",
      [state, idtruyen]
    );
    if (result.affectedRows === 1) {
      console.log(
        `UPDATE truyen SET trang_thai = ${state} WHERE id = ${idtruyen}`
      );
      res.status(200).json({ success: true , message: state });
    } else {
      res.status(404).json({ error: "Không tìm thấy truyện để cập nhật" });
    }
  } catch (error) {
    console.error("Error in update_state_novel:", error);
    res.status(500).json({ error: "Có lỗi xảy ra trên server" });
  }
};
//block truyen
//block_account
const api_block_account = async (req, res) => {
  try {
    const id_acc = parseInt(req.body.id, 10);
    // if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
    //   console.error("Giá trị id không hợp lệ");
    //   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
    // }
    const result = await queryAsync(
      `UPDATE thongtin_nguoidung SET  last_role = role, role = 0 WHERE id = '${id_acc}'`
    );
    if (result.affectedRows === 1) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
    }
  } catch (error) {
    console.error("Error in update_state_novel:", error);
    res.status(500).json({ error: "Có lỗi xảy ra trên server" });
  }
};

const api_open_account = async (req, res) => {
  try {
    const id_acc = parseInt(req.body.id, 10);
    // if (`FETCH BLOCK_API COMPLETE ID==${isNaN(id_acc)}`) {
    //   console.error("Giá trị id không hợp lệ");
    //   return res.status(400).json({ error: "Giá trị id không hợp lệ" });
    // }
    const result = await queryAsync(
      `UPDATE thongtin_nguoidung SET  role = last_role, last_role = @temp WHERE id = '${id_acc}' AND last_role <> 0;`
    );
    if (result.affectedRows === 1) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: "Không tìm thấy tài khoản để cập nhật" });
    }
  } catch (error) {
    console.error("Error in update_state_novel:", error);
    res.status(500).json({ error: "Có lỗi xảy ra trên server" });
  }
};

module.exports = {
  api_search_more,
  api_advanced_search,
  api_no_chap,
  api_reviews,
  api_update_novel,
  api_signup,
  api_login,
  api_logout,
  api_updateLike,
  api_updateViews,
  api_uploadNovel,
  api_update_uploadNovel,
  api_editNovel,
  api_uploadFile,
  api_editInfoNovel,
  api_updateInfo,
  api_changePass,
  api_downloadChap,
  api_cancle,
  authenticationKey,
  api_get_list_novel,
  api_get_info_novel,
  update_state_novel,
  api_block_account,
  api_open_account,
};