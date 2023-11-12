const passport = require("passport");
const cookieParser = require("cookie-parser");
const { ObjectId } = require("mongodb");
const NodePersist = require("node-persist");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const server = require("../vip_pro_lib");
const func = require('../controller/func.controller')
const secretKey = '5gB#2L1!8*1!0)$7vF@9';
const authenticationKey = Buffer.from(secretKey.padEnd(32, '0'), 'utf8').toString('hex');

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (userId, done) {
  done(null, userId);
});
const port = 6969;
let currentURL = `http://localhost:${port}`;

passport.deserializeUser(async function (userId, done) {
  try {
    const user = await server.find_one_Data("tt_nguoi_dung", {
      _id: ObjectId(userId),
    });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

//////////LOG IN WITH GOOGLE////////////////////////////////////////////////////////////////////////////////////////////////

const storage = NodePersist.create({
  dir: ".credentials",
});

// Function to initialize storage asynchronously
const initStorage = async () => {
  await storage.init();
};
let credentials;
const initGoogle = async () => {
  await initStorage();
  credentials = await storage.getItem("certgoogle");
  return credentials;
  /*/.credentials/1866203e7cb0464532af9841f77e9ae9*/
};

passport.use(
  new GoogleStrategy(
    {
      clientID: "483084822625-jrf4t8tq5j272i8mugfk4qorgv3dg11o.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: currentURL + "/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        // console.log(accessToken);
        // console.log(refreshToken);
        // console.log(request);
        // Kiểm tra xem thông tin người dùng đã tồn tại chưa
        console.log(profile);
        const existingUser = await server.find_one_Data("tt_nguoi_dung", {
          _id: profile.id,
        });
        if (existingUser) {
          // update new data for tt_nguoi_dung database
          await server.update_one_Data(
            "tt_nguoi_dung",
            { _id: profile.id },
            {
              $set: {
                email: profile.emails[0].value,
                displayName: profile.displayName,
                avatarUrl: profile.photos[0].value,
              },
            }
          );

          return done(null, existingUser);
        } else {
          // Tạo mới một người dùng
          const newUser = {
            _id: profile.id,
            email: profile.emails[0].value,
            displayName: profile.displayName,
            avatarUrl: profile.photos[0].value,
            sex: "unknown",
            likeNovels: [],
            mynovel: [],
          };

          // dang_nhap data base:
          await server.add_one_Data("dang_nhap", {
            _id: profile.id,
            lgway: "google",
          });
          // người dùng database:
          await server.add_one_Data("tt_nguoi_dung", newUser);

          /// set cookie cho vào tài khoảng
          return done(null, newUser);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

// const gg_login = () => {
//   return passport.authenticate("google", {
//     scope: ["profile", "email"],
//   });
// };


// const gg_call_back = () => {
//   passport.authenticate("google", { failureRedirect: "/api/login" });
// };

const open_window = (req, res) => {
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
  func.set_cookies(res, req.user._id, "");

  // Đóng tab hiện tại và reload main window
  res.write("<script>");
  res.write("window.close();");
  res.write("window.opener.location.reload();");
  res.write("</script>");
  // dùng chung
  res.end("Login thanh cong!");
  // res.sendStatus(404);
};

module.exports = {
  passport,
  open_window
};
