const updateNovel = require("./Updatenovel");
const fs = require("fs");
const path = require("path");
const { ObjectId } = require("mongodb");
const func_controller = require("../controller/func.controller");
const NodePersist = require("node-persist");

const storage = NodePersist.create({
  // index
  dir: ".temp",
});

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
  try {
    let result = await server.find_all_Data({
      table: "truyen",
      query: { _id: new ObjectId(data.id) },
      projection: {
        no_chapters: 1,
        name_chaps: 1,
      },
      limit: 1,
    });

    // console.log('SYSTEM | REVIEWS | Trả về thông tin reviews truyện ', result[0].name);
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(result[0]));
  } catch (err) {
    console.log("SYSTEM | REVIEWS | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_signup = async (req, res) => {
  console.log("gọi api đăng nhập________________________")
  const data = req.body;
  console.log("SYSTEM | SIGN_UP | Dữ liệu nhận được: ", data);
  try {
    // usr ton tai => thong bao
    console.log(data.usr);
    const result = await server.find_all_Data({
      query: { _id: data.usr },
      table: "dang_nhap",
      projection: { _id: 1 },
    });
    console.log(result);
    if (result.length != 0) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Ten đang nhập đã tồn tại");
    } else {
      // add data to dang_ky database:
      await server.add_one_Data("dang_ky", {
        usr: data.usr,
        email: data.email,
        pass: data.pass,
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Sign up success!!!");
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
    const f_result = await server.find_all_Data({
      query: { usr: data.usr },
      table: "dang_ky",
      projection: {
        _id: 0,
        pass: 1,
      },
    });

    if (f_result.length != 0) {
      // log in first time: (sign up database)
      for (let i = 0; i < f_result.length; i++) {
        if (f_result[i].pass == data.pass) {
          // move data to dang_nhap database
          await server.add_one_Data("dang_nhap", {
            _id: data.usr,
            pass: data.pass,
            lgway: "normal",
          });

          // them truong moi trong tt_nguoi_dung
          // thong tin nguoi dung
          const newUser = {
            _id: data.usr,
            email: f_result.email,
            displayName: data.usr,
            avatarUrl:
              "https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg",
            sex: "unknown",
            likeNovels: [],
            mynovel: [],
          };

          // them mot nguoi dung moi
          await server.add_one_Data("tt_nguoi_dung", newUser);

          // remove usr name font dang_ky data base\
          await server.delete_many_Data("dang_ky", { usr: data.usr });

          set_cookies(res, data.usr, data.pass); // set cookies

          res.end("Log in sucess!!!");

          break;
        }

        if (i == f_result.length - 1) {
          res.writeHead(403, { "Content-Type": "text/plain" });
          res.end("Log in fail!!!");
        }
      }
    } //chao e
    else {
      // log in next time: (log in database)
      const n_result = await server.find_one_Data("dang_nhap", {
        _id: data.usr,
      });

      if (n_result.pass == data.pass) {
        set_cookies(res, data.usr, data.pass); // set cookies

        res.end("Log in success!!!");
      } else {
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.end("Log in fail!!!");
      }
    }
  } catch (err) {
    console.log("SYSTEM | LOG_IN | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_logout = async (req, res) => {
  try {
    const data = req.body;
    console.log("SYSTEM | LOGOUT | Dữ liệu nhận được: ", data);
    const expirationDate = new Date("2018-12-31");
    res.cookie("account", data.account, {
      expires: expirationDate, // Cookie will permernently expire
      secure: true,
      sameSite: "none",
      domain: "localhost",
      // domain: 'c22c-2a09-bac5-d44d-18d2-00-279-87.ngrok-free.app',
      path: "/",
    });
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log(`SYSTEM | LOGOUT | Dang xuat thành công`);
    res.end("Da dang xuat!");
  } catch (err) {
    res.sendStatus(500);
    console.log("SYSTEM | LOGOUT | ERROR | ", err);
  }
};

const api_updateLike = async (req, res) => {
  try {
    const data = req.body;
    console.log("SYSTEM | UPDATE_LIKE | Dữ liệu nhận được: ", data);
    const decode = decrypt(req.cookies.account, authenticationKey);
    const decodeList = decode.split(":"); // Output: "replika is best japanese waifu"
    // console.log(`SYSTEM | UPDATE_LIKE | Dữ liệu đã giải mã ${decodeList}`);
    // decodeList = authenticationKey:id:pass
    if (decodeList[0] == authenticationKey) {
      //account: accountCookie,
      //status: status (0/1)
      //id_truyen

      if (parseInt(data.liked)) {
        // like
        // up one like for current novel
        await server.update_one_Data(
          "truyen",
          { _id: new ObjectId(data.id_truyen) },
          { $inc: { likes: 1 } }
        );
        // add current nodel to like list of current user
        await server.update_one_Data(
          "tt_nguoi_dung",
          { _id: decodeList[1] },
          { $push: { likeNovels: data.id_truyen } }
        );
        // response client
        res.writeHead(200, { "Content-Type": "text/plain" });
        console.log(`SYSTEM | UPDATE_LIKE | Like cho truyen hien tai`);
        res.end(JSON.stringify("Liked!!!"));
      } else {
        // unlike
        // down on like for current novel
        await server.update_one_Data(
          "truyen",
          { _id: new ObjectId(data.id_truyen) },
          { $inc: { likes: -1 } }
        );
        // remove current nodel from like list of current user
        await server.update_one_Data(
          "tt_nguoi_dung",
          { _id: decodeList[1] },
          { $pull: { likeNovels: data.id_truyen } }
        );
        // response client
        res.writeHead(200, { "Content-Type": "text/plain" });
        console.log(`SYSTEM | UPDATE_LIKE | Unlike cho truyen hien tai`);
        res.end(JSON.stringify("Unliked!!!"));
      }
    }
  } catch (err) {
    console.log("SYSTEM | UPDATE_LIKE | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_updteViews = async (req, res) => {
  try {
    const data = req.body;
    console.log("SYSTEM | UPDATE_VIEWS | Dữ liệu nhận được: ", data);
    // up one like for current novel
    await server.update_one_Data(
      "truyen",
      { _id: new ObjectId(data.id_truyen) },
      { $inc: { views: 1 } }
    );
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
  const account = req.cookies.account;
  console.log("SYSTEM | UPLOAD_NOVEL | Dữ liệu nhận được: ", data);
  console.log("SYSTEM | UPLOAD_NOVEL | Cookie nhận được: ", account);
  const decode = decrypt(account, authenticationKey);
  const decodeList = decode.split(":"); // Output: "replika is best japanese waifu"
  // console.log(`SYSTEM | UPLOAD_NOVEL | Dữ liệu đã giải mã ${decodeList}`);
  // decodeList = authenticationKey:id:pass

  try {
    if (decodeList[0] == authenticationKey) {
      // upload novel content
      let up_content = {
        name: data.name,
        author: data.author,
        name_chaps: data.name_chaps,
        chap_ids: data.chap_ids,
        status: data.status,
        no_chapters: data.name_chaps.length,
        genres: data.genres,
        summary: data.summary,
        image: data.image,
        views: 0,
        likes: 0,
        update_date: new Date(),
      };

      const id_check = await server.add_one_Data("truyen", up_content);

      console.log(id_check);
      // create a new comment document
      await server.add_one_Data("comment", {
        _id: id_check.insertedId,
        content: {
          // user_name: content (do what to add)
        },
      });

      // update user's novel list
      await server.update_one_Data(
        "tt_nguoi_dung",
        { _id: decodeList[1] },
        { $push: { mynovel: id_check.insertedId.toString() } }
      );
      res.sendStatus(200);
    }
  } catch (err) {
    console.log("SYSTEM | UPLOAD NOVEL | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_update_uploadNovel = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | UPDATE UPLOAD NOVEL |", data);
  try {
    await server.update_one_Data(
      "truyen",
      { _id: new ObjectId(data.id) },
      {
        $set: {
          update_date: new Date(),
        },
        $push: {
          name_chaps: { $each: data.name_chaps },
          chap_ids: { $each: data.chap_ids },
        },
        $inc: {
          no_chapters: data.name_chaps.length,
        },
      }
    );

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

    // remove all chap that
    for (let i = 0; i < data.remove_list.length; i++) {
      let remove_index = parseInt(data.remove_list[i]);
      console.log(remove_index);
      // delete remove id file from drive and remove id from chapid:
      await server.deleteFileFromDrive(new_chap_ids.splice(remove_index, 1)[0]);
      // remove nam chap from name chaps
      new_name_chaps.splice(remove_index, 1);
    }

    console.log(data.edit_index.length);
    for (let i = 0; i < data.edit_index.length; i++) {
      let change_index = parseInt(data.edit_index[i]);
      // delete old id file from drive:
      await server.deleteFileFromDrive(new_chap_ids[change_index]);
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

  res.end(JSON.stringify(await get_full_id(uploadDirectory, list_name)));
};

const api_cancle = async (req, res) => {
  const data = req.body;
  // console.log("SYSTEM | CANCEL |", data);
  try {
    if (data.status == "cancel") {
      for (const id of data.chap_ids) {
        await server.deleteFileFromDrive(id);
      }

      res.sendStatus(200);
    } else if (data.status == "delete") {
      let result = await server.find_one_Data("truyen", {
        _id: new ObjectId(data.id),
      });

      // xóa file trên drive
      for (const id of result.chap_ids) {
        await server.deleteFileFromDrive(id);
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
    const data = req.body;
    console.log("SYSTEM | UPDATE INFO |", data);
    let avt_var = data.img;
    if (isBase64(data.img)) {
      avt_var = await compressImageBase64(data.img, 5);
    }
    await server.update_one_Data(
      "tt_nguoi_dung",
      { _id: data.usr },
      {
        $set: {
          email: data.email,
          displayName: data.hoten,
          avatarUrl: avt_var,
          sex: data.sex,
        },
      }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_changePass = async (req, res) => {
  try {
    const data = req.body;
    const decode = decrypt(req.cookies.account, authenticationKey);
    const decodeList = decode.split(":"); // Output: "replika is best japanese waifu"
    // console.log(`SYSTEM | CHANGE_PASSWORD | Dữ liệu đã giải mã ${decodeList}`);
    // decodeList = authenticationKey:id:pass
    if (decodeList[0] == authenticationKey) {
      console.log("SYSTEM | CHANGE_PASSWORD |", data);
      const n_result = await server.find_one_Data("dang_nhap", {
        _id: decodeList[1],
      });
      if (data["Old-Password"] == n_result.pass) {
        await server.update_one_Data(
          "dang_nhap",
          { _id: decodeList[1] },
          {
            $set: {
              pass: data["new-Password"],
            },
          }
        );
        res.sendStatus(200);
      } else {
        res.status(403).send("Sai pass cũ");
      }
    } else {
      res.status(404).send("Sai xác thực");
    }
  } catch (err) {
    console.log("SYSTEM | UPDATE INFO | ERROR | ", err);
    res.sendStatus(500);
  }
};

const api_downloadChap = async (req, res) => {
  const data = req.body;
  console.log("SYSTEM | DOWNLOAD CHAPTER |", data);
  server.downloadFileFromDriveforUser(data.id, res);
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
  api_updteViews,
  api_uploadNovel,
  api_update_uploadNovel,
  api_editNovel,
  api_uploadFile,
  api_editInfoNovel,
  api_updateInfo,
  api_changePass,
  api_downloadChap,
  api_cancle,
};
