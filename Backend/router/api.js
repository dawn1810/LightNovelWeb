const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const {
} = require('../models/index');

const {
    checkCookieLoglUser,
    getNovelList
} = require('../models/func');

const {
    getNumsOfChap,
    updateNovelData,
    upLoadNovel,
    updateUploadNovel,
    editNovel,
    editNovelInfo,
    upload,
    upLoadFile,
    deleteNovel, 
    updateInfo,
    changePass
} = require('../models/profile');

const {
    getReviewData,
    updateLikes,
    updateViews
} = require('../models/review');

const {
} = require('../models/reading');

const {
} = require('../models/admin');

const {
    getMoreResult,
    getMoreAdvResult,
} = require('../models/search');

const {
    logOut,
    logIn,
    signUp
} = require('../models/login');

app.get('/api/search/more', checkCookieLoglUser(req, res, next), getMoreResult(req, res));

// Advanced search
app.get('/api/advanced_search', checkCookieLoglUser(req, res, next), getMoreAdvResult(req, res));

// TRUYỆN DỊCH ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get no chapters --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/no_chaps', getNumsOfChap(req, res));

// Update mongDB novel data --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get('api/update_novel', updateNovelData(req, res));

app.post('/api/reviews', getReviewData(req, res));

// Sign up --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/signup', signUp(req, res));

// Log in --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/login', logIn(req, res));

// Logout /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/logout', logOut(req, res));

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (userId, done) {
    done(null, userId);
});

passport.deserializeUser(async function (userId, done) {
    try {
        const user = await server.find_one_Data("tt_nguoi_dung", { _id: ObjectId(userId) });
        done(null, user);
    } catch (err) {
        done(err);
    }
});

//////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new GoogleStrategy({
    clientID: credentials.google.client_id,
    clientSecret: credentials.google.client_secret,
    callbackURL: currentURL + "/auth/google/callback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {
        try {
            // console.log(accessToken);
            // console.log(refreshToken);
            // console.log(request);
            // Kiểm tra xem thông tin người dùng đã tồn tại chưa
            console.log(profile)
            const existingUser = await server.find_one_Data("tt_nguoi_dung", { _id: profile.id });
            if (existingUser) {
                // update new data for tt_nguoi_dung database
                await server.update_one_Data("tt_nguoi_dung", { _id: profile.id },
                    {
                        $set: {
                            email: profile.emails[0].value,
                            displayName: profile.displayName,
                            avatarUrl: profile.photos[0].value,
                        }
                    });

                return done(null, existingUser);

            }
            else {
                // Tạo mới một người dùng
                const newUser = {
                    _id: profile.id,
                    email: profile.emails[0].value,
                    displayName: profile.displayName,
                    avatarUrl: profile.photos[0].value,
                    sex: "unknown",
                    likeNovels: [],
                    mynovel: []
                };

                // dang_nhap data base:
                await server.add_one_Data("dang_nhap", { _id: profile.id, lgway: 'google', });
                // người dùng database:
                await server.add_one_Data("tt_nguoi_dung", newUser);

                /// set cookie cho vào tài khoảng
                return done(null, newUser);
            }
        } catch (err) {
            return done(err);
        }
    }
));

app.get('/api/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

// lấy dữ liêu liệu về từ google
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/api/login' }),
    function (req, res) {
        console.log('ẹc'); // thg nào làm cái này - dawn1810
        // req.user = {
        // 	_id: '113263126602180653712',
        // 	email: 'binhminh19112003@gmail.com',
        // 	displayName: 'Dawn Nguyen',
        // 	avatarUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdoUcqqaX6Kqqxfujnio9LmL2J_SIYjDaxcb8kf=s96-c',
        // 	sex: 'unknown',
        // 	likeNovels: [],
        // 	monitorNovels: [],
        // 	commentIds: []
        //  }
        //set cookies
        set_cookies(res, req.user._id, "");

        // Đóng tab hiện tại và reload main window
        res.write('<script>');
        res.write('window.close();');
        res.write('window.opener.location.reload();');
        res.write('</script>');
        // dùng chung
        res.end('Login thanh cong!');
        // res.sendStatus(404);
    }
);

app.post('/api/updatelike', updateLikes(req, res))

app.post('/api/updateviews', updateViews(req, res))


// Upload novel ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/upload_novel', upLoadNovel(req, res));

app.post('/api/update_upload_novel', updateUploadNovel(req, res));

app.post('/api/edit_novel', editNovel(req, res));

app.post('/api/edit_info_novel', editNovelInfo(req, res));
// Route xử lý yêu cầu upload file ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/uploadFile', upload.array('files[]'), upLoadFile(req, res));

// Delete novel page --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/cancel', deleteNovel(req, res));

// Thay đổi info -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/updateInfo', updateInfo(req, res));

// Đổi pass ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/api/changepass', changePass(req, res));

// Thay đổi tứng chapters -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/api/download_chap", downloadChap(req, res) );

app.get('*', checkCookieLoglUser, async function (req, res) {
	res.sendStatus(404);
	// let result = await storage.getItem('novellist');
	// currentURL = req.url;

	// res.render('index', {
	// 	headerFile: 'header',
	// 	footerFile: 'footer',
	// 	jsontruyen: result
	// });
})

// Schedule the code execution at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
	// update popular novel list 
	await getNovelList();
	// remove all data in dang_ky database
	await server.delete_many_Data("dang_ky", {});
});

// Run the code immediately
// update popular novel list 


app.listen(port, async () => {
	console.log(`SYSTEM | LOG | Đang chạy server siu cấp vip pro đa vũ trụ ở http://localhost:${port}`);
	await getNovelList();
});