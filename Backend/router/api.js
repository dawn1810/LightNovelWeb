const express = require("express");
// const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const router = express.Router();
const func_controller = require("../controller/func.controller");
const api_router = require("../controller/api.controller");
const gg_router = require("../controller/google.controller");

const apiRouter = (app) => {
  // more search
  router.get(
    "/api/search/more",
    func_controller.checkCookieLoglUser,
    api_router.api_search_more
  );
  // Advanced search
  router.get(
    "/api/advanced_search",
    func_controller.checkCookieLoglUser,
    api_router.api_advanced_search
  );

  // TRUYỆN DỊCH ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Get no chapters --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.post("/api/no_chaps", api_router.api_no_chap);

  // Update mongDB novel data --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.get("api/update_novel", api_router.api_update_novel);

  // Reviews novels --------------------------------------------------------------------------------------------------------------------------------
  router.post("/api/reviews", api_router.api_reviews);

  // sign up
  router.post("/api/signup", api_router.api_signup);

  // Log in --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.post("/api/login", api_router.api_login);

  // Logout /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  router.post("/api/logout", api_router.api_logout);

  router.post("/api/updatelike", api_router.api_updateLike);

  router.post("/api/updateviews", api_router.api_updteViews);

  router.post("/api/upload_novel", api_router.api_uploadNovel);

  router.post("/api/update_upload_novel", api_router.api_update_uploadNovel);

  router.get("/api/auth/google", gg_router.gg_login);

  // lấy dữ liêu liệu về từ google
  router.get(
    "/auth/google/callback",
    gg_router.gg_call_back,
    gg_router.open_window
  );

  router.post("/api/edit_novel", api_router.api_editNovel);

  router.post("/api/edit_info_novel", api_router.api_editInfoNovel);

  router.post(
    "/api/uploadFile",
    func_controller.upload.array("files[]"),
    api_router.api_uploadFile
  );

  // hủy
  // Delete novel page --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.post("/api/cancel", api_router.api_cancle);

  // Thay đổi info -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.post("/api/updateInfo", api_router.api_updateInfo);

  return app.use("/api", router);
};

// Đổi pass ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/api/changepass", api_router.api_changePass);

// Thay đổi tứng chapters -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/api/download_chap", api_router.api_downloadChap);

router.get("*", func_controller.checkCookieLoglUser, async function (req, res) {
  res.sendStatus(404);
  // let result = await storage.getItem('novellist');
  // currentURL = req.url;

  // res.render('index', {
  // 	headerFile: 'header',
  // 	footerFile: 'footer',
  // 	jsontruyen: result
  // });
});
module.exports = {
  apiRouter,
};
