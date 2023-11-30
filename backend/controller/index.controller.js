const NodePersist = require("node-persist");
const path = require("path");
const { connection, queryAsync } = require("../dbmysql");
const { category } = require("./search.controller.js");

const storage = NodePersist.create({
  dir: ".temp",
});

const rederIndex = async (req, res) => {
  let result = await storage.getItem("novellist");
  currentURL = req.url;

  let truyen_top_view = await queryAsync(
    `SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC LIMIT 5`
  );

  let truyen_top_like = await queryAsync(
    `SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.luot_thich DESC, truyen.luot_xem DESC, truyen.ngay_cap_nhat DESC, truyen.ten_truyen ASC LIMIT 5`
  );
  let truyen_top_date = await queryAsync(
    `SELECT * FROM truyen WHERE ban!=1 ORDER BY truyen.ngay_cap_nhat DESC, truyen.luot_xem DESC, truyen.luot_thich DESC, truyen.ten_truyen ASC LIMIT 5`
  );
  let truyen_hoanthanh = await queryAsync(
    `SELECT DISTINCT 
    truyen.id AS _id,
    truyen.ten_truyen,
    tacgia.ten_tac_gia AS author,
    truyen.anh_dai_dien ,
    truyen.trang_thai ,
    truyen.so_luong_chuong 
    FROM
    tacgia, truyen,the_loai, the_loai_truyen  WHERE truyen.id_tac_gia = tacgia.id AND trang_thai = 'Hoàn thành'  AND truyen.ban !=1 ORDER BY ngay_cap_nhat DESC LIMIT 12`
  );
  let truyen_dangra = await queryAsync(
    `SELECT truyen.*,tacgia.ten_tac_gia as author FROM truyen,tacgia WHERE truyen.id_tac_gia = tacgia.id AND  trang_thai = 'Đang ra' AND truyen.ban !=1 ORDER BY ngay_cap_nhat DESC LIMIT 12`
  );
  const data_novel_avd = await category({ query: 1 }, null, 13);

  let result_slider = []
  const truyen_slider  = await queryAsync(
    `SELECT slider.anh,truyen.id,truyen.tom_tat_noi_dung,truyen.ten_truyen FROM truyen,slider WHERE truyen.id = slider.id_truyen`
  );
  result_slider = [...truyen_slider];
  for (let i = 0; i < truyen_slider.length; i++) {
    const id = truyen_slider[i].id;
    let theloaiID = await queryAsync(
      `SELECT DISTINCT id_the_loai FROM the_loai_truyen WHERE the_loai_truyen.id_truyen = '${id}'`
    );
    const genres = theloaiID.map((row) => row.id_the_loai);
    result_slider[i].genres = genres;
  }
  res.render("index", {
    headerFile: "header",
    footerFile: "footer",
    jsontruyen: result,
    truyen_top_view: truyen_top_view,
    truyen_top_like: truyen_top_like,
    truyen_top_date: truyen_top_date,
    truyen_hoanthanh: truyen_hoanthanh,
    truyen_dangra: truyen_dangra,
    novel_avd: data_novel_avd.novel,
    novel_check: data_novel_avd.check,
    slider:result_slider
  });
};

const parentDirectory = path.resolve(__dirname, "..", "..");
const unpage = (req, res) => {
  res.sendFile(parentDirectory + "/error/404.html");
};

const blockpage = (req, res) => {
  res.sendFile(parentDirectory + "/error/403.html");
};
module.exports = {
  rederIndex,
  unpage,
  blockpage,
};
