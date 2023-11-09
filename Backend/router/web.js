const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const app = express();
const {
	renderIndex,
} = require('../models/index');

const {
	checkCookieLoglUser,
	checkCoookieIfOK,
} = require('../models/func');

const {
	processNovels,
} = require('../models/profile');

const {
	renderReview,
} = require('../models/review');

const {
	renderReading,
} = require('../models/reading');

const {
    renderAdmin,
	renderAccountmanager,
	renderAuhtormanager,
} = require('../models/admin');

const {
    renderSearch,
    renderAdvSearch
} = require('../models/search');

// index route
app.get('/', checkCookieLoglUser(req, res, next), renderIndex(req, res));

// profile route
app.get('/profile', checkCoookieIfOK(req, res, next), checkCookieLoglUser(req, res, next), processNovels(req, res, null));

app.get('/profile/:anything', checkCoookieIfOK(req, res, next), checkCookieLoglUser(req, res, next), processNovels(req, res, null));

app.get('/profile/update/:id/edit', checkCoookieIfOK(req, res, next), checkCookieLoglUser(req, res, next), processNovels(req, res, req.params.id));

app.get('/profile/update/:id/listchap', checkCoookieIfOK(req, res, next), checkCookieLoglUser(req, res, next), processNovels(req, res, req.params.id))

app.get('/profile/update/:id/morechap', checkCoookieIfOK(req, res, next), checkCookieLoglUser(req, res, next), processNovels(req, res, req.params.id));

// Review route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/reviews/:id', checkCookieLoglUser(req, res, next), renderReview(req, res));

// Reading route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/reading/:id/:chap', checkCookieLoglUser(req, res, next), renderReading(req, res));

// admin index page ________________________________________________________________________________________________________________________
app.get('/admin', checkCookieLoglUser(req, res, next), renderAdmin(req, res));

app.get('admin/accountmanager', checkCookieLoglUser(req, res, next), renderAccountmanager(req, res));

app.get('admin/auhtormanager', checkCookieLoglUser(req, res, next), renderAuhtormanager(req, res));

// Search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/search', checkCookieLoglUser(req, res, next), renderSearch(req, res));

// Advanced search route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/category', checkCookieLoglUser(req, res, next), renderAdvSearch(req, res));

// 404 route --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/404', (req, res) => {
	res.sendFile(parentDirectory + '/error/404.html');
});