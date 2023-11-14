const admin = async (req, res) => {
  res.render("admin-index", {
    headerFile: "header",
    footerFile: "footer",
  });
};

const accountManager = async (req, res) => {
  res.render("account-manager", {
    headerFile: "header",
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