const express = require("express");
// const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const router = express.Router();
const index_controller = require("../controller/index.controller");
const func_controller = require("../controller/func.controller");
const renderReviews = require("../controller/review.controller");
const renderReading = require("../controller/reading.controller");
const renderAdmin = require("../controller/admin.controller");
const renderSearch = require("../controller/search.controller");
const processNovels = require("../controller/profile.controller");

// index route
const webRouter = (app) => {
  router.get(
    "/",
    func_controller.checkCookieLoglUser,
    index_controller.rederIndex
  );
  router.get(
    "/reviews/:id",
    func_controller.checkCookieLoglUser,
    renderReviews.renderReviews
  );
  router.get(
    "/profile",
    func_controller.checkCoookieIfOK,
    func_controller.checkCookieLoglUser,
    (req, res) => {
      processNovels.processNovels(req, res, null);
    }
  );

  router.get(
    "/profile/:anything",
    func_controller.checkCoookieIfOK,
    func_controller.checkCookieLoglUser,
    (req, res) => {
      processNovels.processNovels(req, res, null);
    }
  );
  router.get(
    "/profile/update/:id/edit",
    func_controller.checkCoookieIfOK,
    func_controller.checkCookieLoglUser,
    (req, res) => {
      const id = req.params.id;
      processNovels(req, res, id);
    }
  );
  // router.get(
  //     "/profile/update/:id/listchap",
  //     func_controller.checkCoookieIfOK,
  //     func_controller.checkCookieLoglUser,
  //     processNovels.processNovels(req, res, req.params.id)
  // );
  // router.get(
  //     "/profile/update/:id/morechap",
  //     func_controller.checkCoookieIfOK,
  //     func_controller.checkCookieLoglUser,
  //     processNovels.processNovels(req, res, req.params.id)
  //   );

  router.get(
    "/reading/:id/:chap",
    func_controller.checkCookieLoglUser,
    renderReading.renderReading
  );

  // admin index page ________________________________________________________________________________________________________________________
  router.get("/admin", func_controller.checkCookieLoglUser,func_controller.checkAdmin, renderAdmin.admin);

  // account manager page ________________________________________________________________________________________________________________________
  router.get(
    "/accountmanager",
    func_controller.checkCookieLoglUser,
    renderAdmin.accountManager
  );
  // auhtor manager page ________________________________________________________________________________________________________________________
  router.get(
    "/auhtormanager",
    func_controller.checkCookieLoglUser,
    renderAdmin.authortManager
  );

  // Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.get(
    "/search",
    func_controller.checkCookieLoglUser,
    renderSearch.search
  );

  // Advanced search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  router.get(
    "/category",
    func_controller.checkCookieLoglUser,
    renderSearch.category
  );

  // 404 route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  app.get("/404", index_controller.unpage);
  app.get("/403", index_controller.blockpage);

  return app.use("/", router);
};

module.exports = {
  webRouter,
};
