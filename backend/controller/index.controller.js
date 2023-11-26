const NodePersist = require("node-persist");
const path = require("path");
const { connection, queryAsync } = require("../dbmysql");

const storage = NodePersist.create({
  dir: ".temp",
});

const rederIndex = async (req, res) => {
  let result = await storage.getItem("novellist");
  currentURL = req.url;

  let truyen_top_view = await queryAsync(
    `SELECT * FROM truyen ORDER BY luot_xem DESC LIMIT 5`
  );

  let truyen_top_like = await queryAsync(
    `SELECT * FROM truyen ORDER BY luot_thich DESC LIMIT 5`
  );
  let truyen_top_date = await queryAsync(
    `SELECT * FROM truyen ORDER BY ngay_cap_nhat DESC LIMIT 5`
  );
  let truyen_hoanthanh = await queryAsync(
    `SELECT truyen.*,tacgia.ten_tac_gia as author FROM truyen,tacgia WHERE truyen.id_tac_gia = tacgia.id AND trang_thai = 'Hoàn thành'  ORDER BY ngay_cap_nhat DESC LIMIT 12`
  );
  let truyen_dangra = await queryAsync(
    `SELECT truyen.*,tacgia.ten_tac_gia as author FROM truyen,tacgia WHERE truyen.id_tac_gia = tacgia.id AND  trang_thai = 'Đang ra' ORDER BY ngay_cap_nhat DESC LIMIT 12`
  );

  res.render("index", {
    headerFile: "header",
    footerFile: "footer",
    jsontruyen: result,
    truyen_top_view: truyen_top_view,
    truyen_top_like: truyen_top_like,
    truyen_top_date: truyen_top_date,
    truyen_hoanthanh: truyen_hoanthanh,
    truyen_dangra: truyen_dangra,
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
