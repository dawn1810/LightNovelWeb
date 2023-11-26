const { ObjectId } = require("mongodb");
const func_controller = require("./func.controller");
const { queryAsync } = require("../dbmysql");

const processNovels = async function (req, res, id_truyen) {
  try {
    const account = req.session.user;

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
      edit_no_chaps: "",
    };

    const myNovels = await queryAsync(`
      SELECT 
        truyen.id, 
        truyen.ten_truyen as name, 
        tacgia.ten_tac_gia as author,
        truyen.trang_thai as status,
        truyen.so_luong_chuong as no_chapters,
        truyen.tom_tat_noi_dung as summary,
        truyen.anh_dai_dien as image,
        truyen.luot_xem as views,
        truyen.luot_thich as likes
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
      const genres = await queryAsync(`
      SELECT 
        the_loai.ten_the_loai
      FROM the_loai
      INNER JOIN the_loai_truyen
        ON the_loai_truyen.id_the_loai = the_loai.id
      INNER JOIN truyen
        ON the_loai_truyen.id_truyen = truyen.id
      WHERE truyen.id = '${novel.id}'
      `);

      novel.genres = genres.map((genre) => genre.ten_the_loai);

      const chapters = await queryAsync(`
      SELECT 
        chuong.ten_chuong,
        chuong.noi_dung_chuong
      FROM chuong
      INNER JOIN truyen
        ON chuong.id_truyen = truyen.id
      WHERE truyen.id = '${novel.id}'
      ORDER BY chuong.thu_tu
      `);

      novel.chap_ids = chapters.map((chapter) => chapter.noi_dung_chuong);
      novel.name_chaps = chapters.map((chapter) => chapter.ten_chuong);

      result.push(novel);
      if (novel.id == id_truyen) {
        render_data.edit_name = novel.name;
        render_data.edit_auth = novel.author;
        render_data.edit_status = novel.status;
        render_data.edit_tag = novel.genres;
        render_data.edit_review = novel.summary;
        render_data.edit_img = novel.image;
        render_data.edit_chap_ids = novel.chap_ids;
        render_data.edit_name_chaps = novel.name_chaps;
        render_data.edit_no_chaps = novel.no_chapters;
      }
    }

    render_data.novels = result;
    const likeNovels = await queryAsync(`
      SELECT 
        truyen.id, 
        truyen.ten_truyen as name, 
        truyen.trang_thai as status,
        tacgia.ten_tac_gia as author,
        truyen.tom_tat_noi_dung as summary,
        truyen.so_luong_chuong as no_chapters,
        truyen.anh_dai_dien as image,
        truyen.ngay_cap_nhat as update_date
      FROM truyen
      INNER JOIN tacgia
        ON truyen.id_tac_gia = tacgia.id
      INNER JOIN truyen_yeu_thich
        ON truyen.id = truyen_yeu_thich.id_truyen
      INNER JOIN thongtin_nguoidung
        ON truyen_yeu_thich.id_nguoi_dung = thongtin_nguoidung.id
      WHERE thongtin_nguoidung.id = '${account.id}'
    `);
    let idListlikeNovels = [];
    for (let novel of likeNovels) {
      idListlikeNovels.push(novel.id);

      novel.update_date = func_controller.calTime(novel.update_date);
      result_like.push(novel);
      // }
    }
    render_data.like_novel = idListlikeNovels;
    render_data.like_novel_list = result_like;

    if (id_truyen && myNovels.every(novel => novel.id !== id_truyen)) {
      return res.status(403).send("Lỗi, không có quyền truy cập!");
    }
    
    res.render("profile.ejs", render_data);
  } catch (err) {
    console.log("SYSTEM | LIST MY NOVELS | ERROR | ", err);
    return res.sendStatus(500);
  }
};

module.exports = {
  processNovels,
};
