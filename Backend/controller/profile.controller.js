const { connectToDatabase } = require('../dbmysql');
const { ObjectId } = require('mongodb');
const func_controller = require("../controller/func.controller");

const processNovels = async function (req, res, id_truyen) {
  try {
    const account = req.cookies.account;
    console.log("SYSTEM | LIST MY NOVELS | Cookie nhận được: ", account);
  
    // console.log(`SYSTEM | LIST MY NOVELS | Dữ liệu đã giải mã ${decodeList}`);
    const decodeList = func_controller.decode(account)
    let render_data = {
      headerFile: "header",
      footerFile: "footer",
      edit_name: "",
      edit_auth: "",
      edit_status: "",
      edit_tag: "",
      edit_review: "",
      edit_img: "",
      edit_chap_ids: "",
      edit_name_chaps: "",
    };
    let novels = await server.find_one_Data("tt_nguoi_dung", {
      _id: decodeList[1],
    });
      
      
    //   const novels = async () => {
    //       const sql = "SELECT * FROM thongtin_nguoidung WHERE id = ?"
    //       const values = [decodeList[1]];
    //       function executeQuery(sql, values) {
    //         return new Promise((resolve, reject) => {
    //             connectToDatabase.query(sql, values, function (err, result, fields) {
    //             if (err) {
    //               reject(err);
    //             } else {
    //               resolve(result);
    //             }
    //           });
    //         });
    //       }
          
    //       try {
    //         const result = await executeQuery(sql, values);
    //         console.log(result);
    //         return result;
    //       } catch (err) {
    //         console.error(err);
    //         // Xử lý lỗi nếu cần thiết
    //       }
    //   }
    let result = [];
    let result_like = [];

    for (let id of novels.mynovel) {
      const curr_novel = await server.find_one_Data("truyen", {
        _id: new ObjectId(id),
      });
      result.push(curr_novel);
      if (id == id_truyen) {
        render_data.edit_name = curr_novel.name;
        render_data.edit_auth = curr_novel.author;
        render_data.edit_status = curr_novel.status;
        render_data.edit_tag = curr_novel.genres;
        render_data.edit_review = curr_novel.summary;
        render_data.edit_img = curr_novel.image;
        render_data.edit_chap_ids = curr_novel.chap_ids;
        render_data.edit_name_chaps = curr_novel.name_chaps;
      }
    }

    render_data.novels = result;
    let idListlikeNovels = [];
    for (let id of novels.likeNovels) {
      let curr_novel = await server.find_one_Data("truyen", {
        _id: new ObjectId(id),
      });
      if (!curr_novel) {
        await server.update_one_Data(
          "tt_nguoi_dung",
          { _id: decodeList[1] },
          {
            $pull: { likeNovels: id },
          }
        );
      } else {
        idListlikeNovels.push(id);

        curr_novel.update_date = func_controller.calTime(curr_novel.update_date);
        result_like.push(curr_novel);
      }
    }
    render_data.like_novel = idListlikeNovels;
    render_data.like_novel_list = result_like;

    if (id_truyen) {
      if (!novels.mynovel.includes(id_truyen)) {
        res.status(403).send("Lỗi, không có quyền truy cập!");
      }
    }

    res.render("profile.ejs", render_data);
  } catch (err) {
    console.log("SYSTEM | LIST MY NOVELS | ERROR | ", err);
    res.sendStatus(500);
  }
};


module.exports = {
    processNovels
}