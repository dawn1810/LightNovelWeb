const { queryAsync } = require("../dbmysql");

const admin = async (req, res) => {
  res.render("admin-index", {
    headerFile: "header",
    footerFile: "footer",
  });
};

const admin_id = 'bdbd15ad-50eb-40fb-a0d0-f141321e6fd0';

const add_content_slider = async (req, res) => {
  let data = await queryAsync(
    `SELECT slider.*,truyen.ten_truyen FROM slider,truyen WHERE  slider.id_truyen = truyen.id`
  );
  const truyen = await queryAsync(
    `SELECT id, so_luong_chuong, ten_truyen, anh_dai_dien,trang_thai FROM truyen WHERE ban!=1 ORDER BY ngay_cap_nhat DESC LIMIT 4;`
  );

  const truyen_info = await queryAsync(
    `SELECT truyen.*, tacgia.ten_tac_gia AS ten_tac_gia, GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ', ') AS ten_the_loai FROM truyen JOIN tacgia ON truyen.id_tac_gia = tacgia.id JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id GROUP BY truyen.id ORDER BY ngay_cap_nhat DESC LIMIT 1 ;`
  );

  const max_page = await queryAsync(
    "SELECT COUNT(*) AS row_count FROM truyen WHERE ban!=1;"
  );
  res.render("add_content_slider", {
    headerFile: "header",
    footerFile: "footer",
    truyen: truyen,
    truyen_info: truyen_info,
    max_page: max_page,
    data: data
  });
};
const manager_category = async (req, res) => {
  const data = await queryAsync(
    `SELECT * FROM the_loai;`
  );
  res.render("theloai", {
    headerFile: "header",
    footerFile: "footer",
    data: data
  });
};

const accountManager = async (req, res) => {
  let dataa = await queryAsync(
    `SELECT * FROM thongtin_nguoidung WHERE role <> '100' `
  );

  res.render("account-manager", {
    headerFile: "header",
    accounts: dataa,
    footerFile: "footer",
  });
};

const authortManager = async (req, res) => {
  const truyen = await queryAsync(
    `SELECT id, so_luong_chuong, ten_truyen, anh_dai_dien,trang_thai FROM truyen WHERE ban!=1 ORDER BY ngay_cap_nhat DESC LIMIT 4;`
  );

  const truyen_info = await queryAsync(
    `SELECT truyen.*, tacgia.ten_tac_gia AS ten_tac_gia, GROUP_CONCAT(the_loai.ten_the_loai SEPARATOR ', ') AS ten_the_loai FROM truyen JOIN tacgia ON truyen.id_tac_gia = tacgia.id JOIN the_loai_truyen ON truyen.id = the_loai_truyen.id_truyen JOIN the_loai ON the_loai_truyen.id_the_loai = the_loai.id GROUP BY truyen.id ORDER BY ngay_cap_nhat DESC LIMIT 1 ;`
  );

  const max_page = await queryAsync(
    "SELECT COUNT(*) AS row_count FROM truyen WHERE ban!=1;"
  );

  res.render("author-manager", {
    headerFile: "header",
    truyen: truyen,
    truyen_info: truyen_info,
    max_page: max_page,
    footerFile: "footer",
  });
};

module.exports = {
  admin,
  accountManager,
  authortManager,
  add_content_slider,
  admin_id,
  manager_category
};
