const express = require('express');
// const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const index_conmtroller = require("../controller/index.controller");
const func_controller = require("../controller/func.controller");

// index route
const indexRouter = (router) => {
    router.get('/', func_controller.checkCookieLoglUser, index_conmtroller.rederIndex);
    
    return router;
}

module.exports = {
    indexRouter
}