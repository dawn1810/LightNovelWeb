
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
  res.render("author-manager", {
    headerFile: "header",
    footerFile: "footer",
  });
};

module.exports = {
    admin,
	accountManager,
	authortManager
}