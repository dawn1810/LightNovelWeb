
const { connection, queryAsync } = require("../dbmysql");

const admin = async (req, res) => {
  res.render("admin-index", {
    headerFile: "header",
    footerFile: "footer",
  });
};

const accountManager = async (req, res) => {
  let dataa = await queryAsync(
    `SELECT id,anh_dai_dien,ten_hien_thi FROM thongtin_nguoidung `
  );

  res.render("account-manager", {
    headerFile: "header",    
    accounts:dataa,
    footerFile: "footer",
  });
};

const authortManager = async (req, res) => {
  const truyen = await queryAsync(
    `SELECT id, so_luong_chuong, ten_truyen, anh_dai_dien,trang_thai FROM truyen ORDER BY ngay_cap_nhat LIMIT 4;`
  )

  const truyen_info = await queryAsync(
    `SELECT truyen.*, tacgia.ten_tac_gia AS ten_tac_gia, GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ', ') AS ten_the_loai FROM truyen JOIN tacgia ON truyen.id_tac_gia = tacgia.id JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id GROUP BY truyen.id ORDER BY ngay_cap_nhat LIMIT 1 ;`)



  res.render("author-manager", {
    headerFile: "header",
    truyen: truyen,
    truyen_info:truyen_info,
    footerFile: "footer",
  });
};

module.exports = {
    admin,
	accountManager,
  authortManager,

}