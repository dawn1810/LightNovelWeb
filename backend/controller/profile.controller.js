const { connectToDatabase } = require("../dbmysql");
const { ObjectId } = require("mongodb");
const func_controller = require("./func.controller");
const server = require("../vip_pro_lib");

const processNovels = async function (req, res, id_truyen) {
  try {
    const account = req.session.user;
    return res.status(200).send("dang lam ne");

    // bien account co du lieu nhu sau:
    // {
    //   id: id nguoi dung
    //   username: ten dang nhap nguoi dung
    // }

    // console.log("SYSTEM | LIST MY NOVELS | Cookie nhận được: ", account);

    // console.log(`SYSTEM | LIST MY NOVELS | Dữ liệu đã giải mã ${decodeList}`);
    // const decodeList = func_controller.decode(account)
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

    // let novels = await server.find_one_Data("tt_nguoi_dung", {
    //   _id: account.id,
    // });

    const myNovels = await queryAsync(`
      SELECT 
        truyen.id, 
        truyen.ten_truyen, 
        tacgia.ten_tac_gia,
        truyen.trang_thai,
        truyen.tom_tat_noi_dung,
        truyen.anh_dai_dien
      FROM truyen
      INNER JOIN tacgia
        ON truyen.id_tac_gia = tacgia.id
      INNER JOIN thongtin_nguoidung
        ON tacgia.id_nguoi_dung = thongtin_nguoidung.id
      WHERE thongtin_nguoidung.id = '${account.id}'
    `);
    let result = [];
    let result_like = [];

    for (let novel of myNovels) {
      const id = novel.id;
      // const curr_novel = await server.find_one_Data("truyen", {
      //   _id: new ObjectId(id),
      // });
      // const genres = await queryAsync(`
      // SELECT 
      //   the_loai.ten_the_loai
      // FROM the_loai
      // INNER JOIN tacgia
      //   ON truyen.id_tac_gia = tacgia.id
      // INNER JOIN thongtin_nguoidung
      //   ON tacgia.id_nguoi_dung = thongtin_nguoidung.id
      // WHERE thongtin_nguoidung.id = '${account.id}'
      // `);

      result.push(curr_novel);
      if (id == id_truyen) {
        render_data.edit_name = novel.ten_truyen;
        render_data.edit_auth = novel.ten_tac_gia;
        render_data.edit_status = novel.trang_thai;
        render_data.edit_tag = curr_novel.genres;
        render_data.edit_review = novel.tom_tat_noi_dung;
        render_data.edit_img = novel.anh_dai_dien;
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
    // res.sendStatus(500);
  }
};

module.exports = {
  processNovels,
};
