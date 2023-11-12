const passport = require("passport");
const cookieParser = require("cookie-parser");
const { ObjectId } = require("mongodb");
const NodePersist = require("node-persist");

/////////////////ALL LOG IN WAYS/////////////////
passport.serializeUser(function (userId, done) {
  done(null, userId);
});

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
};
initGoogle();
passport.use(
  new GoogleStrategy(
    {
      clientID: credentials.web.client_id,
      clientSecret: credentials.web.client_secret,
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

const gg_login = () => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
  });
};

const gg_call_back = () => {
  passport.authenticate("google", { failureRedirect: "/api/login" });
};

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
  set_cookies(res, req.user._id, "");

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
  gg_login,
  gg_call_back,
  open_window,
};
